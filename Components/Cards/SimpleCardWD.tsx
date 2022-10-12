import { Badge } from "../Badge/Badge";

export const SimpleCardWD = () => {
  return (
    <div className="flex flex-col bg-white md:flex-col md:max-w-lg">
      <div className="overflow-hidden relative">
        <img
          className=" object-cover w-full h-96  md:h-auto md:max-h-96 md:rounded-none max-w-xs hover:scale-110 transition duration-300 ease-in-out"
          src="https://s3-alpha-sig.figma.com/img/2559/ffec/bfa42438119ae60678f044a8978d11d7?Expires=1666569600&Signature=U3QFfIt6A~H~GnoxeC4WxqDtWffmbm8VKBEx~lgRZjohZrwy7o-KbTesOJU3mZltAz~lwenVRsVSz00XnCXcwmegWGuJLqGRCm522R6WAH8a~4d0SDmzsCjwgERazSy1HyPef6bjWZeoR9nMuIU6yo6vLhCFNTuJe6JKoHrfemde19DMwixxEiatVUp8WhSaXOOD9zF0CTRPbvOvnxHjHfYPO-7STk4JnuZtDBFkK26VCQqrM4jlnoxwMHtLBWR7BMWGSvaqXQW1J1CurNJw2cdTibSZ-P~TyRBC9f1KVKflB6uuU9iqj7CgLdXq9dkxGsadfamvDdk8PE32pHVuyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <div className="absolute top-5 left-5">
          <Badge text={"Business"} color={"bg-light-purple"} font={false} />
        </div>
      </div>

      <div className="flex flex-col justify-between leading-3">
        <p className="lg:mt-6 my-2 font-normal font-roboto text-xs  text-text-color-39">
          Craig Bator -{" "}
          <span className="text-text-color-39/60">27 Dec 2020</span>
        </p>
        <h5 className="mb-1 font-normal text-lg tracking-tight leading-8 font-oswald text-text-color-2d">
          Now Is the Time to Think About Your Small Business Success
        </h5>
        <p className="text-text-color-39/60 font-thin leading-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          lobortis augue condimentum maecenas. Metus at in fames vitae posuere
          ut vel vulputate....{" "}
        </p>
      </div>
    </div>
  );
};
