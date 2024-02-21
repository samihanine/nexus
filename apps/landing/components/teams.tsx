import { H2 } from "@nexus/ui";
import Image from "next/image";

export default function Teams() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-10">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <H2>Qui sommes nous ?</H2>
          </div>

          {/* Team members */}
          <div className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8 sm:-mx-3">
            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3">
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={"/images/team-member-01.png"}
                  width={120}
                  height={120}
                  alt="Team member 01"
                />
                <h4 className="text-xl font-bold mb-1">Samuel Paquette</h4>
                <div className="text-primary font-medium mb-2">
                  CEO & Co-fondateur
                </div>

                <div className="text-sm text-gray-600 font-medium">
                  <a
                    className="text-gray-900 hover:underline"
                    href="https://www.linkedin.com/in/samuel-paquette-62420a206/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3">
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={"/images/team-member-02.png"}
                  width={120}
                  height={120}
                  alt="Team member 02"
                />
                <h4 className="text-xl font-bold mb-1">Maïssane Touati</h4>
                <div className="text-primary font-medium mb-2">
                  COO & Co-fondateur
                </div>

                <div className="text-sm text-gray-600 font-medium">
                  <a
                    className="text-gray-900 hover:underline"
                    href="https://www.linkedin.com/in/ma%C3%AFssane-touati-a97a8b1b8/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 3rd member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3">
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={"/images/team-member-03.png"}
                  width={120}
                  height={120}
                  alt="Team member 03"
                />
                <h4 className="text-xl font-bold mb-1">Sami Hanine</h4>
                <div className="text-primary font-medium mb-2">
                  CTO & Co-fondateur
                </div>

                <div className="text-sm text-gray-600 font-medium">
                  <a
                    className="text-gray-900 hover:underline"
                    href="https://www.linkedin.com/in/sami-hanine-a685201b9"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
