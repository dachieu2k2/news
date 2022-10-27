import Link from "next/link";
import { useRouter } from "next/router";

export const Nav = () => {
  const { pathname } = useRouter();

  //   cho do dai
  const activeLink =
    "leading-8 block py-2  pl-3 text-white bg-primary underline underline-offset-8 rounded md:p-4 ";
  const normalLink = "leading-8 block py-2  pl-3 text-white rounded md:p-4 ";
  return (
    <nav className="bg-text-color-39 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link
          href="/"
          className="flex items-center sm:block md:hidden lg:hidden"
        >
          <img
            className="mr-3 h-6 sm:h-9 md:hidden lg:hidden"
            src="https://s3-alpha-sig.figma.com/img/985f/3b9b/769c2566f8eeb5e064a547be38b5b591?Expires=1667779200&Signature=Ef~mdLMpazTMmvVmjSwRc4CMMouB1WZzbD6T5txeanZOeyfSj9141rlSE~A-GDCc-rcmQTUNe898sbdkr~eWuUlHgcrtoojO9DEognjdHFARFevfkqxMKLap8Sa9nq-Hc4U2qZlG3yEWZdIWOdJA8A0BD-DOC2ssqVCqnvCi4Pxqu~~UfyLqtpJYhwsNR1V-2hIgzu4MMRXsKWPQycldkUAyz~zu2Q~Hi6DOc5NvHam7c5p7adqvCNa6H1gHyWpn-6awcCcWUpDZyRPyTvqCNGGFZ4lYEafTG3IgxcqmWpK~zs5KabS5eEZA-PmhznH4I2JhvxWlu~I0Hxa9Q1jpbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="logo"
          />
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="hidden relative md:block">
            <div className="flex absolute inset-y-0 right-5 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block pl-10 w-full text-white bg-text-color-39 p-4 border-l-2 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-text-color-39 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for"
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col md:flex-row font-oswald font-normal text-lg items-center ">
            <li className={pathname === "/" ? activeLink : normalLink}>
              <Link href="/" aria-current="page">
                Tin tức
              </Link>
            </li>
            <li className={pathname === "/tu-van" ? activeLink : normalLink}>
              <Link href="/">Tư vấn</Link>
            </li>
            <li
              className={pathname === "/dinh-duong" ? activeLink : normalLink}
            >
              <Link href="/">Dinh dưỡng</Link>
            </li>
            <li className={pathname === "/khoe-dep" ? activeLink : normalLink}>
              <Link href="/" aria-current="page">
                Khỏe đẹp
              </Link>
            </li>
            <li className={pathname === "/dan-ong" ? activeLink : normalLink}>
              <Link href="/">Đàn ông</Link>
            </li>
            <li className={pathname === "/cac-benh" ? activeLink : normalLink}>
              <Link href="/">Các bệnh</Link>
            </li>
            <li className={pathname === "/covid-19" ? activeLink : normalLink}>
              <Link href="/">Covid-19</Link>
            </li>
            <li
              className={pathname === "/smthwhoknow" ? activeLink : normalLink}
            >
              <Link href="/">smthwhoknow</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
