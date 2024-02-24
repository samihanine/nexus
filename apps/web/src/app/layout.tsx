import Providers from "@/features/common/providers";
import { DM_Sans } from "next/font/google";
import "@nexus/ui/styles";
import "leaflet/dist/leaflet.css";

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
    images: "/images/hero-home.webp",
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
  metadataBase: process.env.NEXT_PUBLIC_APP_URL || "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"fr"}>
      <body className={inter.className}>
        <Providers>
          <main className="flex overflow-y-auto h-screen w-full flex-col items-center pb-16 md:pb-0">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
