import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Bumper",
  description: "No risk to your business. No worries for your customers.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  authors: [
    {
      name: "Erhan FIRAT",
      url: "https://bumper.com",
    },
  ],
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  keywords: [
    "Bumper",
    "Car Service",
    "Car Maintenance",
    "Car Repair",
    "Car Wash",
    "Car Detailing",
    "Car Inspection",
    "Car Oil Change",
    "Car Tire Rotation",
    "Car Brake Service",
    "Car Battery Replacement",
    "Car Engine Repair",
    "Car Transmission Repair",
    "Car Suspension Repair",
    "Car Exhaust Repair",
    "Car Electrical Repair",
    "Car Air Conditioning Repair",
    "Car Heating Repair",
    "Car Cooling System Repair",
    "Car Fuel System Repair",
    "Car Steering Repair",
    "Car Wheel Alignment",
    "Car Wheel Balancing",
    "Car Tire Repair",
    "Car Tire Replacement",
    "Car Tire Rotation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${roboto.variable} antialiased flex flex-col min-h-lvh`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
