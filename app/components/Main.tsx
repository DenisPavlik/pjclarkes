"use client";
import { useState } from "react";
import Nav, { Category } from "./Nav";
import LunchCards from "./LunchCards";
import DinnerCards from "./DinnerCards";
import BrunchCards from "./BrunchCards";
import Desserts from "./menu_category/Desserts";
import Soups from "./menu_category/Soups";
import ForTheTable from "./menu_category/ForTheTable";
import RawBar from "./menu_category/RawBar";
import Classics from "./menu_category/Classics";
import Salads from "./menu_category/Salads";
import Sandwiches from "./menu_category/Sandwiches";
import Steaks from './menu_category/Steaks'
import Burgers from "./menu_category/Burgers";
import Sides from "./menu_category/Sides";
import Seafood from "./menu_category/Seafood";
import Brunch from "./menu_category/Brunch";

export type LunchSection =
  | null
  | "soup"
  | "for-the-table"
  | "raw-bar"
  | "classics"
  | "salads"
  | "sandwiches"
  | "burgers"
  | "sides";

  export type DinnerSection =
  | null
  | "soup"
  | "for-the-table"
  | "raw-bar"
  | "classics"
  | "steak"
  | "seafood"
  | "salads"
  | "burgers"
  | "sides";

  export type BrunchSection =
  | null
  | "soup"
  | "for-the-table"
  | "raw-bar"
  | "brunch"
  | "salads"
  | "burgers"
  | "sides";

export default function Main() {
  const [category, setCategory] = useState<Category>("lunch");
  const [lunchSection, setLunchSection] = useState<LunchSection>(null);
  const [dinnerSelection, setDinnerSelection] = useState<DinnerSection>(null);
  const [brunchSelection, setBrunchSelection] = useState<BrunchSection>(null);

  const handleSetCategory = (c: Category) => {
    setCategory(c);
    setLunchSection(null);
    setDinnerSelection(null);
    setBrunchSelection(null);
  };

  return (
    <>
      <Nav category={category} onChangeCategory={handleSetCategory} />

      <div>
        {category === "lunch" ? (
          lunchSection === null ? (
            <LunchCards onPick={setLunchSection} />
          ) : (
            <>
              {lunchSection === "soup" && <Soups />}
              {lunchSection === "for-the-table" && <ForTheTable />}
              {lunchSection === "raw-bar" && <RawBar />}
              {lunchSection === "classics" && <Classics />}
              {lunchSection === "salads" && <Salads />}
              {lunchSection === "sandwiches" && <Sandwiches />}
              {lunchSection === "burgers" && <Burgers />}
              {lunchSection === "sides" && <Sides />}
            </>
          )
        ) : category === "dinner" ? (
          dinnerSelection === null ? (
            <DinnerCards onPick={setDinnerSelection} />
          ) : (
            <>
              {dinnerSelection === 'soup' && <Soups />}
              {dinnerSelection === "for-the-table" && <ForTheTable />}
              {dinnerSelection === 'raw-bar' && <RawBar />}
              {dinnerSelection === 'classics' && <Classics />}
              {dinnerSelection === 'steak' && <Steaks />}
              {dinnerSelection === 'seafood' && <Seafood />}
              {dinnerSelection === "salads" && <Salads />}
              {dinnerSelection === "burgers" && <Burgers />}
              {dinnerSelection === "sides" && <Sides />}
            </>
          )
        ) : category === "brunch" ? (
          brunchSelection === null ? (
            <BrunchCards onPick={setBrunchSelection} />
          ) : (
            <>
              {brunchSelection === 'soup' && <Soups />}
              {brunchSelection === 'for-the-table' && <ForTheTable />}
              {brunchSelection === 'raw-bar' && <RawBar />}
              {brunchSelection === 'brunch' && <Brunch />}
              {brunchSelection === 'salads' && <Salads />}
              {brunchSelection === 'burgers' && <Burgers />}
              {brunchSelection === 'sides' && <Sides />}
            </>
          )
        ) : category === "desserts" ? (
          <Desserts />
        ) : null}
      </div>
    </>
  );
}

