import Image from "next/image";

export const SimpleCard = () => {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white md:flex-row md:max-w-md"
    >
      <div className="overflow-hidden">
        <img
          className="object-cover w-full h-96  md:h-auto md:w-36 md:rounded-none max-w-xs hover:scale-110 transition duration-300 ease-in-out"
          src="https://s3-alpha-sig.figma.com/img/3d0d/5bae/ceab2804df9ca36e22234157b37e2c15?Expires=1666569600&Signature=OUtK8glbDNnfJGLPgpSjM15Lx8wqEBw9ZyderRS4MbhnCz9CB8ia~T2qeNWwAgyUi92xiwsglvDZXIGvVJpwvokfoGm9gNjOqlfV1xwXeyVveUKicBapvNhYOKz-0qy8JysIdUo4TVCA1QCRp3Q5eVdRA27yoRuGHtfQeiXbhBqStSqCT~SLvEUjUveO0e08ckOYeTX44SeG6DIPYS9JuyK2c5Ntyn4xe5Ok8mP-urJQEF7VfVTteFKnxrLG0nd0tb7YJrCSpjoTFFjo02EHkOajWgnizxvAwHIeI4TjCZ4ri9V1iJ6wydgzZfUdOrgYsAjYRNUG~4NDfq4ZMmHACg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
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
    </a>
  );
};
