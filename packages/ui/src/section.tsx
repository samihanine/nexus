"use client";

export type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export const Section = ({ children, className = "" }: SectionProps) => (
  <section
    className={`mx-auto w-full max-w-7xl px-10 py-10 flex-1 ${className}`}
  >
    {children}
  </section>
);
