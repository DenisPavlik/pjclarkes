import MenuItem from "../MenuItem";
import ws from "@/app/img/salads/ws.png";
import cs from "@/app/img/salads/cs.png";
import mlcs from "@/app/img/salads/mlcs.png";
import ics from "@/app/img/salads/ics.png";

export default function Salads() {
  return (
    <section className="mt-4 mx-2">
      <h1 className="category-name">Salads</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-6">
        <MenuItem
          name="Winter Salad"
          description="Butter lettuce, roma tomatoes, shredded carrots,red onions, feta, red wine vinaigrette."
          price={17}
          image={ws}
        />
        <MenuItem
          name="Caesar Salad"
          description="little gem romaine, parmesan, croutons, light anchovy dressing."
          price={18}
          image={cs}
        />
        <MenuItem
          name="Maine Lobster Cobb Salad"
          description="Maine lobster tail & claw, bib lettuce, tomato, scallion, bacon lardons, avocado, blue cheese crumbles, soft boiled egg."
          price={38}
          image={mlcs}
        />
        <MenuItem
          name="Israeli Chopped Salad"
          description="Persian cucumbers, bell peppers, celery, fennel, tomato, chickpeas, kalamata olives, mint."
          price={18}
          image={ics}
        />
      </div>
    </section>
  );
}
