import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onLoadingComplete: () => void;
  fadeOut: boolean;
}

export function LoadingScreen({ onLoadingComplete, fadeOut }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      onLoadingComplete();
      return;
    }
    const t = setTimeout(() => setProgress((p) => Math.min(p + 20, 100)), 400);
    return () => clearTimeout(t);
  }, [progress, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="w-10 h-10 border-2 border-gray-200 border-t-brand-500 rounded-full animate-spin mb-6" />
          <h1 className="text-2xl font-bold text-brand-600 tracking-tight mb-5">MEDIMARC</h1>
          <div className="w-32 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-brand-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-3 text-xs text-gray-400">Loading...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
