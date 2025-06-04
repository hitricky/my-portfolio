import React, { useState, useEffect, createContext, useContext } from 'react';

interface Message {
  type: 'user' | 'support';
  text: string;
}

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  ru: {
    aiPoweredNft: "ИИ-анализ NFT",
    unlockNftMarket: "Откройте NFT рынок",
    withAiIntelligence: "с ИИ-аналитикой",
    heroDescription: "CryptoQuasar использует передовой искусственный интеллект для анализа трендов NFT рынка, прогнозирования движения цен и предоставления комплексной аналитики для умных торговых решений.",
    startFreeAnalysis: "Начать бесплатный анализ",
    watchDemo: "Смотреть демо",
    powerfulAiFeatures: "Мощные ИИ функции",
    featuresDescription: "Наши продвинутые алгоритмы предоставляют глубокую рыночную аналитику и прогнозы",
    marketAnalytics: "Рыночная аналитика",
    marketAnalyticsDesc: "Анализ NFT коллекций в реальном времени с прогнозами цен и определением трендов",
    aiPredictions: "ИИ прогнозы",
    aiPredictionsDesc: "Алгоритмы машинного обучения прогнозируют будущие движения цен с высокой точностью",
    smartAlerts: "Умные уведомления",
    smartAlertsDesc: "Получайте уведомления о значительных изменениях рынка и инвестиционных возможностях",
    liveMarketData: "Данные рынка в реальном времени",
    trackPerformance: "Отслеживайте производительность NFT с нашей продвинутой аналитической панелью",
    takeCryptoQuasar: "Берите CryptoQuasar везде",
    accessPowerful: "Получайте доступ к мощной NFT аналитике на любом устройстве через наше расширение для браузера и мобильное приложение",
    browserExtension: "Расширение браузера",
    mobileApp: "Мобильное приложение",
    joinUsers: "Присоединяйтесь к более чем 50,000+ пользователям, уже использующим CryptoQuasar",
    about: "О нас",
    features: "Функции",
    analytics: "Аналитика",
    download: "Скачать",
    supportGreeting: "Здравствуйте! Вам нужна помощь?",
    supportResponse: "Спасибо за ваше сообщение! Наш специалист ответит в течение нескольких минут.",
    writeMessage: "Напишите сообщение...",
    techSupport: "Техподдержка",
    online: "Онлайн",
    now: "Сейчас"
  },
  en: {
    aiPoweredNft: "AI-Powered NFT Analytics",
    unlockNftMarket: "Unlock NFT Market",
    withAiIntelligence: "with AI Intelligence",
    heroDescription: "CryptoQuasar uses advanced artificial intelligence to analyze NFT market trends, predict price movements, and provide comprehensive analytics for smart trading decisions.",
    startFreeAnalysis: "Start Free Analysis",
    watchDemo: "Watch Demo",
    powerfulAiFeatures: "Powerful AI Features",
    featuresDescription: "Our advanced algorithms provide deep market insights and predictive analytics",
    marketAnalytics: "Market Analytics",
    marketAnalyticsDesc: "Real-time analysis of NFT collections with price predictions and trend identification",
    aiPredictions: "AI Predictions",
    aiPredictionsDesc: "Machine learning algorithms predict future price movements with high accuracy",
    smartAlerts: "Smart Alerts",
    smartAlertsDesc: "Get notified about significant market changes and investment opportunities",
    liveMarketData: "Live Market Data",
    trackPerformance: "Track NFT performance with our advanced analytics dashboard",
    takeCryptoQuasar: "Take CryptoQuasar Everywhere",
    accessPowerful: "Access powerful NFT analytics on any device with our browser extension and mobile app",
    browserExtension: "Browser Extension",
    mobileApp: "Mobile App",
    joinUsers: "Join over 50,000+ users already using CryptoQuasar",
    about: "About",
    features: "Features",
    analytics: "Analytics",
    download: "Download",
    supportGreeting: "Hello! Do you need help?",
    supportResponse: "Thank you for your message! Our specialist will respond within a few minutes.",
    writeMessage: "Write a message...",
    techSupport: "Tech Support",
    online: "Online",
    now: "Now"
  }
};

const LanguageContext = createContext<{
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}>({
  language: 'ru',
  setLanguage: () => {},
  t: () => ''
});

