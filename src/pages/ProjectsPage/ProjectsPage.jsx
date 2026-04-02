import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { 
    Github, 
    ExternalLink, 
    Folder, 
    FileCode, 
    GitBranch, 
    ChevronRight, 
    Settings,
    Search,
    Monitor,
    Layout,
    Globe,
    Hash
} from "lucide-react";
import portfolioData from "../../data";
import { PageHeader, Typewriter } from "../../components";
import useSEO from "../../hooks/useSEO";

export default function ProjectsPage() {
    const projects = portfolioData.projects || [];
    const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id || null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const selectedProject = projects.find(p => p.id === selectedProjectId) || projects[0];

    useSEO(
        "Projects",
        "Explore my Project Explorer. A curated collection of technical projects - from full-stack apps to performance experiments."
    );

    if (!selectedProject) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center font-mono text-muted-foreground">
                [SYSTEM_ERROR]: NO_PROJECTS_LOADED
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <div className="relative min-h-screen bg-transparent overflow-hidden">
            {/* Subtle Scanlines Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] gruvbox-scanlines" />

            <main className="relative z-10 mx-auto max-w-6xl px-6 py-20">
                <PageHeader
                    label="VCS Controller"
                    title="Engines"
                    subtitle="System-level overview of architected solutions and experimental technical deployments."
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col border border-border bg-card/40 backdrop-blur-md shadow-2xl overflow-hidden relative"
                >
                    {/* IDE-style Header */}
                    <div className="flex items-center justify-between px-4 py-2 bg-secondary/40 border-b border-border">
                        <div className="flex items-center gap-6">
                            <div className="flex gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-telephone-red/60" />
                                <div className="h-3 w-3 rounded-full bg-vibrant-yellow/60" />
                                <div className="h-3 w-3 rounded-full bg-vibrant-emerald/60" />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-[10px] font-mono font-bold text-muted-foreground flex items-center gap-1.5 px-2 py-0.5 bg-background/50 border border-border/50">
                                    <Folder size={12} className="text-primary/70" />
                                    abhishek-tiwari/portfolio
                                </div>
                                <span className="text-muted-foreground/30 font-mono text-[10px]">•</span>
                                <div className="text-[10px] font-mono text-primary/80 font-bold tracking-wider">
                                    projects.json
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <button className="text-muted-foreground hover:text-primary transition-colors"><Search size={14} /></button>
                            <button className="text-muted-foreground hover:text-primary transition-colors"><Settings size={14} /></button>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row min-h-[600px]">
                        {/* Sidebar Project Tree — Collapsible on all, Hidden on mobile by default */}
                        <AnimatePresence initial={false}>
                            {isSidebarOpen && (
                                <motion.aside
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: isSidebarOpen ? (isDesktop ? 260 : "100%") : 0, opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    className="border-b lg:border-b-0 lg:border-r border-border bg-secondary/10 flex flex-col overflow-hidden shrink-0"
                                >
                                    <div className="p-4 border-b border-border/30 bg-secondary/5">
                                        <div className="flex items-center justify-between text-[10px] font-mono font-black uppercase tracking-widest text-muted-foreground">
                                            <span>Explorer</span>
                                            <ChevronRight size={12} className="rotate-90" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <div className="px-4 py-1.5 flex items-center gap-2 text-[11px] font-mono font-bold text-primary/80 uppercase tracking-tighter">
                                            <ChevronRight size={12} className="rotate-90" />
                                            <Folder size={14} />
                                            Deployment_List
                                        </div>
                                        {projects.map((project) => (
                                            <button
                                                key={project.id}
                                                onClick={() => setSelectedProjectId(project.id)}
                                                className={`group relative flex items-center gap-2 pl-8 pr-4 py-2 text-[11px] font-mono transition-all border-l-2 ${selectedProjectId === project.id
                                                    ? "bg-primary/10 border-primary text-foreground"
                                                    : "border-transparent text-muted-foreground hover:bg-secondary/30 hover:text-foreground"
                                                }`}
                                            >
                                                <FileCode size={14} className={selectedProjectId === project.id ? "text-primary" : "text-muted-foreground/50 group-hover:text-primary/70"} />
                                                <span className="truncate">{project.project_title.toLowerCase().replace(/\s+/g, '_')}.js</span>
                                                {selectedProjectId === project.id && (
                                                    <div className="ml-auto h-1.5 w-1.5 bg-primary" />
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Sidebar Stat Info */}
                                    <div className="mt-auto p-4 border-t border-border/30 bg-background/20">
                                        <div className="flex flex-col gap-2 opacity-60">
                                            <div className="flex items-center justify-between text-[9px] font-mono uppercase">
                                                <span>Total Nodes:</span>
                                                <span>{projects.length}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-[9px] font-mono uppercase">
                                                <span>Active Env:</span>
                                                <span className="text-primary font-bold">PROD</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.aside>
                            )}
                        </AnimatePresence>

                        {/* Toggle Sidebar Button — Hidden on mobile, as we might use a different approach or just let it stack */}
                        <button 
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="hidden lg:flex w-4 border-r border-border hover:bg-primary/5 items-center justify-center transition-colors group"
                            title={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
                        >
                            <div className="h-8 w-px bg-border group-hover:bg-primary/40 transition-colors" />
                        </button>

                        {/* Main Editor Pane */}
                        <div className="flex-1 bg-background/30 overflow-y-auto custom-scrollbar relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedProjectId}
                                    variants={contentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    className="p-8 lg:p-12 max-w-4xl mx-auto"
                                >
                                    {/* Project Header Section */}
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border pb-8">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2 text-[10px] font-mono text-primary font-black uppercase tracking-[0.25em]">
                                                <Monitor size={12} />
                                                Selected_Engine
                                            </div>
                                            <h2 className="text-4xl lg:text-5xl font-mono font-black text-foreground tracking-tight">
                                                <Typewriter text={selectedProject.project_title} speed={50} />
                                            </h2>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {selectedProject.git_link && (
                                                <a href={selectedProject.git_link} target="_blank" rel="noreferrer"
                                                   className="vercel-button-secondary py-2 px-4 gap-2 text-[10px]">
                                                    <Github size={14} /> Repository
                                                </a>
                                            )}
                                            {selectedProject.live_link && (
                                                <a href={selectedProject.live_link} target="_blank" rel="noreferrer"
                                                   className="vercel-button-primary py-2 px-4 gap-2 text-[10px]">
                                                    <ExternalLink size={14} /> Live
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                        {/* Project Preview Image */}
                                        <div className="flex flex-col gap-8">
                                            <div className="relative group border border-primary/10 overflow-hidden bg-secondary/20 shadow-2xl">
                                                <img 
                                                    src={selectedProject.image?.[0]?.image || '/placeholder.svg'} 
                                                    alt={selectedProject.project_title}
                                                    className="w-full object-cover aspect-video brightness-90 group-hover:brightness-100 transition-all duration-700 transform group-hover:scale-[1.01]"
                                                />
                                                <div className="absolute inset-0 border-[1px] border-primary/10 pointer-events-none" />
                                            </div>
                                            
                                            {/* Tech Stack Focus */}
                                            <div className="flex flex-col gap-4">
                                                <span className="text-[11px] font-mono font-black uppercase tracking-[0.3em] text-muted-foreground/60 border-l-2 border-primary pl-4">Architecture_Stack</span>
                                                <div className="flex flex-wrap gap-3">
                                                    {selectedProject.skills.map((skill, i) => (
                                                        <span key={i} className="px-3 py-1.5 border border-primary/10 bg-primary/5 text-[10px] font-mono font-black text-foreground/80 hover:border-primary/40 transition-all cursor-default">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Project Detail Text */}
                                        <div className="flex flex-col gap-8 prose prose-sm max-w-none">
                                            <div className="flex flex-col gap-4">
                                                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-muted-foreground border-l-2 border-accent pl-3">Technical_Manifesto</span>
                                                <div className="text-muted-foreground font-mono leading-relaxed text-sm prose prose-sm prose-invert max-w-none">
                                                    <ReactMarkdown>{selectedProject.project_description}</ReactMarkdown>
                                                </div>
                                            </div>

                                            {/* Deployment Status Block */}
                                            <div className="bg-secondary/20 border border-border p-5 relative overflow-hidden">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="h-2 w-2 rounded-full bg-vibrant-emerald animate-pulse" />
                                                    <span className="text-[10px] font-mono font-black uppercase tracking-widest text-foreground">Deployment Status: Optimal</span>
                                                </div>
                                                <p className="text-[11px] font-mono text-muted-foreground leading-snug">
                                                    Containerized solution verified across multiple environments. High speed data pipeline established.
                                                </p>
                                                {/* Decorative Binary Background Fragment */}
                                                <div className="absolute -bottom-2 -right-2 text-[40px] font-mono text-foreground/5 pointer-events-none font-black selec-none">
                                                    01
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* IDE Bottom Status Bar — Premium Detailing */}
                    <div className="flex items-center justify-between px-6 py-2.5 border-t border-primary/20 bg-black/40 backdrop-blur-xl text-[10px] font-mono font-bold text-muted-foreground/40 relative z-20">
                        <div className="flex items-center gap-8 relative z-10">
                            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-tighter">
                                <GitBranch size={13} /> branch:main*
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Hash size={12} /> {selectedProject.id}
                            </div>
                            <div className="flex items-center gap-1.5 uppercase font-bold tracking-tighter">
                                <Layout size={12} /> Standard IDE
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-1.5">
                                <Globe size={12} /> Node.js / React
                            </div>
                            <div className="text-primary font-bold uppercase tracking-widest">
                                Status: Ready
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
