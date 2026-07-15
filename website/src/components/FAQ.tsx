import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is SimplifAI?",
    answer:
      "SimplifAI is an AI-powered Chrome extension that simplifies research papers, PDFs, websites and YouTube videos into easy-to-understand explanations.",
  },
  {
    question: "Does it work on YouTube videos?",
    answer:
      "Yes. SimplifAI can simplify transcripts and educational video content directly from YouTube.",
  },
  {
    question: "Can I ask follow-up questions?",
    answer:
      "Absolutely. The built-in AI Chat allows you to ask unlimited follow-up questions based on the selected content.",
  },
  {
    question: "What are Reading Goals?",
    answer:
      "Reading Goals allow the AI to tailor explanations for Exam Preparation, Research, Interview Preparation or Quick Understanding.",
  },
  {
    question: "Which websites are supported?",
    answer:
      "SimplifAI works with research papers, PDFs, blogs, documentation websites and educational platforms.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28">
      <div className="container max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold uppercase tracking-widest">
            FAQ
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-zinc-400 mt-5 text-lg">
            Everything you need to know about SimplifAI.
          </p>
        </motion.div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="glass rounded-2xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="text-lg font-medium">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {active === index && (

                <div className="px-6 pb-6">

                  <p className="text-zinc-400 leading-8">
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}