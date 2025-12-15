import MenuItem from "../MenuItem";
import ccs from '@/app/img/fish/pfc.png'
import rtc from '@/app/img/fish/bs.png'
import cfs from '@/app/img/fish/prs.png'

export default function Seafood() {
  return (
    <section className="mt-4 mx-2">
      <h1 className="category-name">Seafood</h1>
      <div className="flex flex-col mt-2 gap-6">
        <MenuItem
          name="Proper Fish and Chips"
          description="Fish and Chips with tartar sauce and malt vinegar."
          price={29}
          image={ccs}
        />
        <MenuItem
          name="Branzino Saute"
          description="Saute Branzino with Saffron Rouille (roo-eel)."
          price={38}
          image={rtc}
        />
        <MenuItem
          name="Pan Roast Salmon"
          description="Pan roast salmon with beurre blanc and gremolata."
          price={34}
          image={cfs}
        />
      </div>
    </section>
  )
}