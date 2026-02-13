import { motion } from 'framer-motion';

interface ExchangeData {
  name: string;
  inflow: string;
  outflow: string;
  netFlow: string;
  isPositive: boolean;
  change24h: string;
  logo: string;
}

const exchanges: ExchangeData[] = [
  { name: 'Binance', inflow: '$892M', outflow: '$1.2B', netFlow: '-$308M', isPositive: false, change24h: '-12.4%', logo: 'B' },
  { name: 'Coinbase', inflow: '$456M', outflow: '$234M', netFlow: '+$222M', isPositive: true, change24h: '+8.2%', logo: 'C' },
  { name: 'Kraken', inflow: '$178M', outflow: '$312M', netFlow: '-$134M', isPositive: false, change24h: '-5.7%', logo: 'K' },
  { name: 'OKX', inflow: '$567M', outflow: '$489M', netFlow: '+$78M', isPositive: true, change24h: '+3.2%', logo: 'O' },
  { name: 'Bybit', inflow: '$234M', outflow: '$198M', netFlow: '+$36M', isPositive: true, change24h: '+1.8%', logo: 'BY' },
  { name: 'KuCoin', inflow: '$123M', outflow: '$267M', netFlow: '-$144M', isPositive: false, change24h: '-9.3%', logo: 'KC' },
];

export default function ExchangeMovements() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 md:mb-6">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-cyan-400 animate-pulse" />
          <h2 className="font-orbitron text-base md:text-lg font-semibold text-white">
            Exchange Wallet Flows
          </h2>
          <span className="text-xs text-slate-500 font-mono">24H</span>
        </div>
        <div className="flex gap-3 md:gap-4 text-[10px] md:text-xs font-mono">
          <span className="flex items-center gap-1 md:gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-400">Outflow (Bullish)</span>
          </span>
          <span className="flex items-center gap-1 md:gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span className="text-slate-400">Inflow (Bearish)</span>
          </span>
        </div>
      </div>

      {/* Exchange Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
        {exchanges.map((exchange, index) => (
          <motion.div
            key={exchange.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`relative p-4 md:p-5 bg-slate-900/60 backdrop-blur-sm rounded-xl border ${
              exchange.isPositive ? 'border-emerald-500/30' : 'border-rose-500/30'
            } overflow-hidden group cursor-pointer`}
          >
            {/* Background glow */}
            <div
              className={`absolute inset-0 opacity-5 ${
                exchange.isPositive
                  ? 'bg-gradient-to-br from-emerald-500 to-transparent'
                  : 'bg-gradient-to-br from-rose-500 to-transparent'
              }`}
            />

            {/* Header */}
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-slate-800 flex items-center justify-center font-mono font-bold text-cyan-400 text-sm md:text-base">
                  {exchange.logo}
                </div>
                <div>
                  <h3 className="font-orbitron text-sm md:text-base font-semibold text-white">
                    {exchange.name}
                  </h3>
                  <span className={`text-[10px] md:text-xs font-mono ${
                    exchange.isPositive ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {exchange.change24h}
                  </span>
                </div>
              </div>

              {/* Net flow indicator */}
              <div className={`text-right`}>
                <div className={`text-base md:text-lg font-mono font-bold ${
                  exchange.isPositive ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {exchange.netFlow}
                </div>
                <span className="text-[10px] md:text-xs text-slate-500">Net Flow</span>
              </div>
            </div>

            {/* Flow bars */}
            <div className="space-y-2 md:space-y-3">
              {/* Inflow */}
              <div>
                <div className="flex justify-between text-[10px] md:text-xs font-mono mb-1">
                  <span className="text-slate-400">Inflow</span>
                  <span className="text-rose-400">{exchange.inflow}</span>
                </div>
                <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 40 + 30}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-rose-600 to-rose-400 rounded-full"
                  />
                </div>
              </div>

              {/* Outflow */}
              <div>
                <div className="flex justify-between text-[10px] md:text-xs font-mono mb-1">
                  <span className="text-slate-400">Outflow</span>
                  <span className="text-emerald-400">{exchange.outflow}</span>
                </div>
                <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 40 + 30}%` }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden opacity-10">
              <div className={`absolute bottom-[-32px] right-[-32px] w-16 h-16 rounded-full ${
                exchange.isPositive ? 'bg-emerald-500' : 'bg-rose-500'
              }`} />
            </div>

            {/* Hover highlight */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-4 md:mt-6 p-4 md:p-5 bg-slate-900/40 backdrop-blur-sm rounded-xl border border-cyan-900/30"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center">
            <div className="text-lg md:text-2xl font-mono font-bold text-white">$2.45B</div>
            <div className="text-[10px] md:text-xs text-slate-500 font-mono mt-1">Total Inflow</div>
          </div>
          <div className="text-center">
            <div className="text-lg md:text-2xl font-mono font-bold text-white">$2.70B</div>
            <div className="text-[10px] md:text-xs text-slate-500 font-mono mt-1">Total Outflow</div>
          </div>
          <div className="text-center">
            <div className="text-lg md:text-2xl font-mono font-bold text-emerald-400">-$250M</div>
            <div className="text-[10px] md:text-xs text-slate-500 font-mono mt-1">Net Exchange Flow</div>
          </div>
          <div className="text-center">
            <div className="text-lg md:text-2xl font-mono font-bold text-cyan-400">847</div>
            <div className="text-[10px] md:text-xs text-slate-500 font-mono mt-1">Whale Txns</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
