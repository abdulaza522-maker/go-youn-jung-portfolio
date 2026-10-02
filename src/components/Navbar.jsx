import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  const navLinks = [
    { label: 'ABOUT', id: 'about' },
    { label: 'WORK', id: 'work' },
    { label: 'CONTACT', id: 'contact' },
  ]

  return (
    <motion.nav
      className="fixed top-0 w-full h-24 z-50 bg-[#0f1115]/80 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-full px-6 sm:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection('home')}
          className="text-xl sm:text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GO YOUN JUNG<span className="text-[#00df8f]">.</span>
        </motion.button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-semibold text-gray-300 uppercase tracking-wider hover:text-[#00df8f] transition-smooth"
              whileHover={{ color: '#00df8f' }}
            >
              {link.label}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-6">
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="w-12 h-12 rounded-full bg-transparent border border-[#00df8f] flex items-center justify-center hover:bg-[#00df8f]/10 transition-smooth"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-3 h-3 rounded-full bg-[#00df8f]"></div>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-[#00df8f]"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden absolute top-24 left-0 right-0 bg-[#0d1116]/95 backdrop-blur-md border-b border-white/10"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0, height: menuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-semibold text-gray-300 uppercase tracking-wider hover:text-[#00df8f] transition-smooth text-left"
              whileHover={{ x: 8, color: '#00df8f' }}
            >
              {link.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
