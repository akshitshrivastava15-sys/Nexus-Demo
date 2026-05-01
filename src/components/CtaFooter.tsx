import { HlsVideo } from './HlsVideo'

export const CtaFooter = () => {
  return (
    <section className="relative min-h-[800px] flex flex-col items-center justify-center overflow-hidden px-8 lg:px-16 pt-32 pb-8">
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-1 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-1 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mb-auto mt-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.85] mb-8">
          Your next website starts here.
        </h2>
        <p className="text-white/70 font-body font-light text-sm md:text-base max-w-lg mb-12">
          Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <button className="liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-medium w-full md:w-auto">
            Book a Call
          </button>
          <button className="bg-white text-black rounded-full px-8 py-3.5 text-sm font-medium w-full md:w-auto hover:bg-white/90 transition-colors">
            View Pricing
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/40 text-xs">
          © 2026 Studio. All rights reserved.
        </div>
        <div className="flex items-center gap-8">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-white/40 text-xs hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
