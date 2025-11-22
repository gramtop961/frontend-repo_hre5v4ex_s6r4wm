import React from 'react'

const CartPage = () => {
  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {[1,2].map((i) => (
            <div key={i} className="bg-zinc-900/60 border border-white/10 rounded-xl p-4 flex items-center gap-4">
              <div className="w-20 h-24 rounded-lg overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1512168681409-241f42d14bef?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHx0aHVtYnxlbnwwfDB8fHwxNzYzNzk3MzA4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="thumb" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-medium">Oversized Icon Tee - Black</div>
                <div className="text-zinc-400 text-xs">Size: L</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 rounded-md border border-white/10 text-white">-</button>
                <span className="text-white">1</span>
                <button className="px-2 py-1 rounded-md border border-white/10 text-white">+</button>
              </div>
              <div className="text-white font-medium">₹2,499</div>
            </div>
          ))}
        </div>
        <aside className="lg:sticky lg:top-24 space-y-4">
          <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-4">
            <div className="text-white font-semibold mb-3">Order Summary</div>
            <div className="flex items-center justify-between text-zinc-300 text-sm">
              <span>Subtotal</span>
              <span>₹4,998</span>
            </div>
            <div className="flex items-center justify-between text-zinc-300 text-sm">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <button className="mt-4 w-full py-3 bg-[#C62828] text-white rounded-md uppercase tracking-wide">Checkout</button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default CartPage
