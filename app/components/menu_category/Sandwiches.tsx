import MenuItem from "../MenuItem";
import ccs from '@/app/img/sandwiches/ccs.png'
import rtc from '@/app/img/sandwiches/rtc.png'
import cfs from '@/app/img/sandwiches/cfs.png'

export default function Sandwiches() {
  return (
    <section className="mt-4 mx-2">
      <h1 className="category-name">Sandwiches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-6">
        <MenuItem
          name="Crunchy Chicken Sandwich"
          description="Japanese pickles, bibb lettuce,cracked black pepper buttermilk dressing."
          price={24}
          image={ccs}
        />
        <MenuItem
          name="Roast Turkey Club"
          description="Smoked bacon, tomato jam, asiago, dill mayonnaise, whole grain toast."
          price={28}
          image={rtc}
        />
        <MenuItem
          name="Crispy Fish Sandwich"
          description="Pickily pop coleslaw, chunky tartar sauce, sliced tomato, lemon."
          price={26}
          image={cfs}
        />
      </div>
    </section>
  )
}