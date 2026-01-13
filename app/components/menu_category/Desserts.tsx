import nyc from '@/app/img/desserts/nyc.png'
import bs from '@/app/img/desserts/bs.png'
import rrbp from '@/app/img/desserts/rrbp.png'
import pp from '@/app/img/desserts/pp.png'
import MenuItem from '../MenuItem'

export default function Desserts() {
  return (
    <section className="mt-4 mx-2">
        <h1 className="category-name">Desserts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-6">
          <MenuItem
            name="New York Cheesecake"
            description="Cheesecake with cherry compote."
            price={15}
            image={nyc}
          />
          <MenuItem
            name="Brownie Sundae"
            description="Brownie sundae with fudge and whipped cream."
            price={15}
            image={bs}
          />
          <MenuItem
            name="Rum Raisin Bread Pudding"
            description="Rum Raisin Bread Pudding with Crème Anglaise."
            price={15}
            image={rrbp}
          />
          <MenuItem
            name="Pumpkin Pie"
            description="Pumpkin pie with whipped cream and cinnamon."
            price={15}
            image={pp}
          />
        </div>
      </section>
  )
}