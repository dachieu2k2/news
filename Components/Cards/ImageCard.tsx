import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Badge } from "../Badge/Badge";

export interface INewsPopular {
  id: string;
  img?: string;
  title: string;
  createdAt: string;
  tag: string;
  des: string;
}
interface IProps {
  data: INewsPopular;
  isMain?: boolean;
}

export const ImageCard: React.FC<IProps> = ({ data, isMain }) => {
  const { title, img, tag, createdAt } = data;
  return (
    <div
      className={`relative max-w-full ${
        isMain ? `h-[586px]` : `h-[285px]`
      } transition-all duration-300 cursor-pointer filter grayscale-[40%] hover:grayscale-0 overflow-hidden`}
    >
      <Link href="/">
        <img
          className={`hover:scale-110 w-full h-full transition duration-300 ease-in-out object-contain object-contain`}
          src={img}
          alt="image description"
        />
      </Link>
      <div className="absolute top-5 left-5">
        <Badge text={tag} color={"bg-light-blue"} font={false} />
      </div>
      <div className="absolute bottom-6 px-4 text-white">
        <p className="text-xs font-roboto">{createdAt}</p>
        <p
          className={`text-lg font-oswald font-medium ${
            isMain ? `text-4xl` : `text-sm`
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};
