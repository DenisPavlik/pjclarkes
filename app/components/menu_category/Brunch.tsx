import MenuItem from "../MenuItem";
import ffft from '@/app/img/brunch/ffft.png'
import at from '@/app/img/brunch/at.png'
import rtc from '@/app/img/sandwiches/rtc.png'
import bmc from '@/app/img/classics/bmc.png'
import pfc from '@/app/img/fish/pfc.png'
import sss from '@/app/img/brunch/sss.png'
import sgco from '@/app/img/brunch/sgco.png'
import ceb from '@/app/img/brunch/ceb.png'
import ssb from '@/app/img/brunch/ssb.png'
import hr from '@/app/img/brunch/hr.png'

export default function Brunch() {
  return (
    <section className="mt-4 mx-2">
      <h1 className="category-name">Brunch</h1>
      <div className="flex flex-col mt-2 gap-6">
        <MenuItem
          name="Fat & Fluffy French Toast"
          description="Sliced Brioche bread dipped in batter made of Egg, Milk, Orange Zest,
Cinnamon, and Sugar."
          price={21}
          image={ffft}
        />
        <MenuItem
          name="Avocado Toast"
          description="Poached egg, avocado, feta cheese, pickled sweet onion."
          price={23}
          image={at}
        />
        <MenuItem
          name="Roast Turkey Club"
          description="Smoked bacon, tomato jam, asiago, dill mayonnaise, romaine, whole grain toast."
          price={26}
          image={rtc}
        />
        <MenuItem
          name="Baked Macaroni and Cheese"
          description="Baked Mac and Cheese with Scallions on top."
          price={19}
          image={bmc}
        />
        <MenuItem
          name="Proper Fish and Chips"
          description="Fish and Chips with tartar sauce and malt vinegar."
          price={27}
          image={pfc}
        />
        <MenuItem
          name="Smoked Salmon Scramble"
          description="3 eggs scrambled with smoked salmon and cream cheese, topped with sour
cream and chive batons."
          price={21}
          image={sss}
        />
        <MenuItem
          name="Spinach and Goat Cheese Omelet"
          description="An omelet made with 3 eggs and blanched spinach folded over with goat
cheese."
          price={19}
          image={sgco}
        />
        <MenuItem
          name="Classic Eggs Benedict"
          description="Country ham, poached eggs, and hollandaise sauce on top of a crumpet;
garnished with chive batons."
          price={23}
          image={ceb}
        />
        <MenuItem
          name="Smoked Salmon Benedict"
          description="Smoked salmon, poached eggs, and hollandaise sauce on top of a crumpet;
garnished with chive batons."
          price={24}
          image={ssb}
        />
        <MenuItem
          name="Huevos Rancheros"
          description="Two fried eggs with refried beans served on top a crispy blue corn tortilla.
Topped with feta cheese, salsa verde, and sliced jalapeno."
          price={22}
          image={hr}
        />
      </div>
    </section>
  )
}