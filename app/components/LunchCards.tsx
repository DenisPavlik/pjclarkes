import {
  DrumstickIcon,
  HamburgerIcon,
  HandPlatterIcon,
  SaladIcon,
  SandwichIcon,
  ShrimpIcon,
  SoupIcon,
  UtensilsCrossedIcon,
} from "lucide-react";
import Card from "./Card";
import { LunchSection } from "./Main";

type LunchCardsProps = {
  onPick: (section: LunchSection) => void;
};

export default function LunchCards({ onPick }: LunchCardsProps) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      <Card title="Soup" icon={SoupIcon} onClick={() => onPick("soup")} />
      <Card title="For the table" icon={DrumstickIcon} onClick={() => onPick("for-the-table")} />
      <Card title="Raw Bar" icon={ShrimpIcon} onClick={() => onPick("raw-bar")} />
      <Card title="Classics" icon={HandPlatterIcon} onClick={() => onPick("classics")} />
      <Card title="Salads" icon={SaladIcon} onClick={() => onPick("salads")} />
      <Card title="Sandwiches" icon={SandwichIcon} onClick={() => onPick("sandwiches")} />
      <Card title="Clarke Burgers" icon={HamburgerIcon} onClick={() => onPick("burgers")} />
      <Card title="Sides" icon={UtensilsCrossedIcon} onClick={() => onPick("sides")} />
    </div>
  );
}