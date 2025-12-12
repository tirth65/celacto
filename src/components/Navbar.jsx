// // // import React, { useState, useEffect, useRef } from "react";
// // // import { Link, NavLink, useLocation } from "react-router-dom";
// // // import { ChevronDown } from "lucide-react";

// // // const navItems = [
// // //   { path: "/", label: "Home" },
// // //   { path: "/about", label: "About Us" },
// // //   {
// // //     path: "/services",
// // //     label: "Services",
// // //     dropdown: [
// // //       { path: "/services/global-distribution", label: "Global Pharma Sourcing" },
// // //       { path: "/services/warehousing", label: "Warehousing" },
// // //     ],
// // //   },
// // //   { path: "/contact", label: "Contact Us" },
// // // ];

// // // const Navbar = () => {
// // //   const [open, setOpen] = useState(false);
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const [dropdownOpen, setDropdownOpen] = useState(false);
// // //   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
// // //   const dropdownRef = useRef(null);
// // //   const location = useLocation();

// // //   const isHome = location.pathname === "/";
// // //   const isAbout = location.pathname === "/about";
// // //   const isWarehousing = location.pathname === "/services/warehousing";
// // //   const isGlobalDist = location.pathname === "/services/global-distribution";

// // //   // Transparent header pages
// // //   const isTransparentNavPage = isHome || isAbout || isWarehousing;

// // //   useEffect(() => {
// // //     const handleScroll = () => setScrolled(window.scrollY > 50);
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // //         setDropdownOpen(false);
// // //       }
// // //     };
// // //     document.addEventListener("mousedown", handleClickOutside);
// // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // //   }, []);

// // //   const shouldShowWhiteBg = !isTransparentNavPage || scrolled;

// // //   return (
// // //     <header
// // //       className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
// // //         shouldShowWhiteBg
// // //           ? "bg-white/95 border-b border-slate-200 backdrop-blur shadow-sm"
// // //           : "bg-transparent border-b border-transparent"
// // //       }`}
// // //     >
// // //       <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        
// // //         {/* Logo */}
// // //         <Link to="/" className="flex items-center gap-2 cursor-pointer">
// // //           <img
// // //             src="/public/images/logo2.jpg"
// // //             alt="CelactoPharma Logo"
// // //             className="h-12 w-auto object-contain"
// // //             style={!shouldShowWhiteBg ? { filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" } : {}}
// // //           />
// // //         </Link>

// // //         {/* Mobile menu toggle button */}
// // //         <button
// // //           className={`inline-flex items-center justify-center rounded-md border p-2 md:hidden transition-colors ${
// // //             shouldShowWhiteBg
// // //               ? "border-slate-300 bg-white text-slate-700"
// // //               : "border-white/30 bg-white/10 text-white backdrop-blur-md"
// // //           }`}
// // //           onClick={() => setOpen((prev) => !prev)}
// // //         >
// // //           <div className="space-y-1">
// // //             <span className="block h-0.5 w-5 bg-current" />
// // //             <span className="block h-0.5 w-5 bg-current" />
// // //             <span className="block h-0.5 w-5 bg-current" />
// // //           </div>
// // //         </button>

// // //         {/* Desktop Navigation */}
// // //         <div className="hidden md:flex items-center gap-4 text-sm font-semibold">
// // //           {navItems.map((item) => {
// // //             const isActive = item.dropdown
// // //               ? isWarehousing || isGlobalDist
// // //               : location.pathname === item.path;

// // //             if (item.dropdown) {
// // //               return (
// // //                 <div key={item.path} className="relative" ref={dropdownRef}>
// // //                   <button
// // //                     onClick={() => setDropdownOpen((prev) => !prev)}
// // //                     className={
// // //                       "inline-flex items-center gap-1 rounded-full px-4 py-1.5 transition-all duration-200 " +
// // //                       (shouldShowWhiteBg
// // //                         ? isActive
// // //                           ? "bg-primary-600 text-white shadow-lg -translate-y-0.5"
// // //                           : "bg-white text-slate-700 hover:bg-primary-50 hover:text-primary-700 hover:shadow-lg"
// // //                         : isActive
// // //                         ? "bg-white text-primary-600 shadow-lg -translate-y-0.5"
// // //                         : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-primary-600")
// // //                     }
// // //                   >
// // //                     {item.label}
// // //                     <ChevronDown className="w-4 h-4" />
// // //                   </button>

