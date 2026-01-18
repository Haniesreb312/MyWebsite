import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { SKILLS, EXPERIENCE, RESUME_URL } from '../constants';

const SkillsChart: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-cyber-dark relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-cyber-secondary/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Experience Column */}
            <div className="order-2 lg:order-1">
                 <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-cyber-text font-display mb-4">
                        Career Trajectory
                    </h2>
                    <p className="text-cyber-dim mb-6">Professional milestones and capabilities.</p>
                    
                    <a 
                      href={RESUME_URL} 
                      download 
                      className="inline-flex items-center gap-3 px-6 py-3 bg-cyber-text/5 border border-cyber-text/10 rounded-lg text-cyber-text font-display text-sm uppercase tracking-wide hover:bg-cyber-text/10 hover:border-cyber-primary/50 hover:text-cyber-primary transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Hani's Resume
                    </a>
                </div>

                <div className="space-y-10">
                    {EXPERIENCE.map((exp, index) => (
                        <div key={exp.id} className="relative pl-10 group">
                            {/* Timeline line */}
                            <div className="absolute left-[9px] top-2 bottom-[-40px] w-px bg-cyber-text/10 group-last:bottom-0"></div>
                            
                            {/* Dot */}
                            <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-cyber-secondary bg-cyber-dark z-10 group-hover:bg-cyber-secondary transition-colors duration-300"></div>
                            
                            <h3 className="text-xl font-bold text-cyber-text font-display mb-1 group-hover:text-cyber-secondary transition-colors">{exp.role}</h3>
                            <div className="flex items-center gap-3 mb-3 text-sm">
                                <span className="text-cyber-text font-medium">{exp.company}</span>
                                <span className="w-1 h-1 rounded-full bg-cyber-dim"></span>
                                <span className="text-cyber-dim font-mono">{exp.period}</span>
                            </div>
                            <p className="text-cyber-dim leading-relaxed">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills Chart Column */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="glass-panel p-8 rounded-3xl relative w-full max-w-lg aspect-square flex flex-col items-center justify-center border border-cyber-text/5 bg-cyber-black/40">
                    <div className="absolute top-6 left-6 font-mono text-xs text-cyber-primary tracking-widest uppercase">
                        Skills
                    </div>
                    <div className="h-full w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={SKILLS}>
                            <PolarGrid stroke="rgb(var(--c-dim))" strokeOpacity={0.3} strokeDasharray="3 3" />
                            <PolarAngleAxis 
                                dataKey="name" 
                                tick={{ fill: 'rgb(var(--c-text))', fontSize: 13, fontFamily: 'Inter' }} 
                            />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar
                                name="Skills"
                                dataKey="level"
                                stroke="rgb(var(--c-secondary))"
                                strokeWidth={3}
                                fill="rgb(var(--c-secondary))"
                                fillOpacity={0.3}
                            />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsChart;