import { motion } from 'framer-motion';

type TabType = 'buyers' | 'sellers' | 'unusual' | 'exchanges';

interface TabNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  loaded: boolean;
}

const tabs: { id: TabType; label: string; icon: JSX.Element }[] = [
  {
    id: 'buyers',
    label: 'Buyers',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    ),
  },
  {
    id: 'sellers',
    label: 'Sellers',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    ),
  },
  {
    id: 'unusual',
    label: 'Unusual',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'exchanges',
    label: 'Exchanges',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
      </svg>
    ),
  },
];

export default function TabNav({ activeTab, setActiveTab, loaded }: TabNavProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="px-4 md:px-8 mb-4 md:mb-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-1 md:gap-2 p-1 md:p-1.5 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-cyan-900/30 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 min-w-[80px] flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-6 py-3 md:py-3.5 rounded-lg font-mono text-xs md:text-sm tracking-wide transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-cyan-300'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg border border-cyan-500/30"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10 hidden sm:block">{tab.icon}</span>
              <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
              {tab.id === 'unusual' && (
                <span className="relative z-10 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 text-[10px] font-bold bg-amber-500/20 text-amber-400 rounded-full">
                  4
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
