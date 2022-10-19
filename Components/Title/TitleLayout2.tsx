import { Badge } from "../Badge/Badge";
import { Line } from "../Line/Line";

interface IProps {
  text: string;
}
const tag = [
  "All",
  "Nội tiết",
  "Hô hấp",
  "Thần kinh",
  "Nhi-Sơ sinh",
  "Cơ - Xương khớp",
  "Tai mũi họng",
  "Thêm",
];

export const TitleLayout2: React.FC<IProps> = ({ text }) => {
  return (
    <div className="relative mb-3">
      <div className="flex justify-between items-center">
        <p className="font-oswald text-white font-normal text-2xl text-primary">
          {text}
        </p>
        <div className="">
          {tag.map((value, index) => (
            <Badge color={"bg-primary"} text={value} key={index} />
          ))}
        </div>
      </div>
      <Line />
    </div>
  );
};
