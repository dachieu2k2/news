import React from "react";

interface IButton {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
}

export const Button: React.FC<IButton> = ({ children, ...rest }) => {
  return (
    <button
      type="button"
      {...rest}
      className="text-white bg-text-color-f6 hover:bg-text-color-f6/70 transition duration-300 ease-in-out font-medium text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-text-color-f6 "
    >
      {children}
    </button>
  );
};
