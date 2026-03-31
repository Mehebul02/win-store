import Link from 'next/link'
import { Menu } from 'lucide-react'
import {  navLinks } from './data'
import SocialLinks from '../shared/SocialLinks'

const SecondaryNav = () => {
  return (
    <nav className="hidden md:block bg-[#0E3B3E] px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center gap-4 lg:gap-14">

        <button className="flex items-center gap-1.5 text-white hover:text-teal-200 transition-colors text-sm font-medium whitespace-nowrap flex-shrink-0">
          <Menu size={17} />
          <span className='font-semibold'>Brouse By Category</span>
        </button>

        {navLinks.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className="text-white hover:text-white transition-colors text-sm whitespace-nowrap"
          >
            {link.name}
          </Link>
        ))}
        <SocialLinks />


      </div>
    </nav>
  )
}

export default SecondaryNav