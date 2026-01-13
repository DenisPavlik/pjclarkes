import MenuItem from "../MenuItem";
import nsf from '@/app/img/steak/nsf.png'
import ccfm from '@/app/img/steak/ccfm.png'
import nyss from '@/app/img/steak/nyss.png'

export default function Steaks() {
  return (
    <section className="mt-4 mx-2">
      <h1 className="category-name">Steaks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-6">
        <MenuItem
          name="Newport Steak Frites"
          description="With a choice of: maitre d butter, blu butter, or no sauce."
          price={38}
          image={nsf}
        />
        <MenuItem
          name="Center Cut Filet Mignon"
          description="With a choice of: maitre d butter, blu butter, or no sauce."
          price={48}
          image={ccfm}
        />
        <MenuItem
          name="NY Strip Steak"
          description="With a choice of: maitre d butter, blu butter, or no sauce."
          price={52}
          image={nyss}
        />
      </div>
    </section>
  )
}