// // //                   {dropdownOpen && (
// // //                     <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
// // //                       {item.dropdown.map((subItem) => (
// // //                         <NavLink
// // //                           key={subItem.path}
// // //                           to={subItem.path}
// // //                           onClick={() => setDropdownOpen(false)}
// // //                           className={({ isActive }) =>
// // //                             `block px-4 py-2.5 text-sm ${
// // //                               isActive
// // //                                 ? "bg-primary-50 text-primary-700 font-semibold"
// // //                                 : "text-slate-700 hover:bg-slate-50"
// // //                             }`
// // //                           }
// // //                         >
// // //                           {subItem.label}
// // //                         </NavLink>
// // //                       ))}
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               );
// // //             }

// // //             return (
// // //               <NavLink
// // //                 key={item.path}
// // //                 to={item.path}
// // //                 className={({ isActive }) =>
// // //                   `inline-flex rounded-full px-4 py-1.5 transition-all ${
// // //                     shouldShowWhiteBg
// // //                       ? isActive
// // //                         ? "bg-primary-600 text-white shadow-lg -translate-y-0.5"
// // //                         : "bg-white text-slate-700 hover:bg-primary-50 hover:text-primary-700"
// // //                       : isActive
// // //                       ? "bg-white text-primary-600 shadow-lg -translate-y-0.5"
// // //                       : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-primary-600"
// // //                   }`
// // //                 }
// // //               >
// // //                 {item.label}
// // //               </NavLink>
// // //             );
// // //           })}
// // //         </div>
// // //       </nav>

// // //       {/* MOBILE MENU — FIXED & TRANSPARENT LIKE HOME PAGE */}
// // //       {open && (
// // //         <div
// // //           className={`
// // //             md:hidden fixed top-[64px] left-0 w-full z-[9999]
// // //             border-t border-white/20
// // //             shadow-xl max-h-[calc(100vh-64px)] overflow-y-auto
// // //             ${shouldShowWhiteBg ? "bg-white" : "bg-black/40 backdrop-blur-lg"}
// // //           `}
// // //         >
// // //           <div className="space-y-2 px-4 py-4">
// // //             {navItems.map((item) => {
// // //               if (item.dropdown) {
// // //                 return (
// // //                   <div key={item.path} className="space-y-1">
// // //                     <button
// // //                       onClick={() => setMobileDropdownOpen(prev => !prev)}
// // //                       className="flex items-center justify-between w-full rounded-xl px-5 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 transition-all"
// // //                     >
// // //                       {item.label}
// // //                       <ChevronDown
// // //                         className={`w-5 h-5 transition-transform ${
// // //                           mobileDropdownOpen ? "rotate-180" : ""
// // //                         }`}
// // //                       />
// // //                     </button>

// // //                     {mobileDropdownOpen && (
// // //                       <div className="ml-2 space-y-1 pl-3 border-l-2 border-primary-200 py-1">
// // //                         {item.dropdown.map((subItem) => (
// // //                           <NavLink
// // //                             key={subItem.path}
// // //                             to={subItem.path}
// // //                             onClick={() => {
// // //                               setOpen(false);
// // //                               setMobileDropdownOpen(false);
// // //                             }}
// // //                             className="block rounded-lg px-5 py-3 text-base text-gray-800 bg-white hover:bg-gray-100"
// // //                           >
// // //                             {subItem.label}
// // //                           </NavLink>
// // //                         ))}
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 );
// // //               }

// // //               return (
// // //                 <NavLink
// // //                   key={item.path}
// // //                   to={item.path}
// // //                   onClick={() => setOpen(false)}
// // //                   className="block w-full rounded-lg px-4 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-100"
// // //                 >
// // //                   {item.label}
// // //                 </NavLink>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       )}
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;







// // import React, { useState, useEffect, useRef } from "react";
// // import { Link, NavLink, useLocation } from "react-router-dom";
// // import { ChevronDown } from "lucide-react";

// // const navItems = [
// //   { path: "/", label: "Home" },
// //   { path: "/about", label: "About Us" },
// //   {
// //     path: "/services",
// //     label: "Services",
// //     dropdown: [
// //       { path: "/services/global-distribution", label: "Global Pharma Sourcing" },
// //       { path: "/services/warehousing", label: "Warehousing" },
// //     ],
// //   },
// //   { path: "/contact", label: "Contact Us" },
// // ];

