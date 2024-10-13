"use client";

import { useState, useEffect } from "react";
import { WaitlistItemResponse } from "./models";
import Image from "next/image";

export default function WaitlistList() {
  const [waitlist, setWaitlist] = useState<WaitlistItemResponse[]>([]);
  function getWaitlist() {
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
        setWaitlist(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getWaitlist();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {waitlist.map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          {item.image_url && (
            <Image
              src={item.image_url}
              alt={item.username}
              width={50}
              height={50}
              className="rounded-full"
            />
          )}
          <p>{item.username}</p>
        </div>
      ))}
    </div>
  );
}
