import React from 'react'
import Link from 'next/link'
import { Phone, User, Heart } from 'lucide-react'
import { socialLinks, navLinks } from './data'
import Image from 'next/image'
import { cart } from '@/assets'

interface MobileMenuProps {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setMobileMenuOpen }) => {
  return (
    <div className="md:hidden bg-teal-900 px-4 py-4 flex flex-col gap-1">

      <div className="flex items-center gap-2 text-white py-2 border-b border-teal-700 mb-1">
         <Image src={cart} alt="Cart" width={20} height={20} />
        <span className="text-sm font-semibold">+011 5827918</span>
        <button className="ml-auto text-gray-300 text-sm hover:text-white">Sign In</button>
      </div>

      {navLinks.map(link => (
        <Link
          key={link.name}
          href={link.href}
          className="text-gray-300 hover:text-white py-2 text-sm border-b border-teal-700"
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.name}
        </Link>
      ))}

      <div className="flex items-center gap-5 pt-3">
        <Link href="/wishlist" className="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm" onClick={() => setMobileMenuOpen(false)}>
          <Heart size={17} /> Wishlist
        </Link>
        <button className="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm">
          <User size={17} /> Account
        </button>
      </div>

      <div className="flex items-center gap-4 pt-3">
        {socialLinks.map(social => {
          const Icon = social.icon
          return (
            <Link
              key={social.label}
              href={social.href}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label={social.label}
            >
              <Icon size={17} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default MobileMenu