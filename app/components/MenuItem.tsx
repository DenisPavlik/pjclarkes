import Image, { StaticImageData } from "next/image";

type MenuItemProps = {
  name: string;
  description: string;
  price: number | string;
  image: StaticImageData | string;
};

export default function MenuItem({
  name,
  description,
  price,
  image,
}: MenuItemProps) {
  return (
    <div className="relative rounded-xl overflow-hidden border h-[280px] text-white">
      <Image src={image} alt="menu_item" fill className="object-cover" />

      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="bg-black/55 backdrop-blur-xs rounded-b-none-lg p-3 flex flex-col gap-2">
          <h3 className="font-semibold uppercase text-md tracking-wide">
            {name}
          </h3>

          <p className="text-sm text-gray-200 leading-snug line-clamp-3">
            {description}
          </p>

          <span className="font-bold text-red-400 text-md">${price}</span>
        </div>
      </div>
    </div>
  );
}
