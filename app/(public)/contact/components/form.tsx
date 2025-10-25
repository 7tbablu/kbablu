"use client";
import React, { useState, useTransition } from "react";
import { cn } from "@/lib/utils";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "@/components/ui/form-error";
import FormLabel from "@/components/ui/custom-lable";
import { Loader } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { submitContact } from "../action";
import { useRouter } from "next/navigation";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.enum(["general", "support", "business", "feedback"], {
    errorMap: () => ({ message: "Please select a subject" }),
  }),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm({ className }: { className?: string }) {
  const [error, setError] = useState<string | undefined>("");
  // const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
    },
  });

  const { watch } = form;
  const name = watch("name");
  const email = watch("email");
  const message = watch("message");

  const isDisabled = !name || !email || !message;

  console.log(isDisabled);

  const onSubmit = (values: ContactFormValues) => {
    setError("");
    // setSuccess("");
    startTransition(async () => {
      try {
        const res = await submitContact(values);
        if (res.success) {
          // setSuccess("Thanks for contacting us! We’ll get back to you soon.");
          form.reset();
          setOpen(true);
        } else {
          setError("Something went wrong. Please try again.");
        }
      } catch {
        setError("Something went wrong. Please try again.");
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
    // Give a tiny delay to allow dialog closing animation
    setTimeout(() => {
      router.push("/");
    }, 100);
  };

  return (
    <>
      <div
        className={cn(
          " mx-auto max-w-xl w-full rounded-none md:rounded-2xl z-50",
          className
        )}
      >
        {/* <h2 className="text-xl font-bold text-foreground">Contact Me 📲</h2> */}
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Fill out the form below.
        </p>

        <form className="my-4 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="w-full">
            <FormLabel htmlFor="fullname" label="Full Name" />
            <input
              id="fullname"
              type="text"
              autoComplete="off"
              className="w-full rounded-md border border-muted px-3 py-1.5 outline-none bg-zinc-50 dark:bg-zinc-950"
              placeholder="John Doe"
              {...form.register("name")}
            />
            {form.formState.errors.name && (
              <FormError
                message={form.formState.errors.name.message!}
                size="small"
              />
            )}
          </div>

          {/* Email */}
          <div className="w-full">
            <FormLabel htmlFor="email" label="Email Address" />
            <input
              id="email"
              type="text"
              autoComplete="off"
              className="w-full rounded-md border border-muted px-3 py-1.5 outline-none bg-zinc-50 dark:bg-zinc-950"
              placeholder="you@example.com"
              {...form.register("email")}
            />
            {form.formState.errors.email && (
              <FormError
                message={form.formState.errors.email.message!}
                size="small"
              />
            )}
          </div>

          {/* Phone */}
          <div className="w-full">
            <FormLabel htmlFor="phone" label="Phone (Optional)" />
            <input
              id="phone"
              type="tel"
              autoComplete="off"
              className="w-full rounded-md border border-muted px-3 py-1.5 outline-none bg-zinc-50 dark:bg-zinc-950"
              placeholder="+91 777 888 8900"
              {...form.register("phone")}
            />
            {form.formState.errors.phone && (
              <FormError
                message={form.formState.errors.phone.message!}
                size="small"
              />
            )}
          </div>

          {/* Message */}
          <div className="w-full">
            <FormLabel htmlFor="message" label="Message" />
            <textarea
              id="message"
              rows={4}
              placeholder="Write your message here..."
              className="w-full rounded-md border border-muted px-3 py-2 outline-none resize-none bg-zinc-50 dark:bg-zinc-950"
              {...form.register("message")}
            />
            {form.formState.errors.message && (
              <FormError
                message={form.formState.errors.message.message!}
                size="small"
              />
            )}
          </div>
          <button
            type="submit"
            disabled={isDisabled || isPending}
            className={cn(
              "font-semibold py-1.5 px-5 rounded-md text-white bg-[#3d2272] border-2 border-background cursor-pointer transition-all duration-400 w-full flex items-center gap-2.5 justify-center",
              (isDisabled || isPending) && "cursor-not-allowed opacity-75"
            )}
          >
            {isPending && <Loader className="animate-spin size-6" />}
            {!isPending && " Send Message →"}
          </button>

          {/* Errors / Success */}
          <div className="mt-4 space-y-2">
            {error && <FormError message={error} size="small" />}
            {/* {success && <FormSuccess message={success} size="small" />} */}
          </div>
        </form>
      </div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Message Sent 🎉</AlertDialogTitle>
            <AlertDialogDescription>
              Thanks for reaching out! We’ll get back to you shortly.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={handleClose}
              className="bg-[#3d2272] hover:bg-[#50308f] cursor-pointer"
            >
              Okay
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
