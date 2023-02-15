import Image from "next/image";
import Snowfall from "react-snowfall";

export default function () {
  return (
    // <!-- skills -->
    <section id="" className=" bg-prime pb-10 snap-x">
      {/* <Snowfall
        // Changes the snowflake color
        color="#fff"
        // Applied to the canvas element
        style={{ background: "transparent" }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={500}
      /> */}
      <div className="container relative mx-auto items-center">
        {/* <!-- head --> */}
        <div
          id="skill"
          className="scroll-mt-10 border-gray-100 py-16 dark:border-gray-300"
        >
          <h1 className="text-center text-4xl text-gray-100 dark:text-gray-300 md:text-6xl">
            Skills & Tools
          </h1>
        </div>
        {/* <!-- icons --> */}
        <div className="px-10 lg:py-16 pb-8 text-7xl">
          <div className="px-auto grid grid-cols-3 content-center gap-10 md:grid-cols-5">
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/photoshop.svg"}
                alt="Adobe photoshop"
                width={80}
                height={80}
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">Adobe Photoshop</p>
              </span>
            </span>

            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/adobe-illustrator.svg"}
                alt="Adobe illustrator"
                width={80}
                height={80}
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">Adobe Illustrator</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/figma.svg"}
                alt="Figma"
                width={80}
                height={80}
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1 text-center">Figma</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/html-5.svg"}
                width={80}
                height={80}
                alt="HTML"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">HTML5</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/css3.svg"}
                width={80}
                height={80}
                alt="css"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">CSS3</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/c.svg"}
                width={80}
                height={80}
                alt="c"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-[10px] text-gray-100 opacity-0 hover:opacity-90 md:text-sm lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">C Programming</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/c-sharp.svg"}
                width={80}
                height={80}
                alt="c-sharp"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-[10px] text-gray-100 opacity-0 hover:opacity-90 md:text-sm lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">C# Programming</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/git.svg"}
                width={80}
                height={80}
                alt="git"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">Git</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/java.svg"}
                width={80}
                height={80}
                alt="Java"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">Java</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/javascript.svg"}
                width={80}
                height={80}
                alt="javascript"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">Javascript</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/typescript.svg"}
                width={80}
                height={80}
                alt="typescript"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">TypeScript</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/Laravel.svg"}
                width={80}
                height={80}
                alt="Laravel"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">Laravel</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/mysql.svg"}
                width={80}
                height={80}
                alt="mysql"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">MySql</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/php.svg"}
                width={80}
                height={80}
                alt="php"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">Php</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/python.svg"}
                width={80}
                height={80}
                alt="python"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">Python</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/tailwindcss.svg"}
                width={80}
                height={80}
                alt="tailwindcss"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">Tailwindcss</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/Vuejs.svg"}
                width={80}
                height={80}
                alt="VueJs"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">VueJs</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/wordpress.svg"}
                width={80}
                height={80}
                alt="wordpress"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">Wordpress</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/postman.svg"}
                width={80}
                height={80}
                alt="postman"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">Postman</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/svelte.svg"}
                width={80}
                height={80}
                alt="svelte"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">Svelte</p>
              </span>
            </span>
            <span className="mx-auto rounded-full border-4 bg-gray-100 p-3 opacity-50 grayscale hover:border-blue-400 hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-gray-800 md:p-5">
              <Image
                src={"/images/icons/next-js.svg"}
                width={80}
                height={80}
                alt="next js"
              />
              <span
                className="py-auto absolute left-0 top-0 mx-auto hidden h-full w-full items-center rounded-full p-2 text-center align-middle text-sm text-gray-100 opacity-0 hover:opacity-90 lg:flex"
                id="photoshop-tooltip"
                role="tooltip"
              >
                <p className="rounded-md bg-gray-800 p-1">NextJs</p>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
