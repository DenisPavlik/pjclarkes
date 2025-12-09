import { LucideIcon } from "lucide-react";

type CardProps = {
  title: string;
  icon: LucideIcon;
}

export default function Card({title, icon: Icon} : CardProps) {
  return (
    <button className="flex flex-col items-center border border-red-500 rounded-xl p-6">
      <h1 className="font-semibold text-rose-500 text-xl">{title}</h1>
      <Icon color="red" size={24} />
    </button>
  );
}
