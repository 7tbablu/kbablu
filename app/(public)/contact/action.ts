"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(values: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  try {
    // LATER IMPLEMENT FOR SEND DATA TO DB

    // SEND CONTACT EMAIL
    await resend.emails.send({
      from: "Contact <noreply@kbablu.com>",
      to: "7kbablu@gmail.com",
      subject: `📩 New Contact Form Submission from ${values.name}`,
      html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9fafb; color: #111827;">
    <table style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
      <tr>
        <td style="text-align: center; padding-bottom: 20px;">
          <h1 style="margin: 0; font-size: 22px; color: #2563eb;">Kbablu Contact Form</h1>
          <p style="margin: 5px 0; font-size: 14px; color: #6b7280;">You’ve received a new message 🚀</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 15px 20px; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; font-size: 14px;"><strong>Name:</strong> ${
            values.name
          }</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 15px 20px; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; font-size: 14px;"><strong>Email:</strong> ${
            values.email
          }</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 15px 20px; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; font-size: 14px;"><strong>Phone:</strong></p>
          <p style="margin: 10px 0; font-size: 14px; line-height: 1.5; color: #374151;">${
            values.phone || "NOT PROVIDED"
          }</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 15px 20px; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; font-size: 14px;"><strong>Message:</strong></p>
          <p style="margin: 10px 0; font-size: 14px; line-height: 1.5; color: #374151;">${
            values.message
          }</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #9ca3af;">This message was sent from the Kbablu website contact form.</p>
        </td>
      </tr>
    </table>
  </div>
  `,
      text: `New contact form submission:\n\nName: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
