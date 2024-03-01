"use client";

import {
  H3,
  P,
  Quote,
  RoundedArrowLeft,
  RoundedArrowRight,
  Strong,
} from "@nexus/ui";
import Image, { StaticImageData } from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function AuthCarousel({
  testimonials,
}: {
  testimonials: {
    imageUrl: string | StaticImageData;
    quote: string;
    author: string;
    title: string;
  }[];
}) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonial = useMemo(
    () => testimonials[currentTestimonialIndex],
    [currentTestimonialIndex, testimonials]
  );

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative hidden w-0 flex-1 lg:block">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover rounded-tl-[4rem] rounded-br-[4rem]"
          src={testimonial.imageUrl}
          alt={testimonial.author}
        />
        <div className="absolute bottom-0 w-full h-80 bg-gradient-to-t from-black to-transparent rounded-br-[4rem]"></div>
        <div className="absolute bottom-0 w-full px-12 py-10 text-white space-y-4">
          <Quote className="h-6 w-6 text-foreground" />
          <H3>{testimonial.quote}</H3>

          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <Strong>{testimonial.author}</Strong>
              <P>{testimonial.title}</P>
            </div>

            <div className="flex gap-6">
              <button onClick={handlePrevious} className="group">
                <RoundedArrowLeft className="h-14 w-14 rounded-full group-hover:text-foreground group-hover:bg-background" />
                <span className="sr-only">Précédent</span>
              </button>
              <button onClick={handleNext} className="group">
                <RoundedArrowRight className="h-14 w-14 rounded-full group-hover:text-foreground group-hover:bg-background" />
                <span className="sr-only">Suivant</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
