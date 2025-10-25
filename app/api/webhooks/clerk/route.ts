import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;

  if (!SIGNING_SECRET || !CLERK_SECRET_KEY) {
    throw new Error(
      "Missing Clerk environment variables: CLERK_WEBHOOK_SECRET or CLERK_SECRET_KEY."
    );
  }

  // ✅ Create Svix webhook instance
  const wh = new Webhook(SIGNING_SECRET);

  // ✅ Get headers safely
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", { status: 400 });
  }

  // ✅ Get body as JSON string
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("❌ Error verifying Clerk webhook:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  // ✅ Handle different Clerk events
  const { type } = evt;

  // ---- USER CREATED ----
  if (type === "user.created") {
    const user = evt.data;
    try {
      const email = user.email_addresses?.[0]?.email_address ?? "";
      let firstName = user.first_name || null;
      let lastName = user.last_name || null;

      // Try to infer names from email if missing
      if (firstName === null || lastName === null) {
        const emailNamePart = email.split("@")[0];
        const nameParts = emailNamePart.split(/[._-]/);
        firstName = firstName || nameParts[0] || "User";
        lastName = lastName || (nameParts.length > 1 ? nameParts[1] : "");
      }

      // ✅ Store user in Prisma
      await prisma.user.create({
        data: {
          clerkId: user.id,
          email,
          firstName,
          lastName,
          image: user.image_url,
        },
      });

      // ✅ Optionally update Clerk user to sync names
      await fetch(`https://api.clerk.dev/v1/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CLERK_SECRET_KEY}`,
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
        }),
      });

      console.log(`✅ Clerk user ${user.id} created in DB`);
      return NextResponse.json({ success: true }, { status: 201 });
    } catch (err) {
      console.error("❌ Failed to create user in DB:", err);
      return new Response("Database error", { status: 500 });
    }
  }

  // ---- USER UPDATED ----
  if (type === "user.updated") {
    const user = evt.data;
    try {
      await prisma.user.update({
        where: { clerkId: user.id },
        data: {
          email: user.email_addresses?.[0]?.email_address ?? "",
          firstName: user.first_name ?? "",
          lastName: user.last_name ?? "",
          // phone: user.phone_numbers?.[0]?.phone_number ?? "",
          image: user.image_url ?? "",
        },
      });

      console.log(`🔁 Clerk user ${user.id} updated in DB`);
      return NextResponse.json({ success: true });
    } catch (err) {
      console.error("❌ Failed to update user:", err);
      return new Response("Database error", { status: 500 });
    }
  }

  return NextResponse.json({ message: "Webhook received" }, { status: 200 });
}
