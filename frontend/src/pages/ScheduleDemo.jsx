// // src/pages/ScheduleDemo.jsx
// import { useState } from 'react';

// const products = [
//   'SandMaster',
//   'RockMaster',
//   'AutoWellz',
//   'AutoPro',
//   'GREEN',
// ];

// // ❗ List of personal email domains that are NOT allowed
// const publicDomains = [
//   "gmail.com",
//   "yahoo.com",
//   "outlook.com",
//   "hotmail.com",
//   "rediffmail.com",
//   "proton.me",
//   "icloud.com",
//   "aol.com",
//   "live.com",
//   "msn.com",
// ];

// export default function ScheduleDemo() {
//   const [form, setForm] = useState({
//     name: '',
//     companyEmail: '',
//     phone: '',
//     product: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!form.name.trim()) newErrors.name = 'Name is required';

//     // 🛑 Company email validation
//     if (!form.companyEmail.trim()) {
//       newErrors.companyEmail = 'Company email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.companyEmail)) {
//       newErrors.companyEmail = 'Enter a valid email address';
//     } else {
//       const domain = form.companyEmail.split("@")[1].toLowerCase();
//       if (publicDomains.includes(domain)) {
//         newErrors.companyEmail = "Please use a valid company email (not personal email IDs)";
//       }
//     }

//     if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
//     if (!form.product) newErrors.product = 'Please select a product';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     console.log('Form submitted:', form);
//     alert('Thank you! We have received your demo request.');

//     setForm({
//       name: '',
//       companyEmail: '',
//       phone: '',
//       product: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
//       <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-green-100 p-6 sm:p-10">
//         <h1 className="text-3xl font-semibold text-gray-900 mb-2">Schedule a Demo</h1>
//         <p className="text-gray-600 mb-8">
//           Share a few details and our team will reach out to set up a personalized demo.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition
//                 ${errors.name ? 'border-red-400' : 'border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500'}
//               `}
//               placeholder="Enter your name"
//             />
//             {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
//           </div>

//           {/* Company Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Company Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               name="companyEmail"
//               value={form.companyEmail}
//               onChange={handleChange}
//               className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition
//                 ${errors.companyEmail ? 'border-red-400' : 'border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500'}
//               `}
//               placeholder="you@company.com"
//             />
//             {errors.companyEmail && (
//               <p className="mt-1 text-xs text-red-500">{errors.companyEmail}</p>
//             )}
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Phone Number <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition
//                 ${errors.phone ? 'border-red-400' : 'border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500'}
//               `}
//               placeholder="+91 98765 43210"
//             />
//             {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
//           </div>

//           {/* Product Dropdown */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Product of Interest <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="product"
//               value={form.product}
//               onChange={handleChange}
//               className={`w-full rounded-lg border px-3 py-2.5 text-sm bg-white outline-none transition
//                 ${errors.product ? 'border-red-400' : 'border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500'}
//               `}
//             >
//               <option value="">Select a product</option>
//               {products.map((p) => (
//                 <option key={p} value={p}>
//                   {p}
//                 </option>
//               ))}
//             </select>
//             {errors.product && <p className="mt-1 text-xs text-red-500">{errors.product}</p>}
//           </div>

//           {/* Additional Info */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Additional Information / Message
//             </label>
//             <textarea
//               name="message"
//               rows="4"
//               value={form.message}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none 
//                          focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
//               placeholder="Tell us about your project, timeline, or any specific requirements."
//             />
//           </div>

//           {/* Submit */}
//           <div className="pt-2">
//             <button
//               type="submit"
//               className="inline-flex items-center justify-center rounded-full px-6 py-2.5
//                          text-sm font-semibold bg-white text-[#1B4D3E] border-2 border-[#1B4D3E] hover:bg-[#AFE1AF] hover:text-[#1B4D3E] transition-colors duration-300 "
//             >
//               Submit Request
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// src/pages/ScheduleDemo.jsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const products = [
  'SandMaster',
  'RockMaster',
  'AutoWellz',
  'AutoPro',
  'GREEN',
];

// ❗ List of personal email domains that are NOT allowed
const publicDomains = [
  // "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "rediffmail.com",
  "proton.me",
  "icloud.com",
  "aol.com",
  "live.com",
  "msn.com",
];

export default function ScheduleDemo() {
  const [form, setForm] = useState({
    name: '',
    companyEmail: '',
    phone: '',
    product: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required';

    // 🛑 Company email validation
    if (!form.companyEmail.trim()) {
      newErrors.companyEmail = 'Company email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.companyEmail)) {
      newErrors.companyEmail = 'Enter a valid email address';
    } else {
      const domain = form.companyEmail.split("@")[1].toLowerCase();
      if (publicDomains.includes(domain)) {
        newErrors.companyEmail = "Please use a valid company email (not personal email IDs)";
      }
    }

    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.product) newErrors.product = 'Please select a product';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const templateParams = {
      name: form.name,
      company_email: form.companyEmail,
      phone: form.phone,
      product: form.product,
      message: form.message || 'N/A',
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,     // 🔁 replace
        import.meta.env.VITE_EMAILJS_DEMO_TEMPLATE_ID,    // 🔁 replace
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY      // 🔁 replace
      );

      alert('Thank you! We have received your demo request.');

      setForm({
        name: '',
        companyEmail: '',
        phone: '',
        product: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-green-100 p-6 sm:p-10">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          Schedule a Demo
        </h1>
        <p className="text-gray-600 mb-8">
          Share a few details and our team will reach out to set up a personalized demo.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition
                ${errors.name ? 'border-red-400' : 'border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500'}
              `}
              placeholder="Enter your name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          {/* Company Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="companyEmail"
              value={form.companyEmail}
              onChange={handleChange}
              className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition
                ${errors.companyEmail ? 'border-red-400' : 'border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500'}
              `}
              placeholder="you@company.com"
            />
            {errors.companyEmail && (
              <p className="mt-1 text-xs text-red-500">{errors.companyEmail}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition
                ${errors.phone ? 'border-red-400' : 'border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500'}
              `}
              placeholder="+91 98765 43210"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
          </div>

          {/* Product */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product of Interest <span className="text-red-500">*</span>
            </label>
            <select
              name="product"
              value={form.product}
              onChange={handleChange}
              className={`w-full rounded-lg border px-3 py-2.5 text-sm bg-white outline-none transition
                ${errors.product ? 'border-red-400' : 'border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500'}
              `}
            >
              <option value="">Select a product</option>
              {products.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            {errors.product && <p className="mt-1 text-xs text-red-500">{errors.product}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information / Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none 
                         focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              placeholder="Tell us about your project, timeline, or any specific requirements."
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5
                         text-sm font-semibold bg-white text-[#1B4D3E] border-2 border-[#1B4D3E]
                         hover:bg-[#AFE1AF] transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
