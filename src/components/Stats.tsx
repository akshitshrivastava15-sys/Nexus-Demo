import { HlsVideo } from './HlsVideo'

const stats = [
  { value: "200+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3.2x", label: "More conversions" },
  { value: "5 days", label: "Average delivery" }
]

export const Stats = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-32 px-8 lg:px-16">
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
        desaturated
      />

      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-1 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-1 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="liquid-glass rounded-3xl p-12 md:p-16 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start">
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 font-body font-light text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
