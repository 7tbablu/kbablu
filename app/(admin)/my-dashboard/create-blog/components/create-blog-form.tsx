"use client";

import React, { useState, useTransition } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import FormLabel from "@/components/ui/custom-lable";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createPostSchema, CreatePostFormValues } from "../schemas";
import { createPostAction } from "../actions";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export const CreateBlogForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<CreatePostFormValues>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      image: "",
    },
  });

  const onSubmit = (data: CreatePostFormValues) => {
    setError(null);

    startTransition(async () => {
      try {
        await createPostAction(data);

        alert("✅ Post created successfully!");
        form.reset();

      } catch  {
        // console.error(err);
        setError(" Failed to create post");
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel label="Title" />
                <FormControl>
                  <Input placeholder="Enter post title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Excerpt */}
          <FormField
            control={form.control}
            name="excerpt"
            render={({ field }) => (
              <FormItem>
                <FormLabel label="Excerpt" />
                <FormControl>
                  <Textarea
                    placeholder="Short summary of the post"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Markdown Editor */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel label="Content (Markdown)" />
                <FormControl>
                  <MDEditor
                    value={field.value}
                    height={400}
                    onChange={(value) => field.onChange(value ?? "")} // <-- important
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel label="Cover Image URL" />
                <FormControl>
                  <Input
                    placeholder="https://example.com/image.png"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create Post"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
