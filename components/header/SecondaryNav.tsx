
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { socialLinks, navLinks } from './data'

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

        <div className="ml-auto flex items-center gap-3 flex-shrink-0">
          {socialLinks.map(social => {
            const Icon = social.icon
            return (
              <Link
                key={social.label}
                href={social.href}
                className="text-white hover:text-white transition-colors"
                aria-label={social.label}
              >
                <Icon size={17} />
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default SecondaryNav