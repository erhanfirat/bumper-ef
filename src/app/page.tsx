import Hero from "@/components/shared/Hero";
import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 ">
      <Hero />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex lg:hidden flex-col items-start">
            <Image
              src="/bumper-logo.svg"
              alt="Bumer"
              width={125}
              height={30}
              priority
            />
            <h2 className="text-7xl font-oswald font-bold text-black  mb-4">
              PAYLATER
            </h2>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="flex flex-col justify-center items-start w-full flex-1">
              <div className="hidden lg:flex flex-col items-start">
                <Image
                  src="/bumper-logo.svg"
                  alt="Bumer"
                  width={75}
                  height={19}
                  priority
                />
                <h2 className="text-6xl font-oswald font-bold text-black  mb-4">
                  PAYLATER
                </h2>
              </div>

              <p className="text-xl font-light py-3">
                Give customers more flexibility at checkout, online and in
                store. Let them spread the cost with interest-free monthly
                payments.
              </p>
              <h3 className="text-4xl text-orange-500 py-6">
                No risk to your business. No worries for your customers.
              </h3>
              <p className="font-bold pb-3">It's as simple as:</p>
              <ul className="space-y-6 py-8">
                <li className="flex items-start gap-3 before:content-['1'] before:font-bold before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:bg-orange-500 before:border before:text-sm before:justify-center">
                  <div className="flex flex-col flex-1">
                    <h4 className="font-bold text-sm">FIX IT</h4>
                    <p>
                      Your customers bring their vehicle to you. You repair and
                      service the car. Everything just like it works right now
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2  before:content-['2'] before:font-bold before:rounded-full before:w-6 before:h-6 before:flex before:items-center before:bg-orange-500 before:border before:text-sm before:justify-center">
                  <div className="flex flex-col flex-1">
                    <h4 className="font-bold text-sm">SPLIT IT</h4>
                    <p>
                      When the customer gets their bill or quote, your customer
                      chooses the option to 'PayLater' and in just a few clicks
                      they've been approved and have paid.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2  before:content-['3'] before:font-bold before:rounded-full before:w-6 before:h-6 before:flex before:items-center before:bg-orange-500 before:border before:text-sm before:justify-center">
                  <div className="flex flex-col flex-1">
                    <h4 className="font-bold text-sm">SORTED</h4>
                    <p>
                      You and your customer part ways happy. You're paid
                      upfront, directly from Bumper, the customer repays Bumper
                      over their chosen payment plan.
                    </p>
                  </div>
                </li>
              </ul>
              <ButtonLink
                label="Register your interest"
                icon="/icons/right-arrow.svg"
                rounded
                href="/register"
              />
            </div>
            <div className="min-w-[350px] sm:min-w-[480px]">
              <Image
                src="/images/phone-mobile-app.png"
                alt="Bumper mobile app on smart phone"
                className="p-6"
                width={488}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
