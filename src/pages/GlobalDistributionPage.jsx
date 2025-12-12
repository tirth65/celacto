// // import React, { useEffect, useState } from "react";
// // import { 
// //   Globe, Shield, Thermometer, FileCheck, TrendingUp, 
// //   CheckCircle, Award, Package, Truck, Clock, Zap, Phone, 
// //   ArrowRight, Star, Target
// // } from "lucide-react";

// // // const [scrollY, setScrollY] = useState(0);
// // // const [activeGuarantee, setActiveGuarantee] = useState(null); // 👈 add this

// // const guarantees = [
// //   {
// //     icon: Shield,
// //     title: "Verified Sourcing",
// //     description: "Direct procurement from licensed suppliers and manufacturers with complete verification",
// //     highlight: true
// //   },
// //   {
// //     icon: FileCheck,
// //     title: "Full Compliance",
// //     description: "GDP guidelines and global regulatory standards strictly followed",
// //     highlight: true
// //   },
// //   {
// //     icon: Truck,
// //     title: "Efficient Logistics",
// //     description: "Streamlined inbound & outbound logistics for faster delivery",
// //     highlight: true
// //   },
// //   {
// //     icon: Thermometer,
// //     title: "Temperature-Controlled",
// //     description: "Cold chain management for temperature-sensitive pharmaceuticals",
// //     highlight: true
// //   },
// //   {
// //     icon: FileCheck,
// //     title: "Complete Documentation",
// //     description: "COA, COO, Batch Details, and all required certifications",
// //     highlight: true
// //   },
// //   {
// //     icon: TrendingUp,
// //     title: "Competitive Pricing",
// //     description: "Optimized costs with efficient lead times",
// //     highlight: true
// //   }
// // ];

// // const drugTypes = [
// //   { name: "Generics", icon: Package, color: "from-blue-400 to-cyan-500" },
// //   { name: "Branded Drugs", icon: Award, color: "from-purple-400 to-pink-500" },
// //   { name: "Specialty Drugs", icon: Star, color: "from-orange-400 to-red-500" },
// //   { name: "Biologics-Biosimilars", icon: Target, color: "from-green-400 to-emerald-500" }
// // ];

// // const keyFeatures = [
// //   "20+ years pharmaceutical industry experience",
// //   "Ownership of two retail pharmacies",
// //   "Licensed wholesale operations",
// //   "Full traceability on all products",
// //   "USA-based sourcing network"
// // ];

// // const GlobalDistributionPage = () => {
// //   const [scrollY, setScrollY] = useState(0);

// //   useEffect(() => {
// //     const handleScroll = () => setScrollY(window.scrollY);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add("animate-visible");
// //           }
// //         });
// //       },
// //       { threshold: 0.1 }
// //     );

// //     document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-[#F3EFE3] font-sans">
// //     <style>{`
// //   /* Keep navbar transparent & merged with hero section */
// //   header, nav {
// //     background: transparent !important;
// //     position: absolute !important;
// //     top: 0 !important;
// //     left: 0 !important;
// //     right: 0 !important;
// //     border-bottom: none !important;
// //     box-shadow: none !important;
// //     z-index: 50 !important;
// //   }

// //   /* Logo behaves same as Home & About */
// //   header a[href="/"], 
// //   nav a[href="/"] {
// //     background: transparent !important;
// //     padding: 0 !important;
// //   }

// //   /* Keep logo white on hero */
// //   header a[href="/"] *, 
// //   nav a[href="/"] * {
// //     color: white !important;
// //   }

// //   /* Only subtitle stays dark */
// //   header a[href="/"] > div:last-child > div:last-child,
// //   nav a[href="/"] > div:last-child > div:last-child {
// //     color: #1e293b !important;
// //   }

// //   /* Highlight THIS page only when active */
// //   header a[href="/services/global-distribution"].active,
// //   nav a[href="/services/global-distribution"].active {
// //     background: white !important;
// //     color: #769582 !important;
// //   }

// //   /* Restore normal button styling (do NOT force green/white) */
// //   header nav > div > a,
// //   nav nav > div > a,
// //   header button,
// //   nav button {
// //     background: transparent !important;
// //     color: white !important;
// //     border: none !important;
// //   }

// //   /* Fix mobile menu so it stays white background and readable */
// //   @media (max-width: 768px) {
// //     header, nav {
// //       position: fixed !important;
// //       background: white !important;
// //       border-bottom: 1px solid #e2e8f0 !important;
// //     }

// //     header a[href="/"] *,
// //     nav a[href="/"] * {
// //       color: #1e293b !important;
// //     }
// //   }

// //   /* Animations */
// //   @keyframes fadeInUp {
// //     from { opacity: 0; transform: translateY(40px); }
// //     to { opacity: 1; transform: translateY(0); }
// //   }

