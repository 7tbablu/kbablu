"use client";

import {
  ModalBody,
  ModalContent,
  useModal,
} from "@/components/ui/animated-modal";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import SignUpForm from "@/app/(auth)/components/sign-up-form";

const InterceptedSignUp = () => {
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
        <SignUpForm />
      </ModalContent>
    </ModalBody>
  );
};

export default InterceptedSignUp;
