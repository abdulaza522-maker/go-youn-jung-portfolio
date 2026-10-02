import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'

export default function Hero({ scrollY }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="home" className="min-h-screen grid-bg relative overflow-hidden pt-24 flex items-center">
      {/* Background Typography Graphic */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.02 }}
      >
        <div className="text-[20vw] font-bold text-white select-none">DESIGN</div>
      </motion.div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column - Text */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Subheading */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#00df8f]"></div>
            <span className="text-sm font-semibold text-[#9ca3af] uppercase tracking-widest">UX/UI Designer</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[0.9] tracking-tighter">
              <div className="text-white">DIGITAL</div>
              <div className="flex items-baseline gap-2">
                <span className="text-stroke">EXPERIENCES</span>
                <span className="text-[#00df8f] text-5xl sm:text-6xl lg:text-7xl">.</span>
              </div>
            </div>
          </motion.div>

          {/* Body Text */}
          <motion.p variants={itemVariants} className="text-lg text-[#9ca3af] leading-relaxed max-w-md">
            I craft premium digital experiences that blend aesthetics with functionality. Award-winning designer specializing in UI/UX, web design, and interactive motion.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a
              href="#work"
              className="px-8 py-4 rounded-full bg-gradient-accent text-black font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#00df8f]/50 transition-smooth"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowUpRight size={18} />
            </motion.a>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-smooth"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
              <div className="w-2 h-2 rounded-full bg-[#00df8f]"></div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column - Interactive ID Card */}
        <motion.div
          className="flex justify-center items-center relative h-[400px] lg:h-[460px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Floating badge assembly: lanyard + card move together */}
          <motion.div
            className="relative flex flex-col items-center"
            animate={{ y: [0, -15, 0], rotateZ: [-1, 1, -1] }}
            transition={{
              y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
              rotateZ: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
            }}
          >
            {/* Lanyard Strip — extends upward off-screen */}
            <div className="absolute -top-[400px] left-1/2 -translate-x-1/2 w-9 h-[420px] bg-gradient-to-b from-transparent via-gray-700/70 to-gray-600 rounded-b-md z-0" />
            <div className="absolute -top-[400px] left-1/2 -translate-x-1/2 w-3 h-[420px] bg-gradient-to-b from-transparent to-[#00df8f]/40 z-0" />
            {/* Clip */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-8 rounded-md bg-gradient-to-b from-gray-500 to-gray-700 border border-white/20 z-30 shadow-lg" />

            {/* ID Card */}
            <motion.div
              drag
              dragElastic={0.2}
              dragConstraints={{ left: -60, right: 60, top: -60, bottom: 60 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragSnapToOrigin
              className="relative w-64 sm:w-72 h-80 rounded-2xl bg-gradient-to-br from-[#14181f] to-[#0d1116] border border-white/10 shadow-2xl shadow-black/60 cursor-grab active:cursor-grabbing overflow-hidden z-10"
            >
              {/* Card Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00df8f]/5 to-transparent pointer-events-none" />

              {/* Portrait Image */}
              <div className="h-60 bg-gray-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/portrait.jpg"
                  alt="Go Youn Jung Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Card Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d1116] via-[#0d1116]/90 to-transparent flex flex-col justify-end p-5">
                <p className="text-sm font-bold tracking-wider">GO YOUN JUNG<span className="text-[#00df8f]">.</span></p>
                <p className="text-xs text-[#9ca3af] font-light mt-0.5">Lead UX/UI Designer</p>
              </div>

              {/* Inner Border */}
              <div className="absolute inset-3 rounded-xl border border-white/5 pointer-events-none" />

              {/* Punch hole */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-2 rounded-full bg-black/60 border border-white/10" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
