"use client";

import {
  ModalBody,
  ModalContent,
  useModal,
} from "@/components/ui/animated-modal";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignInForm } from "@/app/(auth)/components/sign-in-form";


const InterceptedSignIn = () => {
  const { setOpen } = useModal();
  const router = useRouter();

  // Open modal on page load
  useEffect(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = () => {
    router.back();
    setOpen(false);
  };

  return (
    <ModalBody onClose={handleClose}>
      <ModalContent>
        <SignInForm />
      </ModalContent>
    </ModalBody>
  );
};

export default InterceptedSignIn;
