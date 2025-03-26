import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link href="/kanban" className="text-blue-600 hover:text-blue-800 underline">KANBAN</Link>
      <Link href="/dashboard" className="text-blue-600 hover:text-blue-800 underline">DASHBOARD</Link>
    </div>
  );
}
