import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial state
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = [
    { name: 'Start', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-panel rounded-2xl px-6 transition-all duration-300 ${scrolled ? 'py-2 shadow-lg bg-cyber-dark/80' : 'py-4 bg-transparent border-transparent'}`}>
            <div className="flex items-center justify-between">
            <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-primary to-cyber-secondary flex items-center justify-center text-white font-bold font-display">
                    HE
                </div>
                <span className="text-lg font-bold font-display text-cyber-text tracking-wide">
                Hani Esreb
                </span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
                <div className="flex items-baseline space-x-1">
                {navLinks.map((link) => (
                    <a
                    key={link.name}
                    href={link.href}
                    className="text-cyber-dim hover:text-cyber-text hover:bg-cyber-text/5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 font-sans"
                    >
                    {link.name}
                    </a>
                ))}
                </div>
                
                <div className="w-px h-6 bg-cyber-text/10"></div>
                
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-cyber-dim hover:text-cyber-text hover:bg-cyber-text/10 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {isDark ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
            </div>
            
            <div className="-mr-2 flex md:hidden items-center gap-4">
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-cyber-dim hover:text-cyber-text"
                >
                  {isDark ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
                <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-cyber-dim hover:text-cyber-text hover:bg-cyber-text/10 focus:outline-none"
                >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
                </button>
            </div>
            </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full px-4 mt-2">
            <div className="glass-panel rounded-xl px-2 pt-2 pb-3 space-y-1 bg-cyber-dark/95 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-cyber-dim hover:text-cyber-text hover:bg-cyber-text/5 block px-3 py-2 rounded-md text-base font-medium font-sans"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;