import React from 'react'

const LimitedDrop = () => {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h3 className="text-white text-3xl md:text-4xl font-black mb-4" style={{fontFamily:'Anton, League Spartan, Inter'}}>LIMITED HANDCRAFTED DROP</h3>
        <p className="text-zinc-300 max-w-xl mb-6">Small-batch releases with custom graphics and premium fabrics. Once it’s gone, it’s gone.</p>
        <a href="#oversized" className="inline-flex items-center justify-center px-6 py-3 bg-[#C62828] text-white uppercase tracking-wider text-sm rounded-full hover:brightness-110 transition">Shop Now</a>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
    </section>
  )
}

export default LimitedDrop