const useLanguage = () => useContext(LanguageContext);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
  </svg>
);

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('ru')}
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
          language === 'ru'
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg animate-gradient'
            : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg animate-gradient'
            : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
        }`}
      >
        EN
      </button>
    </div>
  );
};

const ChartComponent = () => {
  const data = [
    { month: 'Jan', price: 4.2, growth: 15, volume: 125 },
    { month: 'Feb', price: 6.8, growth: 28, volume: 189 },
    { month: 'Mar', price: 5.4, growth: 12, volume: 156 },
    { month: 'Apr', price: 8.9, growth: 46, volume: 245 },
    { month: 'May', price: 7.3, growth: 35, volume: 198 },
    { month: 'Jun', price: 11.2, growth: 62, volume: 312 }
  ];

  const maxPrice = Math.max(...data.map(item => item.price));

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800">NFT Price Analytics</h3>
        <div className="flex items-center text-emerald-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
          </svg>
          <span className="text-sm font-medium">+47.8%</span>
        </div>
      </div>

      <div className="h-64 flex items-end justify-between gap-3 bg-gradient-to-t from-slate-50 to-transparent rounded-lg p-4 mb-4">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center group">
            <div className="relative w-full flex flex-col items-center">
              <div
                className="w-full bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-lg transition-all duration-500 hover:from-purple-600 hover:to-purple-400 shadow-lg relative animate-gradient-slow"
                style={{ height: `${(item.price / maxPrice) * 180}px`, minHeight: '20px' }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.price} ETH
                </div>
              </div>
              <div className="mt-2 text-center">
                <span className="text-xs font-medium text-slate-700">{item.month}</span>
                <div className="text-xs text-emerald-600 mt-1">+{item.growth}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 text-center text-sm">
        <div>
          <div className="font-semibold text-slate-800">Average Price</div>
          <div className="text-purple-600 font-bold">7.3 ETH</div>
        </div>
        <div>
          <div className="font-semibold text-slate-800">Total Volume</div>
          <div className="text-blue-600 font-bold">1,225</div>
        </div>
        <div>
          <div className="font-semibold text-slate-800">Growth</div>
          <div className="text-emerald-600 font-bold">+33.2%</div>
        </div>
      </div>
    </div>
  );
};

const SupportChat = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: 'user', text: inputValue }]);
      setInputValue('');

      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'support',
          text: t('supportResponse')
        }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {showMessage && !isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 max-w-xs border border-purple-100 animate-bounce">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 animate-gradient">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-700 font-medium">{t('techSupport')}</p>
              <p className="text-sm text-slate-600 mt-1">{t('supportGreeting')}</p>
            </div>
            <button
              onClick={() => setShowMessage(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-xl border border-purple-100 w-80 h-96 flex flex-col">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between animate-gradient">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="font-medium">{t('techSupport')}</p>
                <p className="text-xs text-purple-100">{t('online')}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            <div className="flex items-start space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 animate-gradient">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="bg-slate-100 rounded-lg p-2 max-w-xs">
                <p className="text-sm text-slate-700">{t('supportGreeting')}</p>
                <p className="text-xs text-slate-500 mt-1">{t('now')}</p>
              </div>
            </div>

            {messages.map((message, index) => (
              <div key={index} className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user'
                    ? 'bg-purple-600 animate-gradient'
                    : 'bg-gradient-to-br from-purple-400 to-blue-400 animate-gradient'
                }`}>
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={message.type === 'user'
                      ? "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      : "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"
                    } clipRule="evenodd"/>
                  </svg>
                </div>
                <div className={`rounded-lg p-2 max-w-xs ${
                  message.type === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 p-3">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('writeMessage')}
                className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 transition-colors animate-gradient"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowMessage(false);
        }}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 animate-gradient"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ru');

  const t = (key: string) => translations[language]?.[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 animate-gradient-bg">
        {/* Header */}
        <header className="relative z-50 bg-white/90 backdrop-blur-sm border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center animate-gradient">
                  <StarIcon />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-text">
                  CryptoQuasar
                </span>
              </div>

              <nav className="hidden md:flex space-x-8">
                <a href="#about" className="text-slate-600 hover:text-purple-600 transition-colors">{t('about')}</a>
                <a href="#features" className="text-slate-600 hover:text-purple-600 transition-colors">{t('features')}</a>
                <a href="#analytics" className="text-slate-600 hover:text-purple-600 transition-colors">{t('analytics')}</a>
                <a href="#download" className="text-slate-600 hover:text-purple-600 transition-colors">{t('download')}</a>
              </nav>

              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <button
                  className="md:hidden p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                    <div className="h-0.5 bg-slate-600 rounded"></div>
                    <div className="h-0.5 bg-slate-600 rounded"></div>
                    <div className="h-0.5 bg-slate-600 rounded"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-b border-purple-100">
            <nav className="px-4 py-4 space-y-3">
              <a href="#about" className="block text-slate-600 hover:text-purple-600">{t('about')}</a>
              <a href="#features" className="block text-slate-600 hover:text-purple-600">{t('features')}</a>
              <a href="#analytics" className="block text-slate-600 hover:text-purple-600">{t('analytics')}</a>
              <a href="#download" className="block text-slate-600 hover:text-purple-600">{t('download')}</a>
            </nav>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-2 mb-6">
                <StarIcon />
                <span className="ml-2 text-sm font-medium text-purple-700">{t('aiPoweredNft')}</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
                  {t('unlockNftMarket')}
                </span>
                <br />
                <span className="text-slate-800">{t('withAiIntelligence')}</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12">
                {t('heroDescription')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-gradient">
                  {t('startFreeAnalysis')}
                </button>
                <button className="border-2 border-purple-200 text-slate-700 px-8 py-4 rounded-2xl font-semibold hover:border-purple-300 hover:bg-purple-50 transition-all duration-300">
                  {t('watchDemo')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {t('powerfulAiFeatures')}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t('featuresDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center mb-6 animate-gradient">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                    <path fill="currentColor" d="M9,17H7V10H9V17M13,17H11V7H13V17M17,17H15V13H17V17M19,19H5V5H19V19.1M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('marketAnalytics')}</h3>
                <p className="text-slate-600">
                  {t('marketAnalyticsDesc')}
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center mb-6 animate-gradient">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('aiPredictions')}</h3>
                <p className="text-slate-600">
                  {t('aiPredictionsDesc')}
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center mb-6 animate-gradient">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('smartAlerts')}</h3>
                <p className="text-slate-600">
                  {t('smartAlertsDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Chart Section */}
        <section id="analytics" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {t('liveMarketData')}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t('trackPerformance')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <ChartComponent />
              </div>

              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Market Cap Analysis</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Total Volume</span>
                    <span className="font-bold text-purple-600">$2.4B</span>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Growth Metrics</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">24h Change</span>
                    <span className="font-bold text-emerald-600">+18.7%</span>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">AI Confidence</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Prediction Accuracy</span>
                    <span className="font-bold text-blue-600">94.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-white mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('takeCryptoQuasar')}
              </h2>
              <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                {t('accessPowerful')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-6 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 group">
                <div className="flex items-center justify-center space-x-3">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:scale-110 transition-transform">
                    <path fill="currentColor" d="M19,20H5C3.9,20 3,19.1 3,18V6C3,4.9 3.9,4 5,4H19C20.1,4 21,4.9 21,6V18C21,19.1 20.1,20 19,20M19,18V8H5V18H19Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="font-bold">{t('browserExtension')}</div>
                    <div className="text-sm text-purple-100">Chrome, Firefox, Edge</div>
                  </div>
                </div>
              </button>

              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-6 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 group">
                <div className="flex items-center justify-center space-x-3">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:scale-110 transition-transform">
                    <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="font-bold">{t('mobileApp')}</div>
                    <div className="text-sm text-purple-100">iOS & Android</div>
                  </div>
                </div>
              </button>
            </div>

            <div className="mt-12">
              <p className="text-purple-100 text-sm">
                {t('joinUsers')}
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center animate-gradient">
                    <StarIcon />
                  </div>
                  <span className="text-xl font-bold">CryptoQuasar</span>
                </div>
                <p className="text-slate-400 text-sm">
                  AI-powered NFT market analytics for smart trading decisions
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Predictions</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Alerts</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-12 pt-8 text-center">
              <p className="text-slate-400 text-sm">
                © 2024 CryptoQuasar. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        <SupportChat />
      </div>
    </LanguageContext.Provider>
  );
}