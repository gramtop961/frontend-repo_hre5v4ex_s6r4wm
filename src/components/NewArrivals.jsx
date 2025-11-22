import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const items = [
  { id: 'a', name: 'Core Logo Tee', price: 2299, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop' },
  { id: 'b', name: 'Shadow Hoodie', price: 4499, image: 'https://images.unsplash.com/photo-1653499676737-becf2c9562c8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3JlJTIwTG9nbyUyMFRlZXxlbnwwfDB8fHwxNzYzNzk3MzA4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'c', name: 'Boxy Crew', price: 3199, image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
  { id: 'd', name: 'Heavy Sweat', price: 2899, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop' },
  { id: 'e', name: 'Tech Track', price: 3599, image: 'https://images.unsplash.com/photo-1611513958624-5a4db792f157?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPdmVyc2l6ZWQlMjBJY29uJTIwVGVlJTIwLSUyMEJsYWNrfGVufDB8MHx8fDE3NjM3OTczMDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' }
]

const NewArrivals = () => {
  const ref = React.useRef(null)
  const scroll = (dir) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
  }
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-2xl font-black" style={{fontFamily:'Anton, League Spartan, Inter'}}>New Arrivals</h3>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-2 rounded-md border border-white/10 text-white/80 hover:text-white hover:bg-white/5">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-md border border-white/10 text-white/80 hover:text-white hover:bg:white/5">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div ref={ref} className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {items.map((it) => (
            <div key={it.id} className="min-w-[260px] snap-start bg-zinc-900/60 border border-white/5 rounded-xl overflow-hidden">
              <div className="aspect-[4/5]">
                <img src={it.image} alt={it.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-white text-sm font-medium">{it.name}</div>
                <div className="text-zinc-400 text-sm">₹{(it.price/100).toFixed(2)}k</div>
                <button className="mt-3 w-full py-2 bg-[#C62828] text-white rounded-md text-xs uppercase tracking-wide hover:brightness-110">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
