import Nav from "./components/Nav";
import Header from "./components/Header";
import Card from "./components/Card";
import { BeefIcon, DrumstickIcon, HamburgerIcon, SaladIcon, SandwichIcon, ShrimpIcon, SoupIcon, UtensilsCrossedIcon } from "lucide-react";


export default function Home() {
  return (
    <div className="mx-2">
      <Header />
      <Nav />
      {/* <Soups /> */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <Card title="Soup" icon={SoupIcon} />
        <Card title="For the table" icon={DrumstickIcon} />
        <Card title="Raw Bar" icon={ShrimpIcon} />
        <Card title="Classics" icon={BeefIcon} />
        <Card title="Salads" icon={SaladIcon} />
        <Card title="Sandwiches" icon={SandwichIcon} />
        <Card title="Clarke Burgers" icon={HamburgerIcon} />
        <Card title="Sides" icon={UtensilsCrossedIcon} />
      </div>
    </div>
  );
}
