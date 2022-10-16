import { Badge } from "../Badge/Badge";

export const ImageCard2 = () => {
  return (
    <figure className="relative h-[30rem] max-w-full transition-all duration-300 cursor-pointer filter grayscale-[40%] hover:grayscale-0 overflow-hidden">
      <a href="#">
        <img
          className="hover:scale-110  transition duration-300 ease-in-out w-full object-fill"
          src="https://s3-alpha-sig.figma.com/img/c6d0/3202/c85a9806140d1ee09e63a1c2e8db81c0?Expires=1666569600&Signature=eMpQJo5yM5u3Oq7b5G9y6XUpdWxiz1OFp0RMmg6-ipQTPc3onfDG3BHwmCKUABOiys0k5FeMrquNQDFGJaLq8eSAzMHk22Z90z-Z4u0LJ94jhy-APu9g3HGH3nYj39zvov1u9qp9-PDduT8rpaZJP4PsVadgds1XhR-XzBR0FXwtt3W8wiceTrabsDhTSDnUS8asqJ56-0GYu7isz8F11D6YaZuuDtluvd3H7LBJmWtTJdtsykZEYxutiUP95VZ9LuPKeyn8S2Z3ixMmsmND0UPSHTXNoiqr9k92-pTEOhx9kdWQwcZae72hngApbtjvdjiE9ftDAPG1PMzjCF7qeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="image description"
        />
      </a>
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
