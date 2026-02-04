// import { useState } from "react";
// import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

// // === THEME CONSTANTS ===
// const THEME = {
//   textDark: "text-[#1B4D3E]",
//   bgDark: "bg-[#1B4D3E]",
//   bgSage: "bg-[#AFE1AF]",
//   textSage: "text-[#84A98C]",
//   bgLight: "bg-[#f5faf7]", // Light sage tint for cards/backgrounds
//   buttonPrimary: "bg-white text-[#1B4D3E] border-2 border-[#1B4D3E] hover:bg-[#AFE1AF] hover:text-[#1B4D3E] transition-colors duration-300",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     subject: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);

//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         subject: "",
//         message: "",
//       });
//     }, 3000);
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: "Email",
//       details: "Support@greenfield.energy",
//       link: "mailto:Support@greenfield.energy",
//     },
//     {
//       icon: Phone,
//       title: "Phone",
//       details: "+91 90798 81880",
//       link: "tel:+919079881880",
//     },
//     {
//       icon: MapPin,
//       title: "Location",
//       details: "Global Operations",
//       link: null,
//     },
//   ];

//   return (
//     <div className="pt-20">

//       {/* ============= HERO SECTION ============= */}
//       {/* Updated Background to Sage Green (#84A98C) and Text to Dark Green */}
//       <section className={`${THEME.bgSage} ${THEME.textDark} py-20`}>
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
//           <p className="text-xl max-w-3xl mx-auto leading-relaxed font-medium">
//             Have a question or ready to start your next project? We'd love to hear from you.
//           </p>
//         </div>
//       </section>

//       {/* ============= CONTACT INFO + FORM ============= */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">

//           {/* Info Cards */}
//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {contactInfo.map((info, index) => (
//               <div
//                 key={index}
//                 className={`${THEME.bgLight} p-8 rounded-xl text-center hover:shadow-xl transition-shadow border border-[#84A98C]/20`}
//               >
//                 <div className={`${THEME.bgSage} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
//                   <info.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className={`text-xl font-bold ${THEME.textDark} mb-2`}>
//                   {info.title}
//                 </h3>

//                 {info.link ? (
//                   <a href={info.link} className="text-gray-700 hover:text-[#1B4D3E] transition font-medium">
//                     {info.details}
//                   </a>
//                 ) : (
//                   <p className="text-gray-700 font-medium">{info.details}</p>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* FORM */}
//           <div className="max-w-4xl mx-auto">
//             <div className={`${THEME.bgLight} rounded-2xl p-10 shadow-xl border border-[#84A98C]/20`}>

//               <h2 className={`text-3xl md:text-4xl font-bold ${THEME.textDark} text-center mb-8`}>
//                 Send Us a Message
//               </h2>

//               {submitted ? (
//                 <div className="text-center py-12">
//                   <CheckCircle className={`w-20 h-20 ${THEME.textDark} mx-auto mb-6`} />
//                   <h3 className={`text-2xl font-bold ${THEME.textDark} mb-2`}>Thank You!</h3>
//                   <p className="text-gray-700">
//                     We've received your message and will get back to you shortly.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">

//                   {/* Name + Email */}
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className={`block ${THEME.textDark} font-bold mb-2`}>Full Name *</label>
//                       <input
//                         type="text"
//                         name="name"
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg
//                         focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent outline-none transition"
//                         placeholder="John Doe"
//                       />
//                     </div>

//                     <div>
//                       <label className={`block ${THEME.textDark} font-bold mb-2`}>Email Address *</label>
//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg
//                         focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent outline-none transition"
//                         placeholder="john@example.com"
//                       />
//                     </div>
//                   </div>

//                   {/* Phone + Company */}
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className={`block ${THEME.textDark} font-bold mb-2`}>Phone Number</label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg
//                         focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent outline-none transition"
//                         placeholder="+1 (555) 123-4567"
//                       />
//                     </div>

//                     <div>
//                       <label className={`block ${THEME.textDark} font-bold mb-2`}>Company</label>
//                       <input
//                         type="text"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg
//                         focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent outline-none transition"
//                         placeholder="Your Company"
//                       />
//                     </div>
//                   </div>

//                   {/* Subject */}
//                   <div>
//                     <label className={`block ${THEME.textDark} font-bold mb-2`}>Subject *</label>
//                     <input
//                       type="text"
//                       name="subject"
//                       required
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg
//                       focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent outline-none transition"
//                       placeholder="How can we help you?"
//                     />
//                   </div>

