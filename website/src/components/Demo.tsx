import { motion } from "framer-motion";
import { ArrowRight, Brain, Sparkles } from "lucide-react";

export default function Demo() {
  return (
    <section id="demo" className="py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold">INTERACTIVE DEMO</p>
          <h2 className="text-5xl font-bold mt-4">
            See SimplifAI in Action
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-zinc-400 text-lg">
            Highlight any difficult content and get an instant explanation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div className="glass rounded-3xl p-8">
            <p className="text-zinc-500 mb-4">Original Research Paper</p>

            <div className="rounded-2xl bg-zinc-900 p-6 leading-8 text-zinc-300">
              Quantum entanglement is a physical phenomenon in which two
              particles remain correlated even when separated by large
              distances...
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowRight className="hidden lg:block text-violet-500" size={42}/>
            <ArrowRight className="lg:hidden text-violet-500 rotate-90" size={42}/>
          </div>

        </div>

        <div className="mt-10 glass rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="text-violet-400"/>
            <h3 className="text-2xl font-semibold">SimplifAI Output</h3>
          </div>

          <div className="space-y-6">

            <div>
              <p className="text-violet-400 font-semibold mb-2">📖 Simplified Explanation</p>
              <p className="text-zinc-300">
                Imagine two magic coins. Even if you take one to another planet,
                flipping one instantly tells you about the other.
              </p>
            </div>

            <div>
              <p className="text-violet-400 font-semibold mb-2">🧩 Key Concepts</p>
              <div className="flex flex-wrap gap-3">
                {["Entanglement","Quantum State","Measurement"].map((t)=>(
                  <span key={t} className="glass rounded-full px-4 py-2">{t}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-violet-400 font-semibold mb-2">🎯 Reading Goal</p>
              <span className="glass rounded-full px-4 py-2 inline-block">
                Exam Preparation
              </span>
            </div>

            <div>
              <p className="text-violet-400 font-semibold mb-2">⭐ Difficulty</p>
              <p>★★★★☆ Intermediate</p>
            </div>

            <button className="btn-primary flex items-center gap-2">
              <Sparkles size={18}/>
              Ask Follow-up Question
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
