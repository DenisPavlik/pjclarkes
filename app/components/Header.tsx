import Image from "next/image";

export default function Header() {
  return (
    <header>
        <div className="p-2">
          <Image
            src={
              "https://cdn.pjclarkes.com/wp-content/uploads/2024/05/29171810/pj-logo1-2.svg"
            }
            alt="logo"
            width={150}
            height={150}
          />
        </div>
      </header>
  )
}