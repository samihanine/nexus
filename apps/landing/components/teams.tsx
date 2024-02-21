import { H2 } from "@nexus/ui";
import Image from "next/image";

export default function Teams() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-10">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <H2>The humans behind the product</H2>
          </div>

          {/* Team members */}
          <div
            className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8 sm:-mx-3"
            data-aos-id-team
          >
            {/* 1st member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={"/images/team-member-01.jpg"}
                  width={120}
                  height={120}
                  alt="Team member 01"
                />
                <h4 className="text-xl font-bold mb-1">Mark Lamprecht</h4>
                <div className="text-blue-600 font-medium mb-2">
                  CEO & Co-founder
                </div>
                <p className="text-gray-600 text-center mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">
                    Twitter
                  </a>{" "}
                  ·{" "}
                  <a className="text-gray-900 hover:underline" href="#0">
                    GitHub
                  </a>{" "}
                  ·{" "}
                  <a className="text-gray-900 hover:underline" href="#0">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 2nd member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-delay="150"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={"/images/team-member-02.jpg"}
                  width={120}
                  height={120}
                  alt="Team member 02"
                />
                <h4 className="text-xl font-bold mb-1">Jessie Pietrasiak</h4>
                <div className="text-blue-600 font-medium mb-2">
                  CTO & Co-founder
                </div>
                <p className="text-gray-600 text-center mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">
                    Twitter
                  </a>{" "}
                  ·{" "}
                  <a className="text-gray-900 hover:underline" href="#0">
                    GitHub
                  </a>{" "}
                  ·{" "}
                  <a className="text-gray-900 hover:underline" href="#0">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 3rd member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={"/images/team-member-03.jpg"}
                  width={120}
                  height={120}
                  alt="Team member 03"
                />
                <h4 className="text-xl font-bold mb-1">Marina Hoffman</h4>
                <div className="text-blue-600 font-medium mb-2">
                  Community Manager
                </div>
                <p className="text-gray-600 text-center mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">
                    Twitter
                  </a>{" "}
                  ·{" "}
                  <a className="text-gray-900 hover:underline" href="#0">
                    GitHub
                  </a>{" "}
                  ·{" "}
                  <a className="text-gray-900 hover:underline" href="#0">
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
