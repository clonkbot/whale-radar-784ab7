import { motion } from 'framer-motion';

interface WhaleCardProps {
  title: string;
  subtitle: string;
  amount: string;
  usdValue: string;
  address: string;
  type: 'buy' | 'sell' | 'alert' | 'unusual';
  time: string;
}

export default function WhaleCard({
  title,
  subtitle,
  amount,
  usdValue,
  address,
  type,
  time,
}: WhaleCardProps) {
  const typeStyles = {
    buy: {
      border: 'border-emerald-500/30',
      glow: 'shadow-emerald-500/10',
      badge: 'bg-emerald-500/20 text-emerald-400',
      icon: '↑',
    },
    sell: {
      border: 'border-rose-500/30',
      glow: 'shadow-rose-500/10',
      badge: 'bg-rose-500/20 text-rose-400',
      icon: '↓',
    },
    alert: {
      border: 'border-amber-500/30',
      glow: 'shadow-amber-500/10',
      badge: 'bg-amber-500/20 text-amber-400',
      icon: '!',
    },
    unusual: {
      border: 'border-purple-500/30',
      glow: 'shadow-purple-500/10',
      badge: 'bg-purple-500/20 text-purple-400',
      icon: '?',
    },
  };

  const style = typeStyles[type];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={`relative p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm rounded-xl border ${style.border} shadow-lg ${style.glow} overflow-hidden group`}
    >
      {/* Ping indicator */}
      <motion.div
        className={`absolute top-3 right-3 md:top-4 md:right-4 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${style.badge.replace('text-', 'bg-').replace('/20', '')}`}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 overflow-hidden">
        <div className={`absolute -top-8 -left-8 w-16 h-16 rotate-45 ${style.badge.split(' ')[0]}`} />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div>
            <h3 className="font-orbitron text-sm md:text-base font-semibold text-white mb-1 pr-6">
              {title}
            </h3>
            <p className="text-[10px] md:text-xs text-slate-500 font-mono">{subtitle}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-mono text-xl md:text-2xl font-bold text-white">
                {amount}
              </span>
              <span className={`text-xs md:text-sm font-semibold ${style.badge.split(' ')[1]}`}>
                {style.icon}
              </span>
            </div>
            <span className="text-xs md:text-sm text-slate-400 font-mono">{usdValue}</span>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1">
            <span className="text-[10px] md:text-xs text-slate-500 font-mono bg-slate-800/50 px-2 py-1 rounded">
              {address}
            </span>
            <span className="text-[10px] md:text-xs text-cyan-500/60">{time}</span>
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent`} />
      </div>
    </motion.div>
  );
}
