import React from "react";
import ServicesClient from "./components/service-client";

export const metadata = {
  title: "Services - KBablu",
  description:
    "Discover the services offered by KBablu, including full-stack web development, mobile apps, prebuilt apps, and more.",
};

const Service = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
    <ServicesClient />
    </div>
  );
};

export default Service;
