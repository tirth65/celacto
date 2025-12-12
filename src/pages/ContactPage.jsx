// import React, { useState, useEffect } from "react";
// import { Mail, Phone, MapPin, Clock, Send, User, Building, MessageSquare, Linkedin, CheckCircle, AlertCircle } from "lucide-react";

// const contactInfo = [
//   {
//     icon: Mail,
//     title: "Email Us",
//     items: [
//       { label: "General Inquiries", value: "kirti@celactopharma.com" },  
//     ]
//   },
//   {
//     icon: Phone,
//     title: "Call Us",
//     items: [
//       { label: "For Any Inquiries", value: "980-888-0080" },
//     ]
//   },
//   {
//     icon: MapPin,
//     title: "Visit Us",
//     items: [
//       { label: "Head Office", value: "7101 EAST WILKINSONBLVD STE B, BELMONT, North Carolina 28012" },
     
//     ]
//   },
//   {
//     icon: Clock,
//     title: "Business Hours",
//     items: [
//       { label: "Monday - Friday", value: "24/7" },
//     ]
//   }
// ];

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: ""
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const EMAILJS_SERVICE_ID = "service_h8gg913";
//   const EMAILJS_TEMPLATE_ID = "template_9b51hsb";
//   const EMAILJS_PUBLIC_KEY = "XGzaGlTWqTYir7uXH";

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("reveal-visible");
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     const elements = document.querySelectorAll(".reveal");
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(false);

//     try {
//       const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           service_id: EMAILJS_SERVICE_ID,
//           template_id: EMAILJS_TEMPLATE_ID,
//           user_id: EMAILJS_PUBLIC_KEY,
//           template_params: {
//             to_email: 'tirthsheth83@gmail.com',
//             from_name: formData.name,
//             from_email: formData.email,
//             phone: formData.phone || 'Not provided',
//             company: formData.company || 'Not provided',
//             message: formData.message,
//             timestamp: new Date().toLocaleString('en-US', { 
//               dateStyle: 'full', 
//               timeStyle: 'long' 
//             }),
//             reply_to: formData.email
//           }
//         })
//       });

//       if (response.ok) {
//         await sendToGoogleSheets();
        
