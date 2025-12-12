// import React, { useEffect, useRef, useState } from "react";
// import { Award, CheckCircle, Eye, Heart, Phone, Shield, Target, TrendingUp, Truck, Users, Zap } from "lucide-react";

// const stats = [
//   { number: "15+", label: "Years of service", icon: Award },
//   { number: "100+", label: "Healthcare partners", icon: Users },
//   { number: "DSCSA", label: "Compliant", icon: Heart },
//   { number: "24/7", label: "Support availability", icon: Shield }
// ];

// const values = [
//   { icon: Heart, title: "Patients first", description: "Every prescription and shipment is handled with compassion and accountability.", color: "from-green-400 to-emerald-500" },
//   { icon: Shield, title: "Trust & transparency", description: "Clear communication, dependable delivery, and relationships built to last.", color: "from-blue-400 to-cyan-500" },
//   { icon: Truck, title: "Prompt delivery", description: "Fast, efficient logistics protecting product integrity door to door.", color: "from-purple-400 to-pink-500" },
//   { icon: Users, title: "Personalized care", description: "Dedicated account support tailored to pharmacies, providers, and caregivers.", color: "from-orange-400 to-red-500" }
// ];

// const deliverables = [
//   { icon: CheckCircle, text: "Direct access to brand, generic, specialty, and OTC medications" },
//   { icon: Zap, text: "Personal account support with proactive, transparent communication" },
//   { icon: TrendingUp, text: "Competitive pricing and flexible payment options" },
//   { icon: Shield, text: "Consistent availability backed by compliant supply chains" },
//   { icon: Truck, text: "Prompt shipping, tracking, and responsive logistics" },
//   { icon: Award, text: "Regulatory compliance and rigorous quality assurance" }
// ];

// const missionPoints = [
//   "Competitive pricing",
//   "Exceptional customer service",
//   "Reliable access to medications",
//   "Personalized support for thriving healthcare partners"
// ];

// const aimPoints = [
//   "Simplify and enhance the medication supply process for pharmacies and providers",
//   "Ensure patients receive medications quickly, safely, and affordably",
//   "Support healthcare businesses with efficient solutions and transparent pricing",
// ];

// const AboutPage = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const logisticsMediaRef = useRef(null);
//   const logisticsTextRef = useRef(null);
//   const aboutImageRef = useRef(null);
//   const aboutTextRef = useRef(null);
//   const servicesVideoRef = useRef(null);
//   const servicesItemsRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("about-reveal-visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.4, rootMargin: '-50px' }
//     );

//     const targets = [
//       logisticsMediaRef.current, 
//       logisticsTextRef.current,
//       aboutImageRef.current,
//       aboutTextRef.current,
//       servicesVideoRef.current,
//       servicesItemsRef.current
//     ];
//     targets.forEach((target) => target && observer.observe(target));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#F3EFE3] font-sans">
//       <style>{`
//         header, nav {
//           background: transparent !important;
//           position: absolute !important;
//           top: 0 !important;
//           left: 0 !important;
//           right: 0 !important;
//           z-index: 50 !important;
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
        
