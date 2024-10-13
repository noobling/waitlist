import Image from "next/image";
import styles from "./page.module.css";
import Waitlist from "./waitlist";

export default function Home() {
  return (
    <div>
      <Waitlist />
    </div>
  );
}
