// import React from "react";
// import { Link } from "react-router-dom";
// import { Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-gradient-to-br from-[#F5F1E8] via-[#FAF7F0] to-[#F8F9FA] text-slate-800 overflow-hidden border-t border-slate-200">
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#769582] blur-3xl" />
//         <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#769582] blur-3xl" />
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'radial-gradient(circle, rgba(118,149,130,0.1) 1px, transparent 1px)',
//           backgroundSize: '30px 30px'
//         }} />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
//           {/* Company Info - Logo & Description */}
//           <div className="lg:col-span-4 space-y-6">
//             <div className="inline-block">
//               <img 
//                 src="/public/images/logo.jpg" 
//                 alt="CelactoPharma Logo" 
//                 className="h-16 w-auto"
//               />
//             </div>
//             <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
//               Improving lives by enabling access to medicines. Trusted pharmaceutical partner delivering reliable healthcare solutions across the United States.
//             </p>
//             <div className="flex items-start gap-3 text-sm text-slate-700">
//               <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#769582]" />
//               <div>
//                 <p className="font-semibold mb-1 text-slate-900">Our Location</p>
//                 <p className="text-slate-600 leading-relaxed">
//                   7101 East Wilkinson Blvd<br />
//                   Suite B, Belmont, NC 28012
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="lg:col-span-2">
//             <h3 className="text-lg font-bold mb-6 text-slate-900">Quick Links</h3>
//             <ul className="space-y-4">
//               {[
//                 { to: "/", label: "Home" },
//                 { to: "/about", label: "About Us" },
//                 { to: "/services", label: "Services" },
//                 { to: "/contact", label: "Contact" }
//               ].map((link) => (
//                 <li key={link.to}>
//                   <Link
//                     to={link.to}
//                     className="group inline-flex items-center gap-2 text-sm text-slate-600 transition-all hover:text-[#769582] hover:translate-x-1"
//                   >
//                     <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#769582]" />
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div className="lg:col-span-3">
//             <h3 className="text-lg font-bold mb-6 text-slate-900">Our Services</h3>
//             <ul className="space-y-3 text-sm text-slate-600">
//               <li className="flex items-start gap-2">
//                 <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#769582] flex-shrink-0" />
//                 <span>Pharmaceutical Distribution</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#769582] flex-shrink-0" />
//                 <span>Cold Chain Logistics</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#769582] flex-shrink-0" />
//                 <span>Secure Warehousing</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#769582] flex-shrink-0" />
//                 <span>Global Supply Chain</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#769582] flex-shrink-0" />
//                 <span>Regulatory Compliance</span>
//               </li>
//             </ul>
//           </div>

//           {/* Connect With Us */}
//           <div className="lg:col-span-3">
//             <h3 className="text-lg font-bold mb-6 text-slate-900">Connect With Us</h3>
//             <div className="space-y-4">
//               {/* Phone */}
//               <a
//                 href="tel:980-888-0080"
//                 className="group flex items-center gap-3 rounded-xl bg-white backdrop-blur-sm px-4 py-3 text-sm transition-all hover:bg-[#769582] hover:text-white hover:scale-105 border-2 border-slate-200 shadow-sm"
//               >
//                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#769582] text-white group-hover:bg-white group-hover:text-[#769582] transition-colors">
//                   <Phone className="h-5 w-5" />
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-xs text-slate-500 group-hover:text-white/80">Call Us</p>
//                   <p className="font-semibold text-slate-900 group-hover:text-white">980-888-0080</p>
//                 </div>
//               </a>

//               {/* Email */}
//               <a
//                 href="kirti@celactopharma.com"
//                 className="group flex items-center gap-3 rounded-xl bg-white backdrop-blur-sm px-4 py-3 text-sm transition-all hover:bg-[#769582] hover:text-white hover:scale-105 border-2 border-slate-200 shadow-sm"
//               >
//                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#769582] text-white group-hover:bg-white group-hover:text-[#769582] transition-colors">
//                   <Mail className="h-5 w-5" />
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-xs text-slate-500 group-hover:text-white/80">Email Us</p>
//                   <p className="font-semibold text-slate-900 group-hover:text-white text-xs sm:text-sm">kirti@celactopharma.com</p>
//                 </div>
//               </a>

