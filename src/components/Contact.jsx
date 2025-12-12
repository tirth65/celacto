// import React, { useState } from "react";

// // TODO: Replace with your deployed Google Apps Script URL
// const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: ""
//   });
//   const [status, setStatus] = useState("idle"); // idle | submitting | success | error

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.message) {
//       setStatus("error");
//       return;
//     }

//     setStatus("submitting");
//     try {
//       const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(form)
//       });

//       // With no-cors we cannot read the response, so assume success if no exception
//       console.log("Form submitted", response);
//       setStatus("success");
//       setForm({
//         name: "",
//         email: "",
//         company: "",
//         message: ""
//       });
//     } catch (error) {
//       console.error("Error submitting form", error);
//       setStatus("error");
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative border-t border-slate-200 bg-white"
//     >
//       <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
//         <div className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-start">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-600">
//               Contact us
//             </p>
//             <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
//               Share your access challenge, we&apos;ll design a path forward.
//             </h2>
//             <p className="mt-4 text-sm text-slate-700 sm:text-base">
//               Tell us a bit about your program needs, and our team will connect
//               with you to explore options. Submissions are stored securely in
//               your connected Google Sheet and can trigger internal email
//               notifications via Google Apps Script.
//             </p>
//             <form
//               onSubmit={handleSubmit}
//               className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
//             >
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-xs font-medium text-slate-800"
//                 >
//                   Full name *
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   value={form.name}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-primary-500/40 focus:border-primary-400 focus:ring-2"
//                   placeholder="Dr. Alex Carter"
//                 />
//               </div>
//               <div className="grid gap-4 md:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-xs font-medium text-slate-800"
//                   >
//                     Work email *
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={form.email}
//                     onChange={handleChange}
//                     className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-primary-500/40 focus:border-primary-400 focus:ring-2"
//                     placeholder="you@company.com"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="company"
//                     className="block text-xs font-medium text-slate-800"
//                   >
//                     Organization
//                   </label>
//                   <input
//                     id="company"
//                     name="company"
//                     type="text"
//                     value={form.company}
//                     onChange={handleChange}
//                     className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-primary-500/40 focus:border-primary-400 focus:ring-2"
//                     placeholder="Hospital, sponsor, NGO"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-xs font-medium text-slate-200"
//                 >
//                   How can we help? *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={4}
//                   value={form.message}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-primary-500/40 focus:border-primary-400 focus:ring-2"
//                   placeholder="Share a short overview of your access or clinical supply challenge."
//                 />
//               </div>
//               <button
//                 type="submit"
//                 disabled={status === "submitting"}
//                 className="inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/40 transition hover:bg-primary-500 disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 {status === "submitting" ? "Sending..." : "Submit request"}
//               </button>
//               {status === "success" && (
//                 <p className="text-xs text-emerald-600">
//                   Thank you. Your details have been captured. Our team will be
//                   in touch shortly.
//                 </p>
//               )}
//               {status === "error" && (
//                 <p className="text-xs text-red-500">
//                   Please fill in the required fields. If the issue continues,
//                   confirm your Google Apps Script URL.
//                 </p>
//               )}
//             </form>
//           </div>

//           <aside className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
//             <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-600">
//               Office
//             </p>
//             <p>
//               CelactoPharma<br />
//               1808 Associates Lane<br />
//               Charlotte, NC 28217<br />
//               United States
//             </p>
//             <p className="text-xs text-slate-500">
//               Inspired by the quality and compliance framework of partners like{" "}
//               Tanner Pharma Group.
//             </p>
//             <div className="space-y-1 text-sm">
//               <p>
//                 <span className="font-semibold text-slate-900">Phone:</span>{" "}
//                 +1.704.552.8408
//               </p>
//               <p>
//                 <span className="font-semibold text-slate-900">Email:</span>{" "}
//                 contact@celactopharma.com
//               </p>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from "react";

const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="relative bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-16 md:px-6 lg:px-8 lg:py-20">
        
        <div className="grid gap-10 md:grid-cols-[3fr,2fr]">
          
          {/* LEFT SIDE – FORM */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#769582]">
              Contact us
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
              We’d love to hear from you
            </h2>

            <p className="mt-4 text-sm text-slate-700 sm:text-base">
              Contact us for warehousing, distribution, or cold-chain support. 
              Our team will respond shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <div>
                <label className="block text-xs font-medium text-slate-800">
                  Full Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border bg-white border-slate-300 px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-[#769582]/40"
                  placeholder="Dr. Alex Carter"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-800">
                    Work Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border bg-white border-slate-300 px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-[#769582]/40"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-800">
                    Organization
                  </label>
                  <input
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border bg-white border-slate-300 px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-[#769582]/40"
                    placeholder="Hospital, sponsor, NGO"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-800">
                  How can we help? *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border bg-white border-slate-300 px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-[#769582]/40"
                  placeholder="Share an overview of your program needs."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-full bg-[#769582] py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#769582]/40 hover:bg-[#5d7a6a] transition disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Submit Request"}
              </button>

              {status === "success" && (
                <p className="text-xs text-emerald-600">
                  Thank you! We received your message.
                </p>
              )}

              {status === "error" && (
                <p className="text-xs text-red-500">
                  Please fill all required fields correctly.
                </p>
              )}
            </form>
          </div>

          {/* RIGHT SIDE – INFORMATION BOX */}
          <aside className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#769582]">
              Office
            </p>

            <p>
              CelactoPharma<br />
              1808 Associates Lane<br />
              Charlotte, NC 28217<br />
              United States
            </p>

            <div className="space-y-1">
              <p>
                <span className="font-semibold text-slate-900">Phone:</span>{" "}
                +1.704.552.8408
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                contact@celactopharma.com
              </p>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default Contact;
