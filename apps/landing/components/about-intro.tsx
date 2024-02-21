import { H1, Muted } from "@nexus/ui";

export default function AboutIntro() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <H1 className="mb-4">L'équipe derrière Immovia</H1>
            <Muted>
              We have transformed product development, making it faster,
              simpler... better! That's why in just three years we now help more
              developers build projects than anyone else.
            </Muted>
          </div>
        </div>
      </div>
    </section>
  );
}
