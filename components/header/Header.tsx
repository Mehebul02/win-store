"use client"
import React, { useState } from 'react'
import TopBar from './TopBar'
import SecondaryNav from './SecondaryNav'
import MobileMenu from './MobileMenu'


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

  return (
    <header className="w-full font-sans">
      <TopBar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileSearchOpen={mobileSearchOpen}
        setMobileSearchOpen={setMobileSearchOpen}
      />
      <SecondaryNav />
      {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />}
    </header>
  )
}

export default Header