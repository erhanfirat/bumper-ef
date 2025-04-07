import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bumper",
  description: "No risk to your business. No worries for your customers.",
  keywords: "Bumper, Car Repair, Car fix, Car Service, Car Maintenance",
  authors: [
    {
      name: "Bumper",
      url: "https://bumper.com",
    },
  ],
  creator: "Bumper",
  openGraph: {
    title: "Bumper",
    description: "No risk to your business. No worries for your customers.",
    url: "https://bumper.com",
    siteName: "Bumper",
    images: [
      {
        url: "https://bumper.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bumper",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bumper",
    description: "No risk to your business. No worries for your customers.",
    images: ["https://bumper.com/images/og-image.png"],
    creator: "@bumper",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  appleWebApp: {
    capable: true,
    title: "Bumper",
    statusBarStyle: "default",
    startupImage: ["/apple-touch-startup-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    notranslate: false,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      name: "Bumper",
      value: "verification-code",
    },
  },
};

export default function Home() {
  return <div className="min-h-screen flex flex-col">Ana Sayfa</div>;
}
