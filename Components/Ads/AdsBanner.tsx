import { Button } from "../Buttons/Button";

export const AdsBanner = () => (
  <div className="relative h-24 w-full transition-all duration-300 cursor-pointer  overflow-hidden">
    <img
      className=" max-w-full object-contain "
      src="https://s3-alpha-sig.figma.com/img/14bd/f024/c53c927ee94e5e15ae14e2c57b766994?Expires=1666569600&Signature=dK2YFL8uhyg5jC-axLpsEUuPWGSwy8P1T5iTFzCYh2~BvcToCJOT6czY1vvU7xfhOdstiz0UR9KJqwzRr3Ate7SIBGMuU5tdFvROVCkL5xMhvE~GW7hjKx4OL7OPdM7m7MHJAg2kaKC0gEtFiPw91wWnKxzbU71ypjRfWJpPaMIKKLEfx9Pnu9Ofh-e~WX44QqZvsVj16-z0txLR0li5L9nviWWvwV3o9vlPDp5Id2GV42CrReAIvh-F385W9brSmJ8vJdmNX1G5NyFKHqt7WcUqTMYOgBPNYeJfieoY3aRFqqOMm0J0Au1FP7p8FWWptNSnZHUuBxOXU3VwMM9RSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      alt="image description"
    />

    <div className="absolute bottom-5 px-4 text-white flex justify-between items-center w-full">
      <div>
        <p className="text-sm font-bold font-roboto w-56">
          Best Selling BLOG and MAGAZINE Theme of All Time
        </p>
        <p className="text-sm font-oswald font-normal text-text-color-f6 ">
          Experience the change!
        </p>
      </div>
      <div>
        <Button>PURCHASE NOW</Button>
      </div>
    </div>
  </div>
);
