import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm uppercase tracking-[0.14em] ${
      isActive ? 'text-white' : 'text-zinc-300'
    } hover:text-white transition-colors`

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${
      scrolled ? 'backdrop-blur-md bg-black/60' : 'bg-black/30 backdrop-blur-sm'
    } border-b border-white/5`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-white text-2xl font-black leading-none" style={{fontFamily:'Anton, League Spartan, Inter'}}>
              B4B
            </div>
            <span className="hidden sm:block text-zinc-400 text-[11px] tracking-wide">Built 4 Bold</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { to: '/', label: 'Home' },
              { to: '/shop', label: 'Shop' },
              { to: '/collections', label: 'Collections' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                <span className="relative">
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#C62828] transition-all group-hover:w-full"></span>
                </span>
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="Search">
              <Search size={18} />
            </button>
            <button className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="Profile">
              <User size={18} />
            </button>
            <button className="p-2 text-zinc-300 hover:text-white transition-colors hidden sm:inline-flex" aria-label="Wishlist">
              <Heart size={18} />
            </button>
            <Link to="/cart" className="relative p-2 text-zinc-200 hover:text-white transition-colors" aria-label="Cart">
              <ShoppingBag size={18} />
              <span className="absolute -top-0.5 -right-0.5 bg-[#C62828] text-[10px] leading-3 px-1.5 py-0.5 rounded-full">2</span>
            </Link>
            <button className="md:hidden p-2 text-zinc-200" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-16 flex items-center justify-between">
              <div className="text-white text-2xl font-black" style={{fontFamily:'Anton, League Spartan, Inter'}}>B4B</div>
              <button className="p-2 text-zinc-200" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>
            <div className="py-6 space-y-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/shop', label: 'Shop' },
                { to: '/collections', label: 'Collections' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block text-lg text-white/90 uppercase tracking-wider"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
