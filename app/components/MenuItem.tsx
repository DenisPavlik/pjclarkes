import Image, { StaticImageData } from "next/image";

type MenuItemProps = {
  name: string;
  description: string;
  price: number;
  image: StaticImageData | string;
};

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <div className="flex gap-4 w-full">
      <div className="w-1/2 text-sm flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold uppercase text-xs">{name}</h3>
        <p className="text-xs">{description}</p>
        </div>
        <span className="font-bold">Price: ${price}</span>
      </div>
      <div className="w-1/2">
        <Image src={image} alt="menu_item" width={200} height={50} />
      </div>
    </div>
  );
}
