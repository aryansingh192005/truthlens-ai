import { motion } from "framer-motion";

export default function AIVisual() {
  return (
    <div className="relative flex h-[520px] w-full items-center justify-center">

      {/* Glow */}
      <div className="absolute h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Main Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        className="absolute h-80 w-80 rounded-full border border-blue-500/30"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
        className="absolute h-64 w-64 rounded-full border border-cyan-400/30"
      />

      {/* Center Orb */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 shadow-[0_0_80px_rgba(37,99,235,0.5)]"
      >
        <span className="text-5xl font-bold text-white">
          AI
        </span>
      </motion.div>

      {/* Floating Chips */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute left-10 top-16 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 backdrop-blur"
      >
        <p className="text-sm text-green-400">
          REAL
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute right-8 bottom-20 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 backdrop-blur"
      >
        <p className="text-sm text-red-400">
          FAKE
        </p>
      </motion.div>

    </div>
  );
}