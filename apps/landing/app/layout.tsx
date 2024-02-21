import { DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "../components/header";
import "@nexus/ui/styles";

const inter = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Immovia",
  description:
    "Avec Immovia, soyez mis en relation avec les bonnes personnes au bon moment pour bénéficier des meilleures conditions selon vos besoins au Québec.",
  openGraph: {
    images: "/images/hero-home.png",
  },
  keywords: [
    "Immovia",
    "immobilier",
    "plateforme",
    "québec",
    "connecter",
    "acheteurs",
    "vendeurs",
    "courtiers",
    "canada",
    "inscription",
    "tarifs",
    "abonnement",
    "liste d'attente",
  ],
  metadataBase: process.env.NEXT_PUBLIC_LANDING_URL || "",
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
