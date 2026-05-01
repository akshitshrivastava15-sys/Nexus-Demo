import { ArrowUpRight } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
          {/* Logo image would go here: src/assets/logo-icon.png */}
          <div className="w-6 h-6 bg-black rounded-sm rotate-45" />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-1.5 py-1 pill container">
        {["Home", "Services", "Work", "Process", "Pricing"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
        <button className="bg-white text-black rounded-full px-4 py-1.5 text-sm font-medium flex items-center gap-1 ml-1 hover:bg-white/90 transition-colors">
          Get Started
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="md:hidden">
        <button className="liquid-glass-strong rounded-full px-4 py-2 text-sm font-medium">
          Menu
        </button>
      </div>
    </nav>
  )
}
