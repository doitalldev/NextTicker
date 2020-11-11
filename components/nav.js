import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "https://github.com/jonnyboydev/NextTicker", label: "Repo" },
  { href: "#", label: "Home" },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-2">
        <div>
          <Image
            src="/images/logo.svg"
            alt="NextTicker Logo"
            width={200}
            height={50}
          />
        </div>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className="px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
