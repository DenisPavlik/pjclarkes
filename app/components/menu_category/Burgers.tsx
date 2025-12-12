import MenuItem from "../MenuItem";
import cb from '@/app/img/burgers/cb.png'
import ch from '@/app/img/burgers/1884.png'
import cad from '@/app/img/burgers/cad.png'
import bb from '@/app/img/burgers/BB.png'
import bar from '@/app/img/burgers/Bar.png'
import trio from '@/app/img/burgers/Trio.png'

export default function Burgers() {
  return (
    <section className="mt-4 mx-2">
        <h1 className="category-name">Burgers</h1>
        <div className="flex flex-col mt-2 gap-6">
          <MenuItem
            name="The Clarke Burger"
            description="Clarke (temp) with sea salt fries."
            price={18}
            image={cb}
          />
          <MenuItem
            name="PJs 1884 Cheeseburger"
            description="Cheeseburger (temp) with sea salt fries."
            price={18}
            image={ch}
          />
          <MenuItem
            name="The Cadillac"
            description="Cadillac (temp) with sea salt fries."
            price={17}
            image={cad}
          />
          <MenuItem
            name="Barbeque Bleu Burger"
            description="BBQ Bleu (temp) with sea salt fries."
            price={18}
            image={bb}
          />
          <MenuItem
            name="The Bartender's Burger"
            description="Bartender's burger (temp) with sea salt fries."
            price={18}
            image={bar}
          />
          <MenuItem
            name="Trio of Mini Burgers"
            description="Trio (temp) with sea salt fries."
            price={18}
            image={trio}
          />
        </div>
      </section>
  )
}