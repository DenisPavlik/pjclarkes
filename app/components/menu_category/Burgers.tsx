import MenuItem from "../MenuItem";
import cb from "@/app/img/burgers/cb.png";
import ch from "@/app/img/burgers/1884.png";
import cad from "@/app/img/burgers/cad.png";
import bb from "@/app/img/burgers/BB.png";
import bar from "@/app/img/burgers/Bar.png";
import trio from "@/app/img/burgers/Trio.png";

export default function Burgers() {
  return (
    <section className="mt-4 mx-2">
      <h1 className="category-name">Burgers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-6">
        <MenuItem
          name="The Clarke Burger"
          description="Signature burger served with bibb lettuce, sliced tomato, spanish
onion, and a pickle."
          price={21}
          image={cb}
        />
        <MenuItem
          name="PJs 1884 Cheeseburger"
          description="The Clarke Burger with American Cheese."
          price={24}
          image={ch}
        />
        <MenuItem
          name="Barbeque Bleu Burger"
          description="ignature burger served with Crumbled Buttermilk Bleu Cheese,
Crispy Shallots, & BBQ Sauce."
          price={26}
          image={bb}
        />
        <MenuItem
          name="The Cadillac"
          description="This is our Clarke with american cheese and bacon that was coined
by Nat King Cole `this is the Cadillac of all burgers`."
          price={27}
          image={cad}
        />
        <MenuItem
          name="Trio of Mini Burgers"
          description="Trio (temp) with sea salt fries."
          price={25}
          image={trio}
        />
        <MenuItem
          name="The Bartender's Burger"
          description="A succulent burger topped with a rich, savory confit of slow-cooked bacon and
earthy mushrooms."
          price={25}
          image={bar}
        />
      </div>
    </section>
  );
}
