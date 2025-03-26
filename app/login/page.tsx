"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function LoginPage() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation for demonstration purposes
    if (!account || !password) {
      toast({
        description: "계정 정보를 확인해주세요.",
      });
      return;
    }

    // In a real app, you would authenticate with a backend here
    router.push("/kanban");
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left side with dark background */}
      <div className="hidden md:flex md:w-[40%] bg-[#595959] flex-col justify-center items-center">
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
        <div className="w-full max-w-[460px] px-6">
          <div className="flex flex-col items-center gap-12">
            <h1 className="text-2xl font-bold text-[#333333]">로그인</h1>
            
            <form onSubmit={handleLogin} className="w-full space-y-12">
              <div className="space-y-1">
                <Input
                  type="text"
                  placeholder="계정"
                  className="h-12 border-[#EAEAEA] text-[#888888]"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="비밀번호"
                  className="h-12 border-[#EAEAEA] text-[#888888]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 bg-[#595959] hover:bg-[#444444] text-white disabled:bg-[#EAEAEA] disabled:text-[#888888]"
                disabled={!account || !password}
              >
                로그인
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
