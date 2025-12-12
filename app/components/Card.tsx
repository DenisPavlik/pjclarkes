import { LucideIcon } from "lucide-react";

type CardProps = {
  title: string;
  icon: LucideIcon;
  onClick?: () => void;
};

export default function Card({ title, icon: Icon, onClick }: CardProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center border border-red-500 rounded-xl p-6"
    >
      <h1 className="font-semibold text-rose-500 text-xl">{title}</h1>
      <Icon color="red" size={24} />
    </button>
  );
}