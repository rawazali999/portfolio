import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="mx-auto  max-w-screen-lg px-3 pt-20">
      <div className=" mx-2 flex flex-col items-center  md:flex-row md:justify-evenly ">
        <div className="flex flex-col justify-center space-y-6 text-center">
          <h1 className="text-3xl font-bold">
            Hi there,
            <br className="block sm:hidden" /> I&apos;m{" "}
            <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Rawaz Ali
            </span>{" "}
            👋
          </h1>{" "}
          <h2 className="text-xl text-gray-500">
            Front End Developer - Software Engineer
          </h2>
          <div className="mx-auto mt-3 flex gap-2">
            <a
              href="https://github.com/rawazali999"
              target="_blank"
              className="rounded-full bg-white p-3 transition-all hover:bg-gray-200 "
            >
              {/* Github */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#333" }}
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/rawaz-ali999/"
              target="_blank"
              className="rounded-full bg-white p-3 transition-all hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#0077b5" }}
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/rawazali999"
              target="_blank"
              className=" rounded-full bg-white p-3 transition-all hover:bg-gray-200"
            >
              {/* facebook */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#1877f2" }}
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            {/* cv download button */}
            <a
              href="https://flowcv.com/resume/9ud077mfd8"
              target="_blank"
              className="flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-xl font-bold text-white  transition-all"
            >
              CV
              <Image
                src="/images/cv.png"
                height={30}
                width={30}
                alt="download icon"
              />
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <Image
            height={400}
            width={400}
            className=""
            src="/images/view-3d-businessman-removebg.png"
            alt="Avatar image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
