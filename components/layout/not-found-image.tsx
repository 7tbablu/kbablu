"use client";

import Image from "next/image";

export default function NotFoundImage() {
  return (
    <>
      <div className="max-w-sm w-full mb-6">
        <Image
          src="/notfound.png"
          alt="Page Not Found"
          width={400}
          height={400}
          className="mx-auto"
        />
      </div>
      <p className="text-lg text-foreground/70 text-center">
        Oops! The page you are looking for does not exist.
      </p>
    </>
  );
}
