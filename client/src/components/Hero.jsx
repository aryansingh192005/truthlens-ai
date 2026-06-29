import { motion } from "framer-motion";
import { ImageIcon, Video } from "lucide-react";
import AIVisual from "./AIVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-24 pb-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[-120px] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-[-120px] bottom-[-120px] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Content */}
        <div className="max-w-2xl">

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white lg:text-7xl"
          >
            Detect Deepfakes
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Before They Fool You
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-8 max-w-xl text-lg leading-8 text-slate-400"
          >
            TruthLens AI analyzes images and videos using advanced artificial
            intelligence to detect deepfakes, estimate confidence, and provide
            results in seconds. Built for creators, journalists, researchers,
            and security professionals.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition duration-300 hover:scale-105 hover:bg-blue-500">
              <ImageIcon size={20} />
              Upload Image
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-8 py-4 font-semibold text-slate-200 transition duration-300 hover:scale-105 hover:border-blue-500 hover:bg-slate-900">
              <Video size={20} />
              Upload Video
            </button>
          </motion.div>

          {/* Feature Pills */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {[
              ["bg-green-400", "AI Powered"],
              ["bg-cyan-400", "Image & Video"],
              ["bg-blue-400", "Confidence Score"],
            ].map(([color, text]) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
              >
                <span className={`h-2 w-2 rounded-full ${color}`} />
                <span className="text-sm text-slate-300">
                  {text}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AIVisual />
        </motion.div>

      </div>
    </section>
  );
}