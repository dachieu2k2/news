import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AdsBanner } from "../Components/Ads/AdsBanner";
import { Badge } from "../Components/Badge/Badge";
import { Button } from "../Components/Buttons/Button";
import { ImageCard } from "../Components/Cards/ImageCard";
import { ImageCard2 } from "../Components/Cards/ImageCard2";
import { SimpleCard } from "../Components/Cards/SimpleCard";
import { SimpleCardWD } from "../Components/Cards/SimpleCardWD";
import { FacebookIcon } from "../Components/Icons/FacebookIcon";
import { InstagramIcon } from "../Components/Icons/InstagramIcon";
import { TwitterIcon } from "../Components/Icons/TwitterIcon";
import { YoutubeIcon } from "../Components/Icons/YoutubeIcon";
import { Line } from "../Components/Line/Line";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <header className="flex justify-between items-center  h-11">
          <div className="flex font-roboto font-normal text-sm gap-x-2">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 m-4 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <p>
                15 <sup>&deg;C</sup> New York
              </p>
              <svg
                className="w-4 h-4 m-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Wednesday, 10 January 2021</p>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="text-white bg-primary hover:bg-primary/70 transition duration-300 ease-in-out font-roboto font-normal text-sm px-2 py-3 text-center inline-flex items-center mr-2 dark:bg-primary "
              >
                Breaking News
              </button>
            </div>
            <div className="flex items-center">
              Indonesia says located black box recorders from crashed plane
            </div>
          </div>
          <div className="flex gap-x-2 scale-75">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YoutubeIcon />
          </div>
        </header>

        <div className="container mx-auto">
          <div className="flex justify-between mt-6">
            <div className="basis-1/3">
              <img
                className="h-16"
                src="https://s3-alpha-sig.figma.com/img/985f/3b9b/769c2566f8eeb5e064a547be38b5b591?Expires=1666569600&Signature=XBiSkOojPVw6b3Zl5awM~fjoO3KKx~byc3zhsFQO80eRS5Q26vR7iW3b87LxSvtP345BLq4cn8knBr421o3O8Iih4pJGBynLSQZZle9JPM4rbP4cm6Tj3NhN6Ci~VTD3MoZwadjdzseNqieyTzWRjdbkbBg65xDyPBRzv1uHb7hp7DBsJzDLd~53ITQDlyX3B1ffTUXjapKMlZYrnge~v4ff~-l4Qbro6t7V5GdyMHNgpsOG5NXDkgLar~IfmkPJaw2yhL3QaXS9wDESjPD9UhPiBxzzeFGpmvNvzIazowXB3Sqpm9NWDO8rIZiIzZObWWQLH4Vi5izwhqqatT88oQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="logo"
              />
            </div>
            <div className="basis-2/3">
              <AdsBanner />
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-oswald">
          Các bệnh hô hấp thường gặp khi trời trở lạnh
        </h1>
        <h1 className="text-3xl font-bold underline font-roboto">
          Các bệnh hô hấp thường gặp khi trời trở lạnh
        </h1>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <YoutubeIcon />
        {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 dark:bg-blue-200 dark:text-blue-800">
          Default
        </span> */}
        <Badge text={"All"} color={"bg-primary"} />
        <Badge text={"Football"} color={"bg-light-purple"} />
        <Badge text={"Cricket"} color={"bg-light-green"} />
        <Badge text={"Baseketball"} color={"bg-light-blue"} />
        <Line />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCardWD />
        <ImageCard />
        <ImageCard2 />
        <Button onClick={() => console.log("123123")} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
