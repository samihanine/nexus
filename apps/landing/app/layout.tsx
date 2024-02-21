import "./css/style.css";

import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Immovia",
  description:
    "Immovia is a real estate platform that helps you find the perfect home.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>

      <GoogleAnalytics gaId="G-MBNV91Z78Q" />
    </html>
  );
}
