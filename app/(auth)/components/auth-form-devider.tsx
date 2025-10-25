import React from "react";

const AuthFormDevider = () => {
  return (
    <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-[#3d2272] to-transparent relative">
      <div className="text-xs rounded-full bg-background/90 backdrop-blur-3xl w-max absolute h-4 px-2.5 -top-2 left-1/2 -translate-x-1/2 flex items-center">
        <span className="text-xs"> Or Continue with</span>
      </div>
    </div>
  );
};

export default AuthFormDevider;
