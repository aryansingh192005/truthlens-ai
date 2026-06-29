import { motion } from "framer-motion";
import { ImageIcon, Video } from "lucide-react";
import AIVisual from "./AIVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-24 pb-24"
    >
      <div className="mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold leading-tight text-white md:text-7xl"
          >
            Detect Deepfakes
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Before They Fool You
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-xl text-lg leading-8 text-slate-400"
          >
            TruthLens AI uses advanced artificial intelligence to detect
            manipulated images and videos with high confidence in just
            seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500">
              <ImageIcon size={20} />
              Upload Image
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-4 font-semibold text-slate-200 transition hover:border-blue-500">
              <Video size={20} />
              Upload Video
            </button>
          </motion.div>

        </div>

        {/* Right */}
        <AIVisual />

      </div>
    </section>
  );
}