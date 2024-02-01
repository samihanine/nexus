import Image from "next/image";
import Logo from "@/components/logo";
import image from "public/images/symbolic-1.webp";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen w-full bg-secondary">
        <div className="flex flex-1 flex-col border-r border-border px-4 py-20 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96 h-full flex justify-center flex-col">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-auto" />
              <h2 className="text-xl font-medium text-foreground">nexus</h2>
            </div>

            <div className="mt-12">{children}</div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={image}
            alt="Symbolic megascale image"
          />
        </div>
      </div>
    </>
  );
}
