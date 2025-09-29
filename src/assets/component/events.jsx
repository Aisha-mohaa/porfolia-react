import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

export default function Skills() {
  const skills = {
    design: [
      { name: "Figma", icon: <FaFigma className="text-pink-500 text-4xl" />, value: 80 },
    ],
    frontend: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-4xl" />, value: 100 },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" />, value: 85 },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500 text-4xl" />, value: 90 },
      { name: "React", icon: <FaReact className="text-sky-500 text-4xl animate-spin-slow" />, value: 80 },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" />, value: 75 },
      { name: "Express", icon: <SiExpress className="text-gray-700 text-4xl" />, value: 65 },
    ],
    tools: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-4xl" />, value: 70 },
      { name: "GitHub", icon: <FaGithub className="text-gray-800 text-4xl" />, value: 90 },
    ],
  };

  return (
    <div className="bg-gray-100 py-20 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
        Tech Stacks
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        <SkillCard title="Web Design" items={skills.design} delay={0} />
        <SkillCard title="Frontend" items={skills.frontend} delay={0.2} />
        <SkillCard title="Backend" items={skills.backend} delay={0.4} />
        <SkillCard title="Database & Tools" items={skills.tools} delay={0.6} />
      </div>
    </div>
  );
}

// Reusable Card Component
function SkillCard({ title, items, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition"
    >
      <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        {title}
      </h3>
      <div className="space-y-6">
        {items.map((skill, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="flex flex-col group">
            <div className="flex items-center gap-3 mb-2">
              {skill.icon}
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="ml-auto text-sm font-semibold text-gray-600">
                {skill.value}%
              </span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <motion.div
                className="h-3 rounded-full group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500"
                style={{ backgroundColor: "#6366f1" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                transition={{ duration: 1, delay: i * 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
