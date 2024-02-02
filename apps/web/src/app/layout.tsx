import Providers from "@/features/common/providers";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "nexus - Find and contact leads with AI",
  description:
    "nexus is a lead generation tool that helps you find and contact leads with AI.",
  twitter: {
    card: "summary_large_image",
    title: "nexus - Find and contact leads with AI",
    description:
      "nexus is a lead generation tool that helps you find and contact leads with AI.",
    creator: "Sami Hanine",
  },
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL || "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"}>
      <body className={GeistSans.className}>
        <Providers>
          <main className="flex h-full min-h-screen w-full flex-col items-center bg-secondary">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}