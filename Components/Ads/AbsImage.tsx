import Link from "next/link";

export const AbsImage = () => (
  <div
    className={`relative max-w-full h-[270px] transition-all duration-300 cursor-pointer filter grayscale-[40%] hover:grayscale-0 overflow-hidden`}
  >
    <Link href="/">
      <img
        className={`hover:scale-110 w-full h-full transition duration-300 ease-in-out object-cover `}
        src={`https://s3-alpha-sig.figma.com/img/fc64/6696/d8263b7deeea24ea39e4e3e2e8bac2a4?Expires=1667779200&Signature=ac5g1xdoNM3glzxgiRBP0C3v4wlzxslE1~hlRbh4M438xS-8i2EwEX8ibA6hNxnHqaYW4gle74aRvGIvD6ONjMEFmfBpVCJC5l7ymjZqY5g0qZCJe3BdWzHVBBjdTY2xAGZjEdy2BPvHkKYojMxlVllZZgk93zJAT4PdENbXlQwQ2O9fNgdV5cRqmlWV~O6ynXw4JZNxZO9TCYpQuhqFKyq2xhNR70P-KrLTWTmz3pQWfSQInUHRASLnxSfEhXlPQDJayXkJ0ZdiDXLgp04-Cll~p~iWEWsz1wTLXRf3B61vxCBcaV8nKm3ThBAMJgCfZUF0xUSqieF1zcWItqIt7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`}
        alt="image description"
      />
    </Link>

    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ">
      <p className={` font-oswald ${`text-4xl`} leading-10`}>Ad</p>
    </div>
  </div>
);
