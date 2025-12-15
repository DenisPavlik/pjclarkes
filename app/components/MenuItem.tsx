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
    // <div className="flex gap-4 w-full">
    //   <div className="w-1/2 text-sm flex flex-col justify-between gap-4">
    //     <div className="flex flex-col gap-2">
    //       <h3 className="font-semibold uppercase text-xs">{name}</h3>
    //     <p className="text-xs">{description}</p>
    //     </div>
    //     <span className="font-bold">Price: ${price}</span>
    //   </div>
    //   <div className="w-1/2">
    //     <Image src={image} alt="menu_item" width={200} height={50} />
    //   </div>
    // </div>
    <div className="relative rounded-xl overflow-hidden border h-[280px] text-white">
  <Image
    src={image}
    alt="menu_item"
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/25" />

  <div className="relative z-10 h-full flex flex-col justify-end">
    <div className="bg-black/55 backdrop-blur-xs rounded-b-none-lg p-3 flex flex-col gap-2">
      <h3 className="font-semibold uppercase text-xs tracking-wide">
        {name}
      </h3>

      <p className="text-xs text-gray-200 leading-snug line-clamp-3">
        {description}
      </p>

      <span className="font-bold text-red-400 text-sm">
        ${price}
      </span>
    </div>
  </div>
</div>
  );
}
