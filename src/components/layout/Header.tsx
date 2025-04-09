"use client";

import Link from "next/link";
import HeaderLink from "../ui/HeaderLink";
import Image from "next/image";
import Button from "../ui/Button";
import ButtonLink from "../ui/ButtonLink";

export default function Header() {
  return (
    <header className="w-full mb-[-14px]">
      <div className="bg-black text-white rounded-b-2xl flex relative z-2">
        <div className="container mx-auto px-4 flex justify-between">
          <nav className="flex space-x-4">
            <HeaderLink href="/" label="For business" />
            <div className="w-px bg-gray-600"></div>
            <HeaderLink href="/dealerships" label="For drivers" />
          </nav>
          <div className="items-center space-x-4 hidden sm:flex">
            <Button
              label="Partner login"
              size="sm"
              icon="/icons/nav-right-ico.svg"
              variant="secondary"
            />
          </div>
        </div>
      </div>

      <div className="bg-orange-500 text-white pb-[.65rem] pt-[calc(.65rem+14px)] mt-[-14px] rounded-b-2xl relative z-1">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/bumper-logo.svg"
                alt="Bumper"
                width={126}
                height={32}
                priority
              />
            </Link>
            <span className="font-bold text-black"> for business</span>
          </div>

          <div className="flex items-center space-x-4">
            <ButtonLink href="/register" label="Register" size="sm" />
          </div>
        </div>
      </div>
    </header>
  );
}
