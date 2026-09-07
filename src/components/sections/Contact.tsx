import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../../data/profile';
import { SectionHeader } from '../common/SectionHeader';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { soundFx } from '../../utils/audio';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(profileData.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playSuccess();
    setFormSubmitted(true);

    // Launch celebratory cyberpunk confetti
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00f0ff', '#ff007f', '#7209b7', '#ffe600']
    });

    // Create mailto fallback link
    const subject = encodeURIComponent(`Message from ${formData.name} via Portfolio`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    const mailtoUrl = `mailto:${profileData.links.email}?subject=${subject}&body=${body}`;

    window.open(mailtoUrl, '_blank');

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden bg-cyber-void">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyber-pink/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="09"
          tag="INITIATE PROTOCOL"
          title="Let's Build Something Intelligent."
          subtitle="Interested in AI/ML, Machine Learning, Data Science, or building practical technology? Let's connect."
          accent="synth"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Direct Connect & Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Contact Card */}
            <div className="bg-cyber-dark/85 backdrop-blur-xl border border-cyber-cyan/40 p-6 rounded-2xl shadow-[0_0_35px_rgba(0,240,255,0.15)] space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan uppercase">
                  <Terminal className="w-4 h-4 animate-pulse" />
                  <span>COMMUNICATION CHANNEL</span>
                </div>
                <h3 className="font-orbitron text-xl font-bold text-white mt-1">
                  Direct Line
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light mt-2 leading-relaxed">
                  Open to internships, AI research discussions, hackathon collaborations, and machine learning opportunities.
                </p>
              </div>

              {/* Copy Email Button */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-slate-400">Primary Email:</span>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-700/80">
                  <div className="flex items-center gap-2 truncate mr-2">
                    <Mail className="w-4 h-4 text-cyber-pink flex-shrink-0" />
                    <span className="font-mono text-xs text-slate-200 truncate select-all">
                      {profileData.links.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex-shrink-0 px-2.5 py-1 rounded bg-cyber-pink/20 hover:bg-cyber-pink/30 border border-cyber-pink/40 text-pink-300 font-mono text-xs flex items-center gap-1 transition-all"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-cyber-cyan" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'COPIED!' : 'COPY'}</span>
                  </button>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="space-y-2.5 pt-2">
                <span className="font-mono text-xs text-slate-400">Verified Profiles:</span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={profileData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyber-cyan text-slate-300 hover:text-cyber-cyan transition-all"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={profileData.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyber-pink text-slate-300 hover:text-cyber-pink transition-all"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <LinkedinIcon className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Terminal Transmission Form */}
          <div className="lg:col-span-7">
            <div className="bg-cyber-dark/85 backdrop-blur-xl border border-cyber-pink/40 p-6 sm:p-8 rounded-2xl shadow-[0_0_35px_rgba(255,0,127,0.15)] flex flex-col justify-between h-full space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyber-pink" />
                  <h3 className="font-orbitron text-base sm:text-lg font-bold text-white">
                    Transmit Message
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/30">
                  ENCRYPTED_STREAM
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-slate-300 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Mentor / Recruiter Name"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 focus:border-cyber-cyan focus:outline-none focus:ring-1 focus:ring-cyber-cyan text-sm font-mono text-white placeholder:text-slate-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 mb-1.5 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 focus:border-cyber-cyan focus:outline-none focus:ring-1 focus:ring-cyber-cyan text-sm font-mono text-white placeholder:text-slate-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 mb-1.5 uppercase">
                    Message / Project Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, opportunity, or collaboration idea..."
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 focus:border-cyber-pink focus:outline-none focus:ring-1 focus:ring-cyber-pink text-sm font-mono text-white placeholder:text-slate-600 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitted}
                  className="w-full py-3.5 rounded-lg bg-gradient-to-r from-cyber-cyan via-cyber-pink to-purple-600 hover:opacity-90 text-white font-orbitron text-xs sm:text-sm font-bold tracking-widest uppercase transition-all shadow-[0_0_25px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{formSubmitted ? 'TRANSMISSION SENT!' : 'TRANSMIT MESSAGE'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
