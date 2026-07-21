import React, { useState, useEffect, useRef } from "react";
import {
  Ruler, Calculator, MapPin, Compass, Home, Hammer,
  ClipboardList, Phone, Menu, X, ArrowRight, Building2,
  PencilRuler, Layers
} from "lucide-react";

const REGIONS = ["Roorkee", "Haridwar", "Dehradun", "Saharanpur"];

const TOOLS = [
  { icon: PencilRuler, label: "Naksha Generator", note: "Floor plans in minutes", tag: "TOOL-01" },
  { icon: Calculator, label: "BOQ Estimator", note: "Material & cost breakup", tag: "TOOL-02" },
  { icon: Ruler, label: "Land Unit Converter", note: "Bigha, biswa, sq.ft & more", tag: "TOOL-03" },
  { icon: Compass, label: "Vaastu Guide", note: "Direction-wise room planning", tag: "TOOL-04" },
  { icon: Building2, label: "Property Valuation", note: "Fair market estimate", tag: "TOOL-05" },
];

const SERVICES = [
  { icon: ClipboardList, label: "Site Supervision", note: "On-ground execution tracking" },
  { icon: Layers, label: "Structural Design", note: "RCC drawings & BBS detailing" },
  { icon: Home, label: "Interior & MEP", note: "Fit-out and system coordination" },
  { icon: Hammer, label: "Renovation", note: "Repair, waterproofing, upgrades" },
];

const PHASES = [
  { mark: "FOUNDATION", title: "Plan", desc: "Naksha, BOQ, budget & approvals sorted before ground is broken." },
  { mark: "STRUCTURE", title: "Build", desc: "Verified engineers supervise every pour, every reinforcement." },
  { mark: "FINISHING", title: "Deliver", desc: "Interiors, MEP and handover, checked floor by floor." },
];

function BlueprintHero() {
  const pathRef = useRef(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 300);
    return () => clearTimeout(t);
  }, []);
  return (
    <svg viewBox="0 0 520 380" className="w-full h-full" aria-hidden="true">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0 L0 0 0 20" fill="none" stroke="#4A6472" strokeOpacity="0.15" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="520" height="380" fill="url(#grid)" />
      {/* outer walls */}
      <rect x="60" y="40" width="400" height="300" fill="none" stroke="#1B2A38" strokeWidth="3"
        strokeDasharray="1400" strokeDashoffset={drawn ? 0 : 1400}
        style={{ transition: "stroke-dashoffset 2.2s ease-out" }} />
      {/* interior partitions */}
      <line x1="60" y1="180" x2="280" y2="180" stroke="#1B2A38" strokeWidth="2"
        strokeDasharray="220" strokeDashoffset={drawn ? 0 : 220}
        style={{ transition: "stroke-dashoffset 1.4s ease-out 1.4s" }} />
      <line x1="280" y1="40" x2="280" y2="340" stroke="#1B2A38" strokeWidth="2"
        strokeDasharray="300" strokeDashoffset={drawn ? 0 : 300}
        style={{ transition: "stroke-dashoffset 1.4s ease-out 1.8s" }} />
      <line x1="280" y1="240" x2="460" y2="240" stroke="#1B2A38" strokeWidth="2"
        strokeDasharray="180" strokeDashoffset={drawn ? 0 : 180}
        style={{ transition: "stroke-dashoffset 1.2s ease-out 2.1s" }} />
      {/* door swing arcs */}
      <path d="M 280 200 A 20 20 0 0 1 300 180" fill="none" stroke="#B5442E" strokeWidth="1.5"
        opacity={drawn ? 0.8 : 0} style={{ transition: "opacity 0.6s ease 2.6s" }} />
      <path d="M 340 240 A 20 20 0 0 1 360 220" fill="none" stroke="#B5442E" strokeWidth="1.5"
        opacity={drawn ? 0.8 : 0} style={{ transition: "opacity 0.6s ease 2.7s" }} />
      {/* dimension lines */}
      <g opacity={drawn ? 1 : 0} style={{ transition: "opacity 0.8s ease 3s" }}>
        <line x1="60" y1="356" x2="460" y2="356" stroke="#9B9484" strokeWidth="1" />
        <line x1="60" y1="350" x2="60" y2="362" stroke="#9B9484" strokeWidth="1" />
        <line x1="460" y1="350" x2="460" y2="362" stroke="#9B9484" strokeWidth="1" />
        <text x="260" y="374" fontFamily="monospace" fontSize="11" fill="#9B9484" textAnchor="middle">40'-0"</text>
        <text x="100" y="120" fontFamily="monospace" fontSize="10" fill="#9B9484">BEDROOM</text>
        <text x="330" y="130" fontFamily="monospace" fontSize="10" fill="#9B9484">LIVING</text>
        <text x="100" y="270" fontFamily="monospace" fontSize="10" fill="#9B9484">KITCHEN</text>
        <text x="330" y="285" fontFamily="monospace" fontSize="10" fill="#9B9484">MASTER</text>
      </g>
    </svg>
  );
}

