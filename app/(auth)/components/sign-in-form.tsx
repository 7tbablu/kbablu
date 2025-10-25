"use client";

import React from "react";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { FcGoogle } from "react-icons/fc";
import { BottomGradient } from "./sign-up-form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import AuthFormDevider from "./auth-form-devider";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/logo";
import { FaGithub } from "react-icons/fa6";
import { Loader2 } from "lucide-react";

export const SignInForm = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        className,
        "shadow-input mx-auto w-full max-w-md space-y-7 rounded-none md:rounded-2xl"
      )}
    >
      {/* ---------- HEADER ---------- */}
      <div>
        <div className="flex items-center gap-2.5">
          <Logo />
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            Welcome Back 👋
          </h2>
        </div>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Continue your journey with{" "}
          <span className="text-cyan-500 font-semibold">KBablu</span> — where
          code meets creativity.
        </p>
      </div>

      {/* ---------- CLERK SIGN IN FLOW ---------- */}
      <div>
        <SignIn.Root>
          <Clerk.Loading>
            {(isGlobalLoading) => (
              <>
                <div id="clerk-captcha" className="mb-4" />
                <div className="space-y-4">
                  {/* ---------- STEP 1: OAUTH AND CREDENTIAL LOGIN ---------- */}
                  <SignIn.Step name="start" className="space-y-4">
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
                    <div>
                      <Clerk.Field name="identifier">
                        <Clerk.Label>Email</Clerk.Label>
                        <Clerk.Input asChild>
                          <Input
                            placeholder="Enter your email"
                            autoComplete="off"
                          />
                        </Clerk.Input>
                        <Clerk.FieldError className="text-xs text-destructive" />
                      </Clerk.Field>
                    </div>

                    {/* Continue Button */}
                    <div>
                      <SignIn.Action
                        disabled={isGlobalLoading}
                        submit
                        className="group/btn relative block h-9 w-full cursor-pointer rounded-md bg-[#3d2272] font-medium text-white shadow-xs hover:opacity-90"
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
                      </SignIn.Action>
                    </div>
                  </SignIn.Step>
                  {/* ---------- STEP 2: CREDENTIAL VERIFICATIONS ---------- */}
                  <SignIn.Step name="verifications" className="space-y-4">
                    {/* Password Verification */}
                    <SignIn.Strategy name="password">
                      <Clerk.Field name="password">
                        <Clerk.Label>Password</Clerk.Label>
                        <Clerk.Input asChild>
                          <Input placeholder="••••••••" />
                        </Clerk.Input>
                        <Clerk.FieldError className="text-xs text-destructive" />
                      </Clerk.Field>

                      {/* Continue */}
                      <div>
                        <SignIn.Action
                          submit
                          className="group/btn relative block h-9 w-full cursor-pointer rounded-md bg-[#3d2272] font-medium text-white shadow-xs hover:opacity-90"
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
                        </SignIn.Action>
                      </div>

                      {/* Forgot Password */}
                      <div className="flex justify-end">
                        <SignIn.Action
                          navigate="forgot-password"
                          className="cursor-pointer text-sm text-blue-500 transition-all duration-200 hover:underline"
                        >
                          Forgot password?
                        </SignIn.Action>
                      </div>
                    </SignIn.Strategy>

                    {/* Reset Password - Email Code */}
                    <SignIn.Strategy name="reset_password_email_code">
                      <p>
                        We sent a code to <SignIn.SafeIdentifier />.
                      </p>
                      <Clerk.Field name="code">
                        <Clerk.Label>Email code</Clerk.Label>
                        <Clerk.Input asChild>
                          <Input placeholder="••••••••" />
                        </Clerk.Input>
                        <Clerk.FieldError className="text-xs text-destructive" />
                      </Clerk.Field>

                      <SignIn.Action
                        submit
                        className="group/btn relative block h-9 w-full cursor-pointer rounded-md bg-[#3d2272] font-medium text-white shadow-xs hover:opacity-90"
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
                      </SignIn.Action>
                    </SignIn.Strategy>
                  </SignIn.Step>
                  {/* ---------- STEP 3: Forgot Password Flow ---------- */}
                  <SignIn.Step
                    name="forgot-password"
                    className="flex justify-between"
                  >
                    <SignIn.SupportedStrategy name="reset_password_email_code">
                      <p className="text-blue-600 font-semibold cursor-pointer hover:underline transition-all duration-200">
                        Reset password?
                      </p>
                    </SignIn.SupportedStrategy>
                    <SignIn.Action navigate="previous">
                      <p className="hover:cursor-pointer font-semibold text-foreground/90 hover:text-foreground transition-all duration-200">
                        Go back
                      </p>
                    </SignIn.Action>
                  </SignIn.Step>
                  {/* ---------- STEP 4: Reset Password ---------- */}
                  <SignIn.Step name="reset-password">
                    <h1>Reset your password</h1>

                    {/* New Password */}
                    <Clerk.Field name="password">
                      <Clerk.Label>New password</Clerk.Label>
                      <Clerk.Input />
                      <Clerk.FieldError className="text-xs text-destructive" />
                    </Clerk.Field>

                    {/* Confirm Password */}
                    <Clerk.Field name="confirmPassword">
                      <Clerk.Label>Confirm password</Clerk.Label>
                      <Clerk.Input />
                      <Clerk.FieldError className="text-xs text-destructive" />
                    </Clerk.Field>

                    <SignIn.Action
                      submit
                      className="group/btn relative block h-9 w-full cursor-pointer rounded-md bg-[#3d2272] font-medium text-white shadow-xs hover:opacity-90"
                    >
                      <Clerk.Loading>
                        {(isLoading) =>
                          isLoading ? (
                            <div className="flex items-center justify-center w-full">
                              <Loader2 className="animate-spin mr-2 h-4 w-4" />
                            </div>
                          ) : (
                            "Reset Password"
                          )
                        }
                      </Clerk.Loading>
                    </SignIn.Action>
                  </SignIn.Step>
                </div>
              </>
            )}
          </Clerk.Loading>
        </SignIn.Root>
      </div>

      {/* --------- NAVIGATE LINK FOR CREATE ACCOUNT */}
      <p className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};
