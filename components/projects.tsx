import { FaLink } from "react-icons/fa";
import Snowfall from "react-snowfall";

export default function () {
  return (
    // <!-- jobs -->
    <section className="relative snap-x z-10 pt-20 backdrop-blur-sm dark:bg-gray-800/80">
      {/* <Snowfall
        // Changes the snowflake color
        color="#0152cc"
        // Applied to the canvas element
        style={{ background: "transparent" }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={500}
      /> */}
      <div id="job" className="container  scroll-mt-36 mx-auto items-start">
        <h1 className="mt-0 pb-16 text-center text-3xl  font-semibold text-prime dark:text-gray-100 md:mt-0 md:hidden">
          My Projects
        </h1>
        <div className="flex items-center gap-3 md:flex-row">
          <h1 className="hidden text-6xl text-prime dark:text-gray-100 md:block md:-rotate-90">
            My Projects
          </h1>

          <div className="grid grid-cols-1 gap-10 px-8 pb-20 md:px-2 lg:grid-cols-2">
            {/* <!-- card --> */}
            <div className="container rounded-xl border-4 border-prime bg-prime p-10 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800">
              <div className="space-y-3">
                <h1 className="text-2xl font-medium text-white md:text-3xl">
                  Tic-Tak-Toe
                </h1>
                <p
                  id="app-type"
                  className="text-xs text-gray-300 dark:text-gray-500"
                >
                  Web Game
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-300 md:text-base">
                  An online recreation of the popular Tic-Tac-Toe game. The game
                  was created using vanilla javascript.
                </p>
                <div className="flex justify-center p-5">
                  <a
                    target="_blank"
                    href="https://tictaktoe.iamdavian.com/src/index.html"
                    className="rounded-full bg-gray-100 p-3 text-center text-lg text-prime hover:bg-lightBlue dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-blue-400 dark:hover:text-gray-700 md:p-5 md:text-xl"
                  >
                    <FaLink />
                  </a>
                </div>
                <p className="text-xs text-gray-300 dark:text-gray-500 md:text-sm">
                  #tailwindcss #javascript #html
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="container rounded-xl border-4 border-prime bg-prime p-10 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800">
              <div className="space-y-3">
                <h1 className="text-2xl font-medium text-white md:text-3xl">
                  Experience Kingston
                </h1>
                <p
                  id="app-type"
                  className="text-xs text-gray-300 dark:text-gray-500"
                >
                  Web App
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-300 md:text-base">
                  A user-friendly CRUD web app built using VueJs, TailwindCSS &
                  Laravel.
                </p>
                <div className="flex justify-center p-5">
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.utech.sapna.expkgn"
                    className="rounded-full bg-gray-100 p-3 text-center text-lg text-prime hover:bg-lightBlue dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-blue-400 dark:hover:text-gray-700 md:p-5 md:text-xl"
                  >
                    <FaLink />
                  </a>
                </div>
                <p className="text-xs text-gray-300 dark:text-gray-500 md:text-sm">
                  #tailwindcss #vuejs #laravel
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="container rounded-xl border-4 border-prime bg-prime p-10 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800">
              <div className="space-y-3">
                <h1 className="text-2xl font-medium text-white md:text-3xl">
                  Utech Internship
                </h1>
                <p
                  id="app-type"
                  className="text-xs text-gray-300 dark:text-gray-500"
                >
                  Web App
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-300 md:text-base">
                  A web app created to make the process of obtaining an
                  internship more efficient.
                </p>
                <div className="flex justify-center p-5">
                  <a
                    target="_blank"
                    href="https://internship.utechsapna.com/"
                    className="rounded-full bg-gray-100 p-3 text-center text-lg text-prime hover:bg-lightBlue dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-blue-400 dark:hover:text-gray-700 md:p-5 md:text-xl"
                  >
                    <FaLink />
                  </a>
                </div>
                <p className="text-xs text-gray-300 dark:text-gray-500 md:text-sm">
                  #tailwindcss #vuejs #laravel
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="container rounded-xl border-4 border-prime bg-prime p-10 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800">
              <div className="space-y-3">
                <h1 className="text-2xl font-medium text-white md:text-3xl">
                  Pokemon Finder
                </h1>
                <p
                  id="app-type"
                  className="text-xs text-gray-300 dark:text-gray-500"
                >
                  Web App
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-300 md:text-base">
                  This web app is a peronal project of mine that was created
                  with SvelteKit and Poke API🐒.
                </p>
                <div className="flex justify-center p-5">
                  <a
                    target="_blank"
                    href="https://github.com/popskully/pokemon"
                    className="rounded-full bg-gray-100 p-3 text-center text-lg text-prime hover:bg-lightBlue dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-blue-400 dark:hover:text-gray-700 md:p-5 md:text-xl"
                  >
                    <FaLink />
                  </a>
                </div>
                <p className="text-xs text-gray-300 dark:text-gray-500 md:text-sm">
                  #tailwindcss #sveltekit
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="container rounded-xl border-4 border-prime bg-prime p-10 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800">
              <div className="space-y-3">
                <h1 className="text-2xl font-medium text-white md:text-3xl">
                  Portfolio v2
                </h1>
                <p
                  id="app-type"
                  className="text-xs text-gray-300 dark:text-gray-500"
                >
                  Web Site
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-300 md:text-base">
                  A web site? A portfolio? An online resume? Call it whatever,
                  this is it. You're using it right now😉. Recreated with
                  NextJs🔥. Now with snow⛄...If you're into that sort of
                  thing...
                </p>
                <div className="flex justify-center p-5">
                  <a
                    href="#"
                    className="rounded-full bg-gray-100 p-3 text-center text-lg text-prime hover:bg-lightBlue dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-blue-400 dark:hover:text-gray-700 md:p-5 md:text-xl"
                  >
                    <FaLink />
                  </a>
                </div>
                <p className="text-xs text-gray-300 dark:text-gray-500 md:text-sm">
                  #tailwindcss #javascript #nextjs #reactjs
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="container rounded-xl border-4 border-prime bg-prime p-10 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800">
              <div className="space-y-3">
                <h1 className="text-2xl font-medium text-white md:text-3xl">
                  Portfolio v1
                </h1>
                <p
                  id="app-type"
                  className="text-xs text-gray-300 dark:text-gray-500"
                >
                  Web Site
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-300 md:text-base">
                  The website portfolio thingy that was great at it's time.
                  Unfortunately, like what Google keeps doing to their software
                  creations; I axed it!🤷🏽‍♂️. No worries though the new one is
                  exactly the same...Kinda.
                </p>
                <div className="flex justify-center p-5">
                  <a
                    href="#"
                    className="rounded-full bg-gray-100 p-3 text-center text-lg text-prime hover:bg-lightBlue dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-blue-400 dark:hover:text-gray-700 md:p-5 md:text-xl"
                  >
                    <FaLink />
                  </a>
                </div>
                <p className="text-xs text-gray-300 dark:text-gray-500 md:text-sm">
                  #tailwindcss #html #css #javascript
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="container rounded-xl border-4 border-prime bg-prime p-10 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800">
              <div className="space-y-3">
                <h1 className="text-2xl font-medium text-white md:text-3xl">
                  ShopInJm (Discontinued)
                </h1>
                <p
                  id="app-type"
                  className="text-xs text-gray-300 dark:text-gray-500"
                >
                  Web App
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-300 md:text-base">
                  This project was created to make online advertising in Jamaica
                  easier and more affordable for everyone. Unfortunately, it was
                  discontinued due to the lack of funding😭.
                </p>
                <div className="flex justify-center p-5">
                  <a
                    href="#"
                    className="rounded-full bg-gray-100 p-3 text-center text-lg text-prime hover:bg-lightBlue dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-blue-400 dark:hover:text-gray-700 md:p-5 md:text-xl"
                  >
                    <FaLink />
                  </a>
                </div>
                <p className="text-xs text-gray-300 dark:text-gray-500 md:text-sm">
                  #wordpress #css
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="container rounded-xl border-4 border-prime bg-prime p-10 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800">
              <div className="space-y-3">
                <h1 className="text-2xl font-medium text-white md:text-3xl">
                  ShopInJm Webscraper Bot
                </h1>
                <p
                  id="app-type"
                  className="text-xs text-gray-300 dark:text-gray-500"
                >
                  Bot
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-300 md:text-base">
                  A bot created to scrape popular local advertising sites to
                  populate ShopInJm's database when it was newly launched.
                </p>
                <div className="flex justify-center p-5">
                  <a
                    href="https://github.com/popskully/webscraper"
                    className="rounded-full bg-gray-100 p-3 text-center text-lg text-prime hover:bg-lightBlue dark:bg-gray-700 dark:text-gray-500 dark:hover:bg-blue-400 dark:hover:text-gray-700 md:p-5 md:text-xl"
                  >
                    <FaLink />
                  </a>
                </div>
                <p className="text-xs text-gray-300 dark:text-gray-500 md:text-sm">
                  #python
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
