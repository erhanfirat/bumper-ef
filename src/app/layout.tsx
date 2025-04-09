import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Oswald, Roboto } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bumper.com"),
  title: {
    template: "%s | Bumper",
    default: "Bumper - Payment solutions for automotive businesses",
  },
  description:
    "No risk to your business. No worries for your customers. Bumper offers flexible payment solutions for automotive dealerships and garages.",
  applicationName: "Bumper",
  creator: "Bumper",
  publisher: "Bumper Ltd",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
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
  alternates: {
    canonical: "https://bumper.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    <html lang="en" className={`${oswald.variable} ${roboto.variable}`}>
      <body className="antialiased flex flex-col min-h-lvh">
        <Header />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
