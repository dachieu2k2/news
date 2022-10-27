import type { NextPage } from "next";
import Head from "next/head";
import { AbsImage } from "../Components/Ads/AbsImage";
import { AdsBanner } from "../Components/Ads/AdsBanner";
import { Badge } from "../Components/Badge/Badge";
import { Button } from "../Components/Buttons/Button";
import { SimpleCard } from "../Components/Cards/SimpleCard";
import { SimpleCardWD } from "../Components/Cards/SimpleCardWD";
import { SimpleVideoCard } from "../Components/Cards/SimpleVideoCard";
import { VideoCard } from "../Components/Cards/VideoCard";
import { FacebookIcon } from "../Components/Icons/FacebookIcon";
import { InstagramIcon } from "../Components/Icons/InstagramIcon";
import { TwitterIcon } from "../Components/Icons/TwitterIcon";
import { YoutubeIcon } from "../Components/Icons/YoutubeIcon";
import { Layout } from "../Components/Layouts/Layout";
import { Layout2 } from "../Components/Layouts/Layout2";
import { Layout3 } from "../Components/Layouts/Layout3";
import { Line } from "../Components/Line/Line";
import { Nav } from "../Components/Nav/Nav";
import { Title } from "../Components/Title/Title";
import { TitleLayout2 } from "../Components/Title/TitleLayout2";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="shadow-lg shadow-rose-100/40">
        <div className="container mx-auto">
          <header className="flex justify-between items-center  h-11 ">
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
        </div>
      </div>

      <main className="container mx-auto">
        <div className="container mx-auto">
          <div className="flex justify-between mt-6 items-center">
            <div className="basis-1/3">
              <img
                className="h-16"
                src="https://s3-alpha-sig.figma.com/img/985f/3b9b/769c2566f8eeb5e064a547be38b5b591?Expires=1667779200&Signature=Ef~mdLMpazTMmvVmjSwRc4CMMouB1WZzbD6T5txeanZOeyfSj9141rlSE~A-GDCc-rcmQTUNe898sbdkr~eWuUlHgcrtoojO9DEognjdHFARFevfkqxMKLap8Sa9nq-Hc4U2qZlG3yEWZdIWOdJA8A0BD-DOC2ssqVCqnvCi4Pxqu~~UfyLqtpJYhwsNR1V-2hIgzu4MMRXsKWPQycldkUAyz~zu2Q~Hi6DOc5NvHam7c5p7adqvCNa6H1gHyWpn-6awcCcWUpDZyRPyTvqCNGGFZ4lYEafTG3IgxcqmWpK~zs5KabS5eEZA-PmhznH4I2JhvxWlu~I0Hxa9Q1jpbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="logo"
              />
            </div>
            <div className="basis-2/3">
              <AdsBanner />
            </div>
          </div>
          <div className="my-6">
            <Nav />
          </div>
          <div className="mb-12">
            <Layout />
          </div>
          <div className="mb-9">
            <Layout2 />
          </div>
          <div className="mb-12">
            <Layout3 />
          </div>
          <div className="flex mb-12 gap-x-7">
            <div className="basis-3/4 ">
              <div className="mb-12">
                <TitleLayout2 text="Sports" />
                <div className="mt-[24px] flex">
                  <div className="basis-2/5 mr-[29px]">
                    <SimpleCardWD />
                  </div>
                  <div className="basis-3/5 grid gap-y-4">
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <TitleLayout2 text="Life Style" />
                <div className="mt-[24px] flex gap-x-8">
                  <div className="basis-1/2 grid gap-y-6">
                    <SimpleCardWD />
                    <SimpleCard />
                    <SimpleCard />
                  </div>
                  <div className="basis-1/2 grid gap-y-6">
                    <SimpleCardWD />
                    <SimpleCard />
                    <SimpleCard />
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <AdsBanner />
              </div>
              <div className="mb-12">
                <TitleLayout2 text="Video" />
                <div className="mt-[24px] grid grid-cols-3 gap-4">
                  <div className="col-span-3">
                    <VideoCard />
                  </div>
                  <div>
                    <SimpleVideoCard />
                  </div>
                  <div>
                    <SimpleVideoCard />
                  </div>
                  <div>
                    <SimpleVideoCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/4">
              <div className="mb-6">
                <div className="relative mb-3">
                  <div className="flex justify-between font-medium text-sm font-normal font-oswald items-center">
                    <p className=" text-text-color-f6  cursor-pointer">
                      Stay connected
                    </p>
                  </div>
                  <Line />
                </div>
              </div>
              <div className="mt-[36px] mb-[25px]">
                <div className="grid grid-cols-2 gap-3">
                  <Button>TEST</Button>
                  <Button>TEST</Button>
                  <Button>TEST</Button>
                  <Button>TEST</Button>
                  <Button>TEST</Button>
                  <Button>TEST</Button>
                </div>
              </div>
              <div className="mb-[25px]">
                <AbsImage />
              </div>
              <div className="bg-[#DEDADA] h-[270px] flex items-center justify-center flex-col mb-[25px]">
                <div className="font-oswald text-lg">Get Latest Updates</div>
                <div className="mt-[25px] m-x-[25px] w-4/5">
                  <input
                    type="text"
                    className="bg-gray-50  text-gray-900 text-sm focus:ring-blue-500 block w-full p-3.5 text-center"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mt-[10px] m-x-[25px] w-4/5">
                  <button
                    type="button"
                    className="text-white bg-text-color-f6 hover:bg-text-color-f6/70 transition duration-300 ease-in-out font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 font-bold w-full text-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div>
                <div className="relative mb-3">
                  <div className="flex justify-between font-medium text-sm font-normal font-oswald items-center">
                    <p className=" text-text-color-f6  cursor-pointer">
                      Categories
                    </p>
                  </div>
                  <Line />
                </div>
                <div className="mt-[56px]">
                  <div className="flex justify-between  ">
                    <p className="font-roboto font-normal">
                      <span className="mr-2">&gt;</span> Life Style
                    </p>
                    <Badge text={"50"} color="bg-primary" />
                  </div>
                  <div className="flex justify-between mt-[17px] ">
                    <p className="font-roboto font-normal">
                      <span className="mr-2">&gt;</span> Life Style
                    </p>
                    <Badge text={"50"} color="bg-primary" />
                  </div>
                  <div className="flex justify-between mt-[17px] ">
                    <p className="font-roboto font-normal">
                      <span className="mr-2">&gt;</span> Life Style
                    </p>
                    <Badge text={"50"} color="bg-primary" />
                  </div>
                  <div className="flex justify-between mt-[17px] ">
                    <p className="font-roboto font-normal">
                      <span className="mr-2">&gt;</span> Life Style
                    </p>
                    <Badge text={"50"} color="bg-primary" />
                  </div>
                  <div className="flex justify-between mt-[17px] ">
                    <p className="font-roboto font-normal">
                      <span className="mr-2">&gt;</span> Life Style
                    </p>
                    <Badge text={"50"} color="bg-primary" />
                  </div>
                  <div className="flex justify-between mt-[17px] ">
                    <p className="font-roboto font-normal">
                      <span className="mr-2">&gt;</span> Life Style
                    </p>
                    <Badge text={"50"} color="bg-primary" />
                  </div>
                  <div className="flex justify-between mt-[17px] ">
                    <p className="font-roboto font-normal">
                      <span className="mr-2">&gt;</span> Life Style
                    </p>
                    <Badge text={"50"} color="bg-primary" />
                  </div>
                  <div className="flex justify-between mt-[17px] ">
                    <p className="font-roboto font-normal">
                      <span className="mr-2">&gt;</span> Life Style
                    </p>
                    <Badge text={"50"} color="bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <p className="font-oswald font-thin">tesstttttttttttttttttt</p>
          <hr />
          <p className="font-oswald font-bold">
            aksdhakshdkashdkhakdhakjshdashdasd
          </p>
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
        <Badge text={"All"} color={"bg-primary"} />
        <Badge text={"Football"} color={"bg-light-purple"} />
        <Badge text={"Cricket"} color={"bg-light-green"} />
        <Badge text={"Baseketball"} color={"bg-light-blue"} />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCardWD />
        <ImageCard2 />
        <Button onClick={() => console.log("123123")} /> */}
      </main>
      <div className=" flex content-center items-center mt-12">
        {[
          "https://s3-alpha-sig.figma.com/img/b60e/4bca/6a43a8fb40ea6dbb7498522001078a39?Expires=1667174400&Signature=cQjJ3QxOWCUJky-jzZu2ARZDNfAQXKdDTzfl345RFdmdpfkPopC8h41YWBZ92XtIEEHAioqMwjq3UqRYjycccouFX6~MgRdqa1prwSNKwAV~8jnsdlF8~EmZoPmPQ-ozwoSePKsGzUB4EWXpaWxJJvr6nQaqnrYHuicmyL0dz9berTFqhkRM3XmXih8gVkVuqTbnhTdYe~ybLMgfC2feyF4Ar-w5~te-jJVAGPoYdewgRvwoOdmLDnp9bGH~VE1M7JcMaS5zfr1~S60DvrWD7LqeFWFfnZzYgq2JJqXNB6gyT8tndpPdBSONJcOZKUlXp6umgrfFd64XdUBKuWwWTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          "https://s3-alpha-sig.figma.com/img/dd1f/6171/ef240750f25e1792d82394377d017ee2?Expires=1667174400&Signature=fxQ9gDn54MgINiZzx6b-oBc2NgxxAIK4fqZMKkXymcFmFndaEWCnZQjYXljvnNB3ovmKA8CpEKKVDkYSpMr-UJ1AVnWwnBa43wmNqN0iDfx~lPhNjg4lzmSOrN8l-YDGH0MfLe-wiPLv6LK2D9~wrNalsiU0Uagxu67ZroZPokwxLcrHATlP0UNKjbvXJZBEjjqqHRk19DG6kDhHmIASpdXXJyryCSLF-9DD4Yy0yppW7yBOcTh8dqwHylfKAVjFf260fjCVZR48UCsaNA48aL55mUoCGTp-ghQn~sPHNoKY6VWxE4R0SK4cMVPOA9X81JJab~1ka4nX~eW0ujh6Cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          "https://s3-alpha-sig.figma.com/img/cc3c/c0c7/2c9f77f01226fbdc280c4e7bcea9655d?Expires=1667174400&Signature=AmHubz-9jhCZLhQNxtxrKkTKx4srqsuHuVISm1w4duOJJMV~yhum7Lo6pZhkwKmX-GkP~~7o~x7vIsc3wQWDN8NoXpzZk0lQcGWF6omGo1QltNS71SSHWBqLcIQBEJ2OKgF8trqkHO1MhzbnuqlqHfDyakiWv5ivGjjH5Q5eqTlDJ9HtMYVvxaWbzTe8-J1cPlr-WTeUwfrbxH8C4G2gDSkYqSNNMBu~p9JWsV3uYF5vT2AtHrcuN-mRg2mg7lkE01Sj5oG8zTL~kqNJzqBpAOTGeItz9Lc~BAPv5CtNUFydAfombzZWPbCuDBT3dUlvRVuwZSLMXYXW9bU2uquIRg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          "https://s3-alpha-sig.figma.com/img/e5d8/7f00/dc38e9b5d49a64d971faa1fb70d28534?Expires=1667174400&Signature=aQhQUOc1PSp7MQYrrui-uPVTu~ZTy29k87tp3cC~30BKaV00ahBFCzrYTwJtgEcZdoqQd~juc5cGFIi2TkGda6YpjyHA29pmfDhLFoiOsIJBg~pyKEtjd5QzMxUja6mteqWsTRVbylDxrABFgRCEle9wKAiq-L5P6JJO4Mdl114wc04MSjH9j~A8pvriHvSSG9PKKgvZm5mcAYeexBRleH4ijv0OXDC81jRvO7LYC8IY495SlDhAqJE0UKJfAZTtcoTMWsYmyKsGOWlIzoweg2TIp0eCIqj~-tj7Co1dQGSK1Qh7yTSY7Cn8P8HhBWvBndCCcSkd2cxRe3Sp1muhzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          "https://s3-alpha-sig.figma.com/img/ca5e/cfaa/0830c5d07df5419ff2138ced8ca46208?Expires=1667174400&Signature=MaQcXp3OmZi5NagRE3GO6NWvjEM8bBK0KGLHJDlcu-OAMR83rycdf8~vEKjGzfncwUcrSsadtRT3SeYqEzu7gjZU49YDGmeG66HNqJP5ma6lGWyQgTAFgHnwO~6E2FL52UUgfuWAY1Rk9F6DsnjZfdmDeVicIXD~lhnLXPo3JPPEhsXWm~92It4PIgl4Go1PVgKdGQqaRVD0i5RhaKK1Ac5OQQl4kp2vVXx~zNtb4HbdjDAYknNO5J3z2eHDVBuiJSRWvgf4OqQCz21mlG13iWZWLBnO3pjloTHGReGIkrAdio8iJlDMH8uE0GGyFFpYGGBVIlhHvv8pD439nOqlhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        ].map((value, index) => (
          <div key={index}>
            <img
              src={value}
              alt="img-footer "
              className="w-72 h-72 object-cover"
            />
          </div>
        ))}
      </div>

      <footer className="bg-text-color-39 h-[335px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col mt-[44px] gap-9 justify-center">
              <img
                className="h-16"
                src="https://s3-alpha-sig.figma.com/img/c517/8d4e/82148aa4cbddd3cac0de299efa4bec2c?Expires=1667174400&Signature=X2Jd1Gw7V9~~jJb-K30CN-PXMAdPImkHq77p3j3~yuwjYcjQsOvXRaqtApXFCsfS6XRe4BZlLr5ZzTBRBbqVbmy~52CXOla5q5FRnj6cpSeNT2Xt7oWaLeHnldICiAFwy06Ozom0inzSV-3nZeaFiWsjnLZvQuO39inmGHXUa35lyRvdbRrfHsl~5JfYOI2u8qLphdeo0o0sQYkZ5WQ64Iu9xciXW1YqNCiuhU0SJB48DDycMbskB27g1JebPRq6OsZEodEZOLfqEqAKBpTjDr~XuM~Z~9nliG0suyLfHv3UfEVVW26mg0dDmoHsz1~-6TK0NhmcPjZdmJBApPO-zA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="logo"
              />
              <p className="font-roboto text-white text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
                pellentesque dictum posuere id diam rutrum.
              </p>
              <div className="flex justify-around scale-80">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <YoutubeIcon />
              </div>
            </div>
            <div className="mt-[44px]">
              <Title text="Photo Gallery" />
              <div className="grid grid-cols-3 gap-1.5 mt-[30px] content-center items-center">
                {[
                  "https://s3-alpha-sig.figma.com/img/b60e/4bca/6a43a8fb40ea6dbb7498522001078a39?Expires=1667174400&Signature=cQjJ3QxOWCUJky-jzZu2ARZDNfAQXKdDTzfl345RFdmdpfkPopC8h41YWBZ92XtIEEHAioqMwjq3UqRYjycccouFX6~MgRdqa1prwSNKwAV~8jnsdlF8~EmZoPmPQ-ozwoSePKsGzUB4EWXpaWxJJvr6nQaqnrYHuicmyL0dz9berTFqhkRM3XmXih8gVkVuqTbnhTdYe~ybLMgfC2feyF4Ar-w5~te-jJVAGPoYdewgRvwoOdmLDnp9bGH~VE1M7JcMaS5zfr1~S60DvrWD7LqeFWFfnZzYgq2JJqXNB6gyT8tndpPdBSONJcOZKUlXp6umgrfFd64XdUBKuWwWTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  "https://s3-alpha-sig.figma.com/img/dd1f/6171/ef240750f25e1792d82394377d017ee2?Expires=1667174400&Signature=fxQ9gDn54MgINiZzx6b-oBc2NgxxAIK4fqZMKkXymcFmFndaEWCnZQjYXljvnNB3ovmKA8CpEKKVDkYSpMr-UJ1AVnWwnBa43wmNqN0iDfx~lPhNjg4lzmSOrN8l-YDGH0MfLe-wiPLv6LK2D9~wrNalsiU0Uagxu67ZroZPokwxLcrHATlP0UNKjbvXJZBEjjqqHRk19DG6kDhHmIASpdXXJyryCSLF-9DD4Yy0yppW7yBOcTh8dqwHylfKAVjFf260fjCVZR48UCsaNA48aL55mUoCGTp-ghQn~sPHNoKY6VWxE4R0SK4cMVPOA9X81JJab~1ka4nX~eW0ujh6Cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  "https://s3-alpha-sig.figma.com/img/cc3c/c0c7/2c9f77f01226fbdc280c4e7bcea9655d?Expires=1667174400&Signature=AmHubz-9jhCZLhQNxtxrKkTKx4srqsuHuVISm1w4duOJJMV~yhum7Lo6pZhkwKmX-GkP~~7o~x7vIsc3wQWDN8NoXpzZk0lQcGWF6omGo1QltNS71SSHWBqLcIQBEJ2OKgF8trqkHO1MhzbnuqlqHfDyakiWv5ivGjjH5Q5eqTlDJ9HtMYVvxaWbzTe8-J1cPlr-WTeUwfrbxH8C4G2gDSkYqSNNMBu~p9JWsV3uYF5vT2AtHrcuN-mRg2mg7lkE01Sj5oG8zTL~kqNJzqBpAOTGeItz9Lc~BAPv5CtNUFydAfombzZWPbCuDBT3dUlvRVuwZSLMXYXW9bU2uquIRg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  "https://s3-alpha-sig.figma.com/img/e5d8/7f00/dc38e9b5d49a64d971faa1fb70d28534?Expires=1667174400&Signature=aQhQUOc1PSp7MQYrrui-uPVTu~ZTy29k87tp3cC~30BKaV00ahBFCzrYTwJtgEcZdoqQd~juc5cGFIi2TkGda6YpjyHA29pmfDhLFoiOsIJBg~pyKEtjd5QzMxUja6mteqWsTRVbylDxrABFgRCEle9wKAiq-L5P6JJO4Mdl114wc04MSjH9j~A8pvriHvSSG9PKKgvZm5mcAYeexBRleH4ijv0OXDC81jRvO7LYC8IY495SlDhAqJE0UKJfAZTtcoTMWsYmyKsGOWlIzoweg2TIp0eCIqj~-tj7Co1dQGSK1Qh7yTSY7Cn8P8HhBWvBndCCcSkd2cxRe3Sp1muhzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  "https://s3-alpha-sig.figma.com/img/ca5e/cfaa/0830c5d07df5419ff2138ced8ca46208?Expires=1667174400&Signature=MaQcXp3OmZi5NagRE3GO6NWvjEM8bBK0KGLHJDlcu-OAMR83rycdf8~vEKjGzfncwUcrSsadtRT3SeYqEzu7gjZU49YDGmeG66HNqJP5ma6lGWyQgTAFgHnwO~6E2FL52UUgfuWAY1Rk9F6DsnjZfdmDeVicIXD~lhnLXPo3JPPEhsXWm~92It4PIgl4Go1PVgKdGQqaRVD0i5RhaKK1Ac5OQQl4kp2vVXx~zNtb4HbdjDAYknNO5J3z2eHDVBuiJSRWvgf4OqQCz21mlG13iWZWLBnO3pjloTHGReGIkrAdio8iJlDMH8uE0GGyFFpYGGBVIlhHvv8pD439nOqlhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  "https://s3-alpha-sig.figma.com/img/25c6/e716/a1981f4d865b410531b012373be4e3f9?Expires=1667174400&Signature=G1z8MI5-Otg~JNcq3xk-d3VjMxiuQjgGQEOjsacHjel2oUcxd6hc42t3D~xGVSC7rbG9yRpetQFwd3rDQ5ozJReA8i-Q~gsjw2O-HMTzdjM0IUufIMzn64~NMYp55W1rEtMD9iwtqibhFrpoSwzGdIKcEh~sMO6EhV1X3A2P4NBDaz4C82OsrGL-mqLqgYgmQ1Pb6J41-axldZGxiK9b5W4NJLqBz1htLdFXSb1-pomufoIhk1XWvc0GH0F5WJ5vPC-Yg4mPAT4edi1K4uK2h1WU9Ui63jSQrMQuz9GFbtbgOZHhUHfxsh34eJww-unobKaVL1Be96y1S4Mfnf4ltQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                ].map((value, index) => (
                  <div key={index}>
                    <img
                      src={value}
                      alt="img-footer "
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[44px]">
              <Title text="Tags" />
              <div className="mt-[30px] flex flex-wrap gap-y-2">
                <Badge text={"Football"} color="bg-[#F65050]" />
                <Badge text={"Cricker"} color="bg-light-green" />
                <Badge text={"Covid-19"} color="bg-light-purple" />
                <Badge text={"Life Style"} color="bg-light-blue" />
                <Badge text={"Tranding News"} color="bg-light-brown" />
                <Badge text={"Technology"} color="bg-light-light-blue" />
                <Badge text={"Travel"} color="bg-blue-200" />
              </div>
            </div>
            <div className="mt-[44px]">
              <Title text="Stay In Touch" />
              <div className="mt-[30px]  text-white">
                To be updated with all the latest news, offers and special
                annoucements.
              </div>
              <div className="mt-[16px]">
                <input
                  type="text"
                  className="bg-gray-50  text-gray-900 text-sm focus:ring-blue-500 block w-full p-3.5 text-center"
                  placeholder="Your email address"
                />
              </div>
              <div className="mt-[16px]">
                <button
                  type="button"
                  className="text-white bg-text-color-f6 hover:bg-text-color-f6/70 transition duration-300 ease-in-out font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 font-bold w-full text-lg"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
