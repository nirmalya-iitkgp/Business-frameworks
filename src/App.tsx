/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Plus, 
  Trash2, 
  Layout, 
  Info, 
  Maximize, 
  Minimize, 
  Share2, 
  Hand, 
  Pointer,
  Search,
  Settings,
  Bell,
  ArrowRightLeft,
  ArrowRight,
  Download
} from 'lucide-react';
import { FRAMEWORKS, COLORS } from './constants';
import { Framework, StickyNote, FrameworkSection } from './types';

export default function App() {
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [notes, setNotes] = useState<StickyNote[]>([]);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [activeTool, setActiveTool] = useState<'pointer' | 'pan'>('pointer');
  const [activeDetailSection, setActiveDetailSection] = useState<string | null>(null);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setActiveDetailSection(null);
    setShowClearConfirm(false);
  }, [selectedFramework]);

  const [isExporting, setIsExporting] = useState(false);
  const isMobile = windowSize.width < 768 && !isExporting;
  const exportRef = useRef<HTMLDivElement>(null);

  const exportToPng = async () => {
    if (!exportRef.current || !selectedFramework) return;
    
    // Set exporting state to true so we render full layout and bypass any mobile columns
    setIsExporting(true);
    
    // Delay 120ms to allow React to paint the desktop diagram layout
    await new Promise(resolve => setTimeout(resolve, 120));
    
    const element = exportRef.current;
    
    // Save original styles and class inline states
    const originalStyle = element.getAttribute('style') || '';
    const originalClassName = element.className;
    
    // Force standard high-fidelity widescreen dimensions on the export target
    element.style.width = '1280px';
    element.style.minHeight = '800px';
    element.style.transform = 'none';
    element.style.scale = 'none';
    element.style.position = 'relative';
    
    // Replace layout scale/flicker classes temporarily with a transparent background
    element.className = "w-[1280px] min-h-[800px] bg-transparent p-12 flex items-center justify-center overflow-visible shadow-none";
    
    try {
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: 2.5, // Ultra crisp high-res 
        logging: false,
        useCORS: true,
        windowWidth: 1280,
        windowHeight: element.scrollHeight || 800
      });
      
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `modern-chanakya-${selectedFramework.name.toLowerCase().replace(/\s+/g, '-')}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      // Restore previous reactive views instantly
      if (originalStyle) {
        element.setAttribute('style', originalStyle);
      } else {
        element.removeAttribute('style');
      }
      element.className = originalClassName;
      setIsExporting(false);
    }
  };
  
  // Matrix Simulation States
  const [matrixValues, setMatrixValues] = useState<Record<string, number>>({
    price: 50,
    quality: 50,
    marketing: 50
  });

  const handleMatrixChange = (key: string, value: number) => {
    setMatrixValues(prev => ({ ...prev, [key]: value }));
  };
  
  const addNote = (sectionId?: string) => {
    const newNote: StickyNote = {
      id: Math.random().toString(36).substr(2, 9),
      text: 'New thought...',
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      x: window.innerWidth / 2 - 75 + (Math.random() * 40 - 20),
      y: window.innerHeight / 2 - 75 + (Math.random() * 40 - 20),
      sectionId
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (id: string, updates: Partial<StickyNote>) => {
    setNotes(notes.map(n => n.id === id ? { ...n, ...updates } : n));
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const clearCurrentFrameworkNotes = () => {
    if (!selectedFramework) return;
    const sectionIds = selectedFramework.sections.map(s => s.id);
    setNotes(notes.filter(n => !n.sectionId || !sectionIds.includes(n.sectionId)));
  };

  const addStarterNotes = () => {
    if (!selectedFramework) return;
    // Clear any existing notes for this framework first to avoid duplicate clutter
    const sectionIds = selectedFramework.sections.map(s => s.id);
    const existingFiltered = notes.filter(n => !n.sectionId || !sectionIds.includes(n.sectionId));
    
    const starterNotes: StickyNote[] = selectedFramework.sections.flatMap((section, sIdx) => {
      // Create representative starter example nodes using details or name with high brevity
      const examples = section.details?.slice(0, 2) || [section.name];
      return examples.map((ex, dIdx) => ({
        id: Math.random().toString(36).substr(2, 9),
        text: `Example: ${ex}`,
        color: COLORS[(sIdx + dIdx) % COLORS.length],
        x: window.innerWidth / 2 - 75 + (Math.random() * 40 - 20),
        y: window.innerHeight / 2 - 75 + (Math.random() * 40 - 20),
        sectionId: section.id
      }));
    });
    setNotes([...existingFiltered, ...starterNotes]);
  };

  const handleZoom = (delta: number) => {
    setZoom(prev => Math.min(Math.max(prev + delta, 0.5), 2));
  };

  const filteredFrameworks = FRAMEWORKS.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen w-screen flex-col bg-[#F8F9FA] text-slate-900 font-sans overflow-hidden">
      {/* Header */}
      <header className="h-14 border-b border-slate-200/80 bg-white/70 backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-40">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedFramework(null)}>
          <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-600 rounded flex items-center justify-center text-white font-black shadow-lg shadow-amber-500/30 hover:scale-105 transition-all" title="Return to Workspace Hub">
            MC
          </div>
          <div className="h-4 w-px bg-slate-200 mx-1" />
          <span className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest hover:text-indigo-600 transition-colors">
            {selectedFramework ? selectedFramework.name : "Workspace Hub"}
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search 100+ strategic frameworks..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-48 lg:w-80 h-9 pl-9 pr-4 text-xs bg-slate-100/80 border-transparent rounded-lg focus:bg-white focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
            />
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
          </div>
          {selectedFramework && (
            <button 
              onClick={exportToPng}
              className="h-9 px-3 md:px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] md:text-xs font-bold rounded-lg transition-colors uppercase tracking-wider whitespace-nowrap flex items-center gap-2 shadow-sm"
              title="Save current framework sheet as PNG image"
            >
              <Download size={14} /> EXPORT PNG
            </button>
          )}
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.aside
              initial={isMobile ? { x: -300, opacity: 0 } : { width: 0, opacity: 0 }}
              animate={isMobile ? { x: 0, opacity: 1 } : { width: 224, opacity: 1 }}
              exit={isMobile ? { x: -300, opacity: 0 } : { width: 0, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 180 }}
              className={`fixed md:relative z-50 md:z-30 h-full border-r border-slate-200/80 bg-white/80 backdrop-blur-md ${isMobile && !isSidebarOpen ? 'hidden' : ''}`}
            >
              <div className="flex h-full flex-col overflow-hidden w-64 md:w-56">
                <div className="p-4 flex items-center justify-between border-b border-slate-100/50">
                  <span className="text-[10px] font-black uppercase text-slate-700 tracking-wider">Strategy Index</span>
                  <button 
                    onClick={() => setIsSidebarOpen(false)} 
                    title="Collapse sidebar menu"
                    className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-indigo-600 transition-all"
                  >
                    <ChevronLeft size={14} />
                  </button>
                </div>
                <nav className="p-4 flex-1 space-y-4 overflow-y-auto">
              {Array.from(new Set(FRAMEWORKS.map(f => f.category))).map((category, idx) => (
                <div key={category} className={idx === 0 ? "space-y-1" : "space-y-1 mt-5"}>
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-400 border-b border-slate-100/50 uppercase tracking-wider mb-2">{category}</div>
                  {filteredFrameworks.filter(f => f.category === category).map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFramework(f)}
                      className={`flex w-full items-center justify-between px-3 py-1.5 text-[11px] rounded transition-all ${
                        selectedFramework?.id === f.id 
                          ? 'bg-indigo-50 text-indigo-700 font-bold' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate">{f.name}</span>
                      {selectedFramework?.id === f.id && <ChevronRight size={12} />}
                    </button>
                  ))}
                </div>
              ))}
            </nav>

            <div className="p-4 border-t border-slate-100/50">
              <div className="bg-slate-800/90 backdrop-blur border border-slate-700/50 rounded-2xl p-4 shadow-xl shadow-slate-950/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Contextual Info</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-200 font-medium">
                  {selectedFramework 
                    ? selectedFramework.description 
                    : "Select a framework to view its strategic profile and interactive visualization."}
                </p>
                {selectedFramework && (
                  <div className="mt-3 pt-2 border-t border-slate-700 flex items-center justify-between">
                    <span className="text-[8px] font-bold text-indigo-300 uppercase tracking-wider">{selectedFramework.category}</span>
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">{selectedFramework.layout}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>

        {/* Workspace */}
        <main className="relative flex-1 overflow-hidden flex flex-col">
          {/* Detail Overlay */}
          <AnimatePresence>
            {activeDetailSection && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="absolute right-0 top-0 bottom-0 z-50 w-80 border-l border-slate-200 bg-white shadow-2xl p-6 overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-slate-800 border-b-2 border-indigo-500 pb-2">
                    {activeDetailSection}
                  </h3>
                  <button 
                    onClick={() => setActiveDetailSection(null)}
                    className="p-2 hover:bg-slate-100 rounded-lg text-slate-400"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                
                {selectedFramework?.sections.find(s => s.name === activeDetailSection)?.tips && (
                  <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Strategic Principle</span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-600 italic">
                      "{selectedFramework?.sections.find(s => s.name === activeDetailSection)?.tips}"
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Key Considerations</p>
                  <ul className="space-y-3">
                    {selectedFramework?.sections.find(s => s.name === activeDetailSection)?.details.map((detail, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="flex items-center gap-3 text-xs text-slate-600 group"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Matrix Simulation Controller */}
                {(selectedFramework?.id === '4ps' || selectedFramework?.id === '4cs') && (
                  <div className="mt-10 pt-10 border-t border-slate-100 space-y-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Market Dynamics Simulator</p>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <label className="text-[10px] font-bold text-slate-500 uppercase">Price Point</label>
                          <span className="text-[10px] font-mono text-indigo-600">{matrixValues.price}%</span>
                        </div>
                        <input 
                          type="range" min="0" max="100" 
                          value={matrixValues.price}
                          onChange={(e) => handleMatrixChange('price', parseInt(e.target.value))}
                          className="w-full accent-indigo-600" 
                        />
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <p className="text-[9px] text-slate-400 uppercase font-black mb-1">Impact Analysis</p>
                        <p className="text-[11px] text-slate-600 leading-tight">
                          {matrixValues.price > 70 
                            ? "High pricing requires premium Place strategy and specialized Promotion." 
                            : "Competitive pricing allows for mass-market distribution strategy."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Canvas Toolbar */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/80 backdrop-blur p-1.5 shadow-lg shadow-slate-200/50">
            <button 
              onClick={() => setActiveTool('pointer')}
              title="Pointer Mode - Select, Drag and Edit Notes"
              className={`rounded-lg p-2 transition-all ${activeTool === 'pointer' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              <Pointer size={16} />
            </button>
            <button 
              onClick={() => setActiveTool('pan')}
              title="Hand Mode - Pan/Drag the Infinite Canvas"
              className={`rounded-lg p-2 transition-all ${activeTool === 'pan' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              <Hand size={16} />
            </button>
            <div className="w-px h-4 bg-slate-200 mx-1.5" />
            <button 
              onClick={() => handleZoom(-0.1)} 
              title="Zoom Out Canvas" 
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all"
            >
              <Minimize size={16} />
            </button>
            <span className="text-[10px] font-mono font-extrabold text-slate-500 px-1 bg-slate-100/80 rounded-md py-1" title="Current Canvas Zoom Level">
              {Math.round(zoom * 100)}%
            </span>
            <button 
              onClick={() => handleZoom(0.1)} 
              title="Zoom In Canvas" 
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all"
            >
              <Maximize size={16} />
            </button>

            {selectedFramework && notes.some(n => selectedFramework.sections.some(s => s.id === n.sectionId)) && (
              <>
                <div className="w-px h-4 bg-slate-200 mx-1.5" />
                {showClearConfirm ? (
                  <div className="flex items-center gap-1 bg-rose-50 border border-rose-100 rounded-lg p-0.5 shadow-sm animate-in fade-in zoom-in duration-150">
                    <button
                      onClick={() => {
                        clearCurrentFrameworkNotes();
                        setShowClearConfirm(false);
                      }}
                      className="rounded bg-rose-600 px-2 py-0.5 text-[9px] font-black text-white hover:bg-rose-700 transition-all uppercase tracking-wider"
                    >
                      Delete All
                    </button>
                    <button
                      onClick={() => setShowClearConfirm(false)}
                      className="rounded bg-slate-200 px-2 py-0.5 text-[9px] font-bold text-slate-600 hover:bg-slate-300 transition-all uppercase tracking-wider"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setShowClearConfirm(true)} 
                    title="Clear All Board Notes" 
                    className="rounded-lg p-2 text-rose-500 hover:bg-rose-50 hover:text-rose-600 transition-all flex items-center justify-center"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </>
            )}
          </div>

          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              title="Open Sidebar Index"
              className="absolute left-4 top-4 z-30 rounded-xl border border-slate-200/80 bg-white/90 backdrop-blur p-2.5 text-slate-600 shadow-lg shadow-slate-100 hover:bg-slate-50 hover:text-indigo-600 transition-all"
            >
              <Layout size={18} />
            </button>
          )}



          {/* Canvas Area */}
          <div 
            className="canvas-grid flex-1 relative cursor-crosshair overflow-hidden"
            onWheel={(e) => {
              if (e.ctrlKey) {
                setZoom(prev => Math.min(Math.max(prev - e.deltaY * 0.001, 0.5), 2));
                e.preventDefault();
              }
            }}
          >
            <AnimatePresence mode="wait">
              {!selectedFramework ? (
                <motion.div
                  key="hero"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 overflow-y-auto bg-white p-6 md:p-12 lg:p-20"
                >
                  <div className="max-w-6xl mx-auto min-h-full flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">
                      <div className="space-y-4 text-center md:text-left">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-widest"
                        >
                          <Bell size={12} fill="currentColor" /> Modern Chanakya Executive Suite
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95]">
                          Master the Art of Strategy,<br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 italic">The Chanakya Way.</span>
                        </h2>
                        <p className="text-base md:text-xl text-slate-500 max-w-2xl leading-relaxed mx-auto md:mx-0 font-medium">
                          Access over 100+ professional frameworks for strategy, innovation, problem-solving, and change management. All visualizations are fully interactive and research-backed.
                        </p>
                      </div>
                      <div className="text-right hidden lg:block">
                        <div className="text-[40px] font-black text-slate-100 leading-none uppercase tracking-tighter">
                          Platform<br/>v.2.0.4
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                      {Array.from(new Set(FRAMEWORKS.map(f => f.category))).slice(0, 6).map((cat, idx) => (
                        <motion.div
                          key={cat}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(79,70,229,0.1)] transition-all cursor-pointer border-b-4 hover:border-b-indigo-500"
                          onClick={() => {
                            const firstInCat = FRAMEWORKS.find(f => f.category === cat);
                            if (firstInCat) setSelectedFramework(firstInCat);
                          }}
                        >
                          <div className="flex items-center justify-between mb-6">
                            <div className="px-2 py-0.5 rounded bg-white text-[10px] font-black text-indigo-600 uppercase tracking-widest shadow-sm ring-1 ring-slate-200">{cat}</div>
                            <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                              <ChevronRight size={16} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                            </div>
                          </div>
                          <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                            {FRAMEWORKS.filter(f => f.category === cat).length} Strategic Tools
                          </h4>
                          <p className="text-sm text-slate-500 leading-relaxed font-medium">
                            Structured tools for {cat.toLowerCase()} analysis, planning, and execution.
                          </p>
                          <div className="mt-8 flex items-center justify-between">
                            <div className="flex -space-x-2">
                              {FRAMEWORKS.filter(f => f.category === cat).slice(0, 4).map((f, i) => (
                                  <div key={i} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400 shadow-sm ring-4 ring-slate-50/50 group-hover:ring-white transition-all">
                                    {f.name.charAt(0)}
                                  </div>
                              ))}
                            </div>
                            <span className="text-[10px] font-bold text-slate-300 group-hover:text-indigo-600 uppercase tracking-widest transition-colors">Explore Category</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-12 md:mt-24 pt-12 border-t border-slate-100 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12">
                      <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 md:gap-16">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Active Users</span>
                          <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">14.2k</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Frameworks</span>
                          <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">{FRAMEWORKS.length}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Decisions Made</span>
                          <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">1.4M+</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center lg:items-end gap-2">
                         <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 rounded text-white text-[8px] font-bold tracking-[0.2em] uppercase">
                            Enterprise Ready <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                         </div>
                         <div className="text-[10px] font-bold text-slate-400">
                           DESIGNED BY <span className="text-slate-900">NIRMALYA PANIGRAHI</span>
                         </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="canvas"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full w-full"
                  style={{ 
                    scale: zoom,
                    x: pan.x,
                    y: pan.y,
                    transformOrigin: '50% 50%'
                  }}
                  drag={activeTool === 'pan'}
                  onDrag={(e, info) => {
                    if (activeTool === 'pan') {
                      setPan(prev => ({ x: prev.x + info.delta.x, y: prev.y + info.delta.y }));
                    }
                  }}
                >
                  <div className={`flex h-full w-full items-center justify-center ${isMobile ? 'p-4' : 'p-8'}`}>
                    <div ref={exportRef} className="w-full min-h-[85vh] bg-white p-8 md:p-16 rounded-3xl shadow-sm flex items-center justify-center scale-[0.6] sm:scale-100 origin-center transition-transform overflow-visible">
                       <FrameworkVisualizer 
                        framework={selectedFramework} 
                        notes={notes} 
                        onNoteDelete={deleteNote}
                        onNoteUpdate={updateNote}
                        onAddNote={(sectionId) => addNote(sectionId)}
                        onSectionClick={(sectionName) => setActiveDetailSection(sectionName)}
                        matrixValues={matrixValues}
                        isMobile={isMobile}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Elegant Instruction & Quick Action Bottom Footer */}
      <footer className="h-11 border-t border-slate-200 bg-white/95 backdrop-blur-sm px-4 flex items-center justify-between shrink-0 text-xs shadow-inner">
        {selectedFramework ? (
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="text-[9px] font-black text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded uppercase tracking-wider shrink-0 select-none">
                Active Framework
              </span>
              <span className="text-[11.5px] font-semibold text-slate-600 truncate">
                {selectedFramework.description} <span className="text-[10px] text-slate-400 font-normal"> (Add ideas using <span className="font-extrabold text-indigo-600 font-mono">+</span> inside core boxes)</span>
              </span>
            </div>
            <button
              onClick={addStarterNotes}
              className="shrink-0 flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-[9.5px] px-3 py-1.5 rounded-lg border border-indigo-600 active:scale-[0.97] transition-all uppercase tracking-wider cursor-pointer shadow-indigo-100 shadow"
              title="Instantly auto-fill relevant starter text templates into framework boxes"
            >
              ✨ Auto-Fill Examples
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-slate-400 text-[10.5px] font-bold uppercase tracking-wider">
            <span>Modern Chanakya strategic canvas</span>
            <span className="text-slate-200">/</span>
            <span className="font-normal text-slate-400">Select any strategic framework from the index to start visualization</span>
          </div>
        )}
      </footer>
    </div>
  );
}

const FrameworkVisualizer: React.FC<{ 
  framework: Framework; 
  notes: StickyNote[]; 
  onNoteDelete: (id: string) => void;
  onNoteUpdate: (id: string, updates: Partial<StickyNote>) => void;
  onAddNote: (sectionId: string) => void;
  onSectionClick: (sectionName: string) => void;
  matrixValues: Record<string, number>;
  isMobile?: boolean;
}> = ({ 
  framework, 
  notes, 
  onNoteDelete, 
  onNoteUpdate,
  onAddNote,
  onSectionClick,
  matrixValues,
  isMobile = false
}) => {
  const renderLayout = () => {
    switch (framework.layout) {
      case 'grid':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-2 gap-4 md:gap-8'} min-h-[60vh]`}>
            {framework.sections.map((section) => {
              // Apply simulation effects for 4Ps/4Cs
              const isPrice = section.id === 'Price' || section.id === 'Cost';
              const scale = isPrice ? 0.95 + (matrixValues.price / 500) : 1;
              const opacity = isPrice ? 0.5 + (matrixValues.price / 200) : 1;

              return (
                <SectionBox 
                  key={section.id} 
                  title={section.name} 
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  style={{ transform: `scale(${scale})`, opacity }}
                />
              );
            })}
          </div>
        );
      case 'funnel':
        return (
          <div className="flex flex-col items-center gap-4 w-full max-w-2xl px-4 py-8">
            {framework.sections.map((section, idx) => {
              return (
                <div key={section.id} className="w-full relative flex flex-col items-center">
                  <SectionBox 
                    title={`${idx + 1}. ${section.name}`}
                    notes={notes.filter(n => n.sectionId === section.id)}
                    onAddNote={() => onAddNote(section.id)}
                    onNoteDelete={onNoteDelete}
                    onNoteUpdate={onNoteUpdate}
                    onClick={() => onSectionClick(section.name)}
                    framework={framework}
                    className="w-full py-8 min-h-[120px] border-b-4 border-b-indigo-500 shadow bg-white rounded-xl"
                  />
                  {idx < framework.sections.length - 1 && (
                    <motion.div 
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-slate-200 py-2 animate-bounce"
                    >
                      <ChevronRight className="rotate-90" size={24} />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        );
      case 'circles':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-3 gap-6'} min-h-[50vh]`}>
            {framework.sections.map((section, idx) => {
              const colors = ['border-t-indigo-500', 'border-t-blue-500', 'border-t-emerald-500'];
              const layerName = idx === 0 ? '⭕ Core: ' : idx === 1 ? '⭕ Middle: ' : '⭕ Outer: ';
              return (
                <SectionBox 
                  key={section.id}
                  title={`${layerName}${section.name}`}
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  className={`w-full h-full bg-white shadow-sm rounded-xl border-t-4 ${colors[idx % colors.length]}`}
                />
              );
            })}
          </div>
        );
      case 'columns':
        return (
          <div className="flex flex-col md:flex-row w-full max-w-6xl gap-4 md:gap-8 min-h-[60vh]">
            {framework.sections.map((section) => (
              <SectionBox 
                key={section.id} 
                title={section.name} 
                className="flex-1"
                notes={notes.filter(n => n.sectionId === section.id)}
                onAddNote={() => onAddNote(section.id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(section.name)}
                framework={framework}
              />
            ))}
          </div>
        );
      case 'linear':
        return (
          <div className="flex flex-col md:flex-row w-full max-w-6xl items-center gap-4 min-h-[40vh]">
             {framework.sections.map((section, idx) => (
               <React.Fragment key={section.id}>
                  <SectionBox 
                    title={section.name} 
                    className="flex-1 w-full h-full"
                    notes={notes.filter(n => n.sectionId === section.id)}
                    onAddNote={() => onAddNote(section.id)}
                    onNoteDelete={onNoteDelete}
                    onNoteUpdate={onNoteUpdate}
                    onClick={() => onSectionClick(section.name)}
                    framework={framework}
                  />
                  {idx < framework.sections.length - 1 && (
                    <div className="text-slate-300 rotate-90 md:rotate-0">
                       <ChevronRight size={24} strokeWidth={1} />
                    </div>
                  )}
               </React.Fragment>
             ))}
          </div>
        );
      case 'staircase':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-3 gap-6'} min-h-[50vh]`}>
             {framework.sections.map((section, idx) => (
               <SectionBox 
                 key={section.id}
                 title={`Step ${idx + 1}: ${section.name}`} 
                 className="flex-1 w-full bg-white rounded-xl border-l-4 border-l-indigo-600 shadow-sm"
                 notes={notes.filter(n => n.sectionId === section.id)}
                 onAddNote={() => onAddNote(section.id)}
                 onNoteDelete={onNoteDelete}
                 onNoteUpdate={onNoteUpdate}
                 onClick={() => onSectionClick(section.name)}
                 framework={framework}
               />
             ))}
          </div>
        );
      case 'radial':
      case 'flower':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'grid-cols-2 lg:grid-cols-3 gap-6'} min-h-[50vh]`}>
            {framework.sections.map((section) => (
              <SectionBox 
                key={section.id}
                title={`✿ ${section.name}`}
                notes={notes.filter(n => n.sectionId === section.id)}
                onAddNote={() => onAddNote(section.id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(section.name)}
                framework={framework}
                className="w-full bg-white border-t-4 border-t-indigo-500 rounded-xl shadow-sm"
              />
            ))}
          </div>
        );
      case 'pyramid':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : `md:grid-cols-${framework.sections.length} gap-6`} min-h-[40vh]`}>
            {[...framework.sections].reverse().map((section, idx) => (
              <SectionBox 
                key={section.id}
                title={`Layer ${framework.sections.length - idx}: ${section.name}`}
                notes={notes.filter(n => n.sectionId === section.id)}
                onAddNote={() => onAddNote(section.id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(section.name)}
                framework={framework}
                className="w-full bg-white border border-slate-200 shadow-sm rounded-xl py-6 flex-1 hover:border-indigo-400"
              />
            ))}
          </div>
        );
      case 'bmc':
        return (
          <div className={`grid w-full gap-4 p-4 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-5 md:grid-rows-3 max-w-7xl min-h-[600px]'}`}>
            <SectionBox 
              title={framework.sections[0].name}
              notes={notes.filter(n => n.sectionId === framework.sections[0].id)}
              onAddNote={() => onAddNote(framework.sections[0].id)}
              onNoteDelete={onNoteDelete}
              onNoteUpdate={onNoteUpdate}
              onClick={() => onSectionClick(framework.sections[0].name)}
              framework={framework}
              className={isMobile ? '' : 'md:row-span-2'}
            />
            <div className={`flex flex-col gap-4 ${isMobile ? '' : 'md:row-span-2'}`}>
              <SectionBox 
                title={framework.sections[1].name}
                notes={notes.filter(n => n.sectionId === framework.sections[1].id)}
                onAddNote={() => onAddNote(framework.sections[1].id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(framework.sections[1].name)}
                framework={framework}
                className="flex-1"
              />
              <SectionBox 
                title={framework.sections[2].name}
                notes={notes.filter(n => n.sectionId === framework.sections[2].id)}
                onAddNote={() => onAddNote(framework.sections[2].id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(framework.sections[2].name)}
                framework={framework}
                className="flex-1"
              />
            </div>
            <SectionBox 
              title={framework.sections[3].name}
              notes={notes.filter(n => n.sectionId === framework.sections[3].id)}
              onAddNote={() => onAddNote(framework.sections[3].id)}
              onNoteDelete={onNoteDelete}
              onNoteUpdate={onNoteUpdate}
              onClick={() => onSectionClick(framework.sections[3].name)}
              framework={framework}
              className={isMobile ? 'border-2 border-indigo-200' : 'md:row-span-2 border-2 border-indigo-200'}
            />
            <div className={`flex flex-col gap-4 ${isMobile ? '' : 'md:row-span-2'}`}>
              <SectionBox 
                title={framework.sections[4].name}
                notes={notes.filter(n => n.sectionId === framework.sections[4].id)}
                onAddNote={() => onAddNote(framework.sections[4].id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(framework.sections[4].name)}
                framework={framework}
                className="flex-1"
              />
              <SectionBox 
                title={framework.sections[5].name}
                notes={notes.filter(n => n.sectionId === framework.sections[5].id)}
                onAddNote={() => onAddNote(framework.sections[5].id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(framework.sections[5].name)}
                framework={framework}
                className="flex-1"
              />
            </div>
            <SectionBox 
              title={framework.sections[6].name}
              notes={notes.filter(n => n.sectionId === framework.sections[6].id)}
              onAddNote={() => onAddNote(framework.sections[6].id)}
              onNoteDelete={onNoteDelete}
              onNoteUpdate={onNoteUpdate}
              onClick={() => onSectionClick(framework.sections[6].name)}
              framework={framework}
              className={isMobile ? '' : 'md:row-span-2'}
            />
            {/* Bottom Row */}
            <SectionBox 
              title={framework.sections[7].name}
              notes={notes.filter(n => n.sectionId === framework.sections[7].id)}
              onAddNote={() => onAddNote(framework.sections[7].id)}
              onNoteDelete={onNoteDelete}
              onNoteUpdate={onNoteUpdate}
              onClick={() => onSectionClick(framework.sections[7].name)}
              framework={framework}
              className={isMobile ? '' : 'md:col-span-2'}
            />
             <SectionBox 
              title={framework.sections[8].name}
              notes={notes.filter(n => n.sectionId === framework.sections[8].id)}
              onAddNote={() => onAddNote(framework.sections[8].id)}
              onNoteDelete={onNoteDelete}
              onNoteUpdate={onNoteUpdate}
              onClick={() => onSectionClick(framework.sections[8].name)}
              framework={framework}
              className={isMobile ? '' : 'md:col-span-3'}
            />
          </div>
        );
      case 'map':
        return (
          <div className="w-full max-w-6xl flex flex-col gap-6 min-h-[55vh]">
            {/* Elegant Map Axes & Stage Legend */}
            <div className={`p-4 bg-slate-50/80 backdrop-blur rounded-2xl border border-slate-100 flex ${isMobile ? 'flex-col gap-2' : 'items-center justify-between'} text-[11px] font-bold text-slate-500 uppercase tracking-wider shadow-sm`}>
              <span className="flex items-center gap-1.5 text-indigo-600">
                <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                Value Chain Vertical Axis: High Visibility (Top) ➜ Invisible Componentry (Bottom)
              </span>
              <span className="flex items-center gap-1.5 text-emerald-600">
                Evolution Horizontal Axis: Genesis ➜ Custom ➜ Product ➜ Commodity
              </span>
            </div>
            
            <div className={`grid w-full grid-cols-1 ${isMobile ? 'gap-4' : 'md:grid-cols-3 gap-6'}`}>
              {framework.sections.map((section, idx) => {
                const colors = ['border-t-indigo-500', 'border-t-purple-500', 'border-t-emerald-500'];
                const icons = ['🎯', '⚙️', '🌊'];
                const subLabels = [
                  'High Visibility – Customer demand, anchor requirements & entry points',
                  'Intermediate Chain – Key dependency pipelines, proprietary assets & value adders',
                  'Base Foundation – Standard protocols, utility power, packages & infrastructure'
                ];
                return (
                  <div key={section.id} className="flex flex-col h-full bg-white/50 p-2 rounded-2xl border border-slate-100/50 shadow-sm hover:shadow-md transition-all">
                    <SectionBox 
                      title={`${icons[idx % icons.length]} ${section.name}`}
                      notes={notes.filter(n => n.sectionId === section.id)}
                      onAddNote={() => onAddNote(section.id)}
                      onNoteDelete={onNoteDelete}
                      onNoteUpdate={onNoteUpdate}
                      onClick={() => onSectionClick(section.name)}
                      framework={framework}
                      className={`w-full bg-white border-t-4 ${colors[idx % colors.length]} rounded-xl shadow-sm`}
                    />
                    <span className="text-[10px] text-slate-400 mt-2 px-2.5 leading-relaxed italic">{subLabels[idx]}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case 'stage-gate':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-3 gap-6'} min-h-[50vh]`}>
            {framework.sections.map((section, idx) => (
              <SectionBox 
                key={section.id}
                title={`Stage ${idx + 1}: ${section.name}`} 
                className="w-full h-full border-t-4 border-t-indigo-500 rounded-xl bg-white shadow"
                notes={notes.filter(n => n.sectionId === section.id)}
                onAddNote={() => onAddNote(section.id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(section.name)}
                framework={framework}
              />
            ))}
          </div>
        );
      case 'diamond':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-4 gap-4'} min-h-[50vh]`}>
            {framework.sections.map((section, idx) => {
              const borders = ['border-t-indigo-500', 'border-l-indigo-500', 'border-b-indigo-500', 'border-r-indigo-500'];
              return (
                <SectionBox 
                  key={section.id}
                  title={section.name}
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  className={`w-full rounded-xl bg-white shadow-sm border-2 ${borders[idx % borders.length]}`}
                />
              );
            })}
          </div>
        );
      case 'double-diamond':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-4' : 'md:grid-cols-4 gap-6'} min-h-[50vh]`}>
            {framework.sections.map((section, idx) => {
              const space = idx < 2 ? '💎 Problem Space' : '💎 Solution Space';
              return (
                <SectionBox 
                  key={section.id}
                  title={`${space}: ${section.name}`}
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  className={`w-full rounded-xl bg-white shadow-sm border-t-4 ${idx < 2 ? 'border-t-indigo-600' : 'border-t-emerald-600'}`}
                />
              );
            })}
          </div>
        );
      case 'cycle':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-4 gap-6'} min-h-[40vh]`}>
            {framework.sections.map((section, idx) => (
              <SectionBox 
                key={section.id}
                title={`⟳ Step ${idx + 1}: ${section.name}`} 
                notes={notes.filter(n => n.sectionId === section.id)}
                onAddNote={() => onAddNote(section.id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(section.name)}
                framework={framework}
                className="w-full h-full rounded-xl border border-slate-200 bg-white shadow"
              />
            ))}
          </div>
        );
      case 'hype-cycle':
      case 's-curve':
      case 'bell-curve':
      case 'satir':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : `md:grid-cols-${framework.sections.length} gap-4`} min-h-[50vh]`}>
            {framework.sections.map((section, idx) => {
              const colors = ['border-t-indigo-500', 'border-t-blue-500', 'border-t-emerald-500', 'border-t-amber-500', 'border-t-rose-500'];
              return (
                <SectionBox 
                  key={section.id} 
                  title={`[Phase ${idx + 1}] ${section.name}`}
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  className={`w-full bg-white border-t-4 ${colors[idx % colors.length]} shadow-sm rounded-xl`}
                />
              );
            })}
          </div>
        );
      case 'spiral':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-2 lg:grid-cols-4 gap-6'} min-h-[40vh]`}>
             {framework.sections.map((section, idx) => {
                const colors = ['border-blue-400', 'border-rose-400', 'border-emerald-400', 'border-amber-400'];
                return (
                  <SectionBox 
                     key={section.id} 
                     title={`🌀 ${section.name}`}
                     notes={notes.filter(n => n.sectionId === section.id)}
                     onAddNote={() => onAddNote(section.id)}
                     onNoteDelete={onNoteDelete}
                     onNoteUpdate={onNoteUpdate}
                     onClick={() => onSectionClick(section.name)}
                     framework={framework}
                     className={`w-full h-full border-t-4 ${colors[idx % colors.length]} rounded-xl`}
                  />
                );
             })}
          </div>
        );
      case 't-chart':
        return (
          <div className={`flex flex-col md:flex-row h-full w-full max-w-6xl gap-8 ${isMobile ? 'p-2' : ''}`}>
            {framework.sections.map((section) => (
              <div key={section.id} className="flex-1 flex flex-col items-center">
                <div className="w-full text-center mb-4 pb-2 border-b-4 border-indigo-500">
                  <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">{section.name}</h3>
                </div>
                <div className="w-full h-full bg-slate-50/50 rounded-2xl p-6 border-x border-b border-slate-100 flex flex-col gap-4">
                   <button 
                      onClick={() => onAddNote(section.id)}
                      className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 hover:border-indigo-300 hover:text-indigo-600 transition-all flex items-center justify-center gap-2 text-xs font-bold bg-white"
                    >
                      <Plus size={14} /> Add Entry
                    </button>
                    <div className="space-y-4">
                       {notes.filter(n => n.sectionId === section.id).map(note => (
                          <StickyNoteCard 
                             key={note.id} 
                             note={note} 
                             onDelete={() => onNoteDelete(note.id)}
                             onUpdate={(u) => onNoteUpdate(note.id, u)}
                             sections={framework.sections}
                          />
                       ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'comparison':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-3 gap-6'} min-h-[45vh]`}>
            {framework.sections.map((section, idx) => (
               <SectionBox 
                  key={section.id}
                  title={section.name}
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  className={`w-full rounded-xl shadow-sm border-2 ${idx === 2 ? 'border-indigo-500 bg-indigo-50/20' : ''}`}
               />
            ))}
          </div>
        );
      case 'kanban':
        return (
          <div className={`flex gap-6 w-full ${isMobile ? 'flex-col min-h-[80vh] overflow-y-auto' : 'h-[70vh] max-w-6xl px-8 overflow-x-auto'}`}>
            {framework.sections.map((section) => (
              <div key={section.id} className={`${isMobile ? 'w-full' : 'flex-1 min-w-[300px]'} flex flex-col bg-slate-100/50 rounded-xl p-4 border border-slate-200`}>
                 <div className="flex items-center justify-between mb-4 px-2">
                    <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-500">{section.name}</h3>
                    <div className="bg-white px-2 py-0.5 rounded text-[10px] font-bold text-slate-400 border border-slate-200">
                      {notes.filter(n => n.sectionId === section.id).length}
                    </div>
                 </div>
                 <div className="flex-1 overflow-y-auto space-y-4">
                    <button 
                      onClick={() => onAddNote(section.id)}
                      className="w-full py-3 border-2 border-dashed border-slate-200 rounded-lg text-slate-400 hover:border-indigo-300 hover:text-indigo-500 transition-all flex items-center justify-center gap-2 text-xs font-medium bg-white"
                    >
                      <Plus size={14} /> Add Card
                    </button>
                    {notes.filter(n => n.sectionId === section.id).map(note => (
                       <StickyNoteCard 
                          key={note.id} 
                          note={note} 
                          onDelete={() => onNoteDelete(note.id)}
                          onUpdate={(u) => onNoteUpdate(note.id, u)}
                          sections={framework.sections}
                       />
                    ))}
                 </div>
              </div>
            ))}
          </div>
        );
      case 'value-chain':
        return (
          <div className="relative flex flex-col gap-4 w-full max-w-6xl">
             {/* Support Activities */}
             <div className="flex flex-col gap-2">
                {framework.sections.slice(5).map(section => (
                   <SectionBox 
                      key={section.id}
                      title={section.name}
                      notes={notes.filter(n => n.sectionId === section.id)}
                      onAddNote={() => onAddNote(section.id)}
                      onNoteDelete={onNoteDelete}
                      onNoteUpdate={onNoteUpdate}
                      onClick={() => onSectionClick(section.name)}
                      framework={framework}
                      className="h-20 border-l-4 border-l-slate-300 bg-slate-50/50"
                   />
                ))}
             </div>
             {/* Primary Activities */}
             <div className={`relative flex gap-2 ${isMobile ? 'flex-col' : ''}`}>
                {framework.sections.slice(0, 5).map((section, idx) => (
                   <SectionBox 
                      key={section.id}
                      title={section.name}
                      notes={notes.filter(n => n.sectionId === section.id)}
                      onAddNote={() => onAddNote(section.id)}
                      onNoteDelete={onNoteDelete}
                      onNoteUpdate={onNoteUpdate}
                      onClick={() => onSectionClick(section.name)}
                      framework={framework}
                      className={`flex-1 ${isMobile ? 'h-32' : 'h-48'} ${idx === 0 && !isMobile ? 'rounded-l-2xl' : ''} border-b-4 border-b-indigo-500`}
                   />
                ))}
                {/* Margin Wedge */}
                {!isMobile && (
                  <div className="w-24 bg-indigo-600 flex items-center justify-center text-white font-black text-xs uppercase tracking-widest [clip-path:polygon(0%_0%,70%_0%,100%_50%,70%_100%,0%_100%)]">
                    Margin
                  </div>
                )}
             </div>
          </div>
        );
      case 'gauge':
        return (
          <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center p-8">
            <svg className="w-[500px] h-[300px]" viewBox="0 0 500 300">
               {/* Gauge Background */}
               <path 
                  d="M 50 250 A 200 200 0 0 1 450 250" 
                  fill="none" 
                  stroke="#f1f5f9" 
                  strokeWidth="40" 
                  strokeLinecap="round"
               />
               {/* Zones */}
               <path 
                  d="M 50 250 A 200 200 0 0 1 183 76" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="40" 
                  strokeLinecap="butt"
               />
               <path 
                  d="M 183 76 A 200 200 0 0 1 316 76" 
                  fill="none" 
                  stroke="#94a3b8" 
                  strokeWidth="40" 
                  strokeLinecap="butt"
               />
               <path 
                  d="M 316 76 A 200 200 0 0 1 450 250" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="40" 
                  strokeLinecap="butt"
               />
               <motion.line 
                  x1="250" y1="250" x2="250" y2="80" 
                  stroke="#1e293b" strokeWidth="4" strokeLinecap="round"
                  initial={{ rotate: -90, originX: '250px', originY: '250px' }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
               />
               <circle cx="250" cy="250" r="8" fill="#1e293b" />
            </svg>

            <div className="absolute inset-0 flex justify-between items-end p-12 mb-8">
               {framework.sections.map((section, idx) => {
                  const colors = ['border-rose-500', 'border-slate-500', 'border-emerald-500'];
                  const alignment = idx === 0 ? 'items-end' : idx === 1 ? 'items-center -mt-96' : 'items-start';
                  return (
                    <div key={section.id} className={`flex flex-col ${alignment} w-64`}>
                       <SectionBox 
                          title={section.name}
                          notes={notes.filter(n => n.sectionId === section.id)}
                          onAddNote={() => onAddNote(section.id)}
                          onNoteDelete={onNoteDelete}
                          onNoteUpdate={onNoteUpdate}
                          onClick={() => onSectionClick(section.name)}
                          framework={framework}
                          className={`bg-white shadow-xl ${colors[idx]}`}
                          small
                       />
                    </div>
                  );
               })}
            </div>
          </div>
        );
      case 'hoq':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-2 lg:grid-cols-4 gap-6'} min-h-[50vh]`}>
            {framework.sections.map((section, idx) => {
              const borderStyles = ['border-t-indigo-500', 'border-t-emerald-500', 'border-t-amber-500', 'border-t-rose-500'];
              return (
                <SectionBox 
                   key={section.id}
                   title={section.name}
                   notes={notes.filter(n => n.sectionId === section.id)}
                   onAddNote={() => onAddNote(section.id)}
                   onNoteDelete={onNoteDelete}
                   onNoteUpdate={onNoteUpdate}
                   onClick={() => onSectionClick(section.name)}
                   framework={framework}
                   className={`w-full bg-white shadow-sm border-t-4 ${borderStyles[idx % borderStyles.length]} rounded-xl`}
                />
              );
            })}
          </div>
        );
      case 'ladder':
        return (
          <div className="grid w-full max-w-3xl grid-cols-1 gap-4 min-h-[40vh]">
            {[...framework.sections].reverse().map((section, idx) => (
              <SectionBox 
                key={section.id}
                title={`Level ${framework.sections.length - idx}: ${section.name}`}
                notes={notes.filter(n => n.sectionId === section.id)}
                onAddNote={() => onAddNote(section.id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(section.name)}
                framework={framework}
                className="w-full bg-white shadow-sm border-l-4 border-l-indigo-600 rounded-xl"
              />
            ))}
          </div>
        );
      case 'iceberg':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-4 gap-6'} min-h-[50vh]`}>
            {framework.sections.map((section, idx) => {
               const waterColors = ['bg-blue-50/20 border-blue-400', 'bg-sky-50/10 border-sky-300', 'bg-indigo-50/5 border-indigo-200', 'bg-slate-50/20 border-slate-300'];
               return (
                 <SectionBox 
                    key={section.id}
                    title={`${idx === 0 ? '❄️ [Surface] ' : '❄️ [Deep] '}${section.name}`}
                    notes={notes.filter(n => n.sectionId === section.id)}
                    onAddNote={() => onAddNote(section.id)}
                    onNoteDelete={onNoteDelete}
                    onNoteUpdate={onNoteUpdate}
                    onClick={() => onSectionClick(section.name)}
                    framework={framework}
                    className={`w-full h-full rounded-xl border-2 ${waterColors[idx % waterColors.length]} shadow-sm`}
                 />
               );
            })}
          </div>
        );
      case 'congruence':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-3 lg:grid-cols-6 gap-4'} min-h-[50vh]`}>
            {framework.sections.map((section, idx) => {
              const borders = ['border-indigo-400', 'border-blue-400', 'border-teal-400', 'border-amber-400', 'border-rose-400', 'border-emerald-400'];
              return (
                <SectionBox 
                  key={section.id}
                  title={section.name}
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  className={`w-full bg-white shadow-sm border-t-4 ${borders[idx % borders.length]} rounded-xl`}
                />
              );
            })}
          </div>
        );
      case 'cultural-web':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-3 gap-6'} min-h-[60vh]`}>
             {framework.sections.map((section, idx) => (
               <SectionBox 
                  key={section.id}
                  title={idx === 0 ? `★ ${section.name} (Core)` : section.name}
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  className={`w-full h-full rounded-xl shadow border-t-4 ${idx === 0 ? 'border-t-indigo-600 bg-indigo-50/5' : 'border-t-slate-200'}`}
               />
             ))}
          </div>
        );
      case 'strategy-diamond':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-5 gap-4'} min-h-[50vh]`}>
            {framework.sections.map((section, idx) => {
              const colors = ['border-blue-500', 'border-indigo-500', 'border-emerald-500', 'border-amber-500', 'border-indigo-600 bg-indigo-50/10'];
              return (
                <SectionBox 
                  key={section.id}
                  title={section.name}
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  className={`w-full bg-white shadow-sm border-t-4 ${colors[idx % colors.length]} rounded-xl`}
                />
              );
            })}
          </div>
        );
      case 'bell-curve':
      case 's-curve':
        return (
          <div className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] flex flex-col items-center justify-center p-4 md:p-8">
             <div className="relative w-full h-full max-h-[400px] border-b-2 border-slate-200">
                <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
                   <path 
                      d={framework.layout === 'bell-curve' 
                        ? "M 0 280 Q 250 280 500 50 Q 750 280 1000 280"
                        : "M 0 280 Q 300 280 500 150 T 1000 50"
                      }
                      fill="none"
                      stroke="#cbd5e1"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                   />
                </svg>
                
                <div className="absolute inset-0 flex items-end justify-between px-12">
                   {framework.sections.map((section, idx) => {
                      const heights = framework.layout === 'bell-curve' 
                        ? [20, 150, 200, 20] 
                        : [20, 100, 200, 250];
                      return (
                        <div key={section.id} className="flex flex-col items-center gap-4 w-48">
                           <SectionBox 
                              title={section.name}
                              notes={notes.filter(n => n.sectionId === section.id)}
                              onAddNote={() => onAddNote(section.id)}
                              onNoteDelete={onNoteDelete}
                              onNoteUpdate={onNoteUpdate}
                              onClick={() => onSectionClick(section.name)}
                              framework={framework}
                              className="bg-white shadow-xl border-indigo-100"
                              small
                           />
                           <div 
                              className="w-1 bg-indigo-500 rounded-full" 
                              style={{ height: heights[idx] }} 
                           />
                        </div>
                      );
                   })}
                </div>
             </div>
          </div>
        );
      case 'matrix':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-4' : 'grid-cols-2 gap-8'} min-h-[50vh]`}>
            {framework.sections.map((section, idx) => {
              const borderColors = ['border-t-blue-500', 'border-t-indigo-500', 'border-t-emerald-500', 'border-t-amber-500'];
              return (
                <SectionBox 
                  key={section.id}
                  title={section.name}
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  className={`shadow-sm bg-white border-t-4 ${borderColors[idx % borderColors.length]}`}
                />
              );
            })}
          </div>
        );
      case 'graph':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-4 gap-6'} min-h-[45vh]`}>
             {framework.sections.map((section, idx) => (
               <SectionBox 
                  key={section.id}
                  title={`📈 ${section.name}`}
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  className="w-full bg-white border border-slate-200 shadow-sm rounded-xl border-t-4 border-t-indigo-500"
               />
             ))}
          </div>
        );
      case 'graph-legacy':
        return (
          <div className="relative w-full max-w-5xl aspect-video border-l-2 border-b-2 border-slate-200 p-4 md:p-8 flex items-end">
             <div className="absolute left-2 top-1/2 -rotate-90 text-[8px] font-black text-slate-400 uppercase tracking-widest">High Quality</div>
             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Strategic Factors</div>
             
             <div className="flex-1 h-full flex items-end gap-2 md:gap-12 px-2 md:px-12">
                {framework.sections.map((section, idx) => (
                  <div key={section.id} className="flex-1 flex flex-col items-center gap-4">
                     <div className="w-full flex-1 relative bg-slate-50/30 rounded-t-lg border-x border-t border-slate-100 flex flex-col justify-end p-2">
                        {notes.filter(n => n.sectionId === section.id).map(note => (
                            <StickyNoteCard 
                                key={note.id} 
                                note={note} 
                                onDelete={() => onNoteDelete(note.id)}
                                onUpdate={(u) => onNoteUpdate(note.id, u)}
                                sections={framework.sections}
                                compact
                            />
                        ))}
                        <button 
                            onClick={() => onAddNote(section.id)}
                            className="mt-2 w-full py-2 border border-dashed border-slate-200 rounded text-slate-400 hover:bg-slate-50 hover:text-indigo-600 transition-all flex items-center justify-center"
                        >
                            <Plus size={14} />
                        </button>
                     </div>
                     <div className="text-[10px] font-bold text-slate-500 text-center uppercase tracking-tighter h-8 flex items-center">{section.name}</div>
                  </div>
                ))}
             </div>
             
             {/* Strategy Line Visualization */}
             <svg className="absolute inset-x-8 inset-y-8 pointer-events-none w-full h-full opacity-20">
                <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    d={`M ${100} ${500} L ${300} ${400} L ${500} ${300} L ${700} ${100}`}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                </defs>
             </svg>
          </div>
        );
      case 'x-matrix':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'grid-cols-2 gap-6'} min-h-[50vh]`}>
            {framework.sections.map((section, idx) => {
              const colors = ['border-indigo-500', 'border-emerald-500', 'border-amber-500', 'border-rose-500'];
              return (
                <SectionBox 
                    key={section.id}
                    title={`🎯 ${section.name}`}
                    notes={notes.filter(n => n.sectionId === section.id)}
                    onAddNote={() => onAddNote(section.id)}
                    onNoteDelete={onNoteDelete}
                    onNoteUpdate={onNoteUpdate}
                    onClick={() => onSectionClick(section.name)}
                    framework={framework}
                    className={`w-full bg-white border-t-4 ${colors[idx % colors.length]} shadow rounded-xl`}
                />
              );
            })}
          </div>
        );
      case 'x-matrix-legacy':
        return (
          <div className="relative w-full max-w-5xl aspect-square bg-slate-900 border-[12px] border-slate-900 rounded-[80px] overflow-hidden shadow-2xl p-4">
            <div className="absolute inset-0 border-[20px] border-white/5 rounded-[70px] pointer-events-none" />
            
            <div className="relative z-10 w-full h-full grid grid-cols-2 grid-rows-2 gap-12 p-8">
                {/* Center Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rotate-45 border-8 border-slate-900 bg-white z-[60] flex items-center justify-center shadow-2xl">
                    <div className="-rotate-45 font-black text-center text-slate-900 text-[18px] uppercase tracking-tighter leading-none">Hoshin<br/>Kanri</div>
                </div>

                {framework.sections.map((section, idx) => {
                  const colors = ['border-indigo-500', 'border-emerald-500', 'border-amber-500', 'border-rose-500'];
                  return (
                    <div key={section.id} className="relative w-full h-full group">
                        <SectionBox 
                            title={section.name}
                            notes={notes.filter(n => n.sectionId === section.id)}
                            onAddNote={() => onAddNote(section.id)}
                            onNoteDelete={onNoteDelete}
                            onNoteUpdate={onNoteUpdate}
                            onClick={() => onSectionClick(section.name)}
                            framework={framework}
                            className={`h-full py-12 bg-white/95 border-t-8 ${colors[idx]} shadow-2xl rounded-3xl transition-transform group-hover:scale-[1.02]`}
                        />
                    </div>
                  );
                })}
            </div>
          </div>
        );
      case 'fishbone':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-3 gap-6'} min-h-[60vh]`}>
            {framework.sections.map((section, idx) => (
              <SectionBox 
                  key={section.id} 
                  title={`🦴 ${section.name}`}
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  className={`bg-white shadow border-t-4 ${idx < 3 ? 'border-t-indigo-400' : 'border-t-rose-400'} rounded-xl`}
              />
            ))}
          </div>
        );
      case 'fishbone-legacy':
        return (
          <div className="relative w-full max-w-7xl aspect-[21/9] flex items-center justify-center p-12 bg-slate-50/30 rounded-[80px] shadow-inner mb-20">
            {/* Spine */}
            <div className="absolute h-4 bg-slate-900 left-12 right-64 rounded-full shadow-2xl z-0" />
            <div className="absolute right-12 w-48 h-48 bg-slate-900 rounded-3xl shadow-2xl flex items-center justify-center p-6 text-white z-20 border-[12px] border-white">
                <div className="font-black text-center text-[18px] uppercase leading-tight tracking-tighter">
                   Core<br/>Problem<br/>Statement
                </div>
            </div>

            {/* Bone Rows */}
            <div className="absolute inset-0 flex flex-col justify-between py-20 px-48">
                <div className="flex justify-around items-start">
                    {framework.sections.slice(0, 3).map((section, idx) => (
                        <div key={section.id} className="relative w-64 pt-12 group">
                             {/* Diagonal Bone */}
                            <div className="absolute bottom-[100%] left-1/2 w-2 h-48 bg-slate-200 -rotate-[35deg] origin-bottom transition-colors group-hover:bg-indigo-200" />
                            <SectionBox 
                                title={section.name} 
                                notes={notes.filter(n => n.sectionId === section.id)}
                                onAddNote={() => onAddNote(section.id)}
                                onNoteDelete={onNoteDelete}
                                onNoteUpdate={onNoteUpdate}
                                onClick={() => onSectionClick(section.name)}
                                framework={framework}
                                className="bg-white shadow-2xl py-8 border-t-8 border-indigo-400"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-around items-end">
                    {framework.sections.slice(3, 6).map((section, idx) => (
                        <div key={section.id} className="relative w-64 pb-12 group">
                            {/* Diagonal Bone */}
                            <div className="absolute top-[100%] left-1/2 w-2 h-48 bg-slate-200 rotate-[35deg] origin-top transition-colors group-hover:bg-rose-200" />
                            <SectionBox 
                                title={section.name} 
                                notes={notes.filter(n => n.sectionId === section.id)}
                                onAddNote={() => onAddNote(section.id)}
                                onNoteDelete={onNoteDelete}
                                onNoteUpdate={onNoteUpdate}
                                onClick={() => onSectionClick(section.name)}
                                framework={framework}
                                className="bg-white shadow-2xl py-8 border-b-8 border-rose-400"
                            />
                        </div>
                    ))}
                </div>
            </div>
          </div>
        );
      case 'tree':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-4 gap-6'} min-h-[45vh]`}>
             {framework.sections.map((section, idx) => (
                <SectionBox 
                    key={section.id}
                    title={`🌿 ${section.name}`}
                    notes={notes.filter(n => n.sectionId === section.id)}
                    onAddNote={() => onAddNote(section.id)}
                    onNoteDelete={onNoteDelete}
                    onNoteUpdate={onNoteUpdate}
                    onClick={() => onSectionClick(section.name)}
                    framework={framework}
                    className="w-full bg-white border border-slate-200 shadow-sm rounded-xl"
                />
             ))}
          </div>
        );
      case 'tree-legacy':
        return (
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 md:px-16 py-8 w-full overflow-x-auto">
             <div className="shrink-0 w-full md:w-auto flex justify-center">
                <SectionBox 
                    title={framework.sections[0].name}
                    notes={notes.filter(n => n.sectionId === framework.sections[0].id)}
                    onAddNote={() => onAddNote(framework.sections[0].id)}
                    onNoteDelete={onNoteDelete}
                    onNoteUpdate={onNoteUpdate}
                    onClick={() => onSectionClick(framework.sections[0].name)}
                    framework={framework}
                    className="w-56"
                />
             </div>
             
             <ArrowRight className="text-slate-200 shrink-0 rotate-90 md:rotate-0" size={32} />

             <div className="flex flex-col gap-8 shrink-0 w-full md:w-auto">
                {framework.sections.slice(1, 3).map(section => (
                    <div key={section.id} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <SectionBox 
                            title={section.name}
                            notes={notes.filter(n => n.sectionId === section.id)}
                            onAddNote={() => onAddNote(section.id)}
                            onNoteDelete={onNoteDelete}
                            onNoteUpdate={onNoteUpdate}
                            onClick={() => onSectionClick(section.name)}
                            framework={framework}
                            className="w-48"
                        />
                        {section.id === 'Branch1' && (
                            <>
                                <ArrowRight className="text-slate-200 rotate-90 md:rotate-0" size={24} />
                                <SectionBox 
                                    title={framework.sections[3].name}
                                    notes={notes.filter(n => n.sectionId === framework.sections[3].id)}
                                    onAddNote={() => onAddNote(framework.sections[3].id)}
                                    onNoteDelete={onNoteDelete}
                                    onNoteUpdate={onNoteUpdate}
                                    onClick={() => onSectionClick(framework.sections[3].name)}
                                    framework={framework}
                                    className="w-48"
                                />
                            </>
                        )}
                    </div>
                ))}
             </div>
          </div>
        );
      case 'bow-tie':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-5 gap-4'} min-h-[50vh]`}>
            {framework.sections.map((section, idx) => {
              const borderStyles = ['border-t-rose-500', 'border-t-orange-400', 'border-t-indigo-600', 'border-t-teal-400', 'border-t-emerald-500'];
              return (
                <SectionBox 
                  key={section.id} 
                  title={section.name}
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  className={`w-full bg-white border-t-4 ${borderStyles[idx % borderStyles.length]} rounded-xl shadow-sm`}
                />
              );
            })}
          </div>
        );
      case 'bow-tie-legacy':
        return (
          <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 px-4 md:px-12 py-8">
            {/* Threats */}
            <div className="flex flex-col gap-4 w-full md:flex-1">
              <SectionBox 
                title={framework.sections[0].name}
                notes={notes.filter(n => n.sectionId === framework.sections[0].id)}
                onAddNote={() => onAddNote(framework.sections[0].id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(framework.sections[0].name)}
                framework={framework}
              />
            </div>
            <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />
            
            {/* Barriers Prevent */}
            <div className="flex flex-col gap-4 w-full md:flex-1">
              <SectionBox 
                title={framework.sections[1].name}
                notes={notes.filter(n => n.sectionId === framework.sections[1].id)}
                onAddNote={() => onAddNote(framework.sections[1].id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(framework.sections[1].name)}
                framework={framework}
              />
            </div>
            <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />

            {/* Top Event */}
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <div className="w-full md:w-48 h-32 md:h-64 border-4 border-indigo-400 rounded-2xl flex items-center justify-center p-4 bg-indigo-50/50 shadow-2xl shadow-indigo-100">
                <SectionBox 
                    title={framework.sections[2].name}
                    notes={notes.filter(n => n.sectionId === framework.sections[2].id)}
                    onAddNote={() => onAddNote(framework.sections[2].id)}
                    onNoteDelete={onNoteDelete}
                    onNoteUpdate={onNoteUpdate}
                    onClick={() => onSectionClick(framework.sections[2].name)}
                    framework={framework}
                    className="border-none shadow-none bg-transparent"
                />
              </div>
            </div>
            <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />

            {/* Barriers Mitigate */}
            <div className="flex flex-col gap-4 w-full md:flex-1">
              <SectionBox 
                title={framework.sections[3].name}
                notes={notes.filter(n => n.sectionId === framework.sections[3].id)}
                onAddNote={() => onAddNote(framework.sections[3].id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(framework.sections[3].name)}
                framework={framework}
              />
            </div>
            <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />

            {/* Consequences */}
            <div className="flex flex-col gap-4 w-full md:flex-1">
              <SectionBox 
                title={framework.sections[4].name}
                notes={notes.filter(n => n.sectionId === framework.sections[4].id)}
                onAddNote={() => onAddNote(framework.sections[4].id)}
                onNoteDelete={onNoteDelete}
                onNoteUpdate={onNoteUpdate}
                onClick={() => onSectionClick(framework.sections[4].name)}
                framework={framework}
              />
            </div>
          </div>
        );
      case 'force-field':
        return (
          <div className={`grid w-full max-w-6xl grid-cols-1 ${isMobile ? 'gap-4': 'md:grid-cols-2 gap-8'} min-h-[50vh]`}>
            {framework.sections.map((section, idx) => {
              const colors = ['border-t-emerald-500', 'border-t-rose-500'];
              return (
                <SectionBox 
                  key={section.id}
                  title={section.name}
                  notes={notes.filter(n => n.sectionId === section.id)}
                  onAddNote={() => onAddNote(section.id)}
                  onNoteDelete={onNoteDelete}
                  onNoteUpdate={onNoteUpdate}
                  onClick={() => onSectionClick(section.name)}
                  framework={framework}
                  className={`w-full bg-white border-t-4 ${colors[idx % colors.length]} rounded-xl shadow-sm`}
                />
              );
            })}
          </div>
        );
      case 'force-field-legacy':
        return (
          <div className="relative w-full max-w-5xl min-h-[600px] bg-white border border-slate-200 rounded-3xl overflow-hidden p-4 md:p-8 flex flex-col gap-8">
            <div className="text-center">
                <h3 className="text-lg md:text-xl font-black text-slate-800 uppercase tracking-widest">Force Field Analysis</h3>
                <div className="h-1 w-24 bg-indigo-600 mx-auto mt-2" />
            </div>
            
            <div className="flex flex-col md:flex-row flex-1 gap-6 md:gap-12 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block z-0" />
                
                {/* Driving Forces */}
                <div className="flex-1 flex flex-col gap-4 z-10 px-2 md:px-0">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-black text-emerald-600 uppercase tracking-wider flex items-center gap-2">
                             Driving Forces <ArrowRight size={16} />
                        </span>
                        <button 
                            onClick={() => onAddNote(framework.sections[0].id)}
                            className="h-8 w-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all"
                        >
                            <Plus size={16} />
                        </button>
                    </div>
                    <div className="space-y-4">
                        {notes.filter(n => n.sectionId === framework.sections[0].id).map(note => (
                            <StickyNoteCard 
                                key={note.id} 
                                note={note} 
                                onDelete={() => onNoteDelete(note.id)}
                                onUpdate={(u) => onNoteUpdate(note.id, u)}
                                sections={framework.sections}
                                color={COLORS[0]}
                            />
                        ))}
                    </div>
                </div>

                {/* Restraining Forces */}
                <div className="flex-1 flex flex-col gap-4 z-10 text-right">
                    <div className="flex items-center justify-between mb-4 flex-row-reverse">
                        <span className="text-sm font-black text-rose-600 uppercase tracking-wider flex items-center gap-2">
                            <ArrowRight className="rotate-180" size={16} /> Restraining Forces
                        </span>
                        <button 
                            onClick={() => onAddNote(framework.sections[1].id)}
                            className="h-8 w-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all"
                        >
                            <Plus size={16} />
                        </button>
                    </div>
                    <div className="space-y-4">
                        {notes.filter(n => n.sectionId === framework.sections[1].id).map(note => (
                            <StickyNoteCard 
                                key={note.id} 
                                note={note} 
                                onDelete={() => onNoteDelete(note.id)}
                                onUpdate={(u) => onNoteUpdate(note.id, u)}
                                sections={framework.sections}
                                color={COLORS[1]}
                            />
                        ))}
                    </div>
                </div>
            </div>
          </div>
        );
      default:
        return <div>Layout not implemented</div>;
    }
  };

  return (
    <div className="transition-all duration-700">
      {renderLayout()}
    </div>
  );
}

const SectionBox: React.FC<{ 
  title: string; 
  notes: StickyNote[];
  onAddNote: () => void;
  onNoteDelete: (id: string) => void;
  onNoteUpdate: (id: string, updates: Partial<StickyNote>) => void;
  onClick?: () => void;
  framework: Framework;
  className?: string; 
  style?: React.CSSProperties;
  small?: boolean;
}> = ({ 
  title, 
  notes, 
  onAddNote, 
  onNoteDelete, 
  onNoteUpdate,
  onClick,
  framework,
  className = "", 
  style = {},
  small = false 
}) => {
  return (
    <div 
      className={`group relative flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-indigo-400 hover:shadow-md cursor-pointer ${small ? 'min-h-[110px]' : 'min-h-[180px]'} ${className}`}
      style={style}
      onClick={onClick}
    >
      <div className={`flex items-center justify-between ${small ? 'px-3 py-2' : 'px-5 py-4'} border-b border-slate-50`}>
        <h3 className={`font-black tracking-tight text-slate-800 uppercase ${small ? 'text-[10px]' : 'text-sm tracking-widest'}`}>{title}</h3>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAddNote();
          }}
          className="rounded p-1 text-slate-300 transition-all hover:bg-indigo-600 hover:text-white"
        >
          <Plus size={small ? 10 : 14} />
        </button>
      </div>
      <div className={`flex flex-1 flex-wrap content-start gap-2 ${small ? 'p-1.5' : 'p-3'} overflow-y-auto min-h-0`}>
        {notes.length === 0 && (
           <div className="flex w-full h-full items-center justify-center opacity-65 py-4">
              <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Empty Section</span>
           </div>
        )}
        {notes.map(note => (
          <StickyNoteCard 
            key={note.id} 
            note={note} 
            onDelete={() => onNoteDelete(note.id)}
            onUpdate={(u) => onNoteUpdate(note.id, u)}
            sections={framework.sections}
            compact={small}
          />
        ))}
      </div>
    </div>
  );
}

const StickyNoteCard: React.FC<{ 
  note: StickyNote; 
  onDelete: () => void; 
  onUpdate: (updates: Partial<StickyNote>) => void;
  sections?: FrameworkSection[];
  compact?: boolean;
}> = ({ 
  note, 
  onDelete, 
  onUpdate,
  sections = [],
  compact = false 
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`relative ${compact ? 'min-h-[76px] w-[88px] p-1.5 rounded-md' : 'min-h-[114px] w-[138px] p-2.5 rounded-lg'} ${note.color} border border-black/5 flex flex-col shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 group/note`}
    >
      <div className="flex items-center justify-between mb-1">
         <div className="h-1 w-4 rounded-full bg-black/10" />
         <div className="flex items-center gap-1">
           <button 
            onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }}
            className="transition-all text-black/30 opacity-60 group-hover/note:opacity-100 hover:!text-indigo-600"
           >
            <ArrowRightLeft size={10} />
           </button>
           <button 
            onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="transition-all text-black/30 opacity-60 group-hover/note:opacity-100 hover:!text-rose-600"
           >
            <Trash2 size={10} />
           </button>
         </div>
      </div>
      
      {showMenu && sections.length > 0 && (
        <div className="absolute top-6 left-0 right-0 z-50 bg-white border border-slate-200 rounded-lg shadow-xl p-1 animate-in fade-in zoom-in duration-200">
          <p className="text-[7px] font-black text-slate-400 uppercase px-2 py-1 border-b border-slate-50 mb-1">Move To</p>
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => {
                onUpdate({ sectionId: s.id });
                setShowMenu(false);
              }}
              className={`w-full text-left px-2 py-1 text-[8px] rounded hover:bg-slate-50 ${note.sectionId === s.id ? 'font-bold text-indigo-600' : 'text-slate-600'}`}
            >
              {s.name}
            </button>
          ))}
        </div>
      )}

      <textarea
        value={note.text}
        onChange={(e) => onUpdate({ text: e.target.value })}
        className={`w-full flex-1 resize-none bg-transparent font-sans leading-tight focus:outline-none placeholder:text-black/20 overflow-y-auto break-words whitespace-pre-wrap ${compact ? 'text-[8.5px]' : 'text-[11.5px] font-semibold'}`}
        placeholder="Entry..."
      />
    </motion.div>
  );
}

