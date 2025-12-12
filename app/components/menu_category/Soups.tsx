import cv from "@/app/img/soups/cv.png";
import nycc from "@/app/img/soups/nycc.png";
import MenuItem from "../MenuItem";

export default function Soups() {
  return (
    <section className="mt-4 mx-2">
        <h1 className="category-name">Soups</h1>
        <div className="flex flex-col mt-2 gap-6">
          <MenuItem
            name="Chicken and Vegetable Soup"
            description="Chicken vegetable and potato dumpling soup with fresh dill on top."
            price={17}
            image={cv}
          />
          <MenuItem
            name="New England Clam Chowder"
            description="New England clam chowder with chives."
            price={18}
            image={nycc}
          />
        </div>
      </section>
  )
}