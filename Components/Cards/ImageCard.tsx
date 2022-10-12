import { Badge } from "../Badge/Badge";

export const ImageCard = () => {
  return (
    <figure className="relative max-w-md transition-all duration-300 cursor-pointer filter grayscale-[40%] hover:grayscale-0 overflow-hidden">
      <a href="#">
        <img
          className="hover:scale-110  transition duration-300 ease-in-out"
          src="https://s3-alpha-sig.figma.com/img/b491/72ba/59d2fa0bc9da88b994db054232402859?Expires=1666569600&Signature=VdFhJqDrRAGiLVy1gD5T-M9x9Ao88IkKBYmiEK7q0anDgIuDaIEpl1voF0-M2J0mHyPOrq~mD7AwHKCUvlKViDgEjpk5AXsLHUB53dTeefdOQVLkqZbIPaOKSSOzCa-No6kjykV64sLYUpdv8eUrKF3rxK9qbATvoQ9OT2AfzpMSEOrWysAizIEYKNYo-xH8mXWc1IhpK3J7vooAedzQyipavsZPbYRbtlDWhksSb-Hte6aLCMfsmiWwilfQFuwUtoQOugUJvEQuhJNuGUE22BvWRWWtmorExftDX3mmJD9JbkqFAHcd6tmsnf1z2sgq93V0JLTxC2pxjgUGJDnnjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="image description"
        />
      </a>
      <div className="absolute top-5 left-5">
        <Badge text={"Hô hấp"} color={"bg-light-blue"} font={false} />
      </div>
      <div className="absolute bottom-6 px-4 text-white">
        <p className="text-xs font-roboto">Hà Nội - 17 tháng 9 năm 2022</p>
        <p className="text-lg font-oswald font-medium text-4xl">
          Các bệnh hô hấp thường gặp khi trời trở lạnh
        </p>
      </div>
    </figure>
  );
};
