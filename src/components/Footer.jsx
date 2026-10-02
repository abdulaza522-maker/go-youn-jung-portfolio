import { motion } from 'framer-motion'
import { ArrowRight, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="pt-32 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute bottom-0 left-0 right-0 text-center pointer-events-none opacity-[0.05]">
        <div className="text-[25vw] font-bold tracking-tighter leading-none -mb-10">CONTACT</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Top Row */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 pb-20">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tighter leading-[0.9]">
              HOW CAN I HELP<span className="text-[#00df8f]">?</span>
            </h2>
            <p className="text-[#9ca3af] text-lg leading-relaxed max-w-md">
              Let's collaborate on your next project. Whether it's a brand new website, a redesign, or a digital experience, I'm here to bring your vision to life.
            </p>
            <motion.a
              href="mailto:hello@goyounjung.design"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-gray-200 transition-smooth w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              hello@goyounjung.design
              <ArrowRight size={16} />
            </motion.a>
          </div>

          {/* Right Column - Links */}
          <div className="grid grid-cols-2 gap-12">
            {/* Menu */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-[#9ca3af] uppercase tracking-widest">Menu</h3>
              <ul className="space-y-3">
                {['About', 'Work', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      className="text-lg font-medium hover:text-[#00df8f] transition-smooth flex items-center gap-2"
                      whileHover={{ x: 8 }}
                    >
                      {item}
                      <ExternalLink size={14} className="opacity-50" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-[#9ca3af] uppercase tracking-widest">Socials</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Dribbble', url: 'https://dribbble.com/goyounjung' },
                  { label: 'LinkedIn', url: 'https://linkedin.com/in/goyounjung' },
                  { label: 'Twitter', url: 'https://twitter.com/goyounjung' },
                  { label: 'Instagram', url: 'https://instagram.com/goyounjung' },
                ].map((social) => (
                  <li key={social.label}>
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-[#00df8f] transition-smooth flex items-center gap-2"
                      whileHover={{ x: 8 }}
                    >
                      {social.label}
                      <ExternalLink size={14} className="opacity-50" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-[#9ca3af]">
          <div>© 2026 Go Youn Jung Portfolio. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#00df8f] transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#00df8f] transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#00df8f] transition-smooth">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
