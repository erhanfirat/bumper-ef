import Button from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kayıt Ol",
  description: "Yeni kullanıcı kaydı oluşturun",
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
          <div className="p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
            <h2 className="text-xl font-semibold mb-0 pb-0">
              Join our network
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Free to join, no monthly fees
            </p>
            <form className="space-y-4">
              <FormInput label="Name" icon="/icons/user.svg" />
              <FormInput label="Company" icon="/icons/company.svg" />
              <FormInput
                label="Mobile phone number"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                icon="/icons/phone.svg"
              />
              <FormInput
                label="Email address"
                type="email"
                icon="/icons/email.svg"
              />
              <FormInput label="Postcode" icon="/icons/house.svg" />
              <FormInput
                label="What services are you interested in?"
                description="Please select the services you’re interested in offering your customers"
                icon="/icons/service.svg"
                type="radio"
                options={[
                  { label: "PayLater", value: "paylater" },
                  { label: "PayNow", value: "paynow" },
                ]}
                name="payment-type"
              />
              <Button
                label="Register"
                type="submit"
                icon="/icons/right-arrow.svg"
                className="w-full"
                rounded
              />
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
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
