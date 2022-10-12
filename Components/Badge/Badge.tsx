import React from "react";

interface IProps {
  text: String;
  color: String;
  font?: boolean;
}

export const Badge: React.FC<IProps> = ({ text, color, font = true }) => {
  return (
    <span
      className={`${color} text-white text-xs ${
        font ? `font-oswald` : `font-roboto`
      } font-normal mr-2 px-2.5 py-1 cursor-pointer `}
    >
      {text}
    </span>
  );
};
