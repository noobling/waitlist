"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import MyButton from "../my-button";
import MyInput from "../my-input";

export default function WaitlistCreate() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function handleSubmit() {
    if (!email || !username) {
      return;
    }
    setLoading(true);

    fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email, username }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
        router.push("/");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <MyInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <MyInput
        type="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <MyButton
        loading={loading}
        handleSubmit={handleSubmit}
        text="Join Waitlist"
      />
    </div>
  );
}
