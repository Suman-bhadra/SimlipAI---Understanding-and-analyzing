//import { motion } from "framer-motion";
//import { Download } from "lucide-react";

export default function CTA() {
  return (
  /* <section className="py-28">
      <div className="container">

        <motion.div
           initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-4x1 glass p-12 lg:p-20 text-center"
        >

          {/* Background Glow *///}

         /* <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full" />
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

              

              

            </div>

          </div>

        </motion.div>

      </div>
    </section>*/
    <section className="hackathon-demo" style={{ border: '2px dashed #4F46E5', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
    <h3 style={{ color: '#4F46E5', marginTop: '0' }}>🛠️ Hackathon Prototype Installation</h3>
    <p>Follow these quick steps to test the fully functional Chrome Extension connected to our live Render backend:</p>
    
    {/* Direct Download Button */}
    <a href="/extension.zip" download="Extension.zip" style={{ display: 'inline-block', background: '#4F46E5', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold', marginBottom: '15px' }}>
        📥 Download Extension (ZIP)
    </a>

    {/* Step-by-Step Guide */}
    <ol style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.6' }}>
        <li><strong>Extract:</strong> Download the ZIP file above and extract (unzip) it on your computer.</li>
        <li><strong>Open Chrome:</strong> Go to a new tab and open extensions </li>
        <li><strong>Developer Mode:</strong> Toggle the <strong>Developer mode</strong> switch in the top-right corner to ON.</li>
        <li><strong>Load Unpacked:</strong> Click the <strong>Load unpacked</strong> button in the top-left corner and select your extracted folder!</li>
    </ol>
</section>
  );
}