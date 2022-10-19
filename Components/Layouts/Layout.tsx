import { ImageCard, INewsPopular } from "../Cards/ImageCard";

const fakeDataNewsPopular: INewsPopular[] = [
  {
    id: "",
    img: "https://s3-alpha-sig.figma.com/img/b491/72ba/59d2fa0bc9da88b994db054232402859?Expires=1666569600&Signature=VdFhJqDrRAGiLVy1gD5T-M9x9Ao88IkKBYmiEK7q0anDgIuDaIEpl1voF0-M2J0mHyPOrq~mD7AwHKCUvlKViDgEjpk5AXsLHUB53dTeefdOQVLkqZbIPaOKSSOzCa-No6kjykV64sLYUpdv8eUrKF3rxK9qbATvoQ9OT2AfzpMSEOrWysAizIEYKNYo-xH8mXWc1IhpK3J7vooAedzQyipavsZPbYRbtlDWhksSb-Hte6aLCMfsmiWwilfQFuwUtoQOugUJvEQuhJNuGUE22BvWRWWtmorExftDX3mmJD9JbkqFAHcd6tmsnf1z2sgq93V0JLTxC2pxjgUGJDnnjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "Các bệnh hô hấp thường gặp khi trời trở lạnh",
    des: "",
    createdAt: "Hà Nội - 17 tháng 9 năm 2022",
    tag: "Hô hấp",
  },
  {
    id: "",
    img: "https://s3-alpha-sig.figma.com/img/b85c/14f7/b7eaa078bf98f2befa0a92c88654c794?Expires=1667174400&Signature=Z7qlENIyUkU8RiZwBb6xj~JE0A6LX7mLhLVCf4Lc7gXXFz5jFgMWQbveo6zK9mfv4Gh9UaGkAdm9x8IRGyppFERRJRifbF~jm-W~BjvOae5-f~kkPAS~IKlgMrnzq6CTzmOwlWFEfOzRp-OiOuS6bmEkVlof9b3m8mgPCYYiVBfy7KXV5McIxv6oLDCpqZqOYq6hqGalbHtOFcSJJOds0EbkQ3V6q0uaOIIt8mUDsv59DV-RQTjwGwL9LGzAVGbVdqODCMEiG2Hp7CKiL9PdBvpWVRLIqQhb9xPeBtQXCcACBKe1v5ugHsMFQao5R0kImesSBbcNRKbsHjiV0NcZUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "Các Triệu chứng của trẻ tự kỷ cấp độ nhẹ",
    des: "",
    createdAt: "Hà Nội - 17 tháng 9 năm 2022",
    tag: "Business",
  },
  {
    id: "",
    img: "https://s3-alpha-sig.figma.com/img/50dd/94d6/903f458f17f4e9e940fe3ef6ec069ec4?Expires=1667174400&Signature=Uh2QV07H0mMyPtQNUET~jY~ZkB3PdIEd-wIFue-zFP680qsD-zcSiWHNsuh4sTeTV-awVl1OfqvJ2AN4KjzERUVzY5HoDaSxjF0xkmRFVAQIT3N5QZtZrZClI6zRhb~WyzAIqy8347SQpXoEeypewnfcrnyez3Rzk9sgwrv7b82XH9QCKeURe8PSpc2e3OmMszkSjvbhR5nQ67V-KlfPHLQaHvw4EghgdrJmtTP2hookcW~~5zgD~TijQuxG61VYuUN3Ch6G~SnHXzl2q0xPS~8KjLrEZRA1bWsfbHuuc0I4HJiQyOzTMePisdhWpwYiY5jBV4MvAbgYW7P0KriW7Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "11 thực phẩm phòng cảm cúm khi giao mùa",
    des: "",
    createdAt: "Hà Nội - 17 tháng 9 năm 2022",
    tag: "Hô hấp",
  },
  {
    id: "",
    img: "https://s3-alpha-sig.figma.com/img/f31c/a835/c5169c29cf98c0f59a02eb78641c0e05?Expires=1667174400&Signature=Wyp7QMoz1SVT8aaGplCVokyQAj8Ei5ae3D72A4RlQ0EadhfNrgBC6GqB-fZAiJZB60uh6WsvRzGV5W4WFJysmY3P~H~VjJUnmssnnctZDtUpim0lIUmd~vld8RBEl~vBfLeVN1uTJbyGAgN~R38DyIITZrkWZhLmmW8apTQszq6DB1kFF8c1FfXbQ34ByaVMYmz8YZn3x79mfFYh3wyA0WyZPgeH4daAJqG4nqQ4ZjjURm~Fxx7eoyAVDhDpdew3UzG-xegnSPAFFmuW5MyXjBmvdGWkB9EO5GPB2JslylJ1IG9VTayp9yG7UoC9Bg421n~7fQFlRPBzIu-J--VcfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "Những tác dụng phụ khi uống quá nhiều cà phê",
    des: "",
    createdAt: "Hà Nội - 17 tháng 9 năm 2022",
    tag: "Hô hấp",
  },
];

export const Layout = () => (
  <div className="grid grid-cols-2 gap-4 h-[570px]">
    <ImageCard data={fakeDataNewsPopular[0]} isMain />
    <div className="grid grid-cols-2 gap-4 max-h-fit">
      <ImageCard data={fakeDataNewsPopular[1]} />
      <ImageCard data={fakeDataNewsPopular[2]} />
      <div className="col-span-2">
        <ImageCard data={fakeDataNewsPopular[3]} />
      </div>
    </div>
  </div>
);
