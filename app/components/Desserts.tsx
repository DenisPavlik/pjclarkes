import MenuItem from "./MenuItem";
import nyc from '@/app/img/nyc.png'
import bs from '@/app/img/bs.png'
import rrbp from '@/app/img/rrbp.png'
import pp from '@/app/img/pp.png'

export default function Desserts() {
  return (
    <section className="mt-4 mx-2">
        <h1 className="category-name">Desserts</h1>
        <div className="flex flex-col mt-2 gap-6">
          <MenuItem
            name="New York Cheesecake"
            description="Cheesecake with cherry compote."
            price={17}
            image={nyc}
          />
          <MenuItem
            name="Brownie Sundae"
            description="Brownie sundae with fudge and whipped cream."
            price={18}
            image={bs}
          />
          <MenuItem
            name="Rum Raisin Bread Pudding"
            description="Rum Raisin Bread Pudding with Crème Anglaise."
            price={18}
            image={rrbp}
          />
          <MenuItem
            name="Pumpkin Pie"
            description="Pumpkin pie with whipped cream and cinnamon."
            price={18}
            image={pp}
          />
        </div>
      </section>
  )
}