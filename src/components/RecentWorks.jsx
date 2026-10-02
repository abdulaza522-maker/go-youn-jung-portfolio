import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { asset } from '../lib/asset'

const projects = [
  {
    id: 1,
    category: 'Web Design',
    title: 'Fashion E-Commerce Platform',
    description: 'A premium shopping experience with immersive product galleries, seamless checkout flows, and personalized recommendations.',
    tags: ['UI/UX', 'React', 'E-Commerce'],
    image: 'images/shot-1.jpg',
  },
  {
    id: 2,
    category: 'Brand Identity',
    title: 'Luxury Watch Boutique',
    description: 'Complete brand redesign featuring elegant typography, refined color palettes, and sophisticated motion design.',
    tags: ['Branding', 'Motion', 'Web'],
    image: 'images/shot-2.jpg',
  },
  {
    id: 3,
    category: 'Mobile App',
    title: 'Fitness Tracking Dashboard',
    description: 'Clean, intuitive interface with real-time analytics, gamification elements, and social features for motivation.',
    tags: ['UI/UX', 'Mobile', 'Data Viz'],
    image: 'images/shot-3.jpg',
  },
  {
    id: 4,
    category: 'Portfolio',
    title: 'Creative Agency Showcase',
    description: 'Bold, cinematic landing experience with parallax scrolling, custom transitions, and dynamic content loading.',
    tags: ['Web Design', 'Motion', 'Webflow'],
    image: 'images/shot-4.jpg',
  },
]

export default function RecentWorks() {
  const [activeIdx, setActiveIdx] = useState(0)

  const handleCardClick = (index) => {
    if (index === activeIdx) {
      // Cycle front card to back
      setActiveIdx((activeIdx + 1) % projects.length)
    } else {
      // Pull clicked card to front
      setActiveIdx(index)
    }
  }

  return (
    <section id="work" className="py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-16"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tighter leading-[0.9]">
          RECENT WORKS<span className="text-[#00df8f]">.</span>
        </h2>
        <motion.button
          className="px-6 py-3 border border-white/20 rounded-full text-sm font-semibold hover:border-[#00df8f] hover:text-[#00df8f] transition-smooth flex items-center gap-2 w-fit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Projects
          <ArrowUpRight size={16} />
        </motion.button>
      </motion.div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Side - 3D Card Stack */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Stack Container */}
            <div
              className="relative h-[340px] sm:h-[450px] md:h-[480px]"
              style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
            >
              {projects.map((project, index) => {
                const diff = index - activeIdx
                const adjustedDiff = diff < 0 ? diff + projects.length : diff

                return (
                  <motion.div
                    key={project.id}
                    className="absolute top-0 left-0 right-0 h-[320px] sm:h-[420px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
                    style={{
                      zIndex: adjustedDiff === 0 ? 10 : 10 - adjustedDiff,
                    }}
                    animate={{
                      y: adjustedDiff * 35,
                      scale: 1 - adjustedDiff * 0.05,
                      rotateX: adjustedDiff * 2,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    onClick={() => handleCardClick(index)}
                    whileHover={adjustedDiff === 0 ? { scale: 1.02 } : {}}
                  >
                    <img
                      src={asset(project.image)}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIdx ? 'w-8 bg-[#00df8f]' : 'w-2 bg-white/30'
                  }`}
                  onClick={() => setActiveIdx(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side - Description Panel */}
        <motion.div
          className="lg:col-span-5 flex flex-col justify-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Category */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00df8f]"></div>
                <span className="text-xs font-semibold text-[#9ca3af] uppercase tracking-widest">
                  {projects[activeIdx].category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                {projects[activeIdx].title}
              </h3>

              {/* Description */}
              <p className="text-[#9ca3af] leading-relaxed">{projects[activeIdx].description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {projects[activeIdx].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border border-white/20 text-xs font-medium text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Explore Button */}
              <motion.button
                className="px-6 py-3 rounded-full bg-gradient-accent text-black font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-[#00df8f]/50 transition-smooth w-fit mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Project
                <ArrowUpRight size={18} />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
