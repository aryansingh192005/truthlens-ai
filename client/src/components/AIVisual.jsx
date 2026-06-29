import { motion } from "framer-motion";
import { ShieldCheck, ScanSearch, Cpu } from "lucide-react";

export default function AIVisual() {
  return (
    <div className="relative flex h-[560px] w-full items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute h-[280px] w-[280px] rounded-full bg-cyan-400/20 blur-[100px]" />

      {/* Animated Rings */}
      {[340, 270, 200].map((size, i) => (
        <motion.div
          key={size}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{
            repeat: Infinity,
            duration: 35 - i * 8,
            ease: "linear",
          }}
          className="absolute rounded-full border border-blue-500/20"
          style={{
            width: size,
            height: size,
          }}
        />
      ))}

      {/* AI Core */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          boxShadow: [
            "0 0 30px rgba(37,99,235,.35)",
            "0 0 70px rgba(6,182,212,.55)",
            "0 0 30px rgba(37,99,235,.35)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400"
      >
        <span className="text-5xl font-bold text-white">AI</span>
      </motion.div>

      {/* Floating Cards */}

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute left-4 top-12 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-green-400" />
          <div>
            <p className="text-sm text-white">REAL</p>
            <p className="text-xs text-slate-400">Confidence 98%</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [12, -12, 12] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute right-4 bottom-12 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <ScanSearch className="text-red-400" />
          <div>
            <p className="text-sm text-white">DEEPFAKE</p>
            <p className="text-xs text-slate-400">Risk High</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ x: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-28 left-20 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <Cpu className="text-cyan-400" />
          <div>
            <p className="text-sm text-white">AI Analysis</p>
            <p className="text-xs text-slate-400">Processing...</p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}