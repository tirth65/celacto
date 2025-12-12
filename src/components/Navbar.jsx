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

        {/* LOGO */}
          <Link to="/" className="cursor-pointer select-none bg-white rounded-full p-1">
            <img
              src="/images/celacto-logo.svg"
              alt="Celacto Pharma Logo"
              className="transition-all duration-300 p-[2px]"
            />
          </Link>

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