//         setSubmitted(true);
//         setTimeout(() => {
//           setSubmitted(false);
//           setFormData({ name: "", email: "", phone: "", company: "", message: "" });
//         }, 5000);
//       } else {
//         setError(true);
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const sendToGoogleSheets = async () => {
//     const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzn4hVrMBxwhe2eNAc1rYsmprWEs-KN2H6JAvouKCFOs51Rli6tTdDY2jZ98iJb6lIr/exec";
    
//     try {
//       await fetch(GOOGLE_SCRIPT_URL, {
//         method: 'POST',
//         mode: 'no-cors',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           company: formData.company,
//           message: formData.message,
//           timestamp: new Date().toISOString()
//         })
//       });
//     } catch (err) {
//       console.log('Google Sheets error:', err);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-[#F3EFE3] font-sans overflow-x-hidden">
//     <style>{`
//   /* 1. NAVBAR MUST BE TRANSPARENT & MERGED WITH HERO */
//   header, nav {
//     background: transparent !important;
//     position: absolute !important;
//     top: 0 !important;
//     left: 0 !important;
//     right: 0 !important;
//     border-bottom: none !important;
//     box-shadow: none !important;
//     z-index: 50 !important;
//   }

//   /* 2. REMOVE UNWANTED BUTTON BACKGROUNDS (TRANSPARENT BY DEFAULT) */
//   header nav > div > a,
//   nav nav > div > a,
//   header button,
//   nav button {
//     background: rgba(255,255,255,0.15) !important;
//     color: white !important;
//     border-radius: 9999px !important;
//     padding: 0.5rem 1.5rem !important;
//     border: 1px solid rgba(255,255,255,0.3) !important;
//     backdrop-filter: blur(8px) !important;
//   }

//   /* 3. ACTIVE PAGE BUTTON -> WHITE BACKGROUND + GREEN TEXT */
//   header nav > div > a.active,
//   nav nav > div > a.active {
//     background: white !important;
//     color: #769582 !important;
//     border-color: white !important;
//   }

//   /* 4. LOGO ALWAYS WHITE ON TRANSPARENT BG */
//   header a[href="/"] *, 
//   nav a[href="/"] * {
//     color: white !important;
//   }

//   /* Subtitle under logo stays dark */
//   header a[href="/"] > div:last-child > div:last-child,
//   nav a[href="/"] > div:last-child > div:last-child {
//     color: #1e293b !important;
//   }

//   /* 5. MOBILE MENU FIX */
//   @media (max-width: 768px) {
//     header, nav {
//       background: white !important;
//       position: fixed !important;
//       border-bottom: 1px solid #e2e8f0 !important;
//     }

//     /* make logo dark in mobile */
//     header a[href="/"] *, 
//     nav a[href="/"] * {
//       color: #1e293b !important;
//     }

//     /* mobile menu buttons */
//     header nav > div > a,
//     nav nav > div > a,
//     header button,
//     nav button {
//       background: white !important;
//       color: #1e293b !important;
//       border-color: #e2e8f0 !important;
//     }

//     /* active still green text */
//     header nav > div > a.active,
//     nav nav > div > a.active {
//       background: #769582 !important;
//       color: white !important;
//     }
//   }
// `}</style>




//       {/* Hero Section with Background Image */}
//       <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000)',
//             filter: 'brightness(0.3)'
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#769582]/90 to-[#769582]/70" />
        
//         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
//           <div className="w-16 sm:w-20 h-1 bg-[#F3EFE3] mx-auto mb-6 sm:mb-8" style={{ animation: 'fadeInUp 0.8s ease' }} />
//           <h1 
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-4"
//             style={{ animation: 'fadeInUp 1s ease 0.2s backwards', lineHeight: '1.2' }}
//           >
//             Get In Touch
//           </h1>
//           <p 
//             className="text-lg sm:text-xl md:text-2xl text-white/90 mb-3 sm:mb-4 px-4"
//             style={{ animation: 'fadeInUp 1s ease 0.4s backwards' }}
//           >
//             We'd love to hear from you
//           </p>
//         </div>
//       </section>

//       {/* Quick Contact Info Cards */}
//       <section className="py-12 sm:py-16 md:py-20 bg-[#C0C3B9]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
//             {contactInfo.map((info, index) => (
//               <div
//                 key={index}
//                 className="reveal contact-card bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg text-center border border-[#769582]/10"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="flex flex-col items-center text-center">
//                   <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#769582] flex items-center justify-center mb-3 sm:mb-4">
//                     <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
//                   </div>
//                   <h3 className="text-lg sm:text-xl font-bold text-[#769582] mb-3 sm:mb-4">{info.title}</h3>
//                   <div className="space-y-2 sm:space-y-3 w-full">
//                     {info.items.map((item, idx) => (
//                       <div key={idx} className="text-center">
//                         <div className="text-xs sm:text-sm text-gray-500 font-medium">{item.label}</div>
//                         <div className="text-sm sm:text-base text-gray-700 break-words">{item.value}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-12 sm:py-16 md:py-20 bg-[#F3EFE3]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//             {/* Form */}
//             <div className="reveal">
//               <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-[#769582]/10">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#769582] mb-4 sm:mb-6">Send us a message</h2>
//                 <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Fill out the form below and we'll get back to you within 24 hours</p>
                
//                 {submitted ? (
//                   <div className="text-center py-8 sm:py-12">
//                     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" style={{ animation: 'pulse 1s ease' }}>
//                       <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
//                     </div>
//                     <h3 className="text-xl sm:text-2xl font-bold text-[#769582] mb-2">Thank you!</h3>
//                     <p className="text-sm sm:text-base text-gray-600">Your message has been sent successfully.</p>
//                     <p className="text-xs sm:text-sm text-gray-500 mt-2">We'll get back to you within 24 hours.</p>
//                   </div>
//                 ) : error ? (
//                   <div className="text-center py-8 sm:py-12">
//                     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
//                     </div>
//                     <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-2">Oops!</h3>
//                     <p className="text-sm sm:text-base text-gray-600 mb-4">Something went wrong. Please try again.</p>
//                     <button
//                       onClick={() => setError(false)}
//                       className="text-[#769582] font-semibold hover:underline"
//                     >
//                       Try Again
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="space-y-4 sm:space-y-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
//                       <div className="relative">
//                         <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                         <input
//                           type="text"
//                           name="name"
//                           required
//                           value={formData.name}
//                           onChange={handleChange}
//                           className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none text-sm sm:text-base"
//                           placeholder="Your full name"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//                       <div className="relative">
//                         <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                         <input
//                           type="email"
//                           name="email"
//                           required
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none text-sm sm:text-base"
//                           placeholder="your.email@example.com"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
//                       <div className="relative">
//                         <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none text-sm sm:text-base"
//                           placeholder="+1 (555) 000-0000"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
//                       <div className="relative">
//                         <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                         <input
//                           type="text"
//                           name="company"
//                           value={formData.company}
//                           onChange={handleChange}
//                           className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none text-sm sm:text-base"
//                           placeholder="Your company name"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
//                       <div className="relative">
//                         <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
//                         <textarea
//                           name="message"
//                           required
//                           value={formData.message}
//                           onChange={handleChange}
//                           rows="5"
//                           className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none resize-none text-sm sm:text-base"
//                           placeholder="Tell us about your inquiry..."
//                         />
//                       </div>
//                     </div>

//                     <button
//                       onClick={handleSubmit}
//                       disabled={loading}
//                       className="submit-btn w-full bg-[#769582] text-white py-3 sm:py-4 px-6 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:bg-[#6a8775] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       {loading ? (
//                         <>
//                           <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           <Send className="w-5 h-5" />
//                           Send Message
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Map */}
//             <div className="reveal">
//               <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.28534314583!2d-78.89866565!3d35.843768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f7%3A0x6790b6528a11f0ad!2sRaleigh%2C%20NC!5e0!3m2!1sen!2sus!4v1234567890"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   title="Celacto Pharma Location"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Methods - LinkedIn, Gmail, Phone */}
//       <section className="py-16 sm:py-20 md:py-24 bg-[#769582]">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-10 sm:mb-12 md:mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
//               Connect With Us
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
//               Reach out through your preferred communication channel
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
//             {/* LinkedIn */}
//             <a 
//               href="https://www.linkedin.com/company/celactopharma" 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="contact-method-card bg-white/95 rounded-2xl p-6 sm:p-8 shadow-xl text-center group"
//             >
//               <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#769582] to-[#6a8775] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
//                 <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-[#769582] mb-2">LinkedIn</h3>
//               <p className="text-sm sm:text-base text-gray-600">Connect with us professionally</p>
//               <p className="text-xs sm:text-sm text-gray-500 mt-2">@celactopharma</p>
//             </a>

