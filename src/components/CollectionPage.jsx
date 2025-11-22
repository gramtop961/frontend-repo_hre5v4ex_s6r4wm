import React, { useState } from 'react'

const mock = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `B4B Piece ${i + 1}`,
  price: 1999 + (i % 5) * 300,
  color: ['Black', 'Grey', 'Red'][i % 3],
  size: ['S', 'M', 'L', 'XL'][i % 4],
  image: `https://images.unsplash.com/photo-15${i}1099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop`
}))

const CollectionPage = () => {
  const [sort, setSort] = useState('new')

  const products = [...mock].sort((a, b) => {
    if (sort === 'low') return a.price - b.price
    if (sort === 'high') return b.price - a.price
    return b.id - a.id
  })

  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <aside className="md:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div>
              <h4 className="text-white font-semibold mb-3">Price</h4>
              <div className="space-y-2 text-zinc-400 text-sm">
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#C62828]"/> Under ₹2k</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#C62828]"/> ₹2k–₹3k</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#C62828]"/> ₹3k+</label>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Size</h4>
              <div className="flex flex-wrap gap-2">
                {['S','M','L','XL','XXL'].map(s => (
                  <button key={s} className="px-3 py-1.5 rounded-md border border-white/10 text-zinc-300 hover:bg-white/5">{s}</button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Color</h4>
              <div className="flex gap-2">
                {['#000','#e11d48','#9ca3af'].map(c => (
                  <span key={c} className="w-6 h-6 rounded-full border border-white/10" style={{background:c}} />
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <main className="md:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-white text-2xl font-black" style={{fontFamily:'Anton, League Spartan, Inter'}}>Shop</h1>
            <select value={sort} onChange={(e)=>setSort(e.target.value)} className="bg-zinc-900 border border-white/10 text-zinc-200 text-sm px-3 py-2 rounded-md">
              <option value="new">Newest</option>
              <option value="low">Price: Low–High</option>
              <option value="high">Price: High–Low</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <div key={p.id} className="bg-zinc-900/60 border border-white/5 rounded-xl overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition"/>
                </div>
                <div className="p-4">
                  <div className="text-white text-sm font-medium">{p.name}</div>
                  <div className="text-zinc-400 text-sm">₹{(p.price/100).toFixed(2)}k</div>
                  <button className="mt-3 w-full py-2 bg-[#C62828] text-white rounded-md text-xs uppercase tracking-wide">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default CollectionPage
