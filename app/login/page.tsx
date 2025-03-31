"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

// Define form schema using zod
const formSchema = z.object({
  account: z.string().min(1, {
    message: "계정을 입력해주세요.",
  }),
  password: z.string().min(1, {
    message: "비밀번호를 입력해주세요.",
  }),
});

// Define form values type
type FormValues = z.infer<typeof formSchema>;

export default function LoginPage() {
  const router = useRouter();
  
  // Initialize form with react-hook-form and zod resolver
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account: "",
      password: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    // In a real app, you would authenticate with a backend here
    router.push("/kanban");
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left side with blue background */}
      <div className="hidden md:flex md:w-[40%] bg-[#668DFF] flex-col justify-center items-center">
        <div className="flex items-center">
          <div className="rounded-md bg-transparent mr-2">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              strokeWidth="1"
            >
              <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12z" />
              <path d="M8 7h8M8 12h4M8 17h2" />
            </svg>
          </div>
          <span className="text-white text-lg font-medium">Example Inc</span>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full md:w-[60%] flex justify-center items-center">
        <Card className="w-full max-w-[460px] mx-6 border-none shadow-none">
          <CardHeader className="items-center pb-0">
            <CardTitle className="text-2xl font-bold text-[#333333]">로그인</CardTitle>
          </CardHeader>
          
          <CardContent className="pt-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="account"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="계정"
                            className="h-12 border-[#EAEAEA] text-[#888888]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="비밀번호"
                            className="h-12 border-[#EAEAEA] text-[#888888]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12"
                  style={{
                    backgroundColor: "#668DFF",
                    color: "white"
                  }}
                >
                  로그인
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </div>
  );
}
