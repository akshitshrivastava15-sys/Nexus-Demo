import { HlsVideo } from './HlsVideo'

export const StartSection = () => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden py-32 px-4">
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-1 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-1 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-8">
          How It Works
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
          You dream it. We ship it.
        </h2>

        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-lg mb-12">
          Share your vision. Our AI handles the rest — wireframes, design, code, launch. All in days, not quarters.
        </p>

        <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium">
          Get Started
        </button>
      </div>
    </section>
  )
}
