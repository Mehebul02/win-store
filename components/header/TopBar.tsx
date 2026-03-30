import React from 'react'
import Link from 'next/link'
import { Search,} from 'lucide-react'
import Image from 'next/image'
import { logo } from '@/assets'
import SearchBer from './SearchBer'
import UserActions from './UserActions'
import Container from '../shared/Container'

interface TopBarProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  mobileSearchOpen: boolean
  setMobileSearchOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const TopBar: React.FC<TopBarProps> = ({ mobileMenuOpen, setMobileMenuOpen, mobileSearchOpen, setMobileSearchOpen }) => {
  return (
    <div className="bg-primary  px-4 py-3">
        <Container className=" flex items-center gap-3">
        <Link href="/" >
          <Image src={logo} alt="Logo" width={132} height={48} />
        </Link>
        {/*  Search */}
        <SearchBer />
          {/* User Actions */}
        <UserActions
          setMobileSearchOpen={setMobileSearchOpen}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen} />
      </Container>
      {/* Mobile Search */}
      {mobileSearchOpen && (
        <div className="md:hidden mt-3 max-w-7xl mx-auto">
          <div className="flex w-full items-center bg-white rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-3 py-2 text-sm focus:outline-none text-gray-700"
              autoFocus
            />
            <button className="px-3 py-2 bg-gray-500 text-white">
              <Search size={17} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TopBar