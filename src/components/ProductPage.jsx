import React from 'react'
import { Star } from 'lucide-react'

const ProductPage = () => {
  const images = [
    'https://images.unsplash.com/photo-1618354691448-6f9d1d9bced8?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop'
  ]

  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/5] overflow-hidden rounded-xl border border-white/10 mb-3">
            <img src={images[0]} alt="product" className="w-full h-full object-cover"/>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {images.slice(1).map((src, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden border border-white/10">
                <img src={src} alt="thumb" className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:pl-6">
          <h1 className="text-white text-2xl md:text-3xl font-black mb-2" style={{fontFamily:'Anton, League Spartan, Inter'}}>Oversized Icon Tee - Black</h1>
          <div className="text-zinc-300 mb-4">₹2,499</div>
          <p className="text-zinc-400 mb-6">Premium Handmade Design. A heavyweight oversized tee with a structured drape and soft interior. Built for daily wear.</p>

          <div className="mb-6">
            <div className="text-white font-semibold mb-2">Size</div>
            <div className="flex flex-wrap gap-2">
              {['S','M','L','XL','XXL'].map(s => (
                <button key={s} className="px-4 py-2 rounded-md border border-white/10 text-zinc-300 hover:bg-white/5">{s}</button>
              ))}
            </div>
          </div>

          <button className="w-full md:w-auto px-6 py-3 bg-[#C62828] text-white rounded-md uppercase tracking-wide">Add to cart</button>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="bg-zinc-900/60 border border-white/10 rounded-lg p-4 text-zinc-300">
              <div className="text-white font-semibold mb-1">Fabric</div>
              260 GSM, 100% cotton, pre-shrunk
            </div>
            <div className="bg-zinc-900/60 border border-white/10 rounded-lg p-4 text-zinc-300">
              <div className="text-white font-semibold mb-1">Wash Care</div>
              Cold wash, inside out, do not tumble dry
            </div>
            <div className="bg-zinc-900/60 border border-white/10 rounded-lg p-4 text-zinc-300">
              <div className="text-white font-semibold mb-1">Delivery</div>
              Ships in 2-4 business days
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-2 text-white mb-3">
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
              <span className="text-sm">4.9 • 128 reviews</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[1,2,3].map(i => (
                <div key={i} className="bg-zinc-900/60 border border-white/10 rounded-lg p-4">
                  <div className="text-white text-sm font-medium">Customer {i}</div>
                  <div className="text-zinc-400 text-sm">Great fit and quality. Feels premium and looks clean.</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
