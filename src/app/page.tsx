import WaitlistHeading from "./waitlist-heading";
import WaitlistList from "./waitlist";

// Revalidate the page every 30 seconds
// Logo and waitlist may change
export const revalidate = 30;

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <WaitlistHeading />
      <WaitlistList />
    </div>
  );
}