// //   .animate-on-scroll {
// //     opacity: 0;
// //     transform: translateY(40px);
// //     transition: opacity .8s ease, transform .8s ease;
// //   }

// //   .animate-visible {
// //     opacity: 1;
// //     transform: translateY(0);
// //   }
// // `}</style>


// //       {/* Hero Section with Background Image */}
// //       <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[700px]">
// //         <div className="absolute inset-0">
// //           <img 
// //             src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&q=80" 
// //             alt="Pharmaceutical distribution"
// //             className="w-full h-full object-cover"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-br from-[#769582]/95 via-[#5a7a68]/90 to-[#769582]/95"></div>
// //           <div className="absolute inset-0 opacity-20">
// //             <div className="absolute inset-0" style={{
              
// //               backgroundSize: '100px 100px'
// //             }}></div>
// //           </div>
// //         </div>

// //         <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
// //           <div className="text-center">
// //             <div 
// //               className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/30"
// //               style={{ animation: 'fadeInUp 0.8s ease' }}
// //             >
// //               <Globe className="w-6 h-6 text-white" />
// //               <span className="text-white font-bold text-lg">Global Pharmaceutical Solutions</span>
// //             </div>

// //             <h1 
// //               className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
// //               style={{ 
// //                 animation: 'fadeInUp 1s ease 0.2s backwards',
// //                 textShadow: '0 4px 20px rgba(0,0,0,0.3)'
// //               }}
// //             >
// //               Pharmaceutical Supply &<br />
// //               <span className="text-[#F3EFE3]">Drug Sourcing</span>
// //             </h1>

// //             <p 
// //               className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed"
// //               style={{ animation: 'fadeInUp 1s ease 0.4s backwards' }}
// //             >
// //               High-quality Generics, Branded, Specialty drugs, and Biologics-Biosimilars sourced directly from the USA with <strong className="text-[#F3EFE3]">full traceability and compliance</strong>
// //             </p>

// //             <div 
// //               className="flex flex-wrap justify-center gap-4 mb-10"
// //               style={{ animation: 'fadeInUp 1s ease 0.6s backwards' }}
// //             >
// //               <a
// //                 href="#contact"
// //                 className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/40 hover:bg-white/25 transition-all duration-300"
// //               >
// //                 <Phone className="w-6 h-6" />
// //                 Request Quote
// //               </a>
// //               <a
// //                 href="#guarantees"
// //                 className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/40 hover:bg-white/25 transition-all duration-300"
// //               >
// //                 Our Guarantees
// //                 <ArrowRight className="w-5 h-5" />
// //               </a>
// //             </div>

// //             <div 
// //               className="inline-flex items-center gap-3 bg-[#F3EFE3]/95 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl"
// //               style={{ animation: 'scaleIn 1s ease 0.8s backwards' }}
// //             >
// //               <Award className="w-8 h-8 text-[#769582]" />
// //               <div className="text-left">
// //                 <p className="text-3xl font-bold text-[#769582]">20+ Years</p>
// //                 <p className="text-sm text-gray-600 font-semibold">Pharmaceutical Industry Experience</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F3EFE3] to-transparent"></div>
// //       </section>

