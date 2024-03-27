import Link from "next/link";
import React from "react";

const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Products", path: "/products" },
];

export default function Navbar() {
  return (
    <header className="flex justify-around items-center bg-slate-50 shadow py-8">
      <div>LOGO</div>
      <ul className="flex gap-4 font-bold">
        {NavLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
