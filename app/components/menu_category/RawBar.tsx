import MenuItem from "../MenuItem";
import eco from "@/app/img/rawBar/eco.png"
import lc from "@/app/img/rawBar/lc.png"
import slc from "@/app/img/rawBar/slc.png"
import ttt from "@/app/img/rawBar/ttt.png"
import cc from "@/app/img/rawBar/cc.png"
import or from "@/app/img/rawBar/or.png"
import jgsc from "@/app/img/rawBar/jgsc.png"
import td from "@/app/img/rawBar/td.png"
import clr from "@/app/img/rawBar/clr.png"
import mlr from "@/app/img/rawBar/mlr.png"

export default function RawBar() {
  return (
    <section className="mt-4 mx-2">
        <h1 className="category-name">Raw Bar</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-6">
          <MenuItem
            name="East Coast Oysters: 1/2 Dozen or Dozen"
            description="Oysters with cocktail sauce, horseradish, mignonette, and a
lemon wedge."
            price={"25 | $48"}
            image={eco}
          />
          <MenuItem
            name="Littleneck Clams: 1/2 Dozen or Dozen"
            description="Littleneck Clams with cocktail sauce, horseradish, and a lemon
wedge."
            price={"16 | $26"}
            image={lc}
          />
          <MenuItem
            name="Steamed Littleneck Clams: Dozen"
            description="Steamed littleneck clams with toasted breadcrumbs."
            price={28}
            image={slc}
          />
          <MenuItem
            name="The Deluxe"
            description="Seafood sampler with oysters, littlenecks, jumbo shrimp, cocktail sauce,
mignonette, horseradish, and lemon wedges."
            price={115}
            image={td}
          />
          <MenuItem
            name="Jumbo Gulf Shrimp Cocktail: 4 pieces"
            description="Jumbo Gulf Shrimp Cocktail with house-made cocktail sauce and lemon wedge."
            price={23}
            image={jgsc}
          />
          <MenuItem
            name="Tuna Tartare Tacos"
            description="Mango, ginger, jalapeño, ginger sauce."
            price={18}
            image={ttt}
          />
          <MenuItem
            name="Clams Casino: 6 clams"
            description="Bacon, panko, parsley butter."
            price={19}
            image={cc}
          />
          <MenuItem
            name="Oysters Rockefeller: 6 oysters"
            description="Spinach, pernod, shaved parmesan."
            price={25}
            image={or}
          />
          <MenuItem
            name="Maine Lobster Roll"
            description="Mayonnaise, lemon, chive."
            price={35}
            image={mlr}
          />
          <MenuItem
            name="Connecticut Lobster Roll"
            description="Warm melted butter."
            price={35}
            image={clr}
          />
        </div>
      </section>
  )
}