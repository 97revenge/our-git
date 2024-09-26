"use client";

import React, { useState, useRef, useTransition } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LinkedinIcon, RefreshCwIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import MultipleSelector from "./multiple-selector";
import Link from "next/link";
import { FadeUp } from "./motion-variants/fade-up";
import { formSchema } from "@/lib/zod/formSchema";
import { useRouter } from "next/navigation";
import { OPTIONS } from "./landing-container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SkeletonDropdown } from "./skeleton-dropdown";
import type { githubUser } from "@/lib/zod/githubUser";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 120;

const dockVariants = cva(
  "fixed bottom-8 left-1/2 transform -translate-x-1/2 w-max h-[58px] p-2 flex gap-4 rounded-full border bg-background/80 backdrop-blur-md shadow-lg"
);

export const RegenerateForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      role: [], // Assuming role is an array of strings
    },
  });

  const handler = async (e: z.infer<typeof formSchema>) => {
    try {
      startTransition(async () => {
        return router.push(`/test/${e.username}?incharge=${e.role[0]}`);
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.cause);
      }
    }
  };

  if (isPending) {
    <SkeletonDropdown />;
  }

  return (
    <>
      {isPending ? (
        <>
          <SkeletonDropdown />
        </>
      ) : (
        <>
          <Form {...form}>
            <form
              className="space-y-4 w-full max-w-md"
              onSubmit={form.handleSubmit(handler)}
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter new username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => {
                  // Map the value (array of strings) to an array of Option objects
                  const valueAsOptions = field.value.map((role: string) => ({
                    label: role,
                    value: role,
                  }));

                  return (
                    <FormItem>
                      <FormLabel>Choose your role</FormLabel>
                      <FormControl>
                        <MultipleSelector
                          value={valueAsOptions}
                          onChange={(selectedOptions: typeof OPTIONS) =>
                            field.onChange(
                              selectedOptions.map((option) => option.value)
                            )
                          }
                          defaultOptions={OPTIONS}
                          maxSelected={1}
                          onMaxSelected={() =>
                            alert("You can only select one role.")
                          }
                          className="bg-white dark:bg-secondary"
                          placeholder="Select your role..."
                          emptyIndicator={
                            <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                              No more results...
                            </p>
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <Button className="w-full">Regenerate</Button>
            </form>
          </Form>
        </>
      )}
    </>
  );
};
