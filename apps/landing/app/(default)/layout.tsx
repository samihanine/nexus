"use client";

import Footer from "../../components/footer";
import { Toaster } from "react-hot-toast";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster />
      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