//             {/* Gmail */}
//             <a 
//               href="mailto:info@celactopharma.com"
//               className="contact-method-card bg-white/95 rounded-2xl p-6 sm:p-8 shadow-xl text-center group"
//             >
//               <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#769582] to-[#6a8775] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
//                 <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-[#769582] mb-2">Email</h3>
//               <p className="text-sm sm:text-base text-gray-600">Send us an email</p>
//               <p className="text-xs sm:text-sm text-gray-500 mt-2 break-all">kirti@celactopharma.com</p>
//             </a>

//             {/* Phone */}
//             <a 
//               href="tel:980-888-0080"
//               className="contact-method-card bg-white/95 rounded-2xl p-6 sm:p-8 shadow-xl text-center group"
//             >
//               <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#769582] to-[#6a8775] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
//                 <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-[#769582] mb-2">Call Us</h3>
//               <p className="text-sm sm:text-base text-gray-600">Speak with our team</p>
//               <p className="text-xs sm:text-sm text-gray-500 mt-2">980-888-0080</p>
//             </a>
//           </div>

//           {/* CTA Button */}
//           <div className="text-center">
//             <a
//               href="tel:980-888-0080"
//               className="inline-flex items-center gap-3 bg-white text-[#769582] px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
//             >
//               <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
//               Schedule a Free Consultation
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;



// import React, { useState, useEffect } from "react";
// import { Mail, Phone, MapPin, Clock, Send, User, Building, MessageSquare, Linkedin, CheckCircle, AlertCircle } from "lucide-react";

// const contactInfo = [
//   {
//     icon: Mail,
//     title: "Email Us",
//     items: [
//       { label: "General Inquiries", value: "kirti@celactopharma.com" },  
//     ]
//   },
//   {
//     icon: Phone,
//     title: "Call Us",
//     items: [
//       { label: "For Any Inquiries", value: "980-888-0080" },
//     ]
//   },
//   {
//     icon: MapPin,
//     title: "Visit Us",
//     items: [
//       { label: "Head Office", value: "7101 EAST WILKINSON BLVD STE B, BELMONT, North Carolina 28012" },
     
