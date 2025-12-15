import MenuItem from "../MenuItem";
import ceg from '@/app/img/forTheTable/ceg.png'
import pcd from '@/app/img/forTheTable/pcd.png'
import ric from '@/app/img/forTheTable/ric.png'
import ksr from '@/app/img/forTheTable/ksr.png'
import zec from '@/app/img/forTheTable/zec.png'
import gscw from '@/app/img/forTheTable/gscw.png'
import pb from '@/app/img/forTheTable/pb.png'
import afs from '@/app/img/forTheTable/afs.png'
import wb from '@/app/img/forTheTable/wb.png'
import mm from '@/app/img/forTheTable/mm.png'

export default function ForTheTable() {
  return (
    <section className="mt-4 mx-2">
        <h1 className="category-name">For the table</h1>
        <div className="flex flex-col mt-2 gap-6">
          <MenuItem
            name="Cheesesteak Egg Rolls"
            description="Cheesesteak Egg Rolls with crushed pepper dipping sauce."
            price={18}
            image={ceg}
          />
          <MenuItem
            name="Peekytoe Crab Dip"
            description="Peekytoe Crab dip served with Old Bay Crostini."
            price={27}
            image={pcd}
          />
          <MenuItem
            name="Rhode Island Calamari"
            description="Rhode Island calamari with horseradish remoulade."
            price={21}
            image={ric}
          />
          <MenuItem
            name="Korean Sticky Ribs"
            description="Korean sticky ribs w/scallions and sesame seeds."
            price={22}
            image={ksr}
          />
          <MenuItem
            name="Zucchini & Eggplant Chips"
            description="Zucchini and Eggplant fries with a side of tzatziki."
            price={18}
            image={zec}
          />
          <MenuItem
            name="Grilled Sweet Chili Wings"
            description="Grilled sweet chili wings with pickled habeneros and scallions."
            price={17}
            image={gscw}
          />
          <MenuItem
            name="Pretzel Bites"
            description="Pretzel bites with cheesy rarebit."
            price={14}
            image={pb}
          />
          <MenuItem
            name="Al Forno Shrimp"
            description="Al Forno Shrimp with Bang Bang Sauce."
            price={19}
            image={afs}
          />
          <MenuItem
            name="Warm Baguette"
            description="Warm baguette with whipped honey butter."
            price={6}
            image={wb}
          />
          <MenuItem
            name="Mussels Marinieres"
            description="Mussels in white wine, butter sauce with baguette and fries."
            price={28}
            image={mm}
          />
        </div>
      </section>
  )
}