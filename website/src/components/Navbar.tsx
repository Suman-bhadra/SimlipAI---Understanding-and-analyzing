import { BrainCircuit, Download, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container pt-5">
        <div className="glass rounded-2xl border border-white/10 backdrop-blur-xl px-6 h-20 flex items-center justify-between">

          <a href="#" className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center shadow-lg shadow-violet-700/30">
              <BrainCircuit size={24} className="text-white" />
            </div>

            <div>
              <h1 className="logo-font text-4xl leading-none text-white">
                Simplif<span className="text-violet-500">AI</span>
              </h1>
              <p className="text-xs text-zinc-400 mt-1">
                Learn Faster. Understand Deeper.
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-10 text-[15px]">
            <a href="#features" className="hover:text-violet-400 transition">Features</a>
            <a href="#demo" className="hover:text-violet-400 transition">Demo</a>
            <a href="#faq" className="hover:text-violet-400 transition">FAQ</a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="btn-primary flex items-center gap-2 px-6">
              <Download size={18}/>
              Add to Chrome
            </button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>

        {open && (
          <div className="glass mt-3 rounded-2xl p-6 lg:hidden">
            <div className="flex flex-col gap-5">
              <a href="#features" onClick={()=>setOpen(false)}>Features</a>
              <a href="#demo" onClick={()=>setOpen(false)}>Demo</a>
              <a href="#faq" onClick={()=>setOpen(false)}>FAQ</a>

              <button className="btn-primary flex items-center justify-center gap-2 mt-2">
                <Download size={18}/>
                Add to Chrome
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
