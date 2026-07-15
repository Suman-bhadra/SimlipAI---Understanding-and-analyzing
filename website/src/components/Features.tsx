import { motion } from "framer-motion";
import {
  Brain,
  MessageCircle,
  Lightbulb,
  Target,
  Star,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Simplify",
    description:
      "Convert complex research papers, PDFs and websites into simple, easy-to-understand explanations.",
  },
  {
    icon: MessageCircle,
    title: "AI Chat",
    description:
      "Ask follow-up questions and continue learning without leaving the current page.",
  },
  {
    icon: Lightbulb,
    title: "Key Concepts",
    description:
      "Instantly identify the most important concepts and understand them with one click.",
  },
  {
    icon: Target,
    title: "Reading Goals",
    description:
      "Choose Exam Preparation, Research, Interview Prep or Quick Understanding.",
  },
  {
    icon: Star,
    title: "Difficulty Meter",
    description:
      "Know whether the content is Beginner, Intermediate or Advanced before reading.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description:
      "Compatible with research papers, PDFs, educational websites and YouTube videos.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold uppercase tracking-widest">
            Features
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Everything You Need To Learn Faster
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto text-lg">
            SimplifAI combines AI-powered explanations with guided learning to
            help you understand complex topics in seconds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="glass rounded-3xl p-8 border border-white/10 hover:border-violet-500/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-violet-600/20 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-violet-400" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-zinc-400 leading-8">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}