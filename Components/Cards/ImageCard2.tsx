import Link from "next/link";
import { Badge } from "../Badge/Badge";

export const ImageCard2 = () => {
  return (
    <figure className="relative h-[30rem] max-w-full transition-all duration-300 cursor-pointer filter grayscale-[40%] hover:grayscale-0 overflow-hidden">
      <Link href="#">
        <img
          className="hover:scale-110  transition duration-300 ease-in-out w-full object-fill"
          src="https://s3-alpha-sig.figma.com/img/c6d0/3202/c85a9806140d1ee09e63a1c2e8db81c0?Expires=1667779200&Signature=SFLIlklTSZ4MB8e2-6Yn69ca-p7DJLT8QXkXTc~CK1M11~cjsiK~bS3h7XsD~D2unXwwDv3txPWqnHW0hliEtoE4dmIDVY8Z1lbsFe~iKZENDf9FYgRRNg7xfcWSupq1fdeL-ZXSZ5jqFVrpiqSon~7AbKQ~9pwwyybwJSg-dGEHK8KqQy9Dlbs-LrmJGiUy3y32Uca6hLhk5fej~E7Q0dyjROBTsK9-3rEFM4Ns9a9Ajljpcu5~5xW-NoLlDdqxUcGHPtViL1sLpDIPk8s9SFQhADetAgNbe0WvUfAKVmDDnkvyzdTcfuxQVrTQ~ZW7l-ufdGhGnNHBUNpZqRpjMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="image description"
        />
      </Link>
      <div className="absolute top-2 left-5">
        <Badge text={"Hô hấp"} color={"bg-light-blue"} font={false} />
      </div>
      <div className="absolute top-60 px-4 text-white">
        <p className="font-oswald font-bold text-2xl">
          Amanda Seyfried became ‘really obsessed’ with ghost stories
        </p>
        <div>
          <hr className="my-8 w-1/6 h-px bg-[#F65050] border-0 " />
        </div>
        <p className="text-lg font-roboto font-normal w-2/3">
          Hollywood actress Amanda Seyfried has recalled the time when she
          became obsessed with ghost stories
        </p>
      </div>
    </figure>
  );
};
