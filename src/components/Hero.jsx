import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative h-[90vh] md:h-[100vh] w-full bg-black overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability - pointer events disabled to keep Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 max-w-7xl h-full mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95]" style={{fontFamily:'Anton, League Spartan, Inter'}}>
            BUILT FOR THE BOLD
          </h1>
          <p className="mt-5 text-zinc-300 text-lg md:text-xl max-w-xl">
            Premium handcrafted streetwear made for everyday icons.
          </p>
          <div className="mt-8">
            <a href="#oversized" className="inline-flex items-center justify-center px-6 py-3 bg-[#C62828] text-white uppercase tracking-wider text-sm rounded-full hover:brightness-110 transition">
              Shop the drop
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
