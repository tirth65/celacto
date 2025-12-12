import React, { useEffect, useRef, useState } from "react";
import { 
  Shield, Thermometer, Truck, Globe, Lock, Eye, 
  CheckCircle, Clock, MapPin, Package, TrendingUp, Phone, Award, Zap
} from "lucide-react";



const features = [
  {
    icon: Thermometer,
    title: "Temperature-Quarantine Storage",
    description: "Advanced climate control systems maintaining optimal conditions for product stability and compliance."
  },
  {
    icon: Lock,
    title: "24/7 Monitored Security",
    description: "State-of-the-art surveillance and restricted access protocols protecting your valuable inventory."
  },
  {
    icon: Shield,
    title: "Full Regulatory Compliance",
    description: "Meeting FDA, GDP, DSCSA standards with dedicated zones for controlled substances."
  },
  {
    icon: Package,
    title: "Specialized Product Zones",
    description: "Purpose-built storage areas for sensitive, high-value, and specialty pharmaceutical products."
  }
];

const distributionBenefits = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Nationwide US coverage with international shipping to Europe, India, China, and beyond."
  },
  {
    icon: Eye,
    title: "Real-Time Tracking",
    description: "Complete visibility from warehouse to final destination with live monitoring."
  },
  {
    icon: TrendingUp,
    title: "Optimized Workflows",
    description: "Streamlined logistics processes designed to minimize delays."
  },
  {
    icon: MapPin,
    title: "Direct Distribution",
    description: "Seamless delivery to hospitals, clinics, pharmacies, and healthcare systems."
  }
];

const coldChainFeatures = [
  "Cold chain logistics (2°C–8°C, -20°C, and custom ranges)",
  "Continuous digital temperature monitoring",
  "Validated packaging solutions for secure transit",
  "Rapid-response protocols for temperature deviations"
];

// const location = useLocation();

// useEffect(() => {
//   if (location.hash === "#main-services") {
//     const el = document.getElementById("main-services");

//     if (el) {
//       setTimeout(() => {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 300);
//     }
//   }
// }, [location]);