//               {/* LinkedIn */}
//               <a
//                 href="https://www.linkedin.com/company/celactopharma"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group flex items-center gap-3 rounded-xl bg-white backdrop-blur-sm px-4 py-3 text-sm transition-all hover:bg-[#769582] hover:text-white hover:scale-105 border-2 border-slate-200 shadow-sm"
//               >
//                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#769582] text-white group-hover:bg-white group-hover:text-[#769582] transition-colors">
//                   <Linkedin className="h-5 w-5" />
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-xs text-slate-500 group-hover:text-white/80">Follow Us</p>
//                   <p className="font-semibold text-slate-900 group-hover:text-white">LinkedIn</p>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-16 border-t border-slate-300 pt-8">
//           <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//             {/* Copyright */}
//             <div className="text-center md:text-left">
//               <p className="text-sm text-slate-700">
//                 © {new Date().getFullYear()} <span className="font-semibold text-slate-900">CelactoPharma LLC</span>. All rights reserved.
//               </p>
//               <p className="text-xs text-slate-500 mt-1">
//                 Trusted pharmaceutical partner with a pharmacy heart.
//               </p>
//             </div>

//             {/* Certifications/Badges */}
//             <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
//               <div className="rounded-lg bg-[#769582] text-white backdrop-blur-sm px-4 py-2 text-xs font-semibold shadow-sm">
//                 FDA Compliant
//               </div>
//               <div className="rounded-lg bg-[#769582] text-white backdrop-blur-sm px-4 py-2 text-xs font-semibold shadow-sm">
//                 DSCSA Verified
//               </div>
//               <div className="rounded-lg bg-[#769582] text-white backdrop-blur-sm px-4 py-2 text-xs font-semibold shadow-sm">
//                 24/7 Support
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#F5F1E8] via-[#FAF7F0] to-[#F8F9FA] text-slate-800 overflow-hidden border-t border-slate-200">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#769582] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#769582] blur-3xl" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(118,149,130,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Company Info - Logo & Description */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-block">
              <img 
                src="/public/images/logo.jpg" 
                alt="CelactoPharma Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
              Improving lives by enabling access to medicines. Trusted pharmaceutical partner delivering reliable healthcare solutions across the United States.
            </p>
            <div className="flex items-start gap-3 text-sm text-slate-700">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#769582]" />
              <div>
                <p className="font-semibold mb-1 text-slate-900">Our Location</p>
                <p className="text-slate-600 leading-relaxed">
                  7101 East Wilkinson Blvd<br />
                  Suite B, Belmont, NC 28012
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-slate-900">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                // { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-2 text-sm text-slate-600 transition-all hover:text-[#769582] hover:translate-x-1"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#769582]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-slate-900">Our Services</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#769582] flex-shrink-0" />
                <span>Pharmaceutical Distribution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#769582] flex-shrink-0" />
                <span>Cold Chain Logistics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#769582] flex-shrink-0" />
                <span>Secure Warehousing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#769582] flex-shrink-0" />
                <span>Global Supply Chain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#769582] flex-shrink-0" />
                <span>Regulatory Compliance</span>
              </li>
            </ul>
          </div> */}

