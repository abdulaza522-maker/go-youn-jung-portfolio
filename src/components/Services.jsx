import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const stages = [
  {
    id: 1,
    number: '01',
    title: 'BRIEFING',
    description:
      'We start by understanding your vision, goals, and target audience. This phase involves detailed discussions to align expectations and define the project scope.',
  },
  {
    id: 2,
    number: '02',
    title: 'ANALYTICS',
    description:
      'Deep dive into user research, competitor analysis, and market trends. We gather data to inform design decisions and identify opportunities for innovation.',
  },
  {
    id: 3,
    number: '03',
    title: 'PROTOTYPING',
    description:
      'Rapid wireframing and interactive prototypes to visualize the user journey. We test concepts early to validate ideas before committing to high-fidelity designs.',
  },
  {
    id: 4,
    number: '04',
    title: 'DESIGN',
    description:
      'Crafting pixel-perfect interfaces with meticulous attention to typography, color, spacing, and motion. Every element is intentional and purposeful.',
  },
  {
    id: 5,
    number: '05',
    title: 'ADAPTIVE',
    description:
      'Ensuring seamless experiences across all devices and screen sizes. Responsive design that maintains visual integrity and usability everywhere.',
  },
  {
    id: 6,
    number: '06',
    title: 'THE FINAL',
    description:
      'Final polish, documentation, and handoff. We deliver production-ready assets, design systems, and comprehensive guidelines for developers.',
  },
]

export default function Services() {
  const [openId, setOpenId] = useState(null)

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="services" className="py-32 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tighter leading-[0.9]">
            STAGES OF WEBSITE <br className="hidden sm:block" />
            <span className="text-stroke">DEVELOPMENT</span>
            <span className="text-[#00df8f]">.</span>
          </h2>
        </motion.div>

        {/* Accordion List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4"
        >
          {stages.map((stage) => (
            <motion.div
              key={stage.id}
              variants={itemVariants}
              className="border border-white/10 rounded-2xl overflow-hidden bg-[#14181f]/50 hover:border-[#00df8f]/30 transition-smooth"
            >
              {/* Header */}
              <motion.button
                onClick={() => toggleItem(stage.id)}
                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between gap-4 text-left"
                whileHover={{ backgroundColor: 'rgba(0, 223, 143, 0.03)' }}
              >
                <div className="flex items-center gap-4 sm:gap-6 flex-1">
                  <span className="text-2xl sm:text-3xl font-bold text-[#00df8f] opacity-50">{stage.number}</span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">{stage.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openId === stage.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openId === stage.id ? (
                    <Minus size={24} className="text-[#00df8f]" />
                  ) : (
                    <Plus size={24} className="text-gray-400" />
                  )}
                </motion.div>
              </motion.button>

              {/* Content */}
              <AnimatePresence>
                {openId === stage.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6 pt-2">
                      <p className="text-[#9ca3af] leading-relaxed sm:pl-16">{stage.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
