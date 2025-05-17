import { ArrowRight } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-screen-xl mx-auto h-[70px]">
      <div className="flex items-center shrink-0">
        <span className="text-xl font-bold ml-2">BoilerChs</span>
      </div>
      <div className="hidden md:flex items-center justify-center flex-grow space-x-16 px-4">
        <a
          href="#features"
          className="text-sm font-light text-foreground/75 hover:text-white transition-colors duration-200"
        >
          Features
        </a>
        <a
          href="#faq"
          className="text-sm font-light text-foreground/75 hover:text-white transition-colors duration-200"
        >
          FAQ
        </a>
        <a
          href="#pricing"
          className="text-sm font-light text-foreground/75 hover:text-white transition-colors duration-200"
        >
          Pricing
        </a>
        <a
          href="#about"
          className="text-sm font-light text-foreground/75 hover:text-white transition-colors duration-200"
        >
          About
        </a>
      </div>
      <div className="cursor-pointer px-4 py-1 rounded-xl bg-violet-800 hover:bg-violet-500 text-white font-base text-sm transition shrink-0 flex items-center group gap-x-1">
        <a href="/sign-in">Get started</a>
        <ArrowRight
          size={16}
          className="group-hover:translate-x-2 transition-transform duration-200 ease-in-out"
        />
      </div>
    </nav>
  )
}

export default Navbar