export default function Nirman360() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0EFE6] text-[#1B2A38]" style={{ fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui" }}>
      <style>{`
        .disp { font-family: 'Space Grotesk', ui-sans-serif, system-ui; }
        .mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-[#F0EFE6]/95 backdrop-blur border-b border-[#1B2A38]/15">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-[#1B2A38] flex items-center justify-center">
              <div className="w-3 h-3 bg-[#B5442E]" />
            </div>
            <span className="disp font-bold text-lg tracking-tight">NIRMAN 360</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 mono text-sm">
            <a href="#tools" className="hover:text-[#B5442E] transition-colors">Tools</a>
            <a href="#services" className="hover:text-[#B5442E] transition-colors">Services</a>
            <a href="#process" className="hover:text-[#B5442E] transition-colors">Process</a>
            <a href="#coverage" className="hover:text-[#B5442E] transition-colors">Coverage</a>
            <a href="#contact" className="px-4 py-2 bg-[#1B2A38] text-[#F0EFE6] hover:bg-[#B5442E] transition-colors">
              Get a quote
            </a>
          </nav>
          <button className="md:hidden" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 mono text-sm border-t border-[#1B2A38]/15">
            <a href="#tools" onClick={() => setNavOpen(false)}>Tools</a>
            <a href="#services" onClick={() => setNavOpen(false)}>Services</a>
            <a href="#process" onClick={() => setNavOpen(false)}>Process</a>
            <a href="#coverage" onClick={() => setNavOpen(false)}>Coverage</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="mono text-xs tracking-widest text-[#B5442E] mb-4">SCALE 1:100 — GHAR KA NAKSHA</p>
          <h1 className="disp text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
            From plot to plan,<br />built right.
          </h1>
          <p className="text-[#1B2A38]/75 text-base md:text-lg mb-8 max-w-md">
            Free planning tools and verified execution teams for your home,
            across Roorkee, Haridwar, Dehradun and Saharanpur.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#tools" className="inline-flex items-center gap-2 px-6 py-3 bg-[#B5442E] text-[#F0EFE6] font-medium hover:bg-[#1B2A38] transition-colors">
              Try the tools free <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-[#1B2A38] hover:bg-[#1B2A38] hover:text-[#F0EFE6] transition-colors">
              <Phone size={16} /> Book a consultation
            </a>
          </div>
        </div>
        <div className="border border-[#1B2A38]/30 bg-white/40 p-2">
          <BlueprintHero />
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="max-w-6xl mx-auto px-6 py-16 border-t border-[#1B2A38]/15">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="disp text-2xl md:text-3xl font-bold">Planning tools</h2>
          <span className="mono text-xs text-[#9B9484]">FREE TO USE</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map(({ icon: Icon, label, note, tag }) => (
            <div key={tag} className="group border border-[#1B2A38]/25 bg-white/40 p-5 hover:border-[#B5442E] hover:bg-white/70 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <Icon size={22} strokeWidth={1.5} />
                <span className="mono text-[10px] text-[#9B9484]">{tag}</span>
              </div>
              <h3 className="font-semibold mb-1">{label}</h3>
              <p className="text-sm text-[#1B2A38]/65">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-16 border-t border-[#1B2A38]/15">
        <h2 className="disp text-2xl md:text-3xl font-bold mb-8">Site services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map(({ icon: Icon, label, note }) => (
            <div key={label} className="border border-[#1B2A38]/25 p-5 bg-white/40">
              <Icon size={22} strokeWidth={1.5} className="mb-4 text-[#B5442E]" />
              <h3 className="font-semibold mb-1">{label}</h3>
              <p className="text-sm text-[#1B2A38]/65">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-16 border-t border-[#1B2A38]/15">
        <h2 className="disp text-2xl md:text-3xl font-bold mb-10">How a build moves</h2>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {PHASES.map((p, i) => (
            <div key={p.mark} className="relative">
              <p className="mono text-xs tracking-widest text-[#B5442E] mb-2">{p.mark}</p>
              <h3 className="disp text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-[#1B2A38]/70">{p.desc}</p>
              {i < PHASES.length - 1 && (
                <div className="hidden md:block absolute top-2 -right-4 w-8 h-px bg-[#1B2A38]/30" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" className="max-w-6xl mx-auto px-6 py-16 border-t border-[#1B2A38]/15">
        <h2 className="disp text-2xl md:text-3xl font-bold mb-8">Where we build</h2>
        <div className="flex flex-wrap gap-3">
          {REGIONS.map((r) => (
            <span key={r} className="mono text-sm px-4 py-2 border border-[#1B2A38]/30 flex items-center gap-2">
              <MapPin size={14} className="text-[#B5442E]" /> {r}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="border-t border-[#1B2A38]/15 bg-[#1B2A38] text-[#F0EFE6]">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="disp text-2xl md:text-3xl font-bold mb-3">Planning a build?</h2>
            <p className="text-[#F0EFE6]/70 max-w-sm">
              Tell us your plot size and city. We'll get a naksha and estimate back to you.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
            <input
              type="tel"
              placeholder="Your phone number"
              className="flex-1 px-4 py-3 bg-[#F0EFE6] text-[#1B2A38] placeholder-[#1B2A38]/50 mono text-sm outline-none"
            />
            <button type="submit" className="px-6 py-3 bg-[#B5442E] font-medium hover:bg-[#9c3a26] transition-colors">
              Request callback
            </button>
          </form>
        </div>
        <div className="border-t border-[#F0EFE6]/15 max-w-6xl mx-auto px-6 py-5 mono text-xs text-[#F0EFE6]/50 flex justify-between">
          <span>NIRMAN 360</span>
          <span>ROORKEE · HARIDWAR · DEHRADUN · SAHARANPUR</span>
        </div>
      </footer>
    </div>
  );
}
