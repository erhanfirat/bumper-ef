import RegisterForm from "@/components/shared/RegisterForm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join our network",
  description:
    "Offer PayLater to split servicing and repair work into monthly instalments - interest-free. Use PayNow to take secure payments online.",
};

export default function Register() {
  return (
    <main className="flex-1 py-12 bg-slateblue">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto ">
          <Link href="/" className="flex items-center mb-8">
            <Image
              src="/icons/left-arrow.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          </Link>
          <h1 className="text-4xl font-bold text-white mb-8">
            Join our network
          </h1>
          <p className="text-white text-sm mb-6">
            Offer PayLater to split servicing and repair work into monthly
            instalments - interest-free. Use PayNow to take secure payments
            online.
          </p>
          <div className="p-10 bg-white rounded-3xl shadow-lg overflow-hidden">
            <h2 className="text-xl font-semibold mb-0 pb-0">
              Join our network
            </h2>
            <p className="text-gray-600  mb-6">Free to join, no monthly fees</p>
            <RegisterForm />

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 ">
                Already registered?{" "}
                <Link href="/" className="text-green-500 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
