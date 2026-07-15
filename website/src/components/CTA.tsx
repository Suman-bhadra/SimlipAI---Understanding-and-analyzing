import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-4x1 glass p-12 lg:p-20 text-center"
        >

          {/* Background Glow */}

          <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-sky-500/20 blur-[120px] rounded-full" />

          <div className="relative z-10 w-full flex flex-col items-center">

            <span className="inline-flex items-center px-4 py-2 rounded-full glass text-sm mb-6">
              🚀 Start Learning Smarter
            </span>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Ready to Simplify
              <span className="block text-violet-500">
                Every Complex Topic?
              </span>
            </h2>

            <p className="mt-6 w-full max-w-4xl text-center text-zinc-400 text-xl leading-10">
  Download SimplifAI and transform research papers, PDFs,
  websites and YouTube videos into simple explanations
  within seconds.
</p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">

              <button className="btn-primary flex items-center gap-2 px-8 py-4">
                <Download size={20} />
                Download for Chrome
              </button>

              

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}