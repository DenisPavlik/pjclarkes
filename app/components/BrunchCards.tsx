import { DrumstickIcon, EggFriedIcon, FishIcon, HamburgerIcon, SaladIcon, ShrimpIcon, SoupIcon, UtensilsCrossedIcon } from "lucide-react";
import Card from "./Card";

export default function BrunchCards() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
        <Card title="Soup" icon={SoupIcon} />
        <Card title="For the table" icon={DrumstickIcon} />
        <Card title="Raw Bar" icon={ShrimpIcon} />
        <Card title="Brunch" icon={EggFriedIcon} />
        <Card title="Salads" icon={SaladIcon} />
        <Card title="Clarke Burgers" icon={HamburgerIcon} />
        <Card title="Sides" icon={UtensilsCrossedIcon} />
      </div>
  )
}