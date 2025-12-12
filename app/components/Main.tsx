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
import Burgers from "./menu_category/Burgers";
import Sides from "./menu_category/Sides";

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

export default function Main() {
  const [category, setCategory] = useState<Category>("lunch");
  const [lunchSection, setLunchSection] = useState<LunchSection>(null);

  const handleSetCategory = (c: Category) => {
    setCategory(c);
    setLunchSection(null);
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
          <DinnerCards />
        ) : category === "brunch" ? (
          <BrunchCards />
        ) : category === "desserts" ? (
          <Desserts />
        ) : null}
      </div>
    </>
  );
}

