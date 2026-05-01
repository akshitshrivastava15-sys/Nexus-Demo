export const FeaturesChess = () => {
  return (
    <section className="py-32 px-8 lg:px-16 bg-black">
      <div className="flex flex-col items-center mb-24">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] text-center">
          Pro features. Zero complexity.
        </h2>
      </div>

      <div className="flex flex-col gap-32">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6">
              Designed to convert. Built to perform.
            </h3>
            <p className="text-white/60 font-body font-light text-sm md:text-base mb-8 max-w-lg">
              Every pixel is intentional. Our AI studies what works across thousands of top sites — then builds yours to outperform them all.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium">
              Learn more
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video">
              <img
                src="https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif"
                alt="Feature 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6">
              It gets smarter. Automatically.
            </h3>
            <p className="text-white/60 font-body font-light text-sm md:text-base mb-8 max-w-lg">
              Your site evolves on its own. AI monitors every click, scroll, and conversion — then optimizes in real time. No manual updates. Ever.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium">
              See how it works
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video">
              <img
                src="https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif"
                alt="Feature 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
