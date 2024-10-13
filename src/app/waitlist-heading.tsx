"use client";
import MyButton from "./my-button";
import { useRouter } from "next/navigation";

export default function WaitlistHeading() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Waitlist</h1>
      <MyButton
        handleSubmit={() => router.push("/waitlist/join")}
        text="Join Waitlist"
      />
    </div>
  );
}
