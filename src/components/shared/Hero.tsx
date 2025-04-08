import Link from "next/link";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-[url(/images/hero-bg.jpeg)] bg-cover bg-center py-16 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 z-2 relative">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl md:text-7xl font-oswald font-bold text-white dark:text-white mb-4">
            BECOME A BUMPER APPROVED DEPENDABLE DEALERSHIP
          </h1>
          <p className="w-full sm:w-3/6 text-xl text-white dark:text-gray-300 mb-6">
            Join our network of 3,000+ garages and dealerships who already offer
            Bumper to their customers.
          </p>
          <Button
            label="Register your interest"
            size="lg"
            icon="/icons/right-arrow.svg"
            rounded
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