// // const Navbar = () => {
// //   const [open, setOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
// //   const dropdownRef = useRef(null);
// //   const location = useLocation();

// //   const isHome = location.pathname === "/";
// //   const isAbout = location.pathname === "/about";
// //   const isWarehousing = location.pathname === "/services/warehousing";
// //   const isGlobalDist = location.pathname === "/services/global-distribution";

// //   const isTransparentNavPage = isHome || isAbout || isWarehousing;

// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 50);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setDropdownOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   const shouldShowWhiteBg = !isTransparentNavPage || scrolled;

// //   return (
// //     <header
// //       className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
// //         shouldShowWhiteBg
// //           ? "bg-white/95 border-b border-slate-200 backdrop-blur shadow-sm"
// //           : "bg-transparent border-b border-transparent"
// //       }`}
// //     >
// //       <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        
// //         {/* TEXT LOGO */}
// //         <Link to="/" className="cursor-pointer select-none leading-tight">
// //   <h1
// //     className={`
// //       font-bold tracking-wide text-[22px]
// //       ${shouldShowWhiteBg ? "text-primary-700" : "text-white drop-shadow-lg"}
// //     `}
// //   >
// //     CELACTO
// //   </h1>

// //   <h2
// //     className={`
// //       font-light text-[18px] -mt-1
// //       ml-[22px]  /* aligns under the "E" */
// //       ${shouldShowWhiteBg ? "text-primary-700/80" : "text-white/90 drop-shadow-lg"}
// //     `}
// //   >
// //     PHARMA
// //   </h2>
// // </Link>


// //         {/* Mobile Menu Button */}
// //         <button
// //           className={`inline-flex items-center justify-center rounded-md border p-2 md:hidden transition-colors ${
// //             shouldShowWhiteBg
// //               ? "border-slate-300 bg-white text-slate-700"
// //               : "border-white/30 bg-white/10 text-white backdrop-blur-md"
// //           }`}
// //           onClick={() => setOpen((prev) => !prev)}
// //         >
// //           <div className="space-y-1">
// //             <span className="block h-0.5 w-5 bg-current" />
// //             <span className="block h-0.5 w-5 bg-current" />
// //             <span className="block h-0.5 w-5 bg-current" />
// //           </div>
// //         </button>

// //         {/* Desktop Navigation */}
// //         <div className="hidden md:flex items-center gap-4 text-sm font-semibold">
// //           {navItems.map((item) => {
// //             const isActive = item.dropdown
// //               ? isWarehousing || isGlobalDist
// //               : location.pathname === item.path;

// //             if (item.dropdown) {
// //               return (
// //                 <div key={item.path} className="relative" ref={dropdownRef}>
// //                   <button
// //                     onClick={() => setDropdownOpen((prev) => !prev)}
// //                     className={
// //                       "inline-flex items-center gap-1 rounded-full px-4 py-1.5 transition-all duration-200 " +
// //                       (shouldShowWhiteBg
// //                         ? isActive
// //                           ? "bg-primary-600 text-white shadow-lg -translate-y-0.5"
// //                           : "bg-white text-slate-700 hover:bg-primary-50 hover:text-primary-700 hover:shadow-lg"
// //                         : isActive
// //                         ? "bg-white text-primary-600 shadow-lg -translate-y-0.5"
// //                         : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-primary-600")
// //                     }
// //                   >
// //                     {item.label}
// //                     <ChevronDown className="w-4 h-4" />
// //                   </button>

// //                   {dropdownOpen && (
// //                     <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
// //                       {item.dropdown.map((subItem) => (
// //                         <NavLink
// //                           key={subItem.path}
// //                           to={subItem.path}
// //                           onClick={() => setDropdownOpen(false)}
// //                           className={({ isActive }) =>
// //                             `block px-4 py-2.5 text-sm ${
// //                               isActive
// //                                 ? "bg-primary-50 text-primary-700 font-semibold"
// //                                 : "text-slate-700 hover:bg-slate-50"
// //                             }`
// //                           }
// //                         >
// //                           {subItem.label}
// //                         </NavLink>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               );
// //             }

