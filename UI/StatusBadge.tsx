import React from 'react';
import { motion } from 'framer-motion';

const StatusBadge: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed top-6 right-6 z-50 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700 backdrop-blur-md shadow-lg shadow-cyan-500/10 hover:border-cyan-500/50 transition-colors cursor-default"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span className="text-xs font-medium text-slate-300">
        Current: Lead Developer @ Nisgroup & AZM.AIO <span className="text-slate-500 ml-1">(June 2025 - Present)</span>
      </span>
    </motion.div>
  );
};

export default StatusBadge;