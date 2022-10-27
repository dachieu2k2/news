import Link from "next/link";
import { Badge } from "../Badge/Badge";

export const VideoCard = () => (
  <div
    className={`relative flex-1 max-w-full max-h-[400px] transition-all duration-300 cursor-pointer filter grayscale-[40%] hover:grayscale-0 overflow-hidden`}
  >
    <Link href="/">
      <img
        className={`hover:scale-110 w-full h-full transition duration-300 ease-in-out object-cover `}
        src={`https://s3-alpha-sig.figma.com/img/eed1/aa99/9765e3c8bd02f8fde37341d76c2966a3?Expires=1667779200&Signature=Mzeh7GXrGSIdgCT4ehU1dDddDH-hB704y2whluS9Y-qLzlZYQVLdA30hXwmu9PaS~vVJv8ATEyEspx5Gbf07rNWqMKQcoqkCFUG~iTedWmqh6r3lN5CKBbhDjXrabP~qLXpn1HKeTOaDqvMGvlieFdEyhRYajBX34XsV4kwmSHTYjkY1Ls46VGRJB59aK6UC~V4N0KPIzRvLCm~HDutFkBmgPwjuCiKwECtKLtGFMMTQnCe0NLPuqr9SAGxhhu-vQtiTuVD4tYDtl41ux7Kc0Crob-Py8sztdQzNJ9ZtiJ8Etur3BpzYwxuJ2Es0DHy4vlKqi3-Jm4pUljgG4Dx8Pg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`}
        alt="image description"
      />
    </Link>
    <div className="absolute top-5 left-5">
      <Badge text={`Esport`} color={"bg-light-blue"} font={false} />
    </div>
    <div className="absolute bottom-12 left-7 px-4 text-white w-1/2">
      <p className="text-xs font-roboto">Craig Bator - 27 Dec 2020</p>
      <p className={` font-oswald font-medium ${`text-4xl`} leading-10`}>
        Play This Game for Free on Epic Store This Weekend
      </p>
    </div>
  </div>
);