// //             return (
// //               <NavLink
// //                 key={item.path}
// //                 to={item.path}
// //                 className={({ isActive }) =>
// //                   `inline-flex rounded-full px-4 py-1.5 transition-all ${
// //                     shouldShowWhiteBg
// //                       ? isActive
// //                         ? "bg-primary-600 text-white shadow-lg -translate-y-0.5"
// //                         : "bg-white text-slate-700 hover:bg-primary-50 hover:text-primary-700"
// //                       : isActive
// //                       ? "bg-white text-primary-600 shadow-lg -translate-y-0.5"
// //                       : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-primary-600"
// //                   }`
// //                 }
// //               >
// //                 {item.label}
// //               </NavLink>
// //             );
// //           })}
// //         </div>
// //       </nav>

// //       {/* Mobile Menu */}
// //       {open && (
// //         <div
// //           className={`
// //             md:hidden fixed top-[64px] left-0 w-full z-[9999]
// //             border-t border-white/20
// //             shadow-xl max-h-[calc(100vh-64px)] overflow-y-auto
// //             ${shouldShowWhiteBg ? "bg-white" : "bg-black/40 backdrop-blur-lg"}
// //           `}
// //         >
// //           <div className="space-y-2 px-4 py-4">
// //             {navItems.map((item) => {
// //               if (item.dropdown) {
// //                 return (
// //                   <div key={item.path} className="space-y-1">
// //                     <button
// //                       onClick={() => setMobileDropdownOpen(prev => !prev)}
// //                       className="flex items-center justify-between w-full rounded-xl px-5 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 transition-all"
// //                     >
// //                       {item.label}
// //                       <ChevronDown
// //                         className={`w-5 h-5 transition-transform ${
// //                           mobileDropdownOpen ? "rotate-180" : ""
// //                         }`}
// //                       />
// //                     </button>

// //                     {mobileDropdownOpen && (
// //                       <div className="ml-2 space-y-1 pl-3 border-l-2 border-primary-200 py-1">
// //                         {item.dropdown.map((subItem) => (
// //                           <NavLink
// //                             key={subItem.path}
// //                             to={subItem.path}
// //                             onClick={() => {
// //                               setOpen(false);
// //                               setMobileDropdownOpen(false);
// //                             }}
// //                             className="block rounded-lg px-5 py-3 text-base text-gray-800 bg-white hover:bg-gray-100"
// //                           >
// //                             {subItem.label}
// //                           </NavLink>
// //                         ))}
// //                       </div>
// //                     )}
// //                   </div>
// //                 );
// //               }

// //               return (
// //                 <NavLink
// //                   key={item.path}
// //                   to={item.path}
// //                   onClick={() => setOpen(false)}
// //                   className="block w-full rounded-lg px-4 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-100"
// //                 >
// //                   {item.label}
// //                 </NavLink>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Navbar;


// import React, { useState, useEffect, useRef } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { ChevronDown } from "lucide-react";



// const navItems = [
//   { path: "/", label: "Home" },
//   { path: "/about", label: "About Us" },
//   {
//     path: "/services",
//     label: "Services",
//     dropdown: [
//       { path: "/services/global-distribution", label: "Global Pharma Sourcing" },
//       { path: "/services/warehousing", label: "Warehousing" },
//     ],
//   },
//   { path: "/contact", label: "Contact Us" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const location = useLocation();

//   // For marking "Services" active when on its children
//   const isWarehousing = location.pathname === "/services/warehousing";
//   const isGlobalDist = location.pathname === "/services/global-distribution";
//   const isContact = location.pathname === "/contact";


//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     // <header
//     //   className={`
//     //     fixed top-0 inset-x-0 z-50
//     //     bg-white/95 border-b border-slate-200 backdrop-blur shadow-sm
//     //     transition-all duration-300
//     //   `}
//     // >

//     <header
//   className={`
//     fixed top-0 inset-x-0 z-50 transition-all duration-300
//     ${isContact 
//       ? "bg-white shadow-sm border-b border-slate-200" 
//       : "bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm"}
//   `}
// >

//       <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
//         {/* TEXT LOGO */}
//         {/* <Link to="/" className="cursor-pointer select-none leading-tight">
//           <h1 className="font-bold tracking-wide text-[22px] text-primary-700">
//             CELACTO
//           </h1>
//           <h2 className="font-light text-[18px] -mt-1 ml-[22px] text-primary-700/80">
//             PHARMA
//           </h2>
//         </Link> */}

