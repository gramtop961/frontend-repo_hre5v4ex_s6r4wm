import React from 'react'
import { Hand, ShieldCheck, Feather, Flag } from 'lucide-react'

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4">
    <div className="p-2 rounded-md bg-zinc-900 border border-white/10 text-white">
      <Icon size={18} />
    </div>
    <div>
      <div className="text-white font-semibold text-sm">{title}</div>
      <div className="text-zinc-400 text-sm">{desc}</div>
    </div>
  </div>
)

const Quality = () => {
  return (
    <section className="bg-gradient-to-b from-black via-[#0b0b0b] to-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-black text-white" style={{fontFamily:'Anton, League Spartan, Inter'}}>Quality & Craftsmanship</h3>
          <p className="text-zinc-300 max-w-lg">Every piece is hand-designed with precision and made to last. Streetwear that feels luxurious, fits perfectly, and stands out effortlessly.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <Feature icon={Hand} title="Handcrafted Designs" desc="Sketched, cut, and finished by hand" />
            <Feature icon={ShieldCheck} title="Premium Fabric" desc="Heavyweight GSM, long-lasting color" />
            <Feature icon={Feather} title="100% Comfort" desc="Soft-touch interior, relaxed drape" />
            <Feature icon={Flag} title="Made in India" desc="Crafted locally with pride" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/10">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1675784332655-675d1a1ddcf6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0dXJlfGVufDB8MHx8fDE3NjM3OTczMDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="fabric texture" />
          </div>
          <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/10 mt-10">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497997092403-f091fcf5b6c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxzdGl0Y2hpbmd8ZW58MHwwfHx8MTc2Mzc5NzMwN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="stitching" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quality
