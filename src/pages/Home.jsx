import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Package, Globe, Shield, Truck, Thermometer, Clock, Award, ArrowRight, Zap, Heart, Building, Droplet, TrendingUp, Users, Target } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "FDA & GDP Compliant",
      description: "Full regulatory compliance with 24/7 monitored security systems",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Thermometer,
      title: "Cold Chain Excellence",
      description: "Temperature-controlled storage with continuous digital monitoring",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Seamless logistics across USA, Europe, India, China and beyond",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const services = [
    {
      icon: Building,
      title: "Secure Warehousing",
      description: "Purpose-built pharmaceutical storage with advanced security and temperature control",
      stats: "24/7 Monitoring",
      gradient: "from-[#769582] to-[#6a8775]"
    },
    {
      icon: Truck,
      title: "Global Distribution",
      description: "Nationwide and international shipping with real-time tracking and optimization",
      stats: "Real-time Tracking",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Droplet,
      title: "Cold Chain Logistics",
      description: "Specialized handling for temperature-sensitive medications with validated packaging",
      stats: "2°C–8°C Control",
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="overflow-hidden bg-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .float-animation { animation: float 6s ease-in-out infinite; }
        .float-delay-1 { animation-delay: -2s; }
        .float-delay-2 { animation-delay: -4s; }
        .slide-in { animation: slideIn 0.8s ease forwards; }
        .fade-in-up { animation: fadeInUp 0.8s ease forwards; }

         header, nav {
          background: transparent !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          z-index: 50 !important;
        }
      `}</style>

      {/* Hero Section */}
      <section
        id="top"
        className="relative isolate flex min-h-screen items-center justify-center overflow-hidden"
      >
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/pharma-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 pb-24 pt-28 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
          <div className="max-w-xl text-center md:text-left">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-100">
              CelactoPharma
            </p>
            <h1 className="text-5xl font-light tracking-wider text-white sm:text-6xl lg:text-7xl mb-1" style={{ fontFamily: 'serif' }}>
              Hello
            </h1>
            <p className="mt-4 text-sm text-slate-100 sm:text-base">
              We partner with pharmaceutical companies, hospitals, and NGOs to
              remove barriers to treatment and deliver trusted therapies across
              the globe.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white hover:border-primary-200 hover:text-primary-100"
              >
                Contact Our Team
              </button>
            </div>
          </div>

          <div className="w-full max-w-sm rounded-2xl border border-white/40 bg-slate-900/80 p-5 shadow-xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-100">
              At a glance
            </p>
            <p className="mt-2 text-sm text-slate-50">
              Trusted access partner supporting{" "}
              <span className="font-semibold text-primary-200">
                global healthcare organizations
              </span>{" "}
              with tailored, compliant solutions.
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-4 text-xs text-slate-200 sm:text-sm">
              <div>
                <dt className="text-slate-400">Headquarters</dt>
                <dd className="text-lg font-semibold text-primary-200">
                  NC,USA
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">Years of experience</dt>
                <dd className="text-lg font-semibold text-primary-200">
                  20+
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">Pharmacies</dt>
                <dd className="text-lg font-semibold text-primary-200">
                  2
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">On‑time deliveries</dt>
                <dd className="text-lg font-semibold text-primary-200">
                  99.5%
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Mission Section - LIGHT BEIGE BACKGROUND */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-700">
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Removing barriers to life-saving treatments worldwide
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Every day, patients around the world face challenges accessing the medicines they need. CelactoPharma exists to bridge that gap—connecting pharmaceutical companies, healthcare providers, and patients through compliant, efficient access programs.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                We handle the complex logistics, regulatory navigation, and supply chain management so you can focus on what matters most: improving patient outcomes.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700">
                  Global Network
                </div>
                <div className="rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold text-sky-700">
                  Compliant Delivery
                </div>
              </div>
            </div>

            <div className="relative fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 shadow-2xl flex items-center justify-center float-animation">
                    <Package className="w-20 h-20 lg:w-24 lg:h-24 text-white" />
                  </div>
                </div>

                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className="absolute inset-0 animate-spin"
                    style={{
                      animationDuration: `${20 + index * 5}s`,
                      animationDelay: `${-index * 2}s`
                    }}
                  >
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${features[index].color} shadow-xl flex items-center justify-center`}>
                      {React.createElement(features[index].icon, { className: "w-8 h-8 lg:w-10 lg:h-10 text-white" })}
                    </div>
                  </div>
                ))}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-72 h-72 lg:w-80 lg:h-80 rounded-full border-2 border-primary-300/30 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full border-2 border-primary-200/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - LIGHT GRAY BACKGROUND */}
      <section className="relative py-24 bg-[#F5F1E8] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-emerald-500 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-primary-500 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 fade-in-up">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-700 mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              A partner built for the complexities of global medicine access
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Specialized expertise in pharmaceutical distribution, regulatory affairs, and supply chain management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`h-full p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${activeFeature === index ? 'border-primary-500 -translate-y-2' : 'border-slate-200'}`}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                  
                  {activeFeature === index && (
                    <div className="mt-6 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" style={{ width: '100%', animation: 'slideIn 2s ease' }} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - GREEN BACKGROUND */}
      <section className="relative py-24 bg-[#769582] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 fade-in-up">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white mb-4">
              what we provide
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
              Comprehensive pharmaceutical solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 overflow-hidden">
                  <div className="absolute top-6 right-6 text-7xl font-bold text-slate-100 group-hover:text-slate-200 transition-colors">
                    0{index + 1}
                  </div>
                  
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm">
                      <Zap className="w-4 h-4" />
                      <span>{service.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section - NEW DESIGN */}
      <section className="relative py-24 bg-[#F5F1E8] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#769582] blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-emerald-500 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Image */}
            <div className="relative order-2 lg:order-1 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/home1.jpg" 
                  alt="Healthcare professionals in action"
                  className="w-[600px ] h-[580px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#769582] to-emerald-600 rounded-3xl -z-10 blur-xl opacity-50" />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8 order-1 lg:order-2 fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#769582] mb-3">
                  OUR IMPACT
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">
                  Transforming access challenges into successful outcomes
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                  From emergency access requests to large-scale clinical supply programs, we've supported hundreds of organizations in delivering critical medicines to patients who need them most.
                </p>
              </div>
              
              <ul className="space-y-6 pt-4">
                <li className="flex items-start gap-4 group">
                  <div className="mt-1.5 h-10 w-10 rounded-xl bg-gradient-to-br from-[#769582] to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900 mb-1">End-to-end visibility</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Real-time tracking from source to patient with complete transparency</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-1.5 h-10 w-10 rounded-xl bg-gradient-to-br from-[#769582] to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900 mb-1">Quality assurance</p>
                    <p className="text-sm text-slate-600 leading-relaxed">GDP-compliant storage and handling protocols at every step</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-1.5 h-10 w-10 rounded-xl bg-gradient-to-br from-[#769582] to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900 mb-1">Responsive support</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Dedicated team available 24/7 when you need them most</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-1.5 h-10 w-10 rounded-xl bg-gradient-to-br from-[#769582] to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900 mb-1">Regulatory expertise</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Expert navigation of complex international requirements</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white float-animation" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white float-animation float-delay-1" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-white float-animation float-delay-2" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center fade-in-up">
          <div className="inline-block mb-8">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">Trusted by so many pharmaceutical companies across the globe</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to transform your pharmaceutical logistics?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Schedule a free consultation and discover how we can support your growth with safety, compliance, and reliability.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/70 px-5 py-3 text-xl font-semibold text-white hover:border-primary-200 hover:text-primary-100"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;