// //       {/* Drug Types Section */}
// //       <section className="py-16 bg-[#F3EFE3] relative overflow-hidden">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="text-center mb-12 animate-on-scroll">
// //             <h2 className="text-4xl md:text-5xl font-bold text-[#769582] mb-4">
// //               What We Supply
// //             </h2>
// //             <p className="text-xl text-gray-700">
// //               Comprehensive pharmaceutical products for clinical trials and research
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {drugTypes.map((drug, index) => (
// //               <div
// //                 key={index}
// //                 className="drug-type-card animate-on-scroll text-center p-6 rounded-2xl bg-white shadow-lg"
// //                 style={{ animationDelay: `${index * 0.1}s` }}
// //               >
// //                 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${drug.color} mb-4 shadow-lg`}>
// //                   <drug.icon className="w-8 h-8 text-white" />
// //                 </div>
// //                 <h3 className="text-lg font-bold text-gray-800">{drug.name}</h3>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="mt-16 animate-on-scroll">
// //             <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#769582]">
// //               <h3 className="text-2xl font-bold text-[#769582] mb-6 text-center">
// //                 Why Choose Celacto Pharma?
// //               </h3>
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {keyFeatures.map((feature, index) => (
// //                   <div
// //                     key={index}
// //                     className="feature-item flex items-center gap-3 p-4 rounded-xl"
// //                   >
// //                     <CheckCircle className="w-6 h-6 text-[#769582] flex-shrink-0" />
// //                     <span className="text-gray-700 font-medium">{feature}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* {What We Guarantee with Background Image */}
// //       <section id="guarantees" className="py-20 relative overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img 
// //             src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=1920&q=80" 
// //             alt="Quality assurance"
// //             className="w-full h-full object-cover"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-br from-[#C0C3B9]/95 via-[#769382]/90 to-[#C0C3B9]/95"></div>
// //           <div className="absolute inset-0 opacity-10">
// //             <div className="absolute inset-0" style={{
// //               backgroundImage: 'linear-gradient(45deg, #769582 25%, transparent 25%, transparent 75%, #769582 75%, #769582), linear-gradient(45deg, #769582 25%, transparent 25%, transparent 75%, #769582 75%, #769582)',
// //               backgroundSize: '60px 60px',
// //               backgroundPosition: '0 0, 30px 30px'
// //             }}></div>
// //           </div>
// //         </div>

// //         <div className="relative z-10 max-w-7xl mx-auto px-6">
// //           <div className="text-center mb-16 animate-on-scroll">
// //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
// //               What We Guarantee
// //             </h2>
// //             <p className="text-xl text-white/90 max-w-3xl mx-auto">
// //               End-to-end support ensuring smooth, compliant clinical trial operations
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {guarantees.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="animate-on-scroll highlight-card rounded-2xl p-8 shadow-xl"
// //                 style={{ animationDelay: `${index * 0.1}s` }}
// //               >
// //                 <div className="flex items-start gap-4">
// //                   <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#769582] to-[#5a7a68] flex items-center justify-center shadow-lg">
// //                     <item.icon className="w-7 h-7 text-white" />
// //                   </div>
// //                   <div className="flex-1">
// //                     <h3 className="text-xl font-bold mb-2 text-[#769582]">
// //                       {item.title}
// //                       <span className="ml-2 text-sm">⭐</span>
// //                     </h3>
// //                     <p className="text-gray-600 leading-relaxed">
// //                       {item.description}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section> 

// //       {/* Our Promise Section */}
// //       <section className="py-20 bg-[#F3EFE3]">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //             <div className="animate-on-scroll space-y-6">
// //               <div className="inline-block px-4 py-2 bg-[#769582]/10 rounded-full">
// //                 <span className="text-[#769582] font-bold">Our Commitment</span>
// //               </div>
// //               <h2 className="text-4xl md:text-5xl font-bold text-[#769582] leading-tight">
// //                 Focus on Innovation,<br />
// //                 We Handle the Rest
// //               </h2>
// //               <p className="text-xl text-gray-700 leading-relaxed">
// //                 With Celacto Pharma, you can <strong className="text-[#769582]">focus on advancing innovation</strong> while we manage:
// //               </p>
// //               <div className="space-y-4">
// //                 {[
// //                   "Sourcing from verified suppliers",
// //                   "Logistics and cold chain management",
// //                   "Quality assurance and documentation",
// //                   "Global regulatory compliance"
// //                 ].map((item, index) => (
// //                   <div
// //                     key={index}
// //                     className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
// //                   >
// //                     <div className="w-10 h-10 rounded-full bg-[#769582] flex items-center justify-center flex-shrink-0">
// //                       <CheckCircle className="w-6 h-6 text-white" />
// //                     </div>
// //                     <span className="text-lg text-gray-700 font-medium">{item}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="animate-on-scroll relative">
// //               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
// //                 <img
// //                 src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=80"
// //                 alt="Scientist in pharmaceutical laboratory"
// //                 className="w-[650px] h-[600px] object-cover rounded-xl mx-auto"
// //                 />

// //                 <div className="absolute inset-0 bg-gradient-to-t from-[#769582]/80 to-transparent flex items-end p-8">
// //                   <div className="text-white">
// //                     <p className="text-2xl font-bold mb-2">Quality First</p>
// //                     <p className="text-sm">Rigorous quality control at every step</p>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div 
// //                 className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl"
// //                 style={{ animation: 'float 4s ease-in-out infinite' }}
// //               >
// //                 <div className="text-center">
// //                   <p className="text-4xl font-bold text-[#769582]">100%</p>
// //                   <p className="text-sm text-gray-600 font-semibold">Compliance Rate</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-[#769582] to-[#5a7a68]">
// //         <div className="absolute inset-0">
// //           <div 
// //             className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/10"
// //             style={{ animation: 'pulse 3s ease-in-out infinite' }}
// //           ></div>
// //           <div 
// //             className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-white/10"
// //             style={{ animation: 'pulse 4s ease-in-out infinite' }}
// //           ></div>
// //         </div>

// //         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
// //           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
// //             Ready to Source with Confidence?
// //           </h2>
// //           <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
// //             Partner with Celacto Pharma for reliable pharmaceutical supply and comparator sourcing backed by 20+ years of expertise.
// //           </p>
          
// //           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
// //             <a
// //               href="tel:980-888-0080"
// //               className="inline-flex items-center gap-3 bg-white text-[#769582] px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-300"
// //             >
// //               <Phone className="w-7 h-7" />
// //               Call Now
// //             </a>
// //             <a
// //               href="mailto:kirti@celactopharma.com"
// //               className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-xl font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
// //             >
// //               Email Us
// //             </a>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default GlobalDistributionPage;

// import React, { useEffect, useState } from "react";
// import { 
//   Globe, Shield, Thermometer, FileCheck, TrendingUp, 
//   CheckCircle, Award, Package, Truck, Clock, Zap, Phone, 
//   ArrowRight, Star, Target
// } from "lucide-react";

// const guarantees = [
//   {
//     icon: Shield,
//     title: "Verified Sourcing",
//     description: "Direct procurement from licensed suppliers and manufacturers with complete verification",
//     highlight: true
//   },
//   {
//     icon: FileCheck,
//     title: "Full Compliance",
//     description: "GDP guidelines and global regulatory standards strictly followed",
//     highlight: true
//   },
//   {
//     icon: Truck,
//     title: "Efficient Logistics",
//     description: "Streamlined inbound & outbound logistics for faster delivery",
//     highlight: true
//   },
//   {
//     icon: Thermometer,
//     title: "Temperature-Controlled",
//     description: "Cold chain management for temperature-sensitive pharmaceuticals",
//     highlight: true
//   },
//   {
//     icon: FileCheck,
//     title: "Complete Documentation",
//     description: "COA, COO, Batch Details, and all required certifications",
//     highlight: true
//   },
//   {
//     icon: TrendingUp,
//     title: "Competitive Pricing",
//     description: "Optimized costs with efficient lead times",
//     highlight: true
//   }
// ];

// const drugTypes = [
//   { name: "Generics", icon: Package, color: "from-blue-400 to-cyan-500" },
//   { name: "Branded Drugs", icon: Award, color: "from-purple-400 to-pink-500" },
//   { name: "Specialty Drugs", icon: Star, color: "from-orange-400 to-red-500" },
//   { name: "Biologics-Biosimilars", icon: Target, color: "from-green-400 to-emerald-500" }
// ];

// const keyFeatures = [
//   "20+ years pharmaceutical industry experience",
//   "Ownership of two retail pharmacies",
//   "Licensed wholesale operations",
//   "Full traceability on all products",
//   "USA-based sourcing network"
// ];

// const GlobalDistributionPage = () => {
//   const [scrollY, setScrollY] = useState(0);

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
//             entry.target.classList.add("animate-visible");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#F3EFE3] font-sans">
//     <style>{`
//   @keyframes fadeInUp {
//     from { opacity: 0; transform: translateY(40px); }
//     to { opacity: 1; transform: translateY(0); }
//   }

//   @keyframes scaleIn {
//     from { opacity: 0; transform: scale(0.9); }
//     to { opacity: 1; transform: scale(1); }
//   }

//   @keyframes float {
//     0%, 100% { transform: translateY(0px); }
//     50% { transform: translateY(-20px); }
//   }

//   @keyframes pulse {
//     0%, 100% { transform: scale(1); opacity: 0.5; }
//     50% { transform: scale(1.1); opacity: 0.8; }
//   }

//   .animate-on-scroll {
//     opacity: 0;
//     transform: translateY(40px);
//     transition: opacity .8s ease, transform .8s ease;
//   }

//   .animate-visible {
//     opacity: 1;
//     transform: translateY(0);
//   }

//   .drug-type-card {
//     transition: all 0.3s ease;
//   }

//   .drug-type-card:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 20px 40px rgba(118, 149, 130, 0.3);
//   }

//   .feature-item {
//     transition: all 0.3s ease;
//     background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
//   }

//   .feature-item:hover {
//     transform: translateX(8px);
//     background: linear-gradient(135deg, #769582 0%, #5a7a68 100%);
//   }

//   .feature-item:hover * {
//     color: white !important;
//   }
// `}</style>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[700px]">
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&q=80" 
//             alt="Pharmaceutical distribution"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-[#769582]/95 via-[#5a7a68]/90 to-[#769582]/95"></div>
//           <div className="absolute inset-0 opacity-20">
//             <div className="absolute inset-0" style={{
//               backgroundSize: '100px 100px'
//             }}></div>
//           </div>
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
//           <div className="text-center">
//             <div 
//               className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/30"
//               style={{ animation: 'fadeInUp 0.8s ease' }}
//             >
//               <Globe className="w-6 h-6 text-white" />
//               <span className="text-white font-bold text-lg">Global Pharmaceutical Solutions</span>
//             </div>

//             <h1 
//               className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
//               style={{ 
//                 animation: 'fadeInUp 1s ease 0.2s backwards',
//                 textShadow: '0 4px 20px rgba(0,0,0,0.3)'
//               }}
//             >
//               Pharmaceutical Supply &<br />
//               <span className="text-[#F3EFE3]">Drug Sourcing</span>
//             </h1>

//             <p 
//               className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed"
//               style={{ animation: 'fadeInUp 1s ease 0.4s backwards' }}
//             >
//               High-quality Generics, Branded, Specialty drugs, and Biologics-Biosimilars sourced directly from the USA with <strong className="text-[#F3EFE3]">full traceability and compliance</strong>
//             </p>

//             <div 
//               className="flex flex-wrap justify-center gap-4 mb-10"
//               style={{ animation: 'fadeInUp 1s ease 0.6s backwards' }}
//             >
//               <a
//                 href="#contact"
//                 className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/40 hover:bg-white/25 transition-all duration-300"
//               >
//                 <Phone className="w-6 h-6" />
//                 Request Quote
//               </a>
//               <a
//                 href="#guarantees"
//                 className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/40 hover:bg-white/25 transition-all duration-300"
//               >
//                 Our Guarantees
//                 <ArrowRight className="w-5 h-5" />
//               </a>
//             </div>

//             <div 
//               className="inline-flex items-center gap-3 bg-[#F3EFE3]/95 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl"
//               style={{ animation: 'scaleIn 1s ease 0.8s backwards' }}
//             >
//               <Award className="w-8 h-8 text-[#769582]" />
//               <div className="text-left">
//                 <p className="text-3xl font-bold text-[#769582]">20+ Years</p>
//                 <p className="text-sm text-gray-600 font-semibold">Pharmaceutical Industry Experience</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F3EFE3] to-transparent"></div>
//       </section>

//       {/* Drug Types Section */}
//       <section className="py-16 bg-[#F3EFE3] relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-12 animate-on-scroll">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#769582] mb-4">
//               What We Supply
//             </h2>
//             <p className="text-xl text-gray-700">
//               Comprehensive pharmaceutical products for clinical trials and research
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {drugTypes.map((drug, index) => (
//               <div
//                 key={index}
//                 className="drug-type-card animate-on-scroll text-center p-6 rounded-2xl bg-white shadow-lg"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${drug.color} mb-4 shadow-lg`}>
//                   <drug.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-800">{drug.name}</h3>
//               </div>
//             ))}
//           </div>

//           <div className="mt-16 animate-on-scroll">
//             <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#769582]">
//               <h3 className="text-2xl font-bold text-[#769582] mb-6 text-center">
//                 Why Choose Celacto Pharma?
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {keyFeatures.map((feature, index) => (
//                   <div
//                     key={index}
//                     className="feature-item flex items-center gap-3 p-4 rounded-xl"
//                   >
//                     <CheckCircle className="w-6 h-6 text-[#769582] flex-shrink-0" />
//                     <span className="text-gray-700 font-medium">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What We Guarantee Section */}
//       <section id="guarantees" className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=1920&q=80" 
//             alt="Quality assurance"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-[#C0C3B9]/95 via-[#769382]/90 to-[#C0C3B9]/95"></div>
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute inset-0" style={{
//               backgroundImage: 'linear-gradient(45deg, #769582 25%, transparent 25%, transparent 75%, #769582 75%, #769582), linear-gradient(45deg, #769582 25%, transparent 25%, transparent 75%, #769582 75%, #769582)',
//               backgroundSize: '60px 60px',
//               backgroundPosition: '0 0, 30px 30px'
//             }}></div>
//           </div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16 animate-on-scroll">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               What We Guarantee
//             </h2>
//             <p className="text-xl text-white/90 max-w-3xl mx-auto">
//               End-to-end support ensuring smooth, compliant clinical trial operations
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {guarantees.map((item, index) => (
//               <div
//                 key={index}
//                 className="animate-on-scroll bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#769582] to-[#5a7a68] flex items-center justify-center shadow-lg">
//                     <item.icon className="w-7 h-7 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold mb-2 text-[#769582]">
//                       {item.title}
//                       <span className="ml-2 text-sm">⭐</span>
//                     </h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> 

//       {/* Our Promise Section */}
//       <section className="py-20 bg-[#F3EFE3]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="animate-on-scroll space-y-6">
//               <div className="inline-block px-4 py-2 bg-[#769582]/10 rounded-full">
//                 <span className="text-[#769582] font-bold">Our Commitment</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-[#769582] leading-tight">
//                 Focus on Innovation,<br />
//                 We Handle the Rest
//               </h2>
//               <p className="text-xl text-gray-700 leading-relaxed">
//                 With Celacto Pharma, you can <strong className="text-[#769582]">focus on advancing innovation</strong> while we manage:
//               </p>
//               <div className="space-y-4">
//                 {[
//                   "Sourcing from verified suppliers",
//                   "Logistics and cold chain management",
//                   "Quality assurance and documentation",
//                   "Global regulatory compliance"
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
//                   >
//                     <div className="w-10 h-10 rounded-full bg-[#769582] flex items-center justify-center flex-shrink-0">
//                       <CheckCircle className="w-6 h-6 text-white" />
//                     </div>
//                     <span className="text-lg text-gray-700 font-medium">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="animate-on-scroll relative">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                 <img
//                 src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=80"
//                 alt="Scientist in pharmaceutical laboratory"
//                 className="w-full h-[500px] object-cover rounded-xl"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#769582]/80 to-transparent flex items-end p-8">
//                   <div className="text-white">
//                     <p className="text-2xl font-bold mb-2">Quality First</p>
//                     <p className="text-sm">Rigorous quality control at every step</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div 
//                 className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl"
//                 style={{ animation: 'float 4s ease-in-out infinite' }}
//               >
//                 <div className="text-center">
//                   <p className="text-4xl font-bold text-[#769582]">100%</p>
//                   <p className="text-sm text-gray-600 font-semibold">Compliance Rate</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-[#769582] to-[#5a7a68]">
//         <div className="absolute inset-0">
//           <div 
//             className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/10"
//             style={{ animation: 'pulse 3s ease-in-out infinite' }}
//           ></div>
//           <div 
//             className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-white/10"
//             style={{ animation: 'pulse 4s ease-in-out infinite' }}
//           ></div>
//         </div>

//         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
//             Ready to Source with Confidence?
//           </h2>
//           <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
//             Partner with Celacto Pharma for reliable pharmaceutical supply and comparator sourcing backed by 20+ years of expertise.
//           </p>
          
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <a
//               href="tel:980-888-0080"
//               className="inline-flex items-center gap-3 bg-white text-[#769582] px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-300"
//             >
//               <Phone className="w-7 h-7" />
//               Call Now
//             </a>
//             <a
//               href="mailto:kirti@celactopharma.com"
//               className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-xl font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
//             >
//               Email Us
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default GlobalDistributionPage;

import React, { useEffect, useState } from "react";
import { 
  Globe, Shield, Thermometer, FileCheck, TrendingUp, 
  CheckCircle, Award, Package, Truck, Clock, Zap, Phone, 
  ArrowRight, Star, Target
} from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Verified Sourcing",
    description: "Direct procurement from licensed suppliers and manufacturers with complete verification",
    highlight: true
  },
  {
    icon: FileCheck,
    title: "Full Compliance",
    description: "GDP guidelines and global regulatory standards strictly followed",
    highlight: true
  },
  {
    icon: Truck,
    title: "Efficient Logistics",
    description: "Streamlined inbound & outbound logistics for faster delivery",
    highlight: true
  },
  {
    icon: Thermometer,
    title: "Temperature-Controlled",
    description: "Cold chain management for temperature-sensitive pharmaceuticals",
    highlight: true
  },
  {
    icon: FileCheck,
    title: "Complete Documentation",
    description: "COA, COO, Batch Details, and all required certifications",
    highlight: true
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    description: "Optimized costs with efficient lead times",
    highlight: true
  }
];

const drugTypes = [
  { name: "Generics", icon: Package, color: "from-blue-400 to-cyan-500" },
  { name: "Branded Drugs", icon: Award, color: "from-purple-400 to-pink-500" },
  { name: "Specialty Drugs", icon: Star, color: "from-orange-400 to-red-500" },
  { name: "Biologics-Biosimilars", icon: Target, color: "from-green-400 to-emerald-500" }
];

const keyFeatures = [
  "20+ years pharmaceutical industry experience",
  "Ownership of two retail pharmacies",
  "Licensed wholesale operations",
  "Full traceability on all products",
  "USA-based sourcing network"
];

const GlobalDistributionPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F3EFE3] font-sans">
    <style>{`

    header a[href="/"] * {
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  box-shadow: none !important;
}

  /* Navbar Integration */
  header, nav {
    background: transparent !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    border-bottom: none !important;
    box-shadow: none !important;
    z-index: 50 !important;
  }

  /* Keep all nav links with transparent/subtle background - exclude dropdown menu items */
  header nav > a,
  header nav > button,
  nav nav > a,
  nav nav > button {
    background: rgba(255, 255, 255, 0.1) !important;
    color: white !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
  }

  header nav > a:hover,
  header nav > button:hover,
  nav nav > a:hover,
  nav nav > button:hover {
    background: rgba(255, 255, 255, 0.2) !important;
  }

  /* Dropdown menu should have solid white background */
  header [role="menu"],
  nav [role="menu"],
  header .dropdown-menu,
  nav .dropdown-menu {
    background: white !important;
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
  }

  /* Dropdown menu items should have normal styling */
  header [role="menu"] a,
  nav [role="menu"] a,
  header .dropdown-menu a,
  nav .dropdown-menu a {
    background: transparent !important;
    color: #1e293b !important;
    border: none !important;
  }

  header [role="menu"] a:hover,
  nav [role="menu"] a:hover,
  header .dropdown-menu a:hover,
  nav .dropdown-menu a:hover {
    background: #f1f5f9 !important;
    color: #769582 !important;
  }

  /* Active dropdown item */
  header [role="menu"] a.active,
  nav [role="menu"] a.active,
  header .dropdown-menu a.active,
  nav .dropdown-menu a.active {
    background: #769582 !important;
    color: white !important;
  }

  /* Only highlight the active Global Distribution page */
  header nav > a[href="/services/global-distribution"],
  nav nav > a[href="/services/global-distribution"] {
    background: rgba(255, 255, 255, 0.15) !important;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity .8s ease, transform .8s ease;
  }

  .animate-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .drug-type-card {
    transition: all 0.3s ease;
  }

  .drug-type-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(118, 149, 130, 0.3);
  }

  .feature-item {
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  }

  .feature-item:hover {
    transform: translateX(8px);
    background: linear-gradient(135deg, #769582 0%, #5a7a68 100%);
  }

  .feature-item:hover * {
    color: white !important;
  }

  .perspective-1000 {
    perspective: 1000px;
  }

  .guarantee-card-3d {
    transform-style: preserve-3d;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .guarantee-card-3d:hover {
    transform: translateY(-20px) scale(1.05) rotateX(5deg) rotateY(2deg);
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(200%); }
  }

  .shimmer-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: shimmer 2s infinite;
  }

  /* REMOVE background from logo on this page */
header a[href="/"] h1,
header a[href="/"] h2 {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
}

/* Override your global rule so it does NOT affect the logo */
header nav > a:not([href="/"]),
header nav > button,
nav nav > a:not([href="/"]),
nav nav > button {
  background: rgba(255,255,255,0.1) !important;
  color: white !important;
  border: 1px solid rgba(255,255,255,0.2) !important;
}

/* Explicitly REMOVE background ONLY for logo link */
header nav > a[href="/"] {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

`}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[700px]">
        <div className="absolute inset-0">
          <img 
            src="/public/images/global-hero.jpg" 
            alt="Pharmaceutical distribution"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#769582]/95 via-[#5a7a68]/90 to-[#769582]/95"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
          <div className="text-center">
            <div 
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/30"
              style={{ animation: 'fadeInUp 0.8s ease' }}
            >
              <Globe className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-lg">Global Pharmaceutical Solutions</span>
            </div>

            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
              style={{ 
                animation: 'fadeInUp 1s ease 0.2s backwards',
                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            >
              Pharmaceutical Supply &<br />
              <span className="text-[#F3EFE3]">Drug Sourcing</span>
            </h1>

            <p 
              className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed"
              style={{ animation: 'fadeInUp 1s ease 0.4s backwards' }}
            >
              High-quality Generics, Branded, Specialty drugs, and Biologics-Biosimilars sourced directly from the USA with <strong className="text-[#F3EFE3]">full traceability and compliance</strong>
            </p>

            <div 
              className="flex flex-wrap justify-center gap-4 mb-10"
              style={{ animation: 'fadeInUp 1s ease 0.6s backwards' }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/40 hover:bg-white/25 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                Request Quote
              </a>
              <a
                href="#guarantees"
                className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/40 hover:bg-white/25 transition-all duration-300"
              >
                Our Guarantees
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div 
              className="inline-flex items-center gap-3 bg-[#F3EFE3]/95 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl"
              style={{ animation: 'scaleIn 1s ease 0.8s backwards' }}
            >
              <Award className="w-8 h-8 text-[#769582]" />
              <div className="text-left">
                <p className="text-3xl font-bold text-[#769582]">20+ Years</p>
                <p className="text-sm text-gray-600 font-semibold">Pharmaceutical Industry Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F3EFE3] to-transparent"></div>
      </section>

      {/* Drug Types Section */}
      <section className="py-16 bg-[#F3EFE3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-[#769582] mb-4">
              What We Supply
            </h2>
            <p className="text-xl text-gray-700">
              Comprehensive pharmaceutical products for clinical trials and research
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {drugTypes.map((drug, index) => (
              <div
                key={index}
                className="drug-type-card animate-on-scroll text-center p-6 rounded-2xl bg-white shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${drug.color} mb-4 shadow-lg`}>
                  <drug.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{drug.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-16 animate-on-scroll">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#769582]">
              <h3 className="text-2xl font-bold text-[#769582] mb-6 text-center">
                Why Choose Celacto Pharma?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-item flex items-center gap-3 p-4 rounded-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-[#769582] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Guarantee Section with 3D Effects */}
      <section id="guarantees" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/public/images/global1.jpg" 
            alt="Quality assurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#C0C3B9]/95 via-[#769382]/90 to-[#C0C3B9]/95"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(45deg, #769582 25%, transparent 25%, transparent 75%, #769582 75%, #769582), linear-gradient(45deg, #769582 25%, transparent 25%, transparent 75%, #769582 75%, #769582)',
              backgroundSize: '60px 60px',
              backgroundPosition: '0 0, 30px 30px'
            }}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#769582] blur-xl opacity-40 animate-pulse"></div>
                <h2 className="relative text-4xl md:text-5xl font-bold text-white">
                  What We Guarantee
                </h2>
              </div>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              End-to-end support ensuring smooth, compliant clinical trial operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guarantees.map((item, index) => (
              <div
                key={index}
                className="perspective-1000 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow Effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-[#769582] via-[#5a7a68] to-[#769582] rounded-2xl blur-xl transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-75 scale-110' : 'opacity-0 scale-95'
                  }`}
                ></div>

                {/* Card */}
                <div
                  className={`relative guarantee-card-3d bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-xl border-2 ${
                    hoveredIndex === index ? 'border-[#769582]' : 'border-white/50'
                  }`}
                >
                  {/* Shimmer Effect */}
                  {hoveredIndex === index && (
                    <div className="shimmer-effect rounded-2xl"></div>
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div 
                        className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#769582] to-[#5a7a68] flex items-center justify-center shadow-lg transition-all duration-500 ${
                          hoveredIndex === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                        }`}
                      >
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className={`text-xl font-bold transition-colors duration-300 ${
                            hoveredIndex === index ? 'text-[#769582]' : 'text-gray-800'
                          }`}>
                            {item.title}
                          </h3>
                          <span 
                            className={`text-2xl transition-all duration-500 ${
                              hoveredIndex === index ? 'scale-125 rotate-12' : 'scale-100 rotate-0'
                            }`}
                          >
                            ⭐
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Animated Progress Bar */}
                    <div 
                      className={`mt-6 h-1 bg-gradient-to-r from-[#769582] via-[#5a7a68] to-[#769582] rounded-full transition-all duration-500 ${
                        hoveredIndex === index ? 'w-full opacity-100' : 'w-0 opacity-0'
                      }`}
                    ></div>
                  </div>

                  {/* Corner Accent */}
                  <div 
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#769582]/20 to-transparent rounded-tr-2xl transition-all duration-500 ${
                      hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Indicator */}
          <div className="mt-16 flex justify-center">
            <div className="flex gap-2">
              {guarantees.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    hoveredIndex === i 
                      ? 'bg-white scale-150 w-8' 
                      : 'bg-white/40 scale-100'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section> 

      {/* Our Promise Section */}
      <section  id="cold-chain" className="py-20 bg-[#F3EFE3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll space-y-6">
              <div className="inline-block px-4 py-2 bg-[#769582]/10 rounded-full">
                <span className="text-[#769582] font-bold">Our Commitment</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#769582] leading-tight">
                Focus on Innovation,<br />
                We Handle the Rest
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                With Celacto Pharma, you can <strong className="text-[#769582]">focus on advancing innovation</strong> while we manage:
              </p>
              <div className="space-y-4">
                {[
                  "Sourcing from verified suppliers",
                  "Logistics and cold chain management",
                  "Quality assurance and documentation",
                  "Global regulatory compliance"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#769582] flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                src="/public/images/global2.jpg"
                alt="Scientist in pharmaceutical laboratory"
                className="w-[600px] h-[600px] object-cover rounded-xl"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#769582]/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-2xl font-bold mb-2">Quality First</p>
                    <p className="text-sm">Rigorous quality control at every step</p>
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl"
                style={{ animation: 'float 4s ease-in-out infinite' }}
              >
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#769582]">99.5%</p>
                  <p className="text-sm text-gray-600 font-semibold">Compliance Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-[#769582] to-[#5a7a68]">
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/10"
            style={{ animation: 'pulse 3s ease-in-out infinite' }}
          ></div>
          <div 
            className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-white/10"
            style={{ animation: 'pulse 4s ease-in-out infinite' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Source with Confidence?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Partner with Celacto Pharma for reliable pharmaceutical supply and comparator sourcing backed by 20+ years of expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:980-888-0080"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-xl font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-7 h-7" />
              Call Now
            </a>
            <a
              href="mailto:kirti@celactopharma.com"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-xl font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalDistributionPage;