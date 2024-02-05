import { LogoText } from "@nexus/ui";
import AuthCarousel from "@/features/auth/auth-carousel";
import AuthCarouselImage1 from "public/images/auth/auth-carousel-1.jpg";
import AuthCarouselImage2 from "public/images/auth/auth-carousel-2.jpg";
import AuthCarouselImage3 from "public/images/auth/auth-carousel-3.jpg";
import AuthCarouselImage4 from "public/images/auth/auth-carousel-4.jpg";
import AuthCarouselImage5 from "public/images/auth/auth-carousel-5.jpg";
import AuthCarouselImage6 from "public/images/auth/auth-carousel-6.jpg";
import AuthCarouselImage7 from "public/images/auth/auth-carousel-7.jpg";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const testimonials = [
    {
      author: "Samuel Paquette",
      title: "CEO, Nexus",
      quote:
        "Lorem ipsum dolor sit amet. Est nostrum rerum sed dicta fugit cum provident beatae. Est enim iure hic galisum dicta galisum.",
      imageUrl: AuthCarouselImage1,
    },
    {
      author: "Samuel Paquette",
      title: "CEO, Nexus",
      quote:
        "Lorem ipsum dolor sit amet. Est nostrum rerum sed dicta fugit cum provident beatae. Est enim iure hic galisum dicta galisum.",
      imageUrl: AuthCarouselImage2,
    },
    {
      author: "Samuel Paquette",
      title: "CEO, Nexus",
      quote:
        "Lorem ipsum dolor sit amet. Est nostrum rerum sed dicta fugit cum provident beatae. Est enim iure hic galisum dicta galisum.",
      imageUrl: AuthCarouselImage3,
    },
    {
      author: "Samuel Paquette",
      title: "CEO, Nexus",
      quote:
        "Lorem ipsum dolor sit amet. Est nostrum rerum sed dicta fugit cum provident beatae. Est enim iure hic galisum dicta galisum.",
      imageUrl: AuthCarouselImage4,
    },
    {
      author: "Samuel Paquette",
      title: "CEO, Nexus",
      quote:
        "Lorem ipsum dolor sit amet. Est nostrum rerum sed dicta fugit cum provident beatae. Est enim iure hic galisum dicta galisum.",
      imageUrl: AuthCarouselImage5,
    },
    {
      author: "Samuel Paquette",
      title: "CEO, Nexus",
      quote:
        "Lorem ipsum dolor sit amet. Est nostrum rerum sed dicta fugit cum provident beatae. Est enim iure hic galisum dicta galisum.",
      imageUrl: AuthCarouselImage6,
    },
    {
      author: "Samuel Paquette",
      title: "CEO, Nexus",
      quote:
        "Lorem ipsum dolor sit amet. Est nostrum rerum sed dicta fugit cum provident beatae. Est enim iure hic galisum dicta galisum.",
      imageUrl: AuthCarouselImage7,
    },
  ];

  return (
    <>
      <div className="flex min-h-screen w-full px-8 py-12">
        <div className="px-5 md:px-20 space-y-14 mt-10 lg:max-w-lg w-full">
          <LogoText />

          {children}
        </div>

        <AuthCarousel testimonials={testimonials} />
      </div>
    </>
  );
}
