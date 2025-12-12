import { BeefIcon, DrumstickIcon, FishIcon, HamburgerIcon, HandPlatterIcon, SaladIcon, ShrimpIcon, SoupIcon, UtensilsCrossedIcon } from "lucide-react";
import Card from "./Card";

export default function DinnerCards() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
        <Card title="Soup" icon={SoupIcon} />
        <Card title="For the table" icon={DrumstickIcon} />
        <Card title="Raw Bar" icon={ShrimpIcon} />
        <Card title="Classics" icon={HandPlatterIcon} />
        <Card title="Steak" icon={BeefIcon} />
        <Card title="Seafood" icon={FishIcon} />
        <Card title="Salads" icon={SaladIcon} />
        <Card title="Clarke Burgers" icon={HamburgerIcon} />
        <Card title="Sides" icon={UtensilsCrossedIcon} />
      </div>
  )
}