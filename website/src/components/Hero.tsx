import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  BookOpen,
  Brain,
  MessageCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-40 pb-24">
      <div className="container grid lg:grid-cols-2 gap-28 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="glass inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm mb-10">
            <Sparkles size={16} />
            AI-Powered Chrome Extension
          </span>

          <h1 className="text-7xl font-bold leading-tight">
            Learn Faster.
            <br />
            <span className="text-violet-500">Understand Deeper.</span>
          </h1>

          <p className="mt-10 text-xl max-w-xl leading-9">
            SimplifAI transforms research papers, PDFs, websites and YouTube
            videos into simple explanations, summaries, key concepts and guided
            learning—all inside your browser.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">
            <a
  href="/SimplifAI-Extension.zip"
  download
  className="btn-primary flex items-center gap-2"
>
  <Download size={18} />
  Download for Chrome
</a>

            <button className="btn-secondary flex items-center gap-2">
              Live Demo
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <span className="glass px-5 py-3 rounded-full">📄 Research Papers</span>
            <span className="glass px-5 py-3 rounded-full">📑 PDFs</span>
            <span className="glass px-5 py-3 rounded-full">🌐 Websites</span>
            <span className="glass px-5 py-3 rounded-full">🎥 YouTube</span>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass p-10 rounded-3xl max-w-md mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">🧠 SimplifAI</h2>
              <span className="text-xs px-3 py-1 rounded-full bg-violet-600/20 text-violet-300">
                Live
              </span>
            </div>

            <div className="glass rounded-2xl p-4 mb-6">
              <p className="text-sm text-zinc-400 mb-2">Selected Content</p>
              <p className="text-sm">
                “Quantum entanglement is a physical phenomenon where...”
              </p>
            </div>

            <div className="glass rounded-2xl p-4 mb-6">
              <p className="text-sm text-zinc-400 mb-2">🎯 Reading Goal</p>
              <div className="rounded-xl bg-violet-600/20 px-4 py-2 text-violet-300">
                Exam Preparation
              </div>
            </div>

            <div className="space-y-4">
              <Feature icon={<BookOpen size={18} />} text="Simplify" />
              <Feature icon={<Brain size={18} />} text="Summary & Key Concepts" />
              <Feature icon={<MessageCircle size={18} />} text="AI Chat Ready" />
            </div>

            <div className="glass rounded-2xl p-5 mt-6">
              <p className="text-violet-300 font-medium">⭐ Difficulty</p>
              <h3 className="text-2xl mt-2">★★★★☆ Intermediate</h3>
            </div>

            <div className="glass rounded-2xl p-5 mt-6">
              <p className="font-medium mb-3">🧩 Key Concepts</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Eigenvalues</span>
                  <button className="text-violet-400 hover:underline">Explain</button>
                </div>
                <div className="flex justify-between items-center">
                  <span>Covariance Matrix</span>
                  <button className="text-violet-400 hover:underline">Explain</button>
                </div>
              </div>
            </div>

            <button className="btn-primary w-full mt-8">Generate</button>
          </div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-500 rounded-full blur-3xl opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="glass rounded-2xl p-5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center">
          {icon}
        </div>
        <span>{text}</span>
      </div>
      <span className="text-green-400 text-lg">✓</span>
    </div>
  );
}
