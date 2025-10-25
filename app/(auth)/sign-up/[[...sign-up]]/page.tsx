import React from "react";
import SignUpForm from "../../components/sign-up-form";

const SignUp = () => {
  return (
    <div className="rounded-lg">
      <SignUpForm className="bg-white p-4 dark:bg-black/50 backdrop-blur-3xl md:p-8" />
    </div>
  );
};

export default SignUp;
