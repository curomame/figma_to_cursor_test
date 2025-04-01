import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full">
      {/* Left Side - Blue Section */}
      <div className="hidden md:flex flex-col justify-center items-center bg-[#0044FF] w-1/2 h-full p-10">
        <div className="flex items-center">
          <div className="flex items-center p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-white"
            >
              <path
                d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center ml-2">
            <span className="text-white font-medium text-lg">Example Inc</span>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex flex-col justify-center items-center bg-white w-full md:w-1/2 px-4">
        <div className="w-full max-w-[460px]">
          <div className="flex flex-col items-center gap-12 w-full">
            <h1 className="font-pretendard text-[#333333] text-2xl font-bold text-center tracking-tight leading-none">로그인</h1>
            
            <div className="flex flex-col w-full gap-3">
              <div className="flex flex-col w-full gap-1">
                <Input 
                  className="font-pretendard border-[#EAEAEA] text-[#888888] py-3 px-3 rounded-md text-base tracking-tight"
                  placeholder="계정" 
                />
                <Input 
                  className="font-pretendard border-[#EAEAEA] text-[#888888] py-3 px-3 rounded-md text-base tracking-tight"
                  placeholder="비밀번호" 
                  type="password"
                />
              </div>
              
              <Button 
                className="font-pretendard bg-[#0044FF] text-white w-full py-3 rounded-md text-base font-normal tracking-tight hover:bg-[#0044FF]/90"
              >
                로그인
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 