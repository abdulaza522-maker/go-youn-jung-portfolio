import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    'UI/UX Design',
    'Figma',
    'React.js',
    'Framer Motion',
    'Tailwind CSS',
    'Adobe Creative Suite',
    'Webflow',
    'Interaction Design',
    'Prototyping',
    'Design Systems',
    'Typography',
    'Branding',
  ]

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
    <section id="about" className="py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tighter leading-[0.9]">
              DESIGNING WITH<br />PURPOSE<span className="text-[#00df8f]">.</span>
            </h2>
          </div>

          {/* Body Text */}
          <div className="space-y-4 text-[#9ca3af] leading-relaxed">
            <p>
              With a multidisciplinary background spanning graphic design, motion graphics, and front-end development, I bring a unique perspective to every project. My work bridges the gap between visual storytelling and technical execution.
            </p>
            <p>
              Every pixel, interaction, and transition is intentional. I believe that great design is invisible—it just works, feels right, and leaves a lasting impression.
            </p>
          </div>

          {/* Stats Row */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10"
          >
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold text-[#00df8f]">20+</div>
              <div className="text-sm text-[#9ca3af] mt-1 uppercase tracking-wider">Awards</div>
            </motion.div>
            <motion.div variants={itemVariants} className="border-l border-white/10 pl-8">
              <div className="text-4xl font-bold text-[#00df8f]">100%</div>
              <div className="text-sm text-[#9ca3af] mt-1 uppercase tracking-wider">Commitment</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column - My Toolkit */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold tracking-tight">
            My Toolkit<span className="text-[#00df8f]">.</span>
          </h3>

          {/* Glassmorphism Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="px-4 py-2 rounded-full border border-white/20 text-sm font-medium text-gray-300 hover:border-[#00df8f] hover:text-[#00df8f] hover:shadow-[0_0_15px_rgba(0,223,143,0.3)] transition-smooth cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
