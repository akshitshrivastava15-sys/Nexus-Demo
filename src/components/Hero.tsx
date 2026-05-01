import { motion } from 'motion/react'
import { ArrowUpRight, Play } from 'lucide-react'
import { BlurText } from './BlurText'

export const Hero = () => {
  return (
    <section className="relative overflow-visible h-[1000px] flex flex-col items-center justify-start pt-[150px] text-center px-4">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[20%] left-0 w-full h-auto object-contain z-0 pointer-events-none"
        poster="/images/hero_bg.jpeg"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />

      {/* Content */}
      <div className="z-10 flex flex-col items-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-3 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">New</span>
          <span className="text-white/80 text-xs font-medium mr-2">Introducing AI-powered web design.</span>
        </motion.div>

        <BlurText
          text="The Website Your Brand Deserves"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px] mb-8"
          delay={0.1}
        />

        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm md:text-base text-white/80 font-body font-light leading-tight max-w-lg mb-12"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined.
        </motion.p>

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center gap-6"
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 group">
            Get Started
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <Play className="w-3 h-3 fill-current" />
            </div>
            Watch the Film
          </button>
        </motion.div>
      </div>

      {/* Partners Bar */}
      <div className="mt-auto pb-8 pt-16 z-10 w-full overflow-hidden">
        <div className="flex flex-col items-center gap-8">
          <div className="liquid-glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-widest text-white/40 font-medium">
            Trusted by the teams behind
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-16 opacity-50">
            {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((partner) => (
              <span key={partner} className="text-2xl md:text-3xl font-heading italic text-white">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
