import Link from "next/link";
import Image from "next/image";
import Star from "../icons/Star";
import ButtonLink from "../ui/ButtonLink";

export default function Hero() {
  return (
    <section className="bg-[url(/images/hero-bg.jpeg)] bg-cover bg-position-[-50px 0] py-20 relative">
      <div className="absolute inset-0 bg-[#141725] opacity-70"></div>
      <div className="container mx-auto px-4 z-2 relative">
        <div className="flex flex-col items-start">
          <div className="flex space-x-3 items-center text-white text-lg font-semibold mb-2 py-4">
            <span>Excellent</span>
            <div className="flex space-x-0.5">
              <Star
                className="bg-green-500 fill-white p-0.5"
                width={22}
                height={22}
              />
              <Star
                className="bg-green-500 fill-white p-0.5"
                width={22}
                height={22}
              />
              <Star
                className="bg-green-500 fill-white p-0.5"
                width={22}
                height={22}
              />
              <Star
                className="bg-green-500 fill-white p-0.5"
                width={22}
                height={22}
              />
              <Star
                className="bg-green-500 fill-white p-0.5"
                width={22}
                height={22}
              />
              <Star
                className="bg-green-500 fill-white p-0.5"
                width={22}
                height={22}
              />
            </div>

            <span className="flex items-center">
              <Image src="/icons/star.svg" alt="" width={20} height={20} />{" "}
              <span className="font-normal">Trustpilot</span>
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-oswald font-bold text-white dark:text-white mb-4">
            BECOME A BUMPER APPROVED DEPENDABLE DEALERSHIP
          </h1>
          <p className="w-full sm:w-3/6 text-xl text-white dark:text-gray-300 mb-6">
            Join our network of 3,000+ garages and dealerships who already offer
            Bumper to their customers.
          </p>
          <ButtonLink
            label="Register your interest"
            size="lg"
            icon="/icons/right-arrow.svg"
            rounded
            href="/register"
          />
          <p className="text-white dark:text-gray-300 mt-4">
            Already registered?{" "}
            <Link
              href="/login"
              className="text-green-500 hover:text-green-400 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
