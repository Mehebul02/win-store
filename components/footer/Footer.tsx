import Image from "next/image";
import SocialLinks from "../shared/SocialLinks";
import { footerLinks } from "./footer_data";
import FooterLinks from "./FooterLinks";
import { logo, payment } from "@/assets";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#393939] text-gray-200 mt-6 lg:mt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10">
          <div className="space-y-7">
            <Link href="/" >
              <Image src={logo} alt="Logo" width={132} height={48} className="mb-4" />
            </Link>

            <p className="text-sm text-cyan-400">
              Got questions? Call us 24/7!
            </p>
            <div className="text-sm space-y-1">
              <div className="flex items-center gap-2">
                <span>03 111 666 444</span>
              </div>
              <div className="flex items-center gap-2">
                <span>0317 177701</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-cyan-400 mb-1">Contact info</p>
              <p className="text-sm text-gray-400 mb-3">
                info@winstore.pk
              </p>
              <SocialLinks />
            </div>
          </div>

          {footerLinks.map((section) => (
            <FooterLinks
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <Image
            src={payment}
            alt="payment"
            width={420}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
      <div className=" bg-[#161616] border-t border-gray-700 py-4">
        <h1 className="max-w-6xl mx-auto text-sm text-gray-400 text-center lg:text-start">
          © 2024 Winstore. All Rights Reserved.
        </h1>
      </div>

    </footer>
  );
};

export default Footer;