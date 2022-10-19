import { LineWhite } from "../Line/LineWhite";

interface IProps {
  text: string;
}

export const Title: React.FC<IProps> = ({ text }) => {
  return (
    <div className="relative">
      <p className="font-oswald text-white font-normal text-2xl">{text}</p>
      <LineWhite />
    </div>
  );
};
