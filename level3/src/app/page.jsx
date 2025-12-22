"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter();
  return (
    <div>
      <ul>
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/about"}>
          <li>About</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
        <button onClick={() => navigate.push("https://google.com")}>
          Google
        </button>
      </ul>
    </div>
  );
}
