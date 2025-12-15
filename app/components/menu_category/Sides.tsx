import MenuItem from "../MenuItem";
import ff from '@/app/img/sides/ff.png'
import tff from '@/app/img/sides/tff.png'
import cos from '@/app/img/sides/cos.png'
import ss from '@/app/img/sides/ss.png'
import rpc from '@/app/img/sides/rpc.png'

export default function Sides() {
  return (
    <section className="mt-4 mx-2">
        <h1 className="category-name">Sides</h1>
        <div className="flex flex-col mt-2 gap-6">
          <MenuItem
            name="Parmesan Truffle fries"
            description="New England clam chowder with chives."
            price={12}
            image={tff}
          />
          <MenuItem
            name="Sea Salt fries"
            description="Chicken vegetable and potato dumpling soup with fresh dill on top."
            price={10}
            image={ff}
          />
          <MenuItem
            name="Crispy Onion Strings"
            description="New England clam chowder with chives."
            price={10}
            image={cos}
          />
          <MenuItem
            name="Sauteed Spinach"
            description="New England clam chowder with chives."
            price={10}
            image={ss}
          />
          <MenuItem
            name="Rosti Potatoes and Carrots"
            description="New England clam chowder with chives."
            price={10}
            image={rpc}
          />
        </div>
      </section>
  )
}