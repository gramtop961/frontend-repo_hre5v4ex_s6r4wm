import React from 'react'

const About = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4" style={{fontFamily:'Anton, League Spartan, Inter'}}>About B4B</h3>
          <div className="h-0.5 w-16 bg-[#C62828] mb-6"></div>
          <p className="text-zinc-300 leading-relaxed">
            B4B is a premium streetwear label built for the next generation. Designed slow, crafted by hand, and made for everyday confidence. We blend clean minimalism with bold oversized silhouettes to create fits that feel iconic—without a luxury price tag.
          </p>
        </div>
        <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" alt="model in hoodie" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default About
