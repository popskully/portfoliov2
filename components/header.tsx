import { FaGithub } from "react-icons/fa";

export default function () {
  return (
    // <!-- navbar  -->
    <nav className="sticky backdrop-blur-sm top-0 z-40 mx-auto bg-white/50 p-6 dark:bg-gray-800/50">
      {/* <!-- flex container --> */}
      <div className="container mx-auto flex items-center justify-between">
        {/* <!-- logo --> */}
        <div className="pt-0">
          <a
            href="#"
            className="text-3xl font-bold tracking-1 text-prime hover:opacity-80 dark:text-white"
          >
            dvn
          </a>
        </div>
        {/* <!-- menu items --> */}
        <div className="hidden space-x-7 lg:flex">
          <a
            href="#"
            className=" text-prime hover:opacity-80 dark:text-gray-100 dark:hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#skill"
            className=" text-prime hover:opacity-80 dark:text-gray-100 dark:hover:text-gray-300"
          >
            Skills
          </a>
          <a
            href="#job"
            className=" text-prime hover:opacity-80 dark:text-gray-100 dark:hover:text-gray-300"
          >
            Projects
          </a>
          <span className="h-6 w-[2px] bg-prime dark:bg-white"></span>
          <a
            href="https://github.com/popskully"
            target="_blank"
            className="font-bold items-center flex hover:opacity-80 text-prime dark:text-gray-100 dark:hover:text-gray-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* <!-- Hamburger Icon --> */}
        <button
          onClick={openNav}
          id="menu-btn"
          className="hamburger block cursor-pointer focus:outline-none focus:ring-transparent focus:border-none lg:hidden"
        >
          <span className="hamburger-top bg-prime dark:bg-slate-50"></span>
          <span className="hamburger-bottom bg-prime dark:bg-slate-50"></span>
        </button>
      </div>

      {/* <!-- mobile menu --> */}
      <div className="lg:hidden">
        <div
          id="mobile-menu"
          className="invisible absolute left-6 right-6 mt-10 hidden flex-col items-center space-y-3 self-end rounded-lg border-b-4 bg-white/90 py-8 px-8 font-bold drop-shadow-md dark:bg-gray-700/70 sm:w-auto sm:self-center"
        >
          <a
            href="#"
            className="w-full py-2 text-center text-prime hover:opacity-75 dark:text-gray-100"
            onClick={openNav}
          >
            Home
          </a>
          <a
            href="#skill"
            className="w-full py-2 text-center text-prime hover:opacity-75 dark:text-gray-100"
            onClick={openNav}
          >
            Skills
          </a>
          <a
            href="#job"
            className="w-full py-2 text-center text-prime hover:opacity-75 dark:text-gray-100"
            onClick={openNav}
          >
            Projects
          </a>
          <div className="flex space-x-6 pt-3">
            <a
              href="https://github.com/popskully"
              target="_blank"
              className="font-bold items-center flex hover:opacity-80  text-prime dark:text-gray-100 dark:hover:text-gray-300"
              onClick={openNav}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function openNav() {
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("mobile-menu");

  if (btn!.classList.contains("open")) {
    btn!.classList.remove("open");
    nav!.classList.add("invisible");
    nav!.classList.add("hidden");
    nav!.classList.add("flex");
  } else {
    btn!.classList.add("open");
    nav!.classList.add("flex");
    nav!.classList.remove("invisible");
    nav!.classList.remove("hidden");
  }
}
