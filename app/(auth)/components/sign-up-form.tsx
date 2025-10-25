"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { z } from "zod";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import AuthFormDevider from "./auth-form-devider";
import { Logo } from "@/components/layout/logo";
import { FaGithub } from "react-icons/fa6";
import { Loader2 } from "lucide-react";

const signUpSchema = z.object({
  email: z.string().min(1, { message: "Please enter your email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function SignUpForm({ className }: { className?: string }) {
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  return (
    <div
      className={cn(
        className,
        "shadow-input mx-auto w-full max-w-md space-y-7 rounded-none  md:rounded-2xl"
      )}
    >
      {/* ------------- HEADER ----------- */}
      <div>
        <div className="flex items-center gap-2.5">
          <Logo />
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            Create with <span className="text-cyan-500">KBablu</span> ✨
          </h2>
        </div>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Sign up to explore projects, ideas, and creative tools built for
          developers.
        </p>
      </div>

      {/* ---------- CLERK SIGN UP FLOW ---------- */}
      <div>
        <SignUp.Root>
          <Clerk.Loading>
            {(isGlobalLoading) => (
              <>
                <div id="clerk-captcha" className="mb-4 hidden" />
                <div className="space-y-4">
                  {/* ---------- STEP 1: OAUTH + EMAIL PROVIDE ---------- */}
                  <SignUp.Step name="start" className="space-y-4">
                    {/* ---------- SOCIAL LOGIN ---------- */}
                    <div className="flex items-center justify-between gap-4">
                      <Clerk.Connection
                        disabled={isGlobalLoading}
                        name="google"
                        className="group/btn relative flex h-9 w-full cursor-pointer items-center justify-center space-x-4 rounded-md border bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:text-neutral-300 dark:shadow-[0px_0px_1px_1px_#262626]"
                      >
                        <Clerk.Loading scope="provider:google">
                          {(isLoading) =>
                            isLoading ? (
                              <Loader2 className="animate-spin mr-2 h-4 w-4" />
                            ) : (
                              <>
                                <FcGoogle />
                                <span className="text-sm">Google</span>
                              </>
                            )
                          }
                        </Clerk.Loading>
                        <BottomGradient />
                      </Clerk.Connection>
                      <Clerk.Connection
                        disabled={isGlobalLoading}
                        name="github"
                        className="group/btn relative flex h-9 w-full cursor-pointer items-center justify-center space-x-4 rounded-md border bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:text-neutral-300 dark:shadow-[0px_0px_1px_1px_#262626]"
                      >
                        <Clerk.Loading scope="provider:github">
                          {(isLoading) =>
                            isLoading ? (
                              <Loader2 className="animate-spin mr-2 h-4 w-4" />
                            ) : (
                              <>
                                <FaGithub />
                                <span className="text-sm">Github</span>
                              </>
                            )
                          }
                        </Clerk.Loading>
                        <BottomGradient />
                      </Clerk.Connection>
                    </div>
                    {/* Divider */}
                    <AuthFormDevider />

                    {/* CREDENTIAL LOGIN */}
                    {/* Email */}
                    <div>
                      <Clerk.Field name="emailAddress">
                        <Clerk.Label className="text-foreground/80">
                          Email
                        </Clerk.Label>
                        <Clerk.Input asChild>
                          <Input
                            placeholder="Enter your email"
                            autoComplete="off"
                          />
                        </Clerk.Input>
                        {/* Local Zod error */}
                        {errors.email && (
                          <p className="text-xs text-destructive">
                            {errors.email}
                          </p>
                        )}
                        {/* Clerk backend error */}
                        <Clerk.FieldError className="text-xs text-destructive" />
                      </Clerk.Field>
                    </div>

                    {/* Password */}
                    <div>
                      <Clerk.Field name="password">
                        <Clerk.Label className="text-foreground/80">
                          Password
                        </Clerk.Label>
                        <Clerk.Input asChild>
                          <Input
                            placeholder="Enter your Password"
                            autoComplete="off"
                          />
                        </Clerk.Input>
                        {/* Local Zod error */}
                        {errors.password && (
                          <p className="text-xs text-destructive">
                            {errors.password}
                          </p>
                        )}
                        {/* Clerk backend error */}
                        <Clerk.FieldError className="text-xs text-destructive" />
                      </Clerk.Field>
                    </div>

                    {/* Continue Button */}
                    <div>
                      <SignUp.Action
                        disabled={isGlobalLoading}
                        submit
                        onClick={(e) => {
                          const email =
                            document.querySelector<HTMLInputElement>(
                              'input[name="emailAddress"]'
                            )?.value;
                          const password =
                            document.querySelector<HTMLInputElement>(
                              'input[name="password"]'
                            )?.value;

                          const result = signUpSchema.safeParse({
                            email,
                            password,
                          });

                          if (!result.success) {
                            e.preventDefault();
                            // Map Zod errors to fields
                            const fieldErrors: {
                              email?: string;
                              password?: string;
                            } = {};
                            result.error.errors.forEach((err) => {
                              if (err.path[0] === "email")
                                fieldErrors.email = err.message;
                              if (err.path[0] === "password")
                                fieldErrors.password = err.message;
                            });
                            setErrors(fieldErrors);
                          } else {
                            setErrors({});
                          }
                        }}
                        className={cn(
                          "group/btn relative flex items-center justify-center h-9 w-full cursor-pointer rounded-md bg-[#3d2272] font-medium text-white shadow-xs hover:opacity-90"
                        )}
                      >
                        <Clerk.Loading>
                          {(isLoading) =>
                            isLoading ? (
                              <div className="flex items-center justify-center w-full">
                                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                              </div>
                            ) : (
                              "Continue"
                            )
                          }
                        </Clerk.Loading>
                      </SignUp.Action>
                    </div>
                  </SignUp.Step>
                  {/* ---------- STEP 2: Complete Missing Fields ---------- */}
                  <SignUp.Step name="continue" className="space-y-4">
                    <h1 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                      Complete your profile
                    </h1>

                    {/* First Name */}
                    <div>
                      <Clerk.Field name="firstName">
                        <Clerk.Label className="text-foreground/80">
                          First Name
                        </Clerk.Label>
                        <Clerk.Input asChild>
                          <Input
                            placeholder="Enter your first name"
                            autoComplete="off"
                          />
                        </Clerk.Input>
                        <Clerk.FieldError className="text-xs text-destructive" />
                      </Clerk.Field>
                    </div>

                    {/* Last Name */}
                    <div>
                      <Clerk.Field name="lastName">
                        <Clerk.Label className="text-foreground/80">
                          Last Name
                        </Clerk.Label>
                        <Clerk.Input asChild>
                          <Input
                            placeholder="Enter your last name"
                            autoComplete="off"
                          />
                        </Clerk.Input>
                        <Clerk.FieldError className="text-xs text-destructive" />
                      </Clerk.Field>
                    </div>

                    {/* Continue Button */}
                    <div>
                      <SignUp.Action
                        submit
                        className={cn(
                          "group/btn relative flex items-center justify-center h-9 w-full cursor-pointer rounded-md bg-[#3d2272] font-medium text-white shadow-xs hover:opacity-90"
                        )}
                      >
                        <Clerk.Loading>
                          {(isLoading) =>
                            isLoading ? (
                              <div className="flex items-center justify-center w-full">
                                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                              </div>
                            ) : (
                              "Continue"
                            )
                          }
                        </Clerk.Loading>
                      </SignUp.Action>
                    </div>
                  </SignUp.Step>
                  {/* ---------- STEP 2: Verification Options ---------- */}
                  <SignUp.Step name="verifications" className="space-y-4">
                    {/* Email Code Verification */}
                    <SignUp.Strategy name="email_code">
                      <h1>Check your email</h1>
                      <Clerk.Field name="code">
                        <Clerk.Label className="text-foreground/80">
                          Email code
                        </Clerk.Label>
                        <Clerk.Input asChild>
                          <Input
                            placeholder="Enter verification code"
                            autoComplete="off"
                          />
                        </Clerk.Input>
                        <Clerk.FieldError className="text-xs text-destructive" />
                      </Clerk.Field>
                      <SignUp.Action
                        submit
                        className={cn(
                          "group/btn relative flex items-center justify-center h-9 w-full cursor-pointer rounded-md bg-[#3d2272] font-medium text-white shadow-xs hover:opacity-90"
                        )}
                      >
                        <Clerk.Loading>
                          {(isLoading) =>
                            isLoading ? (
                              <div className="flex items-center justify-center w-full">
                                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                              </div>
                            ) : (
                              "Continue"
                            )
                          }
                        </Clerk.Loading>
                      </SignUp.Action>
                    </SignUp.Strategy>
                  </SignUp.Step>
                </div>
              </>
            )}
          </Clerk.Loading>
        </SignUp.Root>
      </div>
      {/* --------- NAVIGATE LINK FOR SIGN IN*/}
      <p className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}

export const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

// const LabelInputContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => (
//   <div className={cn("flex w-full flex-col space-y-2", className)}>
//     {children}
//   </div>
// );
