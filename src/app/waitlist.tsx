import Image from "next/image";
import { getWaitlist } from "./supabase";

export default async function Waillist() {
  const waitlist = await getWaitlist();

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