//     ]
//   },
//   {
//     icon: Clock,
//     title: "Business Hours",
//     items: [
//       { label: "Monday - Friday", value: "24/7" },
//     ]
//   }
// ];

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: ""
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const EMAILJS_SERVICE_ID = "service_h8gg913";
//   const EMAILJS_TEMPLATE_ID = "template_9b51hsb";
//   const EMAILJS_PUBLIC_KEY = "XGzaGlTWqTYir7uXH";

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("reveal-visible");
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     const elements = document.querySelectorAll(".reveal");
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(false);

//     try {
//       const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           service_id: EMAILJS_SERVICE_ID,
//           template_id: EMAILJS_TEMPLATE_ID,
//           user_id: EMAILJS_PUBLIC_KEY,
//           template_params: {
//             to_email: 'tirthsheth83@gmail.com',
//             from_name: formData.name,
//             from_email: formData.email,
//             phone: formData.phone || 'Not provided',
//             company: formData.company || 'Not provided',
//             message: formData.message,
//             timestamp: new Date().toLocaleString('en-US', { 
//               dateStyle: 'full', 
//               timeStyle: 'long' 
//             }),
//             reply_to: formData.email
//           }
//         })
//       });

//       if (response.ok) {
//         await sendToGoogleSheets();
        
//         setSubmitted(true);
//         setTimeout(() => {
//           setSubmitted(false);
//           setFormData({ name: "", email: "", phone: "", company: "", message: "" });
//         }, 5000);
//       } else {
//         setError(true);
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const sendToGoogleSheets = async () => {
//     const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzn4hVrMBxwhe2eNAc1rYsmprWEs-KN2H6JAvouKCFOs51Rli6tTdDY2jZ98iJb6lIr/exec";
    
//     try {
//       await fetch(GOOGLE_SCRIPT_URL, {
//         method: 'POST',
//         mode: 'no-cors',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           company: formData.company,
//           message: formData.message,
//           timestamp: new Date().toISOString()
//         })
//       });
//     } catch (err) {
//       console.log('Google Sheets error:', err);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-[#F3EFE3] font-sans overflow-x-hidden">
//     <style>{`
//   /* 1. NAVBAR MUST BE TRANSPARENT & MERGED WITH HERO */
//   header, nav {
//     background: transparent !important;
//     position: absolute !important;
//     top: 0 !important;
//     left: 0 !important;
//     right: 0 !important;
//     border-bottom: none !important;
//     box-shadow: none !important;
//     z-index: 50 !important;
//   }

//   // /* 2. REMOVE UNWANTED BUTTON BACKGROUNDS (TRANSPARENT BY DEFAULT) */
//   // header nav > div > a,
//   // nav nav > div > a,
//   // header button,
//   // nav button {
//   //   background: rgba(255,255,255,0.15) !important;
//   //   color: white !important;
//   //   border-radius: 9999px !important;
//   //   padding: 0.5rem 1.5rem !important;
//   //   border: 1px solid rgba(255,255,255,0.3) !important;
//   //   backdrop-filter: blur(8px) !important;
//   // }

//   // /* 3. ACTIVE PAGE BUTTON -> WHITE BACKGROUND + GREEN TEXT */
//   // header nav > div > a.active,
//   // nav nav > div > a.active {
//   //   background: white !important;
//   //   color: #769582 !important;
//   //   border-color: white !important;
//   // }

//   // /* 4. LOGO ALWAYS WHITE ON TRANSPARENT BG */
//   // header a[href="/"] *, 
//   // nav a[href="/"] * {
//   //   color: white !important;
//   // }

//   // /* Subtitle under logo stays dark */
//   // header a[href="/"] > div:last-child > div:last-child,
//   // nav a[href="/"] > div:last-child > div:last-child {
//   //   color: #1e293b !important;
//   // }

//   // /* 5. MOBILE MENU FIX */
//   // @media (max-width: 768px) {
//   //   header, nav {
//   //     background: white !important;
//   //     position: fixed !important;
//   //     border-bottom: 1px solid #e2e8f0 !important;
//   //   }

//   //   /* make logo dark in mobile */
//   //   header a[href="/"] *, 
//   //   nav a[href="/"] * {
//   //     color: #1e293b !important;
//   //   }

//   //   /* mobile menu buttons */
//     // header nav > div > a,
//     // nav nav > div > a,
//     // header button,
//     // nav button {
//     //   background: white !important;
//     //   color: #1e293b !important;
//     //   border-color: #e2e8f0 !important;
//     // }

//   //   /* active still green text */
//     // header nav > div > a.active,
//     // nav nav > div > a.active {
//     //   background: #769582 !important;
//     //   color: white !important;
//     // }
//   }
// `}</style>




//       {/* Hero Section with Background Image */}
//       <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000)',
//             filter: 'brightness(0.3)'
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#769582]/90 to-[#769582]/70" />
        
//         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
//           <div className="w-16 sm:w-20 h-1 bg-[#F3EFE3] mx-auto mb-6 sm:mb-8" style={{ animation: 'fadeInUp 0.8s ease' }} />
//           <h1 
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-4"
//             style={{ animation: 'fadeInUp 1s ease 0.2s backwards', lineHeight: '1.2' }}
//           >
//             Get In Touch
//           </h1>
//           <p 
//             className="text-lg sm:text-xl md:text-2xl text-white/90 mb-3 sm:mb-4 px-4"
//             style={{ animation: 'fadeInUp 1s ease 0.4s backwards' }}
//           >
//             We'd love to hear from you
//           </p>
//         </div>
//       </section>

//       {/* Quick Contact Info Cards */}
//       <section className="py-12 sm:py-16 md:py-20 bg-[#C0C3B9]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
//             {contactInfo.map((info, index) => (
//               <div
//                 key={index}
//                 className="reveal contact-card bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg text-center border border-[#769582]/10"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="flex flex-col items-center text-center">
//                   <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#769582] flex items-center justify-center mb-3 sm:mb-4">
//                     <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
//                   </div>
//                   <h3 className="text-lg sm:text-xl font-bold text-[#769582] mb-3 sm:mb-4">{info.title}</h3>
//                   <div className="space-y-2 sm:space-y-3 w-full">
//                     {info.items.map((item, idx) => (
//                       <div key={idx} className="text-center">
//                         <div className="text-xs sm:text-sm text-gray-500 font-medium">{item.label}</div>
//                         <div className="text-sm sm:text-base text-gray-700 break-words">{item.value}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-12 sm:py-16 md:py-20 bg-[#F3EFE3]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//             {/* Form */}
//             <div className="reveal">
//               <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-[#769582]/10">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#769582] mb-4 sm:mb-6">Send us a message</h2>
//                 <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Fill out the form below and we'll get back to you within 24 hours</p>
                
//                 {submitted ? (
//                   <div className="text-center py-8 sm:py-12">
//                     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" style={{ animation: 'pulse 1s ease' }}>
//                       <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
//                     </div>
//                     <h3 className="text-xl sm:text-2xl font-bold text-[#769582] mb-2">Thank you!</h3>
//                     <p className="text-sm sm:text-base text-gray-600">Your message has been sent successfully.</p>
//                     <p className="text-xs sm:text-sm text-gray-500 mt-2">We'll get back to you within 24 hours.</p>
//                   </div>
//                 ) : error ? (
//                   <div className="text-center py-8 sm:py-12">
//                     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
//                     </div>
//                     <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-2">Oops!</h3>
//                     <p className="text-sm sm:text-base text-gray-600 mb-4">Something went wrong. Please try again.</p>
//                     <button
//                       onClick={() => setError(false)}
//                       className="text-[#769582] font-semibold hover:underline"
//                     >
//                       Try Again
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="space-y-4 sm:space-y-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
//                       <div className="relative">
//                         <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                         <input
//                           type="text"
//                           name="name"
//                           required
//                           value={formData.name}
//                           onChange={handleChange}
//                           className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none text-sm sm:text-base"
//                           placeholder="Your full name"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//                       <div className="relative">
//                         <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                         <input
//                           type="email"
//                           name="email"
//                           required
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none text-sm sm:text-base"
//                           placeholder="your.email@example.com"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
//                       <div className="relative">
//                         <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none text-sm sm:text-base"
//                           placeholder="+1 (555) 000-0000"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
//                       <div className="relative">
//                         <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                         <input
//                           type="text"
//                           name="company"
//                           value={formData.company}
//                           onChange={handleChange}
//                           className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none text-sm sm:text-base"
//                           placeholder="Your company name"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
//                       <div className="relative">
//                         <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
//                         <textarea
//                           name="message"
//                           required
//                           value={formData.message}
//                           onChange={handleChange}
//                           rows="5"
//                           className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none resize-none text-sm sm:text-base"
//                           placeholder="Tell us about your inquiry..."
//                         />
//                       </div>
//                     </div>

//                     <button
//                       onClick={handleSubmit}
//                       disabled={loading}
//                       className="submit-btn w-full bg-[#769582] text-white py-3 sm:py-4 px-6 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:bg-[#6a8775] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       {loading ? (
//                         <>
//                           <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           <Send className="w-5 h-5" />
//                           Send Message
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Map */}
//             <div className="reveal">
//               <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.8647891234!2d-81.04892!3d35.24363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88542e3e3e3e3e3e%3A0x3e3e3e3e3e3e3e3e!2s7101%20E%20Wilkinson%20Blvd%20Suite%20B%2C%20Belmont%2C%20NC%2028012!5e0!3m2!1sen!2sus!4v1234567890"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Celacto Pharma Location - 7101 E Wilkinson Blvd Suite B, Belmont, NC 28012"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Methods - LinkedIn, Gmail, Phone */}
//       <section className="py-16 sm:py-20 md:py-24 bg-[#769582]">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-10 sm:mb-12 md:mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
//               Connect With Us
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
//               Reach out through your preferred communication channel
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
//             {/* LinkedIn */}
//             <a 
//               href="https://www.linkedin.com/company/celactopharma" 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="contact-method-card bg-white/95 rounded-2xl p-6 sm:p-8 shadow-xl text-center group"
//             >
//               <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#769582] to-[#6a8775] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
//                 <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-[#769582] mb-2">LinkedIn</h3>
//               <p className="text-sm sm:text-base text-gray-600">Connect with us professionally</p>
//               <p className="text-xs sm:text-sm text-gray-500 mt-2">@celactopharma</p>
//             </a>