const WarehousingPage = () => {
  const [scrollY, setScrollY] = useState(0);

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
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

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
        
        // /* Remove background from logo link */
        // header a[href="/"], nav a[href="/"] {
        //   background: transparent !important;
        //   padding: 0 !important;
        // }
        
        // /* Add white border to C circle */
        // header a[href="/"] > div:first-child, 
        // nav a[href="/"] > div:first-child {
        // }
        
        // /* Force logo text colors */
        // header a[href="/"] *, nav a[href="/"] * {
        //   color: white !important;
        // }
        
        // /* Make only the subtitle (Access to Medicines) black */
        // header a[href="/"] > div:last-child > div:last-child,
        // nav a[href="/"] > div:last-child > div:last-child {
        //   color: #1e293b !important;
        // }

        // /* Active Warehousing button - WHITE background with GREEN text */
        // header a[href="/services/warehousing"], 
        // nav a[href="/services/warehousing"] {
        //   background: white !important;
        //   color: #769582 !important;
        // }

        // /* Home, About Us, Services, Contact Us buttons - GREEN background with WHITE text */
        // header nav > div > a[href="/"],
        // nav nav > div > a[href="/"],
        // header a[href="/about"], 
        // nav a[href="/about"],
        // header a[href="/services"], 
        // nav a[href="/services"],
        // header a[href="/contact"],
        // nav a[href="/contact"],
        // header button, 
        // nav button {
        //   background: #769582 !important;
        //   color: white !important;
        //   border-radius: 9999px !important;
        //   padding: 0.5rem 1.5rem !important;
        // }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .feature-card {
          transition: all 0.4s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(118, 149, 130, 0.2);
        }

        .benefit-card {
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: scale(1.05);
        }

        /* New styles for Expand Your Reach section */
        .globe-float {
          animation: floatGlobe 6s ease-in-out infinite;
        }

        @keyframes floatGlobe {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .partner-content {
          position: relative;
          z-index: 10;
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { left: -100%; }
          50%, 100% { left: 100%; }
        }

        .feature-badge {
          transition: all 0.3s ease;
        }

        .feature-badge:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 10px 30px rgba(118, 149, 130, 0.3);
        }

        .partner-pill {
          transition: all 0.3s ease;
        }

        .partner-pill:hover {
          background-color: #769582;
          color: white;
        }
      `}</style>

      {/* Hero Section with Background Image */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/public/images/warehouse-hero.jpg"
            alt="Pharmaceutical warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#769582]/85"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div 
              className="inline-block mb-6"
              style={{ animation: 'fadeInUp 0.8s ease' }}
            >
              <div className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
                <Truck className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-lg">Professional Logistics Services</span>
              </div>
            </div>
            
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-lg"
              style={{ 
                animation: 'fadeInUp 1s ease 0.2s backwards',
                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            >
              Pharmaceutical Warehousing<br />& Distribution Services
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md"
              style={{ 
                animation: 'fadeInUp 1s ease 0.4s backwards',
                textShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }}
            >
              Your trusted logistics partner ensuring precision, protection, and full regulatory confidence across the USA and global markets.
            </p>

            <div 
              className="flex flex-wrap justify-center gap-4"
              style={{ animation: 'fadeInUp 1s ease 0.6s backwards' }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/40 hover:bg-white/25 hover:border-white/60 transition-all duration-300 shadow-xl"
              >
                <Phone className="w-6 h-6" />
                Schedule Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/40 hover:bg-white/25 hover:border-white/60 transition-all duration-300 shadow-xl"
              >
                Learn More
              </a>
            </div>

            {/* Trust Indicators */}
            <div 
              className="flex flex-wrap justify-center gap-8 mt-12"
              style={{ animation: 'fadeInUp 1s ease 0.8s backwards' }}
            >
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">FDA Certified</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Global Network</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Award className="w-5 h-5" />
                <span className="font-semibold">15+ Years</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F3EFE3] via-white to-[#F3EFE3]"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-[#F3EFE3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal space-y-5">
              <div className="inline-block px-4 py-2 bg-[#769582]/10 rounded-full">
                <span className="text-[#769582] font-semibold">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#769582] leading-tight">
                More Than Storage—Precision, Protection & Compliance
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At CELACTO PHARMA LLC, pharmaceutical logistics aren't just about storage—they're about precision, protection, and full regulatory confidence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our advanced warehousing and distribution solutions ensure every product, from standard medications to high-value specialty drugs, is safeguarded throughout its entire journey.
              </p>
              <div className="flex flex-wrap gap-3 pt-3">
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-md">
                  <Award className="w-5 h-5 text-[#769582]" />
                  <span className="font-semibold text-gray-700">FDA Compliant</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-md">
                  <Globe className="w-5 h-5 text-[#769582]" />
                  <span className="font-semibold text-gray-700">Global Network</span>
                </div>
              </div>
            </div>

            <div className="reveal relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/public/images/warehouse3.png"
                alt="Modern pharmaceutical warehouse"
                className="w-[1000px] h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#769582]/90 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm opacity-90">Temperature-controlled pharmaceutical storage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Warehousing Features */}
      <section id="services"  className="py-16 bg-[#C0C3B9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#769582] mb-3">
              Secure & Fully Compliant Warehousing
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Purpose-built facilities meeting strict regulatory expectations while maintaining product quality and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="reveal feature-card bg-white/90 backdrop-blur-sm rounded-2xl p-7 shadow-lg border border-[#769582]/10"
                style={{
                  animation: `fadeInUp 0.6s ease ${index * 0.1 + 0.3}s backwards`
                }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#769582] to-[#5a7a68] flex items-center justify-center shadow-lg">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#769582] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Network */}
      <section className="py-16 bg-[#F3EFE3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#769582] mb-3">
              Robust Global Distribution Network
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Timely, efficient, and transparent delivery across the United States and international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {distributionBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="reveal benefit-card bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-[#769582]/10"
                  style={{
                    animation: `fadeInUp 0.6s ease ${index * 0.1 + 0.3}s backwards`
                  }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#769582] mb-3">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-[#769582] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="reveal relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/public/images/warehouse2.jpg"
                alt="Distribution network"
                className="w-full h-[500px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#769582]/80 to-transparent flex items-end p-6">
                <p className="text-white text-base font-semibold">
                  Seamless logistics monitoring from dispatch to delivery
                </p>
              </div>
            </div>
          </div>

          <div className="reveal bg-[#769582] rounded-2xl p-6 shadow-xl text-center">
            <p className="text-lg text-white">
              <strong>Every shipment is monitored by our logistics specialists,</strong> ensuring a frictionless, predictable delivery experience.
            </p>
          </div>
        </div>
      </section>

      {/* Cold Chain Excellence */}
      <section className="py-16 bg-[#769382]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img
                src="/public/images/warehouse5.jpg"
                alt="Cold chain storage"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-[#769582]" />
                  <span className="font-bold text-[#769582]">2°C - 8°C</span>
                </div>
              </div>
            </div>

            <div className="reveal space-y-5 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#769582] mb-4">
                Cold Chain & Specialized Handling Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Temperature-sensitive pharmaceuticals need more than basic storage—they require absolute precision.
              </p>
              
              <div className="space-y-3 mt-6">
                {coldChainFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#769582]/20"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#769582]" />
                    <span className="text-base text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#769582] rounded-xl p-5 mt-5">
                <p className="text-base text-white italic">
                  We treat every temperature-controlled product with the same care and accuracy you'd expect in a high-tech medical environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#769582]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: "15+", label: "Years Experience", icon: Award },
              { number: "24/7", label: "Support Available", icon: Clock },
              { number: "99%", label: "Compliance Rate", icon: Shield }
            ].map((stat, index) => (
              <div
                key={index}
                className="reveal bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
                style={{
                  animation: `fadeInUp 0.6s ease ${index * 0.1 + 0.3}s backwards`
                }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-4">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>

                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>

                <div className="text-base text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expand Your Reach Section - Redesigned */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F3EFE3] via-[#e8e4d8] to-[#F3EFE3]">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23769582' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="partner-content reveal">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-[#769582] to-[#5a7a68] text-white text-sm font-semibold rounded-full shadow-lg shine-effect">
                  🌍 Global Partnership Program
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#769582] mb-6 leading-tight">
                Expanding into the <span className="text-[#5a7a68]">US market?</span>
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Celacto Pharma makes it effortless. From global manufacturers and wholesalers to healthcare providers, we offer end-to-end US logistics, compliant warehousing, and nationwide distribution—all under one trusted roof.
              </p>

              {/* Feature Badges */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🌐", title: "US Market Entry", desc: "Seamless access" },
                  { icon: "📦", title: "End-to-End Logistics", desc: "Complete solutions" },
                  { icon: "✅", title: "Compliant Warehousing", desc: "FDA standards" },
                  { icon: "🚚", title: "Nationwide Distribution", desc: "Coast to coast" }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="feature-badge bg-white rounded-xl p-4 shadow-md border border-[#769582]/20"
                  >
                    <div className="text-3xl mb-2 text-[#769582]">{feature.icon}</div>
                    <h4 className="font-bold text-[#769582] text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Partner Types */}
              <div className="flex flex-wrap gap-3">
                {["Manufacturers", "Wholesalers", "Exporters", "Healthcare Providers"].map((type, index) => (
                  <span
                    key={index}
                    className="partner-pill px-4 py-2 bg-white text-[#769582] text-sm font-medium rounded-full shadow-sm border border-[#769582]/30 cursor-default"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="reveal relative" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/public/images/warehouse6.jpg" 
                  alt="Global business partnership"
                  className="w-[600px] h-[650px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#769582]/90 via-[#769582]/50 to-transparent"></div>
      
                {/* Globe decoration */}
                <div className="absolute top-8 right-8 globe-float">
                  <div className="text-6xl opacity-30">🌐</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#769582]/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#5a7a68]/20 rounded-full blur-3xl"></div>
            </div>

          </div>
        </div>
      </section>

       {/* CTA Section with Contact Info */}
       <section id="contact" className="relative py-20 overflow-hidden bg-[#769582]">
         <div className="absolute inset-0 opacity-10">
           <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white"></div>
         </div>
       
         <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
             Ready to Streamline Your Logistics?
           </h2>
           <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
             Contact us today and discover how CELACTO PHARMA LLC can support your growth with safety, compliance, and unmatched reliability.
           </p>
          
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:980-888-0080"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </a>
            <a
              href="mailto:kirti@celactopharma.com"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarehousingPage;

      