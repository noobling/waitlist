"use client";

import WaitlistList from "./waitlist-list";
import { useRouter } from "next/navigation";
import MyButton from "./my-button";
export default function Waitlist() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Waitlist</h1>
        <MyButton
          handleSubmit={() => router.push("/waitlist/join")}
          text="Join Waitlist"
        />
      </div>
      <WaitlistList />
    </div>
  );
}
