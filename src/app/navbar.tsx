"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const LOGO_ASSET_ID = "rVpP4S2cuEaOg9619Ijiv";
export default function Navbar() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const getLogoUrl = async () => {
    const response = await fetch(
      `/api/contentful/asset?assetId=${LOGO_ASSET_ID}`
    );
    const data = await response.json();

    setLogoUrl(data.data);
  };

  useEffect(() => {
    getLogoUrl();
  }, []);

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
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "white",
            textDecoration: "none",
          }}
        >
          {logoUrl && (
            <Image src={logoUrl} alt="Logo" width={100} height={100} />
          )}
        </Link>
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
