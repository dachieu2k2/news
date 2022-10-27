import { Badge } from "../Badge/Badge";

export const SimpleCard = () => {
  return (
    <div className="flex flex-col items-center bg-white md:flex-row md:max-w-md">
      <div className="overflow-hidden relative">
        <img
          className="object-cover w-full h-96  md:h-auto md:w-24 md:rounded-none max-w-xs hover:scale-110 transition duration-300 ease-in-out"
          src="https://s3-alpha-sig.figma.com/img/3d0d/5bae/ceab2804df9ca36e22234157b37e2c15?Expires=1667779200&Signature=RAYLIqJl7TxK~EZ5gJm9SlR6JI0qKOaLnxG8RRKwM9da76b7aH8woe7SU0KyZV~jsr~J1WRLyiIkK-vhsHPJgNGnnnP7z2btqYvI9aCqWdFh7XYLzb-SF402PsdxUxD~TvGXDtPYdpWq-3yiS4we9qL7Rq8ZYRCyHNUX7YJA-2sU~jEAidHzp8jsMFnG-ICkEaJz~lmvJVmsVo2aGI87KQd29uxeBFpd9vHyD6KgxBHVH8wu59vmmT8EBf3IDnvPaNqLuVqvLlfPNOA0qcqQM~RTJ1TZoo6ZlGhPRCO-GpK3wSI2ZQK3ETusRKaS5dIGo47G16CcG7roFZKxfHjXIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <div className="absolute top-1 left-1">
          <Badge text={"Business"} color={"bg-light-purple"} font={false} />
        </div>
      </div>

      <div className="flex flex-col justify-between px-5 leading-3">
        <p className="mb-2 font-normal font-roboto text-xs  text-text-color-39">
          Craig Bator -{" "}
          <span className="text-text-color-39/60">27 Dec 2020</span>
        </p>
        <h5 className="mb-1 font-normal text-base tracking-tight leading-6 font-oswald text-text-color-2d">
          Penn’s expanding political climate gears up fo 2020 election
        </h5>
      </div>
    </div>
  );
};
