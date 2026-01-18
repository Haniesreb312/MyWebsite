import React, { useEffect, useState, useRef } from 'react';
import { CANDIDATE_NAME, CANDIDATE_ROLE } from '../constants';
import myPhoto from "../assets/me.jpeg";


const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    setLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Calculate normalized position (-1 to 1)
        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;
        
        containerRef.current.style.setProperty('--mouse-x', x.toString());
        containerRef.current.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
        id="home" 
        ref={containerRef}
        className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-cyber-black"
        style={{ perspective: '1000px' } as React.CSSProperties}
    >
        {/* Ambient Background Glows with Parallax */}
        <div 
            className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyber-primary/20 rounded-full blur-[120px] animate-float transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: 'translate(calc(var(--mouse-x, 0) * -40px), calc(var(--mouse-y, 0) * -40px))' }}
        ></div>
        <div 
            className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyber-secondary/20 rounded-full blur-[120px] animate-float transition-transform duration-100 ease-out will-change-transform" 
            style={{ 
                animationDelay: '2s',
                transform: 'translate(calc(var(--mouse-x, 0) * 40px), calc(var(--mouse-y, 0) * 40px))' 
            }}
        ></div>
        
        {/* Subtle Grid with slight movement */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none transition-transform duration-75 ease-out" 
             style={{ 
                 backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
                 backgroundSize: '50px 50px',
                 color: 'rgb(var(--c-text))',
                 transform: 'translate(calc(var(--mouse-x, 0) * 10px), calc(var(--mouse-y, 0) * 10px))'
             }}>
        </div>

        <div className="z-10 max-w-5xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div 
                className={`transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transform: 'translate(calc(var(--mouse-x, 0) * -15px), calc(var(--mouse-y, 0) * -15px))' }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-text/5 border border-cyber-text/10 mb-6 backdrop-blur-md hover:bg-cyber-text/10 transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
                    <span className="text-xs font-mono text-cyber-dim uppercase tracking-widest">System Online</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold mb-6 font-display tracking-tight leading-none text-cyber-text">
                    {CANDIDATE_NAME.split(' ')[0]}
                    <span className="text-gradient block relative inline-block hover:scale-105 transition-transform duration-300 origin-left cursor-default">
                        {CANDIDATE_NAME.split(' ')[1]}
                    </span>
                </h1>
                
                <h2 className="text-xl md:text-2xl text-cyber-dim font-light mb-8 max-w-lg">
                    {CANDIDATE_ROLE} <span className="text-cyber-primary/50 animate-pulse">///</span> Building the digital future with precision and creativity.
                </h2>

                <div className="flex flex-wrap gap-4">
                    <a href="#projects" className="group relative px-8 py-4 bg-cyber-text text-cyber-black font-display font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--c-primary),0.3)]">
                        <span className="relative z-10">View Projects</span>
                        <div className="absolute inset-0 bg-cyber-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="absolute -inset-[100%] top-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                    </a>
                    <a href="#contact" className="px-8 py-4 bg-cyber-text/5 border border-cyber-text/10 text-cyber-text font-display font-medium rounded-lg hover:bg-cyber-text/10 hover:border-cyber-text/30 transition-all backdrop-blur-sm hover:translate-x-1">
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Profile Picture / Visual Element with 3D Tilt */}
            <div className={`hidden lg:flex justify-center relative transition-all duration-1000 delay-300 perspective-1000 ${loaded ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
                <div 
                    className="relative w-80 h-80 md:w-96 md:h-96 transition-transform duration-100 ease-out will-change-transform"
                    style={{
                        transform: 'rotateY(calc(var(--mouse-x, 0) * 5deg)) rotateX(calc(var(--mouse-y, 0) * -5deg))'
                    }}
                >
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyber-primary to-cyber-secondary rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
                    
                    {/* Rotating Rings */}
                    <div className="absolute -inset-4 border border-dashed border-cyber-primary/30 rounded-full animate-spin-slow"></div>
                    <div className="absolute -inset-8 border border-dotted border-cyber-secondary/20 rounded-full animate-spin-reverse-slower"></div>

                    {/* Image Container */}
                    <div className="relative w-full h-full rounded-full border-2 border-cyber-text/10 p-2 bg-cyber-black/30 backdrop-blur-sm overflow-hidden group">
                        <div className="absolute inset-0 rounded-full border-4 border-cyber-primary/20 z-20 pointer-events-none transition-colors group-hover:border-cyber-primary/40"></div>
                        <img 
                            src={myPhoto} 
                            alt={CANDIDATE_NAME}
                            className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
                        />
                        
                        {/* Glitch/Scanline Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    {/* Floating Tech Badge */}
                    <div className="absolute bottom-6 -right-2 glass-panel px-4 py-2 rounded-lg border border-cyber-primary/30 transform translate-z-12 shadow-[0_0_20px_rgba(var(--c-primary),0.2)] animate-float" style={{ animationDelay: '1s' }}>
                         <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-mono text-cyber-text">OPEN TO WORK</span>
                         </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};

export default Hero;