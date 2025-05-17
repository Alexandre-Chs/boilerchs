import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <nav className="flex justify-between items-center max-w-screen-xl mx-auto h-[70px] relative">
      <div className="flex items-center shrink-0">
        <span className="text-xl font-bold ml-2 navbar-text">BoilerChs</span>
      </div>
      {/* Desktop links */}
      <div className="hidden md:flex items-center justify-center flex-grow space-x-16 px-4">
        <a
          href="#features"
          className="text-sm navbar-text hover:text-white transition-colors duration-200"
        >
          Features
        </a>
        <a
          href="#faq"
          className="text-sm navbar-text hover:text-white transition-colors duration-200"
        >
          FAQ
        </a>
        <a
          href="#pricing"
          className="text-sm navbar-text hover:text-white transition-colors duration-200"
        >
          Pricing
        </a>
        <a
          href="#about"
          className="text-sm navbar-text hover:text-white transition-colors duration-200"
        >
          About
        </a>
      </div>
      <div className="hidden md:flex cursor-pointer px-4 py-1 rounded-xl bg-violet-800 hover:bg-violet-500 text-white font-base text-sm transition shrink-0 items-center group gap-x-1">
        <a href="/sign-in">Get started</a>
        <ArrowRight
          size={16}
          className="group-hover:translate-x-2 transition-transform duration-200 ease-in-out"
        />
      </div>

      <button
        className="md:hidden p-2 rounded-lg text-white bg-violet-800 hover:bg-violet-500 transition z-30"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="fixed inset-0 z-20 bg-black/70" aria-hidden="true" onClick={closeMenu} />
      )}

      {/* mobile panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white text-black shadow-2xl p-8 z-30 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold">BoilerChs</span>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <a
          href="#features"
          className="py-3 text-base font-medium hover:text-violet-700 transition-colors block"
          onClick={closeMenu}
        >
          Features
        </a>
        <a
          href="#faq"
          className="py-3 text-base font-medium hover:text-violet-700 transition-colors block"
          onClick={closeMenu}
        >
          FAQ
        </a>
        <a
          href="#pricing"
          className="py-3 text-base font-medium hover:text-violet-700 transition-colors block"
          onClick={closeMenu}
        >
          Pricing
        </a>
        <a
          href="#about"
          className="py-3 text-base font-medium hover:text-violet-700 transition-colors block"
          onClick={closeMenu}
        >
          About
        </a>
        <a
          href="/sign-in"
          className="mt-8 inline-flex items-center gap-x-2 px-4 py-2 rounded-xl bg-violet-800 hover:bg-violet-500 text-white font-base text-sm transition w-fit"
          onClick={closeMenu}
        >
          Get started <ArrowRight size={16} />
        </a>
      </aside>
    </nav>
  )
}

export default Navbar