//         <Link to="/" className="cursor-pointer select-none leading-tight">
//   <h1
//     className={`
//       font-bold tracking-wide text-[22px]
//       transition-all duration-300
//       ${
//         location.pathname === "/" ||
//         location.pathname === "/about" ||
//         location.pathname === "/services/global-distribution" ||
//         location.pathname === "/services/warehousing"
//           ? "text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]"
//           : "text-primary-700"
//       }
//     `}
//   >
//     CELACTO
//   </h1>

//   <h2
//     className={`
//       font-light text-[18px] -mt-1 ml-[22px]
//       transition-all duration-300
//       ${
//         location.pathname === "/" ||
//         location.pathname === "/about" ||
//         location.pathname === "/services/global-distribution" ||
//         location.pathname === "/services/warehousing"
//           ? "text-white/90 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]"
//           : "text-primary-700/80"
//       }
//     `}
//   >
//     PHARMA
//   </h2>
// </Link>


//         {/* Mobile Menu Button */}
//         <button
//           className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 p-2 md:hidden transition-colors"
//           onClick={() => setOpen((prev) => !prev)}
//         >
//           <div className="space-y-1">
//             <span className="block h-0.5 w-5 bg-current" />
//             <span className="block h-0.5 w-5 bg-current" />
//             <span className="block h-0.5 w-5 bg-current" />
//           </div>
//         </button>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-4 text-sm font-semibold">
//           {navItems.map((item) => {
//             const isActive = item.dropdown
//               ? isWarehousing || isGlobalDist
//               : location.pathname === item.path;

//             if (item.dropdown) {
//               return (
//                 <div key={item.path} className="relative" ref={dropdownRef}>
//                   <button
//                     onClick={() => setDropdownOpen((prev) => !prev)}
//                     className={
//                       "inline-flex items-center gap-1 rounded-full px-4 py-1.5 transition-all duration-200 " +
//                       (isActive
//                         ? "bg-primary-600 text-white shadow-lg -translate-y-0.5"
//                         : "bg-white text-slate-700 hover:bg-primary-50 hover:text-primary-700 hover:shadow-lg")
//                     }
//                   >
//                     {item.label}
//                     <ChevronDown className="w-4 h-4" />
//                   </button>

//                   {dropdownOpen && (
//                     <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
//                       {item.dropdown.map((subItem) => (
//                         <NavLink
//                           key={subItem.path}
//                           to={subItem.path}
//                           onClick={() => setDropdownOpen(false)}
//                           className={({ isActive: subActive }) =>
//                             `block px-4 py-2.5 text-sm ${
//                               subActive
//                                 ? "bg-primary-50 text-primary-700 font-semibold"
//                                 : "text-slate-700 hover:bg-slate-50"
//                             }`
//                           }
//                         >
//                           {subItem.label}
//                         </NavLink>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               );
//             }

//             return (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `inline-flex rounded-full px-4 py-1.5 transition-all ${
//                     isActive
//                       ? "bg-primary-600 text-white shadow-lg -translate-y-0.5"
//                       : "bg-white text-slate-700 hover:bg-primary-50 hover:text-primary-700"
//                   }`
//                 }
//               >
//                 {item.label}
//               </NavLink>
//             );
//           })}
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {/* {open && (
//         <div
//           className="
//             md:hidden fixed top-[64px] left-0 w-full z-[9999]
//             border-t border-slate-200 bg-white
//             shadow-xl max-h-[calc(100vh-64px)] overflow-y-auto
//           "
//         > */}
//         {open && (
//   <div
//     className="
//       md:hidden fixed top-[64px] left-0 w-full z-[9999]
//       bg-white border-t border-slate-200 shadow-xl
//       max-h-[calc(100vh-64px)] overflow-y-auto
//     "
//   >

//           <div className="space-y-2 px-4 py-4">
//             {navItems.map((item) => {
//               if (item.dropdown) {
//                 return (
//                   <div key={item.path} className="space-y-1">
//                     <button
//                       onClick={() => setMobileDropdownOpen((prev) => !prev)}
//                       // className="flex items-center justify-between w-full rounded-xl px-5 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 transition-all"

