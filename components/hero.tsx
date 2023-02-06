import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaArrowCircleDown,
} from "react-icons/fa";

import Image from "next/image";

export default function hero() {
  return (
    // <!-- hero section -->
    <section
      id="hero"
      className="lg:h-[91vh] h-full relative backdrop-blur-sm dark:bg-gray-800/50"
    >
      {/* <!-- flex container --> */}
      <div className="container  mx-auto flex flex-col-reverse items-center space-y-0 px-5 md:pt-28 lg:flex-row xl:pt-56">
        {/* <!-- left item --> */}
        <div className=" flex w-2/3 flex-col space-y-1 lg:w-auto">
          <p className="text-center text-2xl font-semibold tracking-1 text-gray-800 dark:text-gray-100 lg:text-left lg:text-5xl">
            Welcome to
            {/* <!-- hi I'm Developer...I meant Davian --> */}
          </p>
          <h1 className="left-0 z-20 max-w-xl text-center text-4xl font-semibold tracking-1 text-prime sm:m-auto lg:text-left lg:text-7xl">
            Davian's Realm
          </h1>
          <p className="z-20 max-w-lg text-center font-normal text-zinc-600 dark:text-gray-400 sm:m-1 lg:justify-start lg:text-left">
            Hi there👋, I hope you're not lost🤗. I’m Davian, an aspiring
            Fullstack Developer👨‍💻. My current{" "}
            <b className="animate-pulse">❤️</b> is Frontend Web Dev & UI
            Designing.
          </p>
          <div className="flex justify-center pt-4 lg:justify-start">
            <span className="absolute z-0 mt-3 hidden h-8 w-20 animate-ping rounded-lg border border-blue-600 sm:mt-3 sm:block lg:ml-6"></span>
            <a
              href="#contact"
              className="baseline z-10 rounded-xl bg-prime p-3 px-8 pt-3 font-light text-white hover:opacity-90 sm:m-1"
            >
              Hire Me
            </a>

            {/* <!-- I am developer -->
                <!-- I meant Davian --> */}
          </div>
        </div>
        {/* <!-- right item --> */}
        <div className="lg:w-1/3">
          <svg
            viewBox="0 0 200 200"
            className="absolute top-0 z-0 m-auto hidden w-2/3 justify-center"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#0152CC"
              d="M52,-19.8C59.8,6.8,53,35.3,33.5,50.5C14,65.8,-18.4,67.8,-34.7,54.4C-50.9,41,-51.1,12.2,-42.6,-15.5C-34.1,-43.1,-17.1,-69.6,2.5,-70.4C22.2,-71.2,44.3,-46.4,52,-19.8Z"
              transform="translate(100 100)"
            />
          </svg>

          <Image
            src={"/images/me.png"}
            alt="Davian Lounds png"
            width={10000}
            height={10000}
            unoptimized={true}
            className="bottom-0 right-44 z-30 m-auto my-6 md:my-1 w-3/12 rounded-full bg-prime bg-center md:block md:w-4/12 lg:absolute lg:my-auto lg:rounded-none lg:bg-transparent xl:right-60 xl:w-3/12"
          />
        </div>
      </div>
      {/* <!-- social icons --> */}
      <div className="absolute right-0 inset-y-0 z-20 flex h-full w-1/5 flex-col rounded-tl-[300px] rounded-bl-[300px] bg-prime py-20 md:py-44 ">
        <a
          href="https://www.linkedin.com/in/davianlounds"
          target="_blank"
          className="m-auto text-3xl text-white hover:opacity-50 md:text-5xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/lemon_kxng/"
          target="_blank"
          className="m-auto text-2xl text-white hover:opacity-50 md:text-5xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/lemon_kxng"
          target="_blank"
          className="m-auto text-2xl text-white hover:opacity-50 md:text-5xl"
        >
          <FaTwitter />
        </a>
      </div>
      <a href="#skill">
        <span className="mx-auto mt-10 gap-2 flex items-center max-w-fit animate-bounce flex-col justify-center text-center text-prime hover:opacity-80 dark:text-gray-100 md:mt-16 xl:mt-36">
          <p>Skills</p>
          <FaArrowCircleDown />
        </span>
      </a>
    </section>
  );
}
