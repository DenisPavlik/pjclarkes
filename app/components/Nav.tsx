"use client";

const categories = ["lunch", "dinner", "brunch", "desserts"] as const;
export type Category = (typeof categories)[number];
export { categories };

type NavProps = {
  category: Category;
  onChangeCategory: (c: Category) => void;
};

export default function Nav({ category, onChangeCategory }: NavProps) {
  return (
    <div className="m-auto mt-4">
      <nav className="flex items-center justify-center">
        <ul
          className="flex items-center justify-center gap-4 font-semibold uppercase text-sm
          *:hover:text-red-600 *:duration-300 *:cursor-pointer *:hover:underline underline-offset-6"
        >
          {categories.map((c) => (
            <li
              key={c}
              onClick={() => onChangeCategory(c)}
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
