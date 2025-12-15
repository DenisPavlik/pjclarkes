import {
  DrumstickIcon,
  EggFriedIcon,
  HamburgerIcon,
  SaladIcon,
  ShrimpIcon,
  SoupIcon,
  UtensilsCrossedIcon,
} from "lucide-react";
import Card from "./Card";
import { BrunchSection } from "./Main";

type BrunchCardsProps = {
  onPick: (selection: BrunchSection) => void;
};

export default function BrunchCards({ onPick }: BrunchCardsProps) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      <Card title="Soup" icon={SoupIcon} onClick={() => onPick("soup")} />
      <Card
        title="For the table"
        icon={DrumstickIcon}
        onClick={() => onPick("for-the-table")}
      />
      <Card
        title="Raw Bar"
        icon={ShrimpIcon}
        onClick={() => onPick("raw-bar")}
      />
      <Card
        title="Brunch"
        icon={EggFriedIcon}
        onClick={() => onPick("brunch")}
      />
      <Card title="Salads" icon={SaladIcon} onClick={() => onPick("salads")} />
      <Card
        title="Clarke Burgers"
        icon={HamburgerIcon}
        onClick={() => onPick("burgers")}
      />
      <Card
        title="Sides"
        icon={UtensilsCrossedIcon}
        onClick={() => onPick("sides")}
      />
    </div>
  );
}
