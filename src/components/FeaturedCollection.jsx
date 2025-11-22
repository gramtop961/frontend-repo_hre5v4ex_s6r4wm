import React from 'react'

const products = [
  { id: 1, name: 'Oversized Icon Tee - Black', price: 2499, image: 'https://images.unsplash.com/photo-1611513958624-5a4db792f157?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPdmVyc2l6ZWQlMjBJY29uJTIwVGVlJTIwLSUyMEJsYWNrfGVufDB8MHx8fDE3NjM3OTczMDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Bold Serif Hoodie - Jet', price: 4499, image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Minimal Logo Crew - Ash', price: 3299, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Heavyweight Sweatpants', price: 2999, image: 'https://images.unsplash.com/photo-1611513958624-5a4db792f157?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPdmVyc2l6ZWQlMjBJY29uJTIwVGVlJTIwLSUyMEJsYWNrfGVufDB8MHx8fDE3NjM3OTczMDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

const FeaturedCollection = () => {
  return (
    <section id="oversized" className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-white" style={{fontFamily:'Anton, League Spartan, Inter'}}>The Oversized Edit</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group bg-zinc-900/60 border border-white/5 rounded-xl overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <div className="text-white font-medium text-sm line-clamp-1">{p.name}</div>
                <div className="text-zinc-400 text-sm mt-1">₹{(p.price/100).toFixed(2)}k</div>
                <button className="mt-4 w-full py-2 bg-zinc-800 text-white rounded-md border border-white/10 hover:bg-[#C62828] hover:border-[#C62828] transition uppercase text-xs tracking-wide">Quick add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollection
