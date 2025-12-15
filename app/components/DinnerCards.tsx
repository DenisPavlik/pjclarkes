import {
  BeefIcon,
  DrumstickIcon,
  FishIcon,
  HamburgerIcon,
  HandPlatterIcon,
  SaladIcon,
  ShrimpIcon,
  SoupIcon,
  UtensilsCrossedIcon,
} from "lucide-react";
import Card from "./Card";
import { DinnerSection } from "./Main";

type DinnerCardProps = {
  onPick: (section: DinnerSection) => void;
}

export default function DinnerCards({onPick} : DinnerCardProps) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      <Card title="Soup" icon={SoupIcon} onClick={() => onPick('soup')} />
      <Card title="For the table" icon={DrumstickIcon} onClick={() => onPick('for-the-table')} />
      <Card title="Raw Bar" icon={ShrimpIcon} onClick={() => onPick('raw-bar')} />
      <Card title="Classics" icon={HandPlatterIcon} onClick={() => onPick('classics')} />
      <Card title="Steak" icon={BeefIcon} onClick={() => onPick('steak')} />
      <Card title="Seafood" icon={FishIcon} onClick={() => onPick('seafood')} />
      <Card title="Salads" icon={SaladIcon} onClick={() => onPick('salads')} />
      <Card title="Clarke Burgers" icon={HamburgerIcon} onClick={() => onPick('burgers')} />
      <Card title="Sides" icon={UtensilsCrossedIcon} onClick={() => onPick('sides')} />
    </div>
  );
}