//         @keyframes pulse-subtle {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.5; }
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .about-reveal {
//           opacity: 0;
//           transform: translateY(60px);
//           transition: opacity 1s ease, transform 1s ease;
//         }

//         .about-reveal-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .stat-card {
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .stat-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 20px 40px rgba(118, 105, 130, 0.15);
//         }

//         .value-card {
//           transition: all 0.4s ease;
//         }

//         .value-card:hover {
//           transform: scale(1.03);
//         }

//         .deliverable-item {
//           transition: all 0.3s ease;
//         }

//         .deliverable-item:hover {
//           transform: translateX(8px);
//           background: rgba(118, 105, 130, 0.08);
//         }

//         .direction-card {
//           transition: all 0.5s ease;
//           position: relative;
//           overflow: hidden;
//         }

//         .direction-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
//           transition: left 0.5s ease;
//         }

//         .direction-card:hover::before {
//           left: 100%;
//         }

//         .direction-card:hover {
//           transform: translateY(-10px) scale(1.02);
//           box-shadow: 0 25px 50px rgba(0,0,0,0.15);
//         }
//       `}</style>

//       {/* Hero Section with Background Image */}
//       <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 flex items-center justify-center overflow-hidden min-h-[600px]">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920&q=80" 
//             alt="Pharmaceutical background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#769582]/95 via-[#769582]/90 to-[#769582]/85"></div>
//         </div>

//         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
//           <div className="w-20 h-1 bg-[#F3EFE3] mx-auto mb-8"></div>
//           <h1 
//             className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#F3EFE3]"
//             style={{
//               animation: 'fade-in-up 1s ease',
//               lineHeight: '1.2'
//             }}
//           >
//             Trusted pharmaceutical partner with a pharmacy heart.
//           </h1>
//           <p 
//             className="text-lg md:text-xl lg:text-2xl text-[#F3EFE3]/90 max-w-3xl mx-auto leading-relaxed"
//             style={{
//               animation: 'fade-in-up 1s ease 0.2s backwards'
//             }}
//           >
//             Delivering reliable access to medications with trust, transparency, and a personal touch.
//           </p>
//         </div>
        
//         <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#769582] via-[#F3EFE3] to-[#769582]"></div>
//       </section>

//       {/* Stats Section - Beige */}
//       <section className="py-20 bg-[#769382] border-b-4 border-[#769582]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="stat-card bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-[#769582]/20"
//                 style={{
//                   animation: `fade-in-up 0.6s ease ${index * 0.1}s backwards`
//                 }}
//               >
//                 <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#769582] mb-3">
//                   <stat.icon className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-[#769582] mb-1">
//                   {stat.number}
//                 </div>
//                 <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Text Section with Image - Light Beige */}
//       <section className="py-24 bg-[#F3EFE3]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div 
//               ref={aboutImageRef}
//               className="about-reveal relative rounded-2xl overflow-hidden shadow-xl"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" 
//                 alt="Pharmaceutical care"
//                 className="w-full h-auto rounded-2xl"
//               />
//             </div>

//             <div 
//               ref={aboutTextRef}
//               className="about-reveal space-y-8 text-lg leading-relaxed text-gray-700"
//             >
//               <p className="text-xl md:text-2xl font-light text-[#769582] leading-relaxed">
//                 At CELACTO PHARMA LLC, our purpose is to ensure patients across the United States have reliable access to the medications they need—delivered with trust, transparency, and a personal touch. With over 15 years of continuous service through our sister pharmacy in Gastonia, NC, we have supported patients, caregivers, and healthcare providers with compassionate, dependable pharmaceutical care.
//               </p>
              
//               <div className="w-24 h-1 bg-[#769582] my-8"></div>
              
//               <p>
//                 While we are a nationally licensed independent drug wholesaler, our foundation is built on strong pharmacy values. Every prescription we handle, every shipment we prepare, and every relationship we build is guided by one core belief: patients come first.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Celacto Logistics Story - Light Beige Background */}
//       <section className="py-24 bg-[#F3EFE3]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left side - Text */}
//             <div
//               ref={logisticsTextRef}
//               className="about-reveal space-y-6"
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-[#769582] mb-6">
//                 Personalized logistics. Pharmacy-level care.
//               </h2>
//               <div className="space-y-4 text-lg leading-relaxed text-gray-700">
//                 <p>
//                   We provide a wide range of brand, generic, and specialty medications, along with essential OTC products and healthcare supplies. Our strong industry partnerships allow us to maintain competitive pricing, consistent availability, and prompt delivery.
//                 </p>
//                 <p>
//                   We believe in honesty, collaboration, and long-term relationships. Our team listens, responds quickly, and takes pride in meeting the unique needs of every customer we serve. With CELACTO PHARMA LLC, you're not just receiving medication—you're gaining a dedicated partner in healthcare.
//                 </p>
//               </div>
//             </div>

//             <div 
//               ref={servicesVideoRef}
//               className="about-reveal relative rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-auto rounded-2xl"
//               >
//                 <source
//                   src="/video/about2.mp4"
//                 />
//                 Your browser does not support the video tag.
//               </video>
//             </div>    
//           </div>
//         </div>
//       </section>

//       {/* Core Values - Sage Green */}
//       <section className="py-24 bg-[#769582]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Core values
//             </h2>
//             <p className="text-xl text-white/90 max-w-2xl mx-auto">
//               Principles that guide every decision
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {values.map((value, index) => (
//               <div
//                 key={index}
//                 className="value-card bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
//                 style={{
//                   animation: `fade-in-up 0.6s ease ${index * 0.15}s backwards`
//                 }}
//               >
//                 <div className="flex items-start gap-6">
//                   <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}>
//                     <value.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-2xl font-bold text-[#769582] mb-3">
//                       {value.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {value.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Direction - Decorative WHITE Background */}
//       <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
//         {/* Decorative background elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#769582]/10 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#769382]/15 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
          
//           {/* Decorative dots pattern */}
//           <div className="absolute top-10 left-10 w-2 h-2 bg-[#769582] rounded-full opacity-20"></div>
//           <div className="absolute top-20 left-32 w-2 h-2 bg-[#769582] rounded-full opacity-20"></div>
//           <div className="absolute top-40 right-40 w-2 h-2 bg-blue-500 rounded-full opacity-20"></div>
//           <div className="absolute bottom-32 right-20 w-2 h-2 bg-purple-500 rounded-full opacity-20"></div>
//           <div className="absolute bottom-10 left-1/3 w-2 h-2 bg-emerald-500 rounded-full opacity-20"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6">
//           <div className="text-center mb-20">
//             <div className="inline-block mb-4">
//               <div className="flex items-center gap-3 px-6 py-2 bg-gradient-to-r from-[#769582]/10 via-blue-500/10 to-purple-500/10 rounded-full border border-[#769582]/20 backdrop-blur-sm">
//                 <Target className="w-5 h-5 text-[#769582]" />
//                 <span className="text-sm font-semibold text-[#769582] uppercase tracking-wider">Strategic Vision</span>
//               </div>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#769582] via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
//               Our direction
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Guiding principles that shape our journey and define our commitment to excellence
//             </p>
//             <div className="w-32 h-1 bg-gradient-to-r from-[#769582] via-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Vision Card */}
//             <div 
//               className="direction-card group bg-gradient-to-br from-blue-50 via-white to-blue-50/50 rounded-3xl p-10 shadow-2xl border-2 border-blue-200/50 backdrop-blur-sm relative overflow-hidden"
//               style={{ animation: 'fade-in-up 0.6s ease 0s backwards' }}
//             >
//               {/* Decorative corner elements */}
//               <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
//               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
//               <div className="relative">
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
//                     <Eye className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Vision</h3>
//                 </div>
//                 <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6"></div>
//                 <p className="text-gray-700 leading-relaxed text-lg">
//                   To be a trusted, patient-centered pharmaceutical partner across the United States—recognized for transparency, reliability, and access to high-quality medications.
//                 </p>
//               </div>
//             </div>

//             {/* Mission Card */}
//             <div 
//               className="direction-card group bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 rounded-3xl p-10 shadow-2xl border-2 border-emerald-200/50 backdrop-blur-sm relative overflow-hidden"
//               style={{ animation: 'fade-in-up 0.6s ease 0.15s backwards' }}
//             >
//               {/* Decorative corner elements */}
//               <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
//               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
//               <div className="relative">
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
//                     <Target className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">Mission</h3>
//                 </div>
//                 <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full mb-6"></div>
//                 <p className="text-gray-700 leading-relaxed text-base mb-6">
//                   Build long-lasting relationships by providing:
//                 </p>
//                 <ul className="space-y-3">
//                   {missionPoints.map((point, index) => (
//                     <li key={index} className="flex items-start gap-3 text-gray-700 group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: `${index * 50}ms`}}>
//                       <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mt-0.5">
//                         <CheckCircle className="w-4 h-4 text-white" />
//                       </div>
//                       <span className="leading-relaxed">{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Aim Card */}
//             <div 
//               className="direction-card group bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl p-10 shadow-2xl border-2 border-purple-200/50 backdrop-blur-sm relative overflow-hidden"
//               style={{ animation: 'fade-in-up 0.6s ease 0.3s backwards' }}
//             >
//               {/* Decorative corner elements */}
//               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
//               <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
//               <div className="relative">
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
//                     <TrendingUp className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Aim</h3>
//                 </div>
//                 <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full mb-6"></div>
//                 <ul className="space-y-4">
//                   {aimPoints.map((point, index) => (
//                     <li key={index} className="flex items-start gap-4 text-gray-700 group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: `${index * 50}ms`}}>
//                       <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center text-base font-bold shadow-md">
//                         {index + 1}
//                       </div>
//                       <span className="leading-relaxed pt-1">{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Full Deliverables - Light Beige */}
//       <section className="py-24 bg-[#F3EFE3]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#769582] mb-4">
//               What we deliver
//             </h2>
//             <p className="text-xl text-gray-700 max-w-2xl mx-auto">
//               Comprehensive pharmaceutical solutions
//             </p>
//             <p className="text-lg text-gray-600 mt-2">
//               Designed to keep pharmacies, providers, and patients supported around the clock.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {deliverables.map((item, index) => (
//               <div
//                 key={index}
//                 className="deliverable-item bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-[#769582]/10 flex items-start gap-4"
//                 style={{
//                   animation: `fade-in-up 0.6s ease ${index * 0.08}s backwards`
//                 }}
//               >
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#769582] flex items-center justify-center">
//                   <item.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <p className="text-gray-700 flex-1 leading-relaxed pt-2">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section - Sage Green */}
//       <section className="relative py-32 overflow-hidden bg-[#769582]">
//         <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
//             Experience the Celacto difference
//           </h2>
//           <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
//             Partner with a pharmacy-focused team that truly cares about your success and your patients' wellbeing.
//           </p>
//           <a
//             href="tel:980-888-0080"
//             className="inline-flex items-center gap-3 bg-white text-[#769582] px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
//           >
//             <Phone className="w-6 h-6" />
//             Call us: 980-888-0080
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;


import React, { useEffect, useRef, useState } from "react";
import { Award, CheckCircle, Eye, Heart, Phone, Shield, Target, TrendingUp, Truck, Users, Zap } from "lucide-react";

const stats = [
  { number: "15+", label: "Years of service", icon: Award },
  { number: "100+", label: "Healthcare partners", icon: Users },
  { number: "DSCSA", label: "Compliant", icon: Heart },
  { number: "24/7", label: "Support availability", icon: Shield }
];

const values = [
  { icon: Heart, title: "Patients first", description: "Every prescription and shipment is handled with compassion and accountability.", color: "from-green-400 to-emerald-500" },
  { icon: Shield, title: "Trust & transparency", description: "Clear communication, dependable delivery, and relationships built to last.", color: "from-blue-400 to-cyan-500" },
  { icon: Truck, title: "Prompt delivery", description: "Fast, efficient logistics protecting product integrity door to door.", color: "from-purple-400 to-pink-500" },
  { icon: Users, title: "Personalized care", description: "Dedicated account support tailored to pharmacies, providers, and caregivers.", color: "from-orange-400 to-red-500" }
];

const deliverables = [
  { icon: CheckCircle, text: "Direct access to brand, generic, specialty, and OTC medications" },
  { icon: Zap, text: "Personal account support with proactive, transparent communication" },
  { icon: TrendingUp, text: "Competitive pricing and flexible payment options" },
  { icon: Shield, text: "Consistent availability backed by compliant supply chains" },
  { icon: Truck, text: "Prompt shipping, tracking, and responsive logistics" },
  { icon: Award, text: "Regulatory compliance and rigorous quality assurance" }
];

const missionPoints = [
  "Competitive pricing",
  "Exceptional customer service",
  "Reliable access to medications",
  "Personalized support for thriving healthcare partners"
];

const aimPoints = [
  "Simplify and enhance the medication supply process for pharmacies and providers",
  "Ensure patients receive medications quickly, safely, and affordably",
  "Support healthcare businesses with efficient solutions and transparent pricing",
];

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const logisticsMediaRef = useRef(null);
  const logisticsTextRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutTextRef = useRef(null);
  const servicesVideoRef = useRef(null);
  const servicesItemsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4, rootMargin: '-50px' }
    );

    const targets = [
      logisticsMediaRef.current, 
      logisticsTextRef.current,
      aboutImageRef.current,
      aboutTextRef.current,
      servicesVideoRef.current,
      servicesItemsRef.current
    ];
    targets.forEach((target) => target && observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F3EFE3] font-sans">
      <style>{`
        header, nav {
          background: transparent !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          z-index: 50 !important;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-reveal {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .about-reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          transform: translateY(-8px) rotate(-2deg);
          box-shadow: 0 20px 40px rgba(118, 105, 130, 0.15);
        }

        .value-card {
          transition: all 0.4s ease;
        }

        .value-card:hover {
          transform: scale(1.05) rotate(1deg);
        }

        .deliverable-item {
          transition: all 0.3s ease;
        }

        .deliverable-item:hover {
          transform: translateX(8px);
          background: rgba(255, 255, 255, 0.9);
        }

        .direction-card {
          transition: all 0.5s ease;
          position: relative;
          overflow: hidden;
        }

        .direction-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .direction-card:hover::before {
          left: 100%;
        }

        .direction-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }
      `}</style>

      {/* Hero Section - Dark Sage Green with Image */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 flex items-center justify-center overflow-hidden min-h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="/public/images/about-hero.jpg" 
            alt="Pharmaceutical background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#769582]/95 via-[#769582]/90 to-[#769582]/85"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="w-20 h-1 bg-[#F3EFE3] mx-auto mb-8"></div>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#F3EFE3]"
            style={{
              animation: 'fade-in-up 1s ease',
              lineHeight: '1.2'
            }}
          >
            Trusted pharmaceutical partner with a pharmacy heart.
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl text-[#F3EFE3]/90 max-w-3xl mx-auto leading-relaxed"
            style={{
              animation: 'fade-in-up 1s ease 0.2s backwards'
            }}
          >
            Delivering reliable access to medications with trust, transparency, and a personal touch.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#769582] via-[#F3EFE3] to-[#769582]"></div>
      </section>

      {/* Stats Section - Warm Beige with Pattern */}
      <section className="py-20 bg-[#769582] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-[#769582] rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-[#769582] rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#769582] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-[#769582]/30"
                style={{
                  animation: `fade-in-up 0.6s ease ${index * 0.1}s backwards`
                }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#769582] to-[#5a7563] mb-3">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#769582] mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Text Section - Soft Cream */}
      <section className="py-24 bg-gradient-to-br from-[#FAF7F0] to-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={aboutImageRef}
              className="about-reveal relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/public/images/about1.jpg" 
                alt="Pharmaceutical care"
                className="w-[600px] h-[450px] rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#769582]/20 to-transparent"></div>
            </div>

            <div 
              ref={aboutTextRef}
              className="about-reveal space-y-8 text-lg leading-relaxed text-gray-700"
            >
              <p className="text-xl md:text-2xl font-light text-[#769582] leading-relaxed">
                At CELACTO PHARMA LLC, our purpose is to ensure patients across the United States have reliable access to the medications they need—delivered with trust, transparency, and a personal touch. With over 15 years of continuous service through our sister pharmacy in Gastonia, NC, we have supported patients, caregivers, and healthcare providers with compassionate, dependable pharmaceutical care.
              </p>
              
              <div className="w-24 h-1 bg-gradient-to-r from-[#769582] to-blue-500 my-8"></div>
              
              <p>
                While we are a nationally licensed independent drug wholesaler, our foundation is built on strong pharmacy values. Every prescription we handle, every shipment we prepare, and every relationship we build is guided by one core belief: patients come first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Logistics - Light Mint Green */}
      <section className="py-24 bg-[#C0C3B9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #769582 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              ref={logisticsTextRef}
              className="about-reveal space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#4a5f52] mb-6">
                Personalized logistics. Pharmacy-level care.
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  We provide a wide range of brand, generic, and specialty medications, along with essential OTC products and healthcare supplies. Our strong industry partnerships allow us to maintain competitive pricing, consistent availability, and prompt delivery.
                </p>
                <p>
                  We believe in honesty, collaboration, and long-term relationships. Our team listens, responds quickly, and takes pride in meeting the unique needs of every customer we serve. With CELACTO PHARMA LLC, you're not just receiving medication—you're gaining a dedicated partner in healthcare.
                </p>
              </div>
            </div>

            <div 
              ref={servicesVideoRef}
              className="about-reveal relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl"
              >
                <source src="/video/about2.mp4" />
                Your browser does not support the video tag.
              </video>
            </div>    
          </div>
        </div>
      </section>

      {/* Core Values - Deep Teal */}
      <section className="py-24 bg-[#769382] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage: 'linear-gradient(45deg, #769582 25%, transparent 25%, transparent 75%, #769582 75%, #769582), linear-gradient(45deg, #769582 25%, transparent 25%, transparent 75%, #769582 75%, #769582)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Core values
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Principles that guide every decision
            </p>
            <div className="w-24 h-1 bg-white/50 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card bg-white rounded-2xl p-8 shadow-2xl border-2 border-white/30"
                style={{
                  animation: `fade-in-up 0.6s ease ${index * 0.15}s backwards`
                }}
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#4a5f52] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Direction - Light Gradient Background */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#769582]/15 to-[#C0C3B9]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#769382]/20 to-[#E8DCC4]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#769582]/8 to-[#C0C3B9]/8 rounded-full blur-3xl"></div>
          
          <div className="absolute top-10 left-10 w-2 h-2 bg-[#769582] rounded-full opacity-30"></div>
          <div className="absolute top-20 left-32 w-2 h-2 bg-[#769582] rounded-full opacity-30"></div>
          <div className="absolute top-40 right-40 w-2 h-2 bg-[#769382] rounded-full opacity-30"></div>
          <div className="absolute bottom-32 right-20 w-2 h-2 bg-[#769582] rounded-full opacity-30"></div>
          <div className="absolute bottom-10 left-1/3 w-2 h-2 bg-[#C0C3B9] rounded-full opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#769582] via-[#5a7563] to-[#4a6352] bg-clip-text text-transparent mb-6">
              Our direction
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Guiding principles that shape our journey and define our commitment to excellence
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[#769582] via-[#769382] to-[#C0C3B9] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div 
              className="direction-card group bg-gradient-to-br from-[#E8DCC4]/30 via-white to-[#FAF7F0]/30 rounded-3xl p-10 shadow-2xl border-2 border-[#769582]/30 backdrop-blur-sm relative overflow-hidden"
              style={{ animation: 'fade-in-up 0.6s ease 0s backwards' }}
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#769582]/20 to-[#C0C3B9]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#C0C3B9]/20 to-[#769582]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#769582] to-[#5a7563] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#769582] to-[#5a7563] bg-clip-text text-transparent">Vision</h3>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-[#769582] to-[#C0C3B9] rounded-full mb-6"></div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be a trusted, patient-centered pharmaceutical partner across the United States—recognized for transparency, reliability, and access to high-quality medications.
                </p>
              </div>
            </div>

            <div 
              className="direction-card group bg-gradient-to-br from-[#D4E4DD]/40 via-white to-[#E8DCC4]/30 rounded-3xl p-10 shadow-2xl border-2 border-[#769382]/30 backdrop-blur-sm relative overflow-hidden"
              style={{ animation: 'fade-in-up 0.6s ease 0.15s backwards' }}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#769582]/20 to-[#769382]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#769382]/20 to-[#769582]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#769582] to-[#5a7563] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#769582] to-[#5a7563] bg-clip-text text-transparent">Mission</h3>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-[#769582] to-[#769382] rounded-full mb-6"></div>
                <p className="text-gray-700 leading-relaxed text-base mb-6">
                  Build long-lasting relationships by providing:
                </p>
                <ul className="space-y-3">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700 group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: `${index * 50}ms`}}>
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#769582] to-[#5a7563] flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div 
              className="direction-card group bg-gradient-to-br from-[#F5F1E8]/40 via-white to-[#FAF7F0]/30 rounded-3xl p-10 shadow-2xl border-2 border-[#C0C3B9]/30 backdrop-blur-sm relative overflow-hidden"
              style={{ animation: 'fade-in-up 0.6s ease 0.3s backwards' }}
            >
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#C0C3B9]/20 to-[#769382]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#769382]/20 to-[#C0C3B9]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#769582] to-[#4a6352] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#769582] to-[#4a6352] bg-clip-text text-transparent">Aim</h3>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-[#769582] to-[#C0C3B9] rounded-full mb-6"></div>
                <ul className="space-y-4">
                  {aimPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-4 text-gray-700 group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: `${index * 50}ms`}}>
                      <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-[#769582] to-[#5a7563] text-white flex items-center justify-center text-base font-bold shadow-md">
                        {index + 1}
                      </div>
                      <span className="leading-relaxed pt-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Deliver - Warm Sand */}
      <section className="py-24 bg-[#C0C3B9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4a5f52] mb-4">
              What we deliver
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive pharmaceutical solutions
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Designed to keep pharmacies, providers, and patients supported around the clock.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#769582] to-blue-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="deliverable-item bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-[#769582]/20 flex items-start gap-4"
                style={{
                  animation: `fade-in-up 0.6s ease ${index * 0.08}s backwards`
                }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#769582] to-[#5a7563] flex items-center justify-center shadow-md">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 flex-1 leading-relaxed pt-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>  {/* CTA Section - Sage Green */}
    <section className="relative py-32 overflow-hidden bg-[#769582]">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience the Celacto difference           </h2>
           <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
             Partner with a pharmacy-focused team that truly cares about your success and your patients' wellbeing.
          </p>
          <a
            href="tel:980-888-0080"
            className="inline-flex items-center gap-3 bg-white text-[#769582] px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            Call us: 980-888-0080
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;



     