{/* Services
<div className="lg:col-span-3">
  <h3 className="text-lg font-bold mb-6 text-slate-900">Our Services</h3>
  <ul className="space-y-4">
    {[
      // 1) Global Pharma — open hero section
      { to: "/services/global-distribution", label: "Global Pharma Sourcing" },

       // 2) Warehousing — open hero/top section
      { to: "/services/warehousing", label: "Warehousing" },

      // 2) Jump to Cold Chain section in Global Pharma (you will add ID later)
      { to: "/services/global-distribution", label: "Cold Chain Logistics" },

      // 4) Warehousing — scroll to your existing ID named "services"
      { to: "/services/warehousing#services", label: "Secure Warehousing" }
    ].map((service) => (
      <li key={service.to}>
        <Link
          to={service.to}
          className="group inline-flex items-center gap-2 text-sm text-slate-600 transition-all hover:text-[#769582] hover:translate-x-1"
        >
          <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#769582]" />
          {service.label}
        </Link>
      </li>
    ))}
  </ul>
</div> */}

{/* Services */}
<div className="lg:col-span-3">
  <h3 className="text-lg font-bold mb-6 text-slate-900">Our Services</h3>
  <ul className="space-y-4">
    {[
      { to: "/services/global-distribution", label: "Global Pharma Sourcing" },
      { to: "/services/warehousing", label: "Warehousing" },

      // Cold chain logistics (example)
      { to: "/services/global-distribution#cold-chain", label: "Cold Chain Logistics" },

      // ⭐ Scroll to this section:
      { to: "/services/warehousing#services", label: "Secure Warehousing" }
    ].map((service) => (
      <li key={service.to}>
        <Link
          to={service.to}
          className="group inline-flex items-center gap-2 text-sm text-slate-600 transition-all hover:text-[#769582] hover:translate-x-1"
        >
          <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#769582]" />
          {service.label}
        </Link>
      </li>
    ))}
  </ul>
</div>



          {/* Connect With Us */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-slate-900">Connect With Us</h3>
            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:980-888-0080"
                className="group flex items-center gap-3 rounded-xl bg-white backdrop-blur-sm px-4 py-3 text-sm transition-all hover:bg-[#769582] hover:text-white hover:scale-105 border-2 border-slate-200 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#769582] text-white group-hover:bg-white group-hover:text-[#769582] transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 group-hover:text-white/80">Call Us</p>
                  <p className="font-semibold text-slate-900 group-hover:text-white">980-888-0080</p>
                </div>
              </a>

              {/* Email - FIXED */}
              <a
                href="mailto:kirti@celactopharma.com"
                className="group flex items-center gap-3 rounded-xl bg-white backdrop-blur-sm px-4 py-3 text-sm transition-all hover:bg-[#769582] hover:text-white hover:scale-105 border-2 border-slate-200 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#769582] text-white group-hover:bg-white group-hover:text-[#769582] transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 group-hover:text-white/80">Email Us</p>
                  <p className="font-semibold text-slate-900 group-hover:text-white text-xs sm:text-sm">kirti@celactopharma.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/axat-s-6748a91a1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl bg-white backdrop-blur-sm px-4 py-3 text-sm transition-all hover:bg-[#769582] hover:text-white hover:scale-105 border-2 border-slate-200 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#769582] text-white group-hover:bg-white group-hover:text-[#769582] transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 group-hover:text-white/80">Follow Us</p>
                  <p className="font-semibold text-slate-900 group-hover:text-white">LinkedIn</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-300 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-slate-700">
                © {new Date().getFullYear()} <span className="font-semibold text-slate-900">CelactoPharma LLC</span>. All rights reserved.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Trusted pharmaceutical partner with a pharmacy heart.
              </p>
            </div>

            {/* Certifications/Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
              <div className="rounded-lg bg-[#769582] text-white backdrop-blur-sm px-4 py-2 text-xs font-semibold shadow-sm">
                FDA Compliant
              </div>
              <div className="rounded-lg bg-[#769582] text-white backdrop-blur-sm px-4 py-2 text-xs font-semibold shadow-sm">
                DSCSA Verified
              </div>
              <div className="rounded-lg bg-[#769582] text-white backdrop-blur-sm px-4 py-2 text-xs font-semibold shadow-sm">
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;