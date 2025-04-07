import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bumper partner list",
  keywords: "Bumper, partner, list",
  description: "Mevcut iş ortaklarımızın listesi",
};

export default function PartnerList() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">Partner List</div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
