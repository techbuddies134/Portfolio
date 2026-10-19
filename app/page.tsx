"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu as MenuIcon, X, ArrowRight, Phone, Mail, MapPin,
  Code, Palette, Rocket, MessageCircle, Send, ChevronUp,
  Award, Users, Briefcase, Heart, ExternalLink,
  Monitor, Database, Zap, Star
} from "lucide-react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const skills = [
    { name: "React / Next.js", level: 95, icon: <Code size={24} /> },
    { name: "Tailwind CSS", level: 92, icon: <Palette size={24} /> },
    { name: "JavaScript / TypeScript", level: 90, icon: <Zap size={24} /> },
    { name: "Framer Motion", level: 88, icon: <Rocket size={24} /> },
    { name: "Node.js / APIs", level: 85, icon: <Database size={24} /> },
    { name: "Responsive Design", level: 95, icon: <Monitor size={24} /> },
  ];

  const projects = [
    { 
      name: "Fork & Flame Cafe", 
      type: "restaurant", 
      desc: "Modern restaurant website with menu, gallery, contact form & Google Maps integration.", 
      tech: ["Next.js", "Tailwind", "Framer Motion"], 
      image: "/fork-flame.jpg",
      color: "from-blue-500 to-cyan-500", 
      link: "https://fork-flame-5zj8.vercel.app/" 
    },
    { 
      name: "Ottoman Restaurant", 
      type: "restaurant", 
      desc: "Elegant restaurant website with authentic menu, gallery and online reservation system.", 
      tech: ["Next.js", "Tailwind", "Framer Motion"], 
      image: "/ottoman.jpg",
      color: "from-cyan-500 to-blue-600", 
      link: "https://ottoman-resturant-so7q.vercel.app" 
    },
    { 
      name: "Furniture House", 
      type: "business", 
      desc: "Modern furniture e-commerce website with product showcase, categories and sleek design.", 
      tech: ["Next.js", "Tailwind", "Framer Motion"], 
      image: "/furniture.jpg",
      color: "from-blue-600 to-cyan-400", 
      link: "https://furniture-house-ym92.vercel.app/" 
    },
    { 
      name: "AttireAce Apparels", 
      type: "ecommerce", 
      desc: "Stylish clothing and apparel e-commerce store with modern UI and product catalog.", 
      tech: ["Next.js", "Tailwind", "Framer Motion"], 
      image: "/attireace.jpg",
      color: "from-cyan-400 to-blue-500", 
      link: "https://attire-ace.vercel.app/" 
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "restaurant", name: "Restaurant" },
    { id: "business", name: "Business" },
    { id: "ecommerce", name: "E-Commerce" },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.type === activeFilter);

  const stats = [
    { num: "25+", label: "Projects Done", icon: <Briefcase size={28} /> },
    { num: "15+", label: "Happy Clients", icon: <Users size={28} /> },
    { num: "6+", label: "Years Experience", icon: <Award size={28} /> },
    { num: "100%", label: "Satisfaction", icon: <Heart size={28} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-gray-950/95 backdrop-blur-md shadow-lg shadow-blue-500/10 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a href="#home" whileHover={{ scale: 1.05 }} className="relative flex items-center gap-3 cursor-pointer">
            <img 
              src="/logo.png" 
              alt="Tech Buddies Logo" 
              className="w-11 h-11 rounded-full object-cover shadow-lg shadow-blue-500/50"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Tech Buddies
              </span>
              <p className="text-[10px] text-gray-500 tracking-widest -mt-1">WE BUILD WEBSITES</p>
            </div>
          </motion.a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li key={link.name} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}>
                <a href={link.href} className="relative text-gray-300 font-medium hover:text-blue-400 transition group">
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-2 rounded-full font-medium shadow-lg shadow-blue-500/50 flex items-center gap-2">
              <MessageCircle size={16} /> Hire Us
            </motion.a>
          </ul>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-gray-900 shadow-lg overflow-hidden">
              <ul className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={() => setMenuOpen(false)} className="text-gray-300 font-medium hover:text-blue-400 transition">
                      {link.name}
                    </a>
                  </li>
                ))}
                <a href="#contact" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-2 rounded-full font-medium text-center">💬 Hire Us</a>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div animate={{ x: [0, 100, 0], y: [0, -50, 0] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20" />
          <motion.div animate={{ x: [0, -100, 0], y: [0, 50, 0] }} transition={{ duration: 18, repeat: Infinity }} className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✨ Available for Freelance Projects
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            We Build{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Modern</span>
            <br />
            Websites That{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Convert</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Hi, we are <span className="text-blue-400 font-semibold">Mubarak Saqib</span>,{" "}
            <span className="text-cyan-400 font-semibold">Umaish Mughal</span> & our Lead Developer{" "}
            <span className="text-purple-400 font-semibold">Abu Hurairah</span> — Full Stack Web Developers creating stunning digital experiences.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/40">
              View Our Work <ArrowRight size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://wa.me/923013178389" target="_blank" className="border-2 border-blue-500/50 text-blue-300 px-8 py-4 rounded-full font-semibold hover:bg-blue-500/10 transition flex items-center justify-center gap-2">
              <MessageCircle size={20} /> Let's Talk
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-5 hover:border-blue-500/50 transition">
                <div className="flex justify-center text-blue-400 mb-2">{s.icon}</div>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{s.num}</p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-blue-400 font-semibold tracking-wider text-sm">ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Meet The <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h2>
          </motion.div>

          <div className="space-y-24">

            {/* 1. ABU HURAIRAH (Pic Left, Text Right) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-[2.5rem] blur-2xl opacity-30"></div>
                  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden ring-2 ring-purple-500/50 shadow-2xl">
                    <img src="developer.jpg.jpeg" alt="Abu Hurairah" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-purple-400 font-semibold tracking-wider text-xs uppercase">Top Rated Freelancer</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mt-1 mb-3 text-white">Abu Hurairah</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto md:mx-0 mb-6"></div>
                <p className="text-purple-400 text-lg font-medium mb-4">Full Stack Software Developer</p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  More than 6 years of professional experience. A Top Rated Freelancer dedicated to building scalable, high-performance software and web applications. Master of backend architecture and seamless frontend integrations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                  <a href="tel:+923075156558" className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition font-medium bg-gray-900 px-5 py-3 rounded-full border border-gray-800">
                    <Phone size={16} /> +92 307 5156558
                  </a>
                  <div className="flex gap-3">
                    <a href="https://www.fiverr.com/hurairah558" target="_blank" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-[#1dbf73] transition text-white font-bold text-xs border border-gray-800" title="Fiverr Profile">
                      Fi
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-purple-600 transition text-white font-bold text-xs border border-gray-800">GH</a>
                    <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-purple-600 transition text-white font-bold text-xs border border-gray-800">in</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. MUBARAK SAQIB (Pic Right, Text Left) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="text-center md:text-right order-2 md:order-1">
                <span className="text-blue-400 font-semibold tracking-wider text-xs uppercase">Founder & Lead Developer</span>
                <h3 className="text-4xl md:text-5xl font-bold mt-3 mb-3 text-white">Mubarak Saqib</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto md:ml-auto md:mr-0 mb-6"></div>
                <p className="text-blue-400 text-lg font-medium mb-4">Full Stack Web Developer</p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Creative developer with expertise in modern web technologies. Focused on building beautiful, functional websites that help businesses grow online. Specialized in React, Next.js, and Tailwind CSS with 2+ years of experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end items-center">
                  <div className="flex gap-3">
                    <a href="https://wa.me/923013178389" target="_blank" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition text-white font-bold text-xs border border-gray-800">WA</a>
                    <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition text-white font-bold text-xs border border-gray-800">GH</a>
                    <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition text-white font-bold text-xs border border-gray-800">in</a>
                  </div>
                  <a href="tel:+923013178389" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition font-medium bg-gray-900 px-5 py-3 rounded-full border border-gray-800">
                    <Phone size={16} /> +92 301 3178389
                  </a>
                </div>
              </div>

              <div className="flex justify-center md:justify-end order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-[2.5rem] blur-2xl opacity-30"></div>
                  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden ring-2 ring-blue-500/50 shadow-2xl">
                    <img src="mubarak.jpg.jpeg" alt="Mubarak Saqib" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. UMAISH MUGHAL (Pic Left, Text Right) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-[2.5rem] blur-2xl opacity-30"></div>
                  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden ring-2 ring-cyan-400/50 shadow-2xl">
                    <img src="umaish.jpg.jpeg" alt="Umaish Mughal" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <span className="text-cyan-400 font-semibold tracking-wider text-xs uppercase">FOUNDER & CREATIVE DIRECTOR</span>
                <h3 className="text-4xl md:text-5xl font-bold mt-3 mb-3 text-white">Umaish Mughal</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto md:mx-0 mb-6"></div>
                <p className="text-cyan-400 text-lg font-medium mb-4">Full Stack Web Developer</p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Passionate about delivering pixel-perfect designs and smooth user experiences. Expert in creating responsive, fast, and modern web applications that leave a lasting impression on users and clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                  <a href="tel:+923297839783" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition font-medium bg-gray-900 px-5 py-3 rounded-full border border-gray-800">
                    <Phone size={16} /> +92 329 7839783
                  </a>
                  <div className="flex gap-3">
                    <a href="https://wa.me/923297839783" target="_blank" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-cyan-600 transition text-white font-bold text-xs border border-gray-800">WA</a>
                    <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-cyan-600 transition text-white font-bold text-xs border border-gray-800">GH</a>
                    <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-cyan-600 transition text-white font-bold text-xs border border-gray-800">in</a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-blue-400 font-semibold tracking-wider text-sm">OUR SKILLS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Technologies We <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Master</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div key={skill.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">{skill.icon}</span>
                    <span className="font-semibold text-white">{skill.name}</span>
                  </div>
                  <span className="text-blue-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.1 }} className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-blue-400 font-semibold tracking-wider text-sm">OUR WORK</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Recent <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <motion.button key={f.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveFilter(f.id)} className={`px-5 py-2 rounded-full font-medium transition-all text-sm ${activeFilter === f.id ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/50" : "bg-gray-900 text-gray-400 hover:bg-gray-800 border border-gray-800"}`}>
                {f.name}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div key={project.name} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all">
                <div className={`h-56 relative overflow-hidden bg-gradient-to-br ${project.color} p-4 pt-6 flex items-center justify-center`}>
                  <div className="relative w-full h-full rounded-t-md border-2 border-gray-800 overflow-hidden bg-gray-900 shadow-2xl">
                    <div className="h-5 bg-gray-800 flex items-center gap-1 px-2 border-b border-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <div className="ml-2 flex-1 h-3 bg-gray-900 rounded-sm opacity-60"></div>
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-[calc(100%-1.25rem)] object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-1.5 bg-gray-800 rounded-b-md shadow-lg"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full border border-blue-500/30">{t}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 font-medium text-sm transition">
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-blue-400 font-semibold tracking-wider text-sm">GET IN TOUCH</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Let's Build Something <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Amazing</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              {[
                { icon: <Mail size={24} />, title: "Email", text: "techbuddies134@gmail.com" },
                { icon: <Phone size={24} />, title: "Mubarak Saqib", text: "+92 301 3178389" },
                { icon: <Phone size={24} />, title: "Umaish Mughal", text: "+92 329 7839783" },
                { icon: <Phone size={24} />, title: "Abu Hurairah", text: "+92 307 5156558" },
                { icon: <MapPin size={24} />, title: "Location", text: "Daska, Punjab, Pakistan" },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4 p-5 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition">
                  <div className="text-blue-400 mt-1">{c.icon}</div>
                  <div>
                    <h4 className="font-bold text-white">{c.title}</h4>
                    <p className="text-gray-400">{c.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.form initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white focus:border-blue-500 focus:outline-none transition" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white focus:border-blue-500 focus:outline-none transition" />
              <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white focus:border-blue-500 focus:outline-none transition" />
              <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white focus:border-blue-500 focus:outline-none transition resize-none"></textarea>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 border-t border-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Tech Buddies Logo" 
                className="w-11 h-11 rounded-full object-cover shadow-lg shadow-blue-500/50"
              />
              <div>
                <p className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Tech Buddies</p>
                <p className="text-xs text-gray-500">We Build Websites</p>
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { name: "WA", href: "https://wa.me/923013178389" },
                { name: "GH", href: "#" },
                { name: "in", href: "#" },
                { name: "𝕏", href: "#" },
              ].map((s, i) => (
                <motion.a key={i} whileHover={{ scale: 1.2, y: -3 }} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-400 hover:text-white transition font-bold text-xs">
                  {s.name}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">© 2026 Tech Buddies. Made with ❤️</p>
          </div>
        </div>
      </footer>

      <motion.a href="https://wa.me/923013178389" target="_blank" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 z-40 hover:bg-green-600">
        <MessageCircle size={26} />
      </motion.a>

      <AnimatePresence>
        {showTop && (
          <motion.button initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} whileHover={{ scale: 1.1 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-full flex items-center justify-center shadow-2xl z-40">
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}