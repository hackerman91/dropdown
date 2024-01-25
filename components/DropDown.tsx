"use client";
import Link from "next/link";
import { useState } from "react";

export default function DropDown({}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-500/70 rounded-md focus:outline-none"
        >
          dropdown
        </button>
        <div
          className={`absolute right-0 w-28 py-2 mt-1 bg-white border rounded shadow-xl text-center transition duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link href="#" className="block">
            링크 1
          </Link>
          <Link href="#" className="block">
            링크 2
          </Link>
          <Link href="#" className="block">
            링크 3
          </Link>
        </div>
      </div>
    </div>
  );
}