//             {/* Gmail */}
//             <a 
//               href="mailto:kirti@celactopharma.com"
//               className="contact-method-card bg-white/95 rounded-2xl p-6 sm:p-8 shadow-xl text-center group"
//             >
//               <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#769582] to-[#6a8775] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
//                 <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-[#769582] mb-2">Email</h3>
//               <p className="text-sm sm:text-base text-gray-600">Send us an email</p>
//               <p className="text-xs sm:text-sm text-gray-500 mt-2 break-all">kirti@celactopharma.com</p>
//             </a>

//             {/* Phone */}
//             <a 
//               href="tel:980-888-0080"
//               className="contact-method-card bg-white/95 rounded-2xl p-6 sm:p-8 shadow-xl text-center group"
//             >
//               <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#769582] to-[#6a8775] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
//                 <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-[#769582] mb-2">Call Us</h3>
//               <p className="text-sm sm:text-base text-gray-600">Speak with our team</p>
//               <p className="text-xs sm:text-sm text-gray-500 mt-2">980-888-0080</p>
//             </a>
//           </div>

//           {/* CTA Button */}
//           <div className="text-center">
//             <a
//               href="tel:980-888-0080"
//               className="inline-flex items-center gap-3 bg-white text-[#769582] px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
//             >
//               <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
//               Schedule a Free Consultation
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  MessageSquare,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    items: [{ label: "General Inquiries", value: "kirti@celactopharma.com" }],
  },
  {
    icon: Phone,
    title: "Call Us",
    items: [{ label: "For Any Inquiries", value: "980-888-0080" }],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    items: [
      {
        label: "Head Office",
        value:
          "7101 EAST WILKINSON BLVD STE B, BELMONT, North Carolina 28012",
      },
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    items: [{ label: "Monday - Friday", value: "10 AM - 6 PM" }],
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const EMAILJS_SERVICE_ID = "service_h8gg913";
  const EMAILJS_TEMPLATE_ID = "template_9b51hsb";
  const EMAILJS_PUBLIC_KEY = "XGzaGlTWqTYir7uXH";

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            to_email: "tirthsheth83@gmail.com",
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone || "Not provided",
            company: formData.company || "Not provided",
            message: formData.message,
            timestamp: new Date().toLocaleString("en-US", {
              dateStyle: "full",
              timeStyle: "long",
            }),
            reply_to: formData.email,
          },
        }),
      });

      if (response.ok) {
        await sendToGoogleSheets();

        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
        }, 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const sendToGoogleSheets = async () => {
    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbzn4hVrMBxwhe2eNAc1rYsmprWEs-KN2H6JAvouKCFOs51Rli6tTdDY2jZ98iJb6lIr/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.log("Google Sheets error:", err);
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F3EFE3] font-sans overflow-x-hidden">
      <style>{`
        /* Keep navbar merged with hero (transparent on top) */
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

        /* Soft scroll reveal */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hero fade-up animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Pulse (already used in your success state) */
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        /* Soft hover for top contact cards */
        .contact-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.12);
        }

        /* Soft hover for bottom contact method cards */
        .contact-method-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .contact-method-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.16);
        }

        /* Form + button soft effect */
        .submit-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 30px rgba(118,149,130,0.4);
        }
      `}</style>

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/public/images/contact-hero.avif)",
            filter: "brightness(0.3)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#769582]/90 to-[#769582]/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="w-16 sm:w-20 h-1 bg-[#F3EFE3] mx-auto mb-6 sm:mb-8"
            style={{ animation: "fadeInUp 0.8s ease both" }}
          />
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-4"
            style={{ animation: "fadeInUp 0.9s ease both" }}
          >
            Get In Touch
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-3 sm:mb-4 px-4"
            style={{ animation: "fadeInUp 1s ease both" }}
          >
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Quick Contact Info Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#C0C3B9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="reveal contact-card bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg text-center border border-[#769582]/10"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#769582] flex items-center justify-center mb-3 sm:mb-4">
                    <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#769582] mb-3 sm:mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2 sm:space-y-3 w-full">
                    {info.items.map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xs sm:text-sm text-gray-500 font-medium">
                          {item.label}
                        </div>
                        <div className="text-sm sm:text-base text-gray-700 break-words">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F3EFE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div className="reveal">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-[#769582]/10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#769582] mb-4 sm:mb-6">
                  Send us a message
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                {submitted ? (
                  <div className="text-center py-8 sm:py-12">
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ animation: "pulse 1s ease" }}
                    >
                      <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#769582] mb-2">
                      Thank you!
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Your message has been sent successfully.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : error ? (
                  <div className="text-center py-8 sm:py-12">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-2">
                      Oops!
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                      Something went wrong. Please try again.
                    </p>
                    <button
                      onClick={() => setError(false)}
                      className="text-[#769582] font-semibold hover:underline"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none text-sm sm:text-base"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none text-sm sm:text-base"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone (Optional)
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none text-sm sm:text-base"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none text-sm sm:text-base"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className="form-input w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-[#769582] focus:outline-none resize-none text-sm sm:text-base"
                          placeholder="Tell us about your inquiry..."
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="submit-btn w-full bg-[#769582] text-white py-3 sm:py-4 px-6 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:bg-[#6a8775] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Map */}
            <div className="reveal">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.8647891234!2d-81.04892!3d35.24363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88542e3e3e3e3e3e%3A0x3e3e3e3e3e3e3e3e!2s7101%20E%20Wilkinson%20Blvd%20Suite%20B%2C%20Belmont%2C%20NC%2028012!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Celacto Pharma Location - 7101 E Wilkinson Blvd Suite B, Belmont, NC 28012"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods - LinkedIn, Gmail, Phone */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#769582]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Connect With Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Reach out through your preferred communication channel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/axat-s-6748a91a1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-card bg-white/95 rounded-2xl p-6 sm:p-8 shadow-xl text-center group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#769582] to-[#6a8775] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#769582] mb-2">
                LinkedIn
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Connect with us professionally
              </p>
            </a>

            {/* Gmail */}
            <a
              href="mailto:kirti@celactopharma.com"
              className="contact-method-card bg-white/95 rounded-2xl p-6 sm:p-8 shadow-xl text-center group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#769582] to-[#6a8775] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#769582] mb-2">
                Email
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Send us an email
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 break-all">
                kirti@celactopharma.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:980-888-0080"
              className="contact-method-card bg-white/95 rounded-2xl p-6 sm:p-8 shadow-xl text-center group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#769582] to-[#6a8775] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#769582] mb-2">
                Call Us
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Speak with our team
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">980-888-0080</p>
            </a>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="tel:980-888-0080"
              className="inline-flex items-center gap-3 bg-white text-[#769582] px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
