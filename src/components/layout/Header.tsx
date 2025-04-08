"use client";

import Link from "next/link";
import HeaderLink from "../ui/HeaderLink";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full">
      {/* Üst siyah çubuk */}
      <div className="bg-black text-white rounded-b-2xl flex relative z-2">
        <div className="container mx-auto px-4 flex justify-between">
          <div className="flex space-x-4 ">
            <HeaderLink href="/" label="For business" />
            <div className="w-px bg-gray-600"></div>
            <HeaderLink href="/drivers" label="For drivers" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex space-x-3 text-white text-sm px-4 py-[4px] border rounded-md font-medium hover:bg-orange-600 transition-colors">
              <span>Partner login </span>
              <Image
                src="/nav-right-ico.svg"
                alt="partner login"
                width={12}
                height={12}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Alt turuncu çubuk */}
      <div className="bg-orange-500 text-white py-4 pt-[32px] mt-[-12px] rounded-b-2xl relative z-1">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/bumper-logo.svg"
                alt="Bumer"
                width={126}
                height={32}
                priority
              />
            </Link>
            <span className="font-bold text-black"> for business</span>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-white text-orange-500 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
