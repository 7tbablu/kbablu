import React from "react";
import { CreateBlogForm } from "./components/create-blog-form";
import { redirect } from "next/navigation";
import { checkRole } from "@/utils/role";

const CreatePost = async () => {
  const isAdmin = await checkRole("admin");
  if (!isAdmin) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center p-4 py-24 mt-14">
      <div className="w-full max-w-4xl shadow-lg rounded-3xl p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Create a New Blog Post
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Fill in the details below and publish your tech post. You can use
          Markdown for formatting and include code blocks with syntax
          highlighting.
        </p>
        <CreateBlogForm />
      </div>
    </div>
  );
};

export default CreatePost;
