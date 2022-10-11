import React from "react";

interface IProps {
  text: String;
  color: String;
}

export const Badge: React.FC<IProps> = ({ text, color }) => {
  return (
    <span
      className={`${color} text-white text-xs font-oswald font-normal mr-2 px-2.5 py-1 cursor-pointer `}
    >
      {text}
    </span>
  );
};
