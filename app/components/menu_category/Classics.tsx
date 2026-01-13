import MenuItem from "../MenuItem";
import bmc from "@/app/img/classics/bmc.png";
import bsr from "@/app/img/classics/bsr.png";
import cpp from "@/app/img/classics/cpp.png";
import nsf from "@/app/img/steak/nsf.png";
import gcs from "@/app/img/classics/gcs.png";
import prs from "@/app/img/fish/prs.png";

export default function Classics() {
  return (
    <section className="mt-4 mx-2">
      <h1 className="category-name">Classics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-6">
        <MenuItem
          name="Baked Macaroni and Cheese"
          description="Baked Mac and Cheese with Scallions on top."
          price={19}
          image={bmc}
        />
        <MenuItem
          name="Braised Short Rib"
          description="Braised Short Rib with mashed potatoes and root vegetables."
          price={32}
          image={bsr}
        />
        <MenuItem
          name="Chicken Pot Pie"
          description="Chicken Pot Pie, chives on top.1"
          price={27}
          image={cpp}
        />
        <MenuItem
          name="Newport Steak Frites"
          description="sea salt fries, maitre d' butter"
          price={38}
          image={nsf}
        />
        <MenuItem
          name="Gentlemen's Chopped Steak"
          description="Chopped steak with mushrooms in red wine sauce and sunnyside up egg with a side of rosti
potatoes and carrots."
          price={28}
          image={gcs}
        />
        <MenuItem
          name="Pan Roast Salmon"
          description="Pan roast salmon with beurre blanc and gremolata."
          price={34}
          image={prs}
        />
      </div>
    </section>
  );
}
