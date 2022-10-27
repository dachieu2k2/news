import { Badge } from "../Badge/Badge";

export const SimpleCardWD = () => {
  return (
    <div className="flex flex-col bg-white md:flex-col md:max-w-lg">
      <div className="overflow-hidden relative">
        <img
          className=" object-cover w-full md:rounded-none  hover:scale-110 transition duration-300 ease-in-out"
          src="https://s3-alpha-sig.figma.com/img/2559/ffec/bfa42438119ae60678f044a8978d11d7?Expires=1667779200&Signature=BPPSYbpOV8QUTcgW1u0Syo5mgGLqJ50tXty7vELSauHsEq8GyCkLARDdGUSJWV4dqZkNhaMd4OFm5UraywfIV3NeVLYMXb1d5zb828G450c7ziwzJQNniN9Q7t6lvesU1oANQ8IBVHyc8n8YPvszEHeV3TTJ0Gg~vZM5idQBOUYMTYNf49ImRLbXy3el3AnGIEMLeRvV2Q9uumgSb-4sJ6odyLrfLjyKSpQLeKMTNhn4yW6uD-zy4jAuNQEiKrbAZYctl8sOXdf99SuLM4wIegTp4euCEhfnNLMzNJR4qtxaJiuSN5~AYDOcbc-bQ5vF3ixv1meyiFjIJtLSOjG3pw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
