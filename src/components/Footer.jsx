import React from 'react'
import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-3 uppercase tracking-wide text-sm">Shop</h4>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li>Tees</li>
            <li>Hoodies</li>
            <li>Sweats</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 uppercase tracking-wide text-sm">Customer Service</h4>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li>Shipping</li>
            <li>Returns</li>
            <li>Track Order</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 uppercase tracking-wide text-sm">About B4B</h4>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li>Our Story</li>
            <li>Craft</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 uppercase tracking-wide text-sm">Follow</h4>
          <div className="flex items-center gap-3 text-zinc-300">
            <Instagram size={18} />
            <Youtube size={18} />
            <Twitter size={18} />
            <Facebook size={18} />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-zinc-500 text-sm">
          <p>B4B — Built 4 Bold.</p>
          <p>© {new Date().getFullYear()} B4B. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
