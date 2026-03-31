import Link from "next/link";

interface FooterLinksProps {
  title: string;
  links: string[];
}
const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div>
      <h3 className="text-[20px] text-[#00CAD7] font-medium mb-4">{title}</h3>

      <ul className="space-y-2 ">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="text-gray-400 text-sm hover:text-cyan-500 transition"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;