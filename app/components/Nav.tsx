"use client";

import { useState } from "react";

const categories = ["lunch", "dinner", "brunch", "drinks", "desserts"];

export default function Nav() {
  const [category, setCategory] = useState("lunch");
  return (
    <div className="m-auto">
      <nav className="flex items-center justify-center">
        <ul
          className="flex items-center justify-center gap-8 font-semibold uppercase text-xl
          *:hover:text-red-600 *:duration-300 *:cursor-pointer *:hover:underline underline-offset-6"
        >
          {categories.map((c) => (
            <li
              key={c}
              onClick={() => setCategory(c)}
              className={`${
                category === c
                  ? "text-red-600 tracking-wider underline"
                  : "text-black"
              }`}
            >
              {c}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
