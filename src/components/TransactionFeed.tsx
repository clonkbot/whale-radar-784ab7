import { motion } from 'framer-motion';

interface Transaction {
  id: number;
  asset: string;
  amount: string;
  usdValue: string;
  address: string;
  time: string;
  size: 'mega' | 'large' | 'medium';
}

const buyTransactions: Transaction[] = [
  { id: 1, asset: 'BTC', amount: '1,247', usdValue: '$78.2M', address: '0x7f2e...9a3c', time: '2 min ago', size: 'mega' },
  { id: 2, asset: 'ETH', amount: '15,892', usdValue: '$43.4M', address: '0x3a91...c7d2', time: '5 min ago', size: 'mega' },
  { id: 3, asset: 'SOL', amount: '892,000', usdValue: '$15.8M', address: 'Gh7k...mN2p', time: '8 min ago', size: 'large' },
  { id: 4, asset: 'BTC', amount: '342', usdValue: '$21.4M', address: 'bc1q...8f2k', time: '12 min ago', size: 'large' },
  { id: 5, asset: 'ETH', amount: '8,420', usdValue: '$23.0M', address: '0x8c4f...2e1a', time: '15 min ago', size: 'large' },
  { id: 6, asset: 'LINK', amount: '2.4M', usdValue: '$8.2M', address: '0x2f8a...c93b', time: '18 min ago', size: 'medium' },
  { id: 7, asset: 'BTC', amount: '189', usdValue: '$11.8M', address: '0x9d2e...4f7c', time: '23 min ago', size: 'medium' },
  { id: 8, asset: 'ETH', amount: '4,200', usdValue: '$11.5M', address: '0x1b3c...8a9d', time: '28 min ago', size: 'medium' },
];

const sellTransactions: Transaction[] = [
  { id: 1, asset: 'ETH', amount: '22,500', usdValue: '$61.5M', address: '0x4e2f...7b3a', time: '1 min ago', size: 'mega' },
  { id: 2, asset: 'BTC', amount: '847', usdValue: '$53.1M', address: 'bc1q...9k2m', time: '4 min ago', size: 'mega' },
  { id: 3, asset: 'SOL', amount: '1.2M', usdValue: '$21.3M', address: 'Fk9m...pQ3r', time: '7 min ago', size: 'large' },
  { id: 4, asset: 'AVAX', amount: '892K', usdValue: '$12.8M', address: '0x7f3a...2c8b', time: '11 min ago', size: 'large' },
  { id: 5, asset: 'ETH', amount: '6,750', usdValue: '$18.4M', address: '0x2d9c...5e4f', time: '14 min ago', size: 'large' },
  { id: 6, asset: 'BTC', amount: '124', usdValue: '$7.8M', address: '0x8a1b...3c7d', time: '19 min ago', size: 'medium' },
  { id: 7, asset: 'MATIC', amount: '15M', usdValue: '$5.4M', address: '0x3f2c...9a1e', time: '24 min ago', size: 'medium' },
  { id: 8, asset: 'ETH', amount: '2,890', usdValue: '$7.9M', address: '0x6c4d...1b8a', time: '29 min ago', size: 'medium' },
];

interface TransactionFeedProps {
  type: 'buy' | 'sell';
}

export default function TransactionFeed({ type }: TransactionFeedProps) {
  const transactions = type === 'buy' ? buyTransactions : sellTransactions;
  const colorClass = type === 'buy' ? 'emerald' : 'rose';

  const sizeStyles = {
    mega: {
      bg: 'bg-slate-900/80',
      border: type === 'buy' ? 'border-emerald-500/40' : 'border-rose-500/40',
      glow: type === 'buy' ? 'shadow-emerald-500/20' : 'shadow-rose-500/20',
    },
    large: {
      bg: 'bg-slate-900/60',
      border: type === 'buy' ? 'border-emerald-500/20' : 'border-rose-500/20',
      glow: '',
    },
    medium: {
      bg: 'bg-slate-900/40',
      border: 'border-slate-700/30',
      glow: '',
    },
  };

  return (
    <div className="space-y-2 md:space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-2 md:gap-3">
          <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-${colorClass}-400 animate-pulse`} />
          <h2 className="font-orbitron text-base md:text-lg font-semibold text-white">
            {type === 'buy' ? 'Whale Buys' : 'Whale Sells'}
          </h2>
          <span className="text-xs text-slate-500 font-mono">LIVE</span>
        </div>
        <span className="text-xs md:text-sm text-slate-500 font-mono">
          {transactions.length} transactions
        </span>
      </div>

      {/* Transaction List */}
      {transactions.map((tx, index) => {
        const style = sizeStyles[tx.size];
        return (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ x: 4 }}
            className={`relative p-3 md:p-4 ${style.bg} backdrop-blur-sm rounded-lg border ${style.border} ${style.glow ? `shadow-lg ${style.glow}` : ''} group cursor-pointer overflow-hidden`}
          >
            {/* Size indicator bar */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 ${
                type === 'buy' ? 'bg-emerald-500' : 'bg-rose-500'
              } ${tx.size === 'mega' ? 'opacity-100' : tx.size === 'large' ? 'opacity-60' : 'opacity-30'}`}
            />

            <div className="flex items-center justify-between gap-3 md:gap-4 pl-2 md:pl-3">
              {/* Asset & Amount */}
              <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs md:text-sm ${
                  type === 'buy' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                }`}>
                  {tx.asset}
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-1 md:gap-2">
                    <span className="font-mono text-base md:text-lg font-bold text-white truncate">
                      {tx.amount}
                    </span>
                    <span className="text-xs md:text-sm text-slate-500">{tx.asset}</span>
                  </div>
                  <span className={`text-xs md:text-sm font-semibold ${
                    type === 'buy' ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {tx.usdValue}
                  </span>
                </div>
              </div>

              {/* Address & Time */}
              <div className="flex flex-col items-end flex-shrink-0">
                <span className="text-[10px] md:text-xs text-slate-500 font-mono bg-slate-800/50 px-1.5 md:px-2 py-0.5 md:py-1 rounded hidden sm:block">
                  {tx.address}
                </span>
                <span className="text-[10px] md:text-xs text-cyan-500/60 mt-0.5 md:mt-1">{tx.time}</span>
              </div>

              {/* Whale size badge */}
              {tx.size === 'mega' && (
                <div className="absolute top-1 right-1 md:top-2 md:right-2">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[10px] md:text-xs font-mono font-bold px-1.5 md:px-2 py-0.5 rounded bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30"
                  >
                    MEGA
                  </motion.div>
                </div>
              )}
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className={`absolute inset-0 bg-gradient-to-r from-${colorClass}-500/5 via-transparent to-transparent`} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
