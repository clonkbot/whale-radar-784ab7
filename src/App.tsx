import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RadarBackground from './components/RadarBackground';
import WhaleCard from './components/WhaleCard';
import TabNav from './components/TabNav';
import TransactionFeed from './components/TransactionFeed';
import ExchangeMovements from './components/ExchangeMovements';

type TabType = 'buyers' | 'sellers' | 'unusual' | 'exchanges';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('buyers');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-hidden relative">
      <RadarBackground />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-6 pb-4 px-4 md:pt-10 md:pb-8 md:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 md:gap-4 mb-2">
              <motion.div
                className="relative"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-cyan-400 to-teal-600 flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" className="opacity-30" />
                    <path d="M12 6c-3.5 0-6 2.5-6 6s2.5 6 6 6 6-2.5 6-6-2.5-6-6-6z" className="opacity-50" />
                    <path d="M12 9c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3z" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping" />
              </motion.div>
              <div>
                <h1 className="font-orbitron text-2xl md:text-4xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-400 to-cyan-500">
                  WHALE RADAR
                </h1>
                <p className="text-[10px] md:text-xs text-cyan-500/60 tracking-[0.2em] md:tracking-[0.3em] uppercase font-mono">
                  Deep Market Intelligence
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-4 md:gap-8 mt-4 md:mt-6 text-xs md:text-sm font-mono"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-400">24h Volume:</span>
                <span className="text-emerald-400 font-semibold">$2.4B</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-slate-400">Whales Active:</span>
                <span className="text-cyan-400 font-semibold">847</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-slate-400">Alerts:</span>
                <span className="text-amber-400 font-semibold">12 new</span>
              </div>
            </motion.div>
          </div>
        </motion.header>

        {/* Tab Navigation */}
        <TabNav activeTab={activeTab} setActiveTab={setActiveTab} loaded={loaded} />

        {/* Main Content Area */}
        <main className="flex-1 px-4 md:px-8 pb-20 md:pb-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {activeTab === 'buyers' && (
                <motion.div
                  key="buyers"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TransactionFeed type="buy" />
                </motion.div>
              )}
              {activeTab === 'sellers' && (
                <motion.div
                  key="sellers"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TransactionFeed type="sell" />
                </motion.div>
              )}
              {activeTab === 'unusual' && (
                <motion.div
                  key="unusual"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    <WhaleCard
                      title="Dormant Wallet Awakens"
                      subtitle="Last active 847 days ago"
                      amount="15,420 ETH"
                      usdValue="$42.1M"
                      address="0x742d...8f29"
                      type="alert"
                      time="2 min ago"
                    />
                    <WhaleCard
                      title="Unusual Accumulation"
                      subtitle="Same entity, 47 transactions"
                      amount="2,847 BTC"
                      usdValue="$178.2M"
                      address="bc1qxy...mn3k"
                      type="unusual"
                      time="14 min ago"
                    />
                    <WhaleCard
                      title="Flash Loan Detection"
                      subtitle="Arbitrage pattern identified"
                      amount="892,000 USDC"
                      usdValue="$892K"
                      address="0x8a2f...c341"
                      type="alert"
                      time="23 min ago"
                    />
                    <WhaleCard
                      title="Whale Wallet Split"
                      subtitle="Distributing to 12 addresses"
                      amount="8,200 ETH"
                      usdValue="$22.4M"
                      address="0x3f91...7e2a"
                      type="unusual"
                      time="31 min ago"
                    />
                  </div>
                </motion.div>
              )}
              {activeTab === 'exchanges' && (
                <motion.div
                  key="exchanges"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExchangeMovements />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-4 md:py-6 border-t border-cyan-900/20">
          <p className="text-center text-[10px] md:text-xs text-slate-600 font-mono tracking-wide">
            Requested by <span className="text-slate-500">@pokebasevibe</span> · Built by <span className="text-slate-500">@clonkbot</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
