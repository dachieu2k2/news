import { Button } from "../Buttons/Button";

export const AdsBanner = () => (
  <div className="relative h-24 w-full transition-all duration-300 cursor-pointer  overflow-hidden">
    <img
      className=" max-w-full object-contain "
      src="https://s3-alpha-sig.figma.com/img/14bd/f024/c53c927ee94e5e15ae14e2c57b766994?Expires=1667779200&Signature=fBOpboRCLS9URUiCV~FPPj0w2l7Rmz4Ebs8QYFzylji5B5KD94FKBqLxHvnZj6cYxhc9KsY8Zn89mq47EFqoQRxlerF2V8ciwMJ9~pN2GPhiugwGsBnpJpqutqJ95AfUovod0DBCNvzIqrfGzuQDhhg1UrTPgjDxZIkmklrfSuufhuvI7BKQ64VYmfZee9iBTQ0rqczj6c~Msr4wHVmVG76DXuQOy5ouwK2Rq9lWR0LFakJ3lRCh2WzfOGXzIfD-0dTQms4TcB29IC90RtzBLgWmk0aCLhN7l4u52nMU2941ttuKXuoGrX4eHjvyL0olC6iKw94h7tOUPfj5fgeQfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
