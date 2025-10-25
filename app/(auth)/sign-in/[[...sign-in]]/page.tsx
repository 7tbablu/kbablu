import React from "react";
import { SignInForm } from "../../components/sign-in-form";


const SignIn = () => {
  return (
    <div className="rounded-md xl:rounded-lg">
      <SignInForm className="bg-white p-4 dark:bg-black/50 backdrop-blur-3xl md:p-8" />
    </div>
  );
};

export default SignIn;