//                   {/* Message */}
//                   <div>
//                     <label className={`block ${THEME.textDark} font-bold mb-2`}>Message *</label>
//                     <textarea
//                       name="message"
//                       required
//                       rows="6"
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg
//                       focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent resize-none outline-none transition"
//                       placeholder="Tell us more about your project..."
//                     ></textarea>
//                   </div>

//                   {/* Updated Button Style: White BG, Dark Text/Border */}
//                   <button
//                     type="submit"
//                     className={`w-full ${THEME.buttonPrimary} py-4 rounded-lg font-bold
//                     transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2`}
//                   >
//                     Send Message
//                     <Send className="w-5 h-5" />
//                   </button>

//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============= GLOBAL PRESENCE ============= */}
//       <section className={`py-20 ${THEME.bgLight}`}>
//         <div className="max-w-7xl mx-auto px-4 text-center">

//           <h2 className={`text-4xl font-bold ${THEME.textDark} mb-6`}>
//             Our Global Presence
//           </h2>

//           <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
//             With engineering teams across multiple continents, we serve clients worldwide with excellence and expertise.
//           </p>

//           <div className="bg-white rounded-2xl shadow-xl p-12 border border-[#84A98C]/20">
//             <MapPin className={`w-24 h-24  text-[#AFE1AF] mx-auto mb-4`} />
//             <h3 className={`text-2xl font-bold ${THEME.textDark}`}>Global Operations</h3>
//             <p className="text-gray-700 mt-2">Serving clients around the world</p>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// };
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

// === THEME CONSTANTS ===
const THEME = {
  textDark: "text-[#1B4D3E]",
  bgDark: "bg-[#1B4D3E]",
  bgSage: "bg-[#AFE1AF]",
  textSage: "text-[#84A98C]",
  bgLight: "bg-[#f5faf7]", // Light sage tint for cards/backgrounds
  buttonPrimary:
    "bg-white text-[#1B4D3E] border-2 border-[#1B4D3E] hover:bg-[#AFE1AF] hover:text-[#1B4D3E] transition-colors duration-300",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "N/A",
      company: formData.company || "N/A",
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // ✅ your service ID
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,  // ✅ your template ID
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "Support@greenfield.energy",
      link: "mailto:Support@greenfield.energy",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 90798 81880",
      link: "tel:+919079881880",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Global Operations",
      link: null,
    },
  ];

  return (
    <div className="pt-20">

      {/* ============= HERO SECTION ============= */}
      <section className={`${THEME.bgSage} ${THEME.textDark} py-20`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Have a question or ready to start your next project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ============= CONTACT INFO + FORM ============= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`${THEME.bgLight} p-8 rounded-xl text-center hover:shadow-xl transition-shadow border border-[#84A98C]/20`}
              >
                <div className={`${THEME.bgSage} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${THEME.textDark} mb-2`}>
                  {info.title}
                </h3>

                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-700 hover:text-[#1B4D3E] transition font-medium"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium">{info.details}</p>
                )}
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="max-w-4xl mx-auto">
            <div className={`${THEME.bgLight} rounded-2xl p-10 shadow-xl border border-[#84A98C]/20`}>

              <h2 className={`text-3xl md:text-4xl font-bold ${THEME.textDark} text-center mb-8`}>
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className={`w-20 h-20 ${THEME.textDark} mx-auto mb-6`} />
                  <h3 className={`text-2xl font-bold ${THEME.textDark} mb-2`}>
                    Thank You!
                  </h3>
                  <p className="text-gray-700">
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name + Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block ${THEME.textDark} font-bold mb-2`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className={`block ${THEME.textDark} font-bold mb-2`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent outline-none transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block ${THEME.textDark} font-bold mb-2`}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent outline-none transition"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className={`block ${THEME.textDark} font-bold mb-2`}>
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent outline-none transition"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className={`block ${THEME.textDark} font-bold mb-2`}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent outline-none transition"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block ${THEME.textDark} font-bold mb-2`}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent resize-none outline-none transition"
                      placeholder="Tell us more about your project..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full ${THEME.buttonPrimary} py-4 rounded-lg font-bold
                    transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 disabled:opacity-50`}
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============= GLOBAL PRESENCE ============= */}
      <section className={`py-20 ${THEME.bgLight}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className={`text-4xl font-bold ${THEME.textDark} mb-6`}>
            Our Global Presence
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            With engineering teams across multiple continents, we serve clients worldwide with excellence and expertise.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-12 border border-[#84A98C]/20">
            <MapPin className={`w-24 h-24 text-[#AFE1AF] mx-auto mb-4`} />
            <h3 className={`text-2xl font-bold ${THEME.textDark}`}>
              Global Operations
            </h3>
            <p className="text-gray-700 mt-2">
              Serving clients around the world
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
