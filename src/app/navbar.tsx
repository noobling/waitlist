import Link from "next/link";
import Logo from "./logo";

export default async function Navbar() {
  return (
    <nav
      style={{
        padding: "1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Logo width={75} height={75} />
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/waitlist/join">Join Waitlist</NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        padding: "0.5rem 1rem",
        borderRadius: "4px",
        transition: "color 0.3s ease",
      }}
    >
      {children}
    </Link>
  );
}