//                       className="flex items-center justify-between w-full rounded-xl px-5 py-4 text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"

//                     >
//                       {item.label}
//                       <ChevronDown
//                         className={`w-5 h-5 transition-transform ${
//                           mobileDropdownOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>

//                     {mobileDropdownOpen && (
//                       <div className="ml-2 space-y-1 pl-3 border-l-2 border-primary-200 py-1">
//                         {item.dropdown.map((subItem) => (
//                           <NavLink
//                             key={subItem.path}
//                             to={subItem.path}
//                             onClick={() => {
//                               setOpen(false);
//                               setMobileDropdownOpen(false);
//                             }}
//                             className="block rounded-lg px-5 py-3 text-base text-gray-800 bg-white hover:bg-gray-100"
//                           >
//                             {subItem.label}
//                           </NavLink>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 );
//               }

//               return (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setOpen(false)}
//                   className="block w-full rounded-lg px-4 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-100"
//                 >
//                   {item.label}
//                 </NavLink>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  {
    path: "/services",
    label: "Services",
    dropdown: [
      { path: "/services/global-distribution", label: "Global Pharma Sourcing" },
      { path: "/services/warehousing", label: "Warehousing" },
    ],
  },
  { path: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const transparentPages = [
    "/",
    "/about",
    "/services/global-distribution",
    "/services/warehousing",
    "/contact"
  ];

  const isTransparentPage = transparentPages.includes(location.pathname);

  const isWarehousing = location.pathname === "/services/warehousing";
  const isGlobalDist = location.pathname === "/services/global-distribution";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${
          isTransparentPage
            ? "bg-transparent border-transparent"
            : "bg-white/95 border-b border-slate-200 backdrop-blur shadow-sm"
        }
      `}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">

        {/* TEXT LOGO */}
        <Link to="/" className="cursor-pointer select-none leading-tight">
          <h1
            className={`
              font-bold tracking-wide text-[22px] transition-all duration-300
              ${
                isTransparentPage
                  ? "text-white drop-shadow-[0_4px_10px_rgba(0,0,0,1)]"
                  : "text-primary-700"
              }
            `}
          >
            CELACTO
          </h1>

          <h2
            className={`
              font-light text-[18px] -mt-1 ml-[22px] transition-all duration-300
              ${
                isTransparentPage
                  ? "text-white/90 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]"
                  : "text-primary-700/80"
              }
            `}
          >
            PHARMA
          </h2>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 p-2 md:hidden transition-colors"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-4 text-sm font-semibold">
          {navItems.map((item) => {
            const isActive = item.dropdown
              ? isWarehousing || isGlobalDist
              : location.pathname === item.path;

            if (item.dropdown) {
              return (
                <div key={item.path} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-1.5 transition-all duration-200 ${
                      isActive
                        ? "bg-primary-600 text-white shadow-lg -translate-y-0.5"
                        : "bg-white text-slate-700 hover:bg-primary-50 hover:text-primary-700 hover:shadow-lg"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setDropdownOpen(false)}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 text-sm ${
                              isActive
                                ? "bg-primary-50 text-primary-700 font-semibold"
                                : "text-slate-700 hover:bg-slate-50"
                            }`
                          }
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `inline-flex rounded-full px-4 py-1.5 transition-all ${
                    isActive
                      ? "bg-primary-600 text-white shadow-lg -translate-y-0.5"
                      : "bg-white text-slate-700 hover:bg-primary-50 hover:text-primary-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            md:hidden fixed top-[64px] left-0 w-full z-[9999]
            bg-white border-t border-slate-200 shadow-xl
            max-h-[calc(100vh-64px)] overflow-y-auto
          "
        >
          <div className="space-y-2 px-4 py-4">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.path} className="space-y-1">
                    <button
                      onClick={() => setMobileDropdownOpen(prev => !prev)}
                      className="flex items-center justify-between w-full rounded-xl px-5 py-4 text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 transition"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          mobileDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileDropdownOpen && (
                      <div className="ml-2 space-y-1 pl-3 border-l-2 border-primary-200 py-1">
                        {item.dropdown.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => {
                              setOpen(false);
                              setMobileDropdownOpen(false);
                            }}
                            className="block rounded-lg px-5 py-3 text-base text-gray-800 bg-white hover:bg-gray-100"
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-lg px-4 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-100"
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
