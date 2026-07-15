import {
  BrainCircuit,
  Mail,
  Heart,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container py-16">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 rounded-2xl bg-linear-to from-violet-500 to-violet-700 flex items-center justify-center">

                <BrainCircuit size={24} className="text-white" />

              </div>

              <h2 className="logo-font text-4xl">
                Simplif<span className="text-violet-500">AI</span>
              </h2>

            </div>

            <p className="text-zinc-400 leading-8">
              AI-powered Chrome extension that transforms complex
              content into simple, interactive learning experiences.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Product
            </h3>

            <div className="flex flex-col gap-3 text-zinc-400">

              <a href="#features" className="hover:text-white transition">
                Features
              </a>

              <a href="#demo" className="hover:text-white transition">
                Demo
              </a>

              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Resources
            </h3>

            <div className="flex flex-col gap-3 text-zinc-400">

              <a href="#">Documentation</a>

              <a href="#">Privacy Policy</a>

              <a href="#">Terms of Service</a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Connect
            </h3>

            <div className="flex gap-4">

              

              <a
                href="mailto:contact@simplifai.com"
                className="glass p-3 rounded-xl hover:bg-violet-600/20 transition"
              >
                <Mail size={20} />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-500 text-sm">
            © {year} SimplifAI. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-zinc-500 text-sm">
            Built with <Heart size={15} className="text-red-500" /> for learners.
          </p>

        </div>

      </div>
    </footer>
  );
}