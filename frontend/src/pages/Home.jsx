// // // import { useState, useEffect } from "react";
// // // import {
// // //   ArrowRight,
// // //   Zap,
// // //   Users,
// // //   Award,
// // //   TrendingUp,
// // //   Code,
// // //   Briefcase,
// // //   Newspaper,
// // //   Calendar,
// // //   Globe2,
// // //   Link2,
// // //   Factory,
// // //   Building2,
// // //   BadgeCheck,
// // //   Box,
// // //   Workflow,
// // //   Cpu,
// // //   Mountain,
// // //   Leaf,
// // // } from "lucide-react";
// // // import { Link } from "react-router-dom";

// // // const Home = () => {
// // //   /* ========= PRODUCT LIST ========= */
// // //   const products = [
// // //     {
// // //       icon: Box,
// // //       name: "SandMaster",
// // //       tagline: "Advanced Sand Management",
// // //       description:
// // //         "Comprehensive software solution for sand management in oil and gas operations. Monitor, predict, and optimize sand control strategies with real-time analytics.",
// // //       features: [
// // //         "Real-time sand production monitoring",
// // //         "Predictive analytics",
// // //         "Automated reporting",
// // //         "Risk assessment tools",
// // //       ],
// // //       image:
// // //         "/images/sandmaster.png",
// // //     },
// // //     {
// // //       icon: Workflow,
// // //       name: "AutoWellz",
// // //       tagline: "Well Operation Workflow",
// // //       description:
// // //         "Streamline your well operations with automated workflow management. From planning to execution, manage every aspect efficiently.",
// // //       features: [
// // //         "Workflow automation",
// // //         "Real-time collaboration",
// // //         "Document management",
// // //         "Compliance tracking",
// // //       ],
// // //       image:
// // //         "/images/autowellz.png",
// // //     },
// // //     {
// // //       icon: Cpu,
// // //       name: "AutoPro",
// // //       tagline: "Engineering Process Digitization",
// // //       description:
// // //         "Transform your engineering processes with digital solutions. Automate routine tasks, enhance accuracy, and improve efficiency.",
// // //       features: [
// // //         "Process automation",
// // //         "Digital workflows",
// // //         "Data integration",
// // //         "Performance optimization",
// // //       ],
// // //       image:
// // //         "/images/autopro.png",
// // //     },
// // //     {
// // //       icon: Mountain,
// // //       name: "RockMaster",
// // //       tagline: "Rock Mechanical Stability",
// // //       description:
// // //         "Advanced rock mechanics analysis tool for evaluating wellbore stability, formation integrity, and geomechanical risks.",
// // //       features: [
// // //         "Wellbore stability analysis",
// // //         "Geomechanical modeling",
// // //         "Risk prediction",
// // //         "Formation evaluation",
// // //       ],
// // //       image:
// // //         "/images/rockmaster.png",
// // //     },
// // //     {
// // //       icon: Leaf,
// // //       name: "GREEN",
// // //       tagline: "GHG Emissions Calculator",
// // //       description:
// // //         "Calculate, track, and reduce your carbon footprint with our comprehensive emissions calculator.",
// // //       features: [
// // //         "Emissions calculation",
// // //         "Carbon footprint tracking",
// // //         "Sustainability reporting",
// // //         "Reduction strategies",
// // //       ],
// // //       image:
// // //         "/images/green.png",
// // //     },
// // //   ];

// // //   /* ========= NEWS WITH IMAGES ========= */
// // //   const newsEvents = [
// // //     {
// // //       title: "Greenfield Energy at SPE Conference 2025",
// // //       date: "March 15, 2025",
// // //       location: "Abu Dhabi",
// // //       description:
// // //         "Presented our latest research on production optimization and carbon reduction strategies.",
// // //       image:
// // //         "https://images.pexels.com/photos/247318/pexels-photo-247318.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //     },
// // //     {
// // //       title: "New Training Program for Reservoir Engineers",
// // //       date: "January 28, 2025",
// // //       location: "Online",
// // //       description:
// // //         "Launched a comprehensive training series for young professionals in the oil and gas industry.",
// // //       image:
// // //         "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //     },
// // //     {
// // //       title: "Partnership for Sustainable Energy",
// // //       date: "December 10, 2024",
// // //       location: "Global",
// // //       description:
// // //         "Announced a strategic partnership to deliver integrated sustainability solutions.",
// // //       image:
// // //         "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //     },
// // //   ];

// // //   /* ========= BLOG WITH IMAGES ========= */
// // //   const blogPosts = [
// // //     {
// // //       title: "5 Ways Digital Tools Are Transforming the Energy Sector",
// // //       readTime: "7 min read",
// // //       category: "Digital Transformation",
// // //       description:
// // //         "Explore how data-driven solutions are improving efficiency, safety, and sustainability.",
// // //       image:
// // //         "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //     },
// // //     {
// // //       title: "Optimizing Production in Brownfields",
// // //       readTime: "6 min read",
// // //       category: "Engineering Insights",
// // //       description:
// // //         "Key strategies and techniques for maximizing recovery in mature fields.",
// // //       image:
// // //         "https://images.pexels.com/photos/296086/pexels-photo-296086.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //     },
// // //     {
// // //       title: "Designing Software for Subsurface Engineers",
// // //       readTime: "8 min read",
// // //       category: "Product Design",
// // //       description:
// // //         "Best practices for building tools that subsurface teams actually love to use.",
// // //       image:
// // //         "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //     },
// // //   ];

// // //   /* ========= SCROLL ANIMATION ========= */
// // //   useEffect(() => {
// // //     const cards = document.querySelectorAll(".product-card");

// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             entry.target.classList.add("opacity-100", "translate-y-0");
// // //             entry.target.classList.remove("opacity-0", "translate-y-10");
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.15 }
// // //     );

// // //     cards.forEach((card) => observer.observe(card));
// // //   }, []);

// // //   /* ========= SERVICES ========= */
// // //   const services = [
// // //     {
// // //       icon: Code,
// // //       title: "Software Development",
// // //       description: "Customized software solutions tailored to industry needs.",
// // //     },
// // //     {
// // //       icon: Briefcase,
// // //       title: "Engineering Consultancy",
// // //       description: "Expert consultancy services with global engineering team.",
// // //     },
// // //     {
// // //       icon: Users,
// // //       title: "Customized Training",
// // //       description: "Professional training programs for industry professionals.",
// // //     },
// // //   ];

// // //   /* ========= HERO SECTION ========= */
// // //   return (
// // //     <div className="pt-20">

// // //       {/* HERO SECTION */}
// // //       <section className="relative bg-[#1B4D3E] text-white py-24 overflow-hidden">
// // //         <div className="absolute inset-0 bg-black/20" />

// // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid md:grid-cols-2 gap-12 items-center">

// // //             {/* LEFT TEXT */}
// // //             <div className="space-y-8">
// // //               <h1 className="text-5xl md:text-6xl font-bold leading-tight">
// // //                 Innovative Solutions for
// // //                 <span className="block md:inline text-[#e8f5e9]">
// // //                   {" "}Energy Excellence
// // //                 </span>
// // //               </h1>

// // //               <p className="text-xl text-gray-200 leading-relaxed">
// // //                 Providing cutting-edge engineering consultancy and customized
// // //                 software solutions for the oil and gas industry since 2015.
// // //               </p>

// // //               <div className="flex flex-wrap gap-4">
// // //                 <Link
// // //                   to="/schedule-demo"
// // //                   className="bg-white text-[#1B4D3E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 shadow-lg transition"
// // //                 >
// // //                  Book a Demo
// // //                 </Link>

// // //                 <Link
// // //                   to="/services"
// // //                   className="border-2 border-white text-white hover:bg-white hover:text-[#1B4D3E] px-8 py-4 rounded-lg font-semibold transition"
// // //                 >
// // //                   Our Services
// // //                 </Link>
// // //               </div>
// // //             </div>

// // //             {/* RIGHT VIDEO */}
// // //             <div className="relative w-full max-w-xl mx-auto">
// // //               <div className="absolute inset-0 bg-[#1B4D3E] rounded-full blur-3xl opacity-30" />

// // //               <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black/10">
// // //                 <video
// // //                   src="/video/hero.mp4"
// // //                   autoPlay
// // //                   muted
// // //                   loop
// // //                   playsInline
// // //                   className="w-full h-[330px] md:h-[360px] object-cover"
// // //                 />
// // //               </div>
// // //             </div>

// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ========= PRODUCTS SECTION ========= */}
// // //       <section className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
// // //               Our Products
// // //             </h2>
// // //             <p className="text-lg text-gray-700 max-w-3xl mx-auto">
// // //               Innovative digital solutions built for the future of energy.
// // //             </p>
// // //           </div>

// // //           {products.map((product, index) => (
// // //             <div
// // //               key={index}
// // //               className={`grid md:grid-cols-2 gap-12 items-center product-card opacity-0 translate-y-10 transition-all duration-700 ease-out ${
// // //                 index % 2 === 1 ? "md:grid-flow-dense" : ""
// // //               }`}
// // //             >

// // //               {/* TEXT */}
// // //               <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
// // //                 <div className="bg-[#1B4D3E] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
// // //                   <product.icon className="w-10 h-10 text-white" />
// // //                 </div>

// // //                 <h2 className="text-4xl font-bold text-[#1B4D3E] mb-2">
// // //                   {product.name}
// // //                 </h2>

// // //                 <p className="text-lg font-semibold text-[#1B4D3E] mb-4">
// // //                   {product.tagline}
// // //                 </p>

// // //                 <p className="text-lg text-gray-700 mb-6 leading-relaxed">
// // //                   {product.description}
// // //                 </p>

// // //                 <div className="mb-8">
// // //                   <h3 className="text-xl font-bold text-[#1B4D3E] mb-4">
// // //                     Key Features
// // //                   </h3>

// // //                   <ul className="space-y-3">
// // //                     {product.features.map((feature, idx) => (
// // //                       <li key={idx} className="flex items-center gap-3">
// // //                         <div className="bg-[#1B4D3E] w-2 h-2 rounded-full" />
// // //                         <span className="text-gray-700">{feature}</span>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>

// // //                 <Link
// // //                   to="/products"
// // //                   className="bg-[#1B4D3E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#153c30] transition"
// // //                 >
// // //                   Learn More
// // //                 </Link>
// // //               </div>

// // //               {/* IMAGE */}
// // //               <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
// // //                 <div className="relative">
// // //                   <div className="absolute inset-0 bg-[#1B4D3E] rounded-2xl opacity-20 blur-3xl"></div>

// // //                   <img
// // //                     src={product.image}
// // //                     alt={product.name}
// // //                     className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
// // //                   />
// // //                 </div>
// // //               </div>

// // //             </div>
// // //           ))}

// // //         </div>
// // //       </section>

// // //       {/* ========= SERVICES SECTION ========= */}
// // //       <section className="py-20 bg-[#e8f5e9]">
// // //         <div className="max-w-7xl mx-auto px-4">

// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
// // //               Our Core Services
// // //             </h2>

// // //             <p className="text-lg text-gray-700 max-w-3xl mx-auto">
// // //               Comprehensive solutions designed to optimize your operations.
// // //             </p>
// // //           </div>

// // //           <div className="grid md:grid-cols-3 gap-8">
// // //             {services.map((service, i) => (
// // //               <div
// // //                 key={i}
// // //                 className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
// // //               >
// // //                 <div className="bg-[#1B4D3E] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
// // //                   <service.icon className="w-8 h-8 text-white" />
// // //                 </div>

// // //                 <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4">
// // //                   {service.title}
// // //                 </h3>

// // //                 <p className="text-gray-700 mb-6">{service.description}</p>

// // //                 <Link
// // //                   to="/services"
// // //                   className="text-[#1B4D3E] font-semibold flex items-center gap-2"
// // //                 >
// // //                   Learn More
// // //                   <ArrowRight className="w-4 h-4" />
// // //                 </Link>
// // //               </div>
// // //             ))}
// // //           </div>

// // //         </div>
// // //       </section>
// // //             {/* ========= STATS SECTION ========= */}
// // //       <section className="py-16 bg-white">
// // //         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
// // //           {[
// // //             { icon: Briefcase, label: "Successful Projects", value: "15+" },
// // //             { icon: Users, label: "Happy Clients", value: "10+" },
// // //             { icon: Award, label: "Years Experience", value: "9+" },
// // //             { icon: TrendingUp, label: "Carbon Reduction", value: "344 MT" },
// // //           ].map((stat, i) => (
// // //             <div
// // //               key={i}
// // //               className="text-center p-6 bg-[#e8f5e9] rounded-xl shadow hover:shadow-lg transition"
// // //             >
// // //               <stat.icon className="w-12 h-12 mx-auto text-[#1B4D3E] mb-4" />
// // //               <h3 className="text-4xl font-bold text-[#1B4D3E]">{stat.value}</h3>
// // //               <p className="text-gray-700">{stat.label}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* ========= PARTNERS LOGO SCROLLER ========= */}
// // // <section className="py-16 bg-white">
// // //   <div className="max-w-7xl mx-auto px-4">
// // //     <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] text-center mb-10">
// // //       Our Partners
// // //     </h2>

// // //     {/* Scrolling Wrapper */}
// // //     <div className="overflow-hidden relative">
// // //       <div className="
// // //           flex whitespace-nowrap
// // //           animate-marquee
// // //           hover:[animation-play-state:paused]
// // //         "
// // //       >
// // //         {/* Original + Duplicate logos */}
// // //         {[
// // //           "/images/partners/P1.png",
// // //           "/images/partners/P2.png",
// // //           "/images/partners/P3.png",
// // //           "/images/partners/P4.png",
// // //           "/images/partners/P5.png",
// // //           "/images/partners/P6.png",
// // //           "/images/partners/P1.png",
// // //           "/images/partners/P2.png",
// // //           "/images/partners/P3.png",
// // //           "/images/partners/P4.png",
// // //           "/images/partners/P5.png",
// // //           "/images/partners/P6.png",
// // //         ].map((img, i) => (
// // //           <div key={i} className="flex-shrink-0 w-1/6 flex justify-center px-6">
// // //             <img
// // //               src={img}
// // //               alt="Partner Logo"
// // //               className="
// // //                 h-24 md:h-28 lg:h-32 w-auto
// // //                 object-contain rounded-xl
// // //                 transition-all duration-300
// // //                 hover:scale-110 hover:brightness-110 hover:shadow-lg
// // //                 hover:border-2 hover:border-[#1B4D3E]
// // //               "
// // //             />
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   </div>
// // // </section>



// // //       {/* ========= NEWS & EVENTS ========= */}
// // //       <section className="py-20 bg-[#e8f5e9]">
// // //         <div className="max-w-7xl mx-auto px-4">

// // //           <div className="flex justify-between items-end mb-12">
// // //             <div>
// // //               <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3 text-[#1B4D3E]">
// // //                 <Newspaper className="w-10 h-10 text-[#1B4D3E]" />
// // //                 News & Events
// // //               </h2>
// // //               <p className="text-lg text-gray-700 mt-2 max-w-2xl">
// // //                 Stay up to date with our latest activities.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <div className="grid md:grid-cols-3 gap-8">
// // //             {newsEvents.map((item, i) => (
// // //               <article
// // //                 key={i}
// // //                 className="bg-white rounded-2xl shadow hover:shadow-xl p-7 transition flex flex-col"
// // //               >
// // //                 <img
// // //                   src={item.image}
// // //                   alt={item.title}
// // //                   className="h-40 w-full object-cover rounded-xl mb-4"
// // //                 />

// // //                 <div className="flex justify-between text-xs text-gray-500 mb-3 uppercase tracking-wide">
// // //                   <div className="flex items-center gap-2">
// // //                     <Calendar className="w-4 h-4" />
// // //                     {item.date}
// // //                   </div>
// // //                   <div className="flex items-center gap-2">
// // //                     <Globe2 className="w-4 h-4" />
// // //                     {item.location}
// // //                   </div>
// // //                 </div>

// // //                 <h3 className="text-lg font-bold text-[#1B4D3E] mb-3">{item.title}</h3>

// // //                 <p className="text-gray-700 text-sm flex-1 mb-4">
// // //                   {item.description}
// // //                 </p>

// // //                 <button className="text-[#1B4D3E] flex items-center gap-1 font-semibold text-sm">
// // //                   Read More <Link2 className="w-4 h-4" />
// // //                 </button>
// // //               </article>
// // //             ))}
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* ========= BLOG SECTION ========= */}
// // //       <section className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4">

// // //           <div className="text-center mb-14">
// // //             <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
// // //               Insights & Blog
// // //             </h2>
// // //             <p className="text-lg text-gray-700">
// // //               Deep dives, case studies, and practical guides.
// // //             </p>
// // //           </div>

// // //           <div className="grid md:grid-cols-3 gap-8">
// // //             {blogPosts.map((post, i) => (
// // //               <article
// // //                 key={i}
// // //                 className="border rounded-2xl bg-gray-50 shadow hover:bg-white hover:shadow-xl p-7 transition flex flex-col"
// // //               >
// // //                 <img
// // //                   src={post.image}
// // //                   alt={post.title}
// // //                   className="h-44 w-full object-cover rounded-xl mb-4"
// // //                 />

// // //                 <div className="flex justify-between text-xs uppercase tracking-wide mb-3">
// // //                   <span className="px-3 py-1 bg-[#e8f5e9] text-[#1B4D3E] rounded-full">
// // //                     {post.category}
// // //                   </span>
// // //                   <span className="text-gray-500">{post.readTime}</span>
// // //                 </div>

// // //                 <h3 className="text-xl font-bold text-[#1B4D3E] mb-3">
// // //                   {post.title}
// // //                 </h3>

// // //                 <p className="text-gray-700 text-sm flex-1 mb-4">
// // //                   {post.description}
// // //                 </p>

// // //                 <button className="text-[#1B4D3E] flex items-center gap-2 font-semibold text-sm">
// // //                   Continue Reading <ArrowRight className="w-4 h-4" />
// // //                 </button>
// // //               </article>
// // //             ))}
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* ========= WHY CHOOSE US ========= */}
// // //       <section className="py-20 bg-[#1B4D3E] text-white">
// // //         <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

// // //           <div>
// // //             <h2 className="text-4xl md:text-5xl font-bold mb-6">
// // //               Why Choose Greenfield Energy?
// // //             </h2>

// // //             <div className="space-y-6">
// // //               {/* 1 */}
// // //               <div className="flex items-start gap-4">
// // //                 <Zap className="w-8 h-8 text-white" />
// // //                 <div>
// // //                   <h3 className="text-xl font-semibold">Innovative Solutions</h3>
// // //                   <p className="text-gray-200">
// // //                     Research-based, cutting-edge technology tailored to your needs.
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               {/* 2 */}
// // //               <div className="flex items-start gap-4">
// // //                 <Users className="w-8 h-8 text-white" />
// // //                 <div>
// // //                   <h3 className="text-xl font-semibold">Global Expertise</h3>
// // //                   <p className="text-gray-200">
// // //                     World-class team of engineering consultants and developers.
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               {/* 3 */}
// // //               <div className="flex items-start gap-4">
// // //                 <Award className="w-8 h-8 text-white" />
// // //                 <div>
// // //                   <h3 className="text-xl font-semibold">Cost-Effective</h3>
// // //                   <p className="text-gray-200">
// // //                     Efficient solutions without compromising quality.
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/30">
// // //             <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
// // //             <p className="text-gray-100 mb-6">
// // //               To provide world-class oil and gas consultancy along with innovative
// // //               customized software solutions that drive sustainability and
// // //               efficiency in the energy sector.
// // //             </p>

// // //             <Link
// // //               to="/about"
// // //               className="bg-white text-[#1B4D3E] px-6 py-3 rounded-lg inline-flex items-center gap-2 font-semibold"
// // //             >
// // //               Learn More <ArrowRight className="w-5 h-5" />
// // //             </Link>
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* ========= CTA SECTION ========= */}
// // //       <section className="py-20 bg-white text-center px-4">
// // //         <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-6">
// // //           Ready to Transform Your Operations?
// // //         </h2>

// // //         <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
// // //           Let's discuss how our innovative solutions can help you achieve your goals.
// // //         </p>

// // //         <Link
// // //           to="/contact"
// // //           className="bg-[#1B4D3E] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#153c30] transition inline-flex items-center gap-2"
// // //         >
// // //           Contact Us Today <ArrowRight className="w-5 h-5" />
// // //         </Link>
// // //       </section>

// // //     </div>
// // //   );
// // // };


// // // export default Home;


// // import React from "react";
// // import Hero from "../components/Hero";
// // import Products from "../components/Products";
// // import Services from "../components/Services";
// // import Stats from "../components/Stats";
// // import Partners from "../components/Partners";
// // import News from "../components/News";
// // import Blog from "../components/Blog";
// // import CTA from "../components/CTA";
// // import WhyChoose from "../components/WhyChoose";
// // // data moved here so children are pure/presentational
// // import {
// //   Box,
// //   Workflow,
// //   Cpu,
// //   Mountain,
// //   Leaf,
// //   Code,
// //   Briefcase,
// //   Users,
// // } from "lucide-react";

// // const products = [
// //   {
// //     icon: Box,
// //     name: "SandMaster",
// //     tagline: "Advanced Sand Management",
// //     description:
// //       "Comprehensive software solution for sand management in oil and gas operations. Monitor, predict, and optimize sand control strategies with real-time analytics.",
// //     features: ["Real-time sand production monitoring", "Predictive analytics", "Automated reporting", "Risk assessment tools"],
// //     image: "/images/sandmaster.png",
// //   },
// //   {
// //     icon: Workflow,
// //     name: "AutoWellz",
// //     tagline: "Well Operation Workflow",
// //     description:
// //       "Streamline your well operations with automated workflow management. From planning to execution, manage every aspect efficiently.",
// //     features: ["Workflow automation", "Real-time collaboration", "Document management", "Compliance tracking"],
// //     image: "/images/autowellz.png",
// //   },
// //   {
// //     icon: Cpu,
// //     name: "AutoPro",
// //     tagline: "Engineering Process Digitization",
// //     description:
// //       "Transform your engineering processes with digital solutions. Automate routine tasks, enhance accuracy, and improve efficiency.",
// //     features: ["Process automation", "Digital workflows", "Data integration", "Performance optimization"],
// //     image: "/images/autopro.png",
// //   },
// //   {
// //     icon: Mountain,
// //     name: "RockMaster",
// //     tagline: "Rock Mechanical Stability",
// //     description:
// //       "Advanced rock mechanics analysis tool for evaluating wellbore stability, formation integrity, and geomechanical risks.",
// //     features: ["Wellbore stability analysis", "Geomechanical modeling", "Risk prediction", "Formation evaluation"],
// //     image: "/images/rockmaster.png",
// //   },
// //   {
// //     icon: Leaf,
// //     name: "GREEN",
// //     tagline: "GHG Emissions Calculator",
// //     description: "Calculate, track, and reduce your carbon footprint with our comprehensive emissions calculator.",
// //     features: ["Emissions calculation", "Carbon footprint tracking", "Sustainability reporting", "Reduction strategies"],
// //     image: "/images/green.png",
// //   },
// // ];

// // const services = [
// //   { icon: Code, title: "Software Development", description: "Customized software solutions tailored to industry needs." },
// //   { icon: Briefcase, title: "Engineering Consultancy", description: "Expert consultancy services with global engineering team." },
// //   { icon: Users, title: "Customized Training", description: "Professional training programs for industry professionals." },
// // ];

// // const newsEvents = [
// //   {
// //     title: "Greenfield Energy at SPE Conference 2025",
// //     date: "March 15, 2025",
// //     location: "Abu Dhabi",
// //     description: "Presented our latest research on production optimization and carbon reduction strategies.",
// //     image: "https://images.pexels.com/photos/247318/pexels-photo-247318.jpeg?auto=compress&cs=tinysrgb&w=800",
// //   },
// //   {
// //     title: "New Training Program for Reservoir Engineers",
// //     date: "January 28, 2025",
// //     location: "Online",
// //     description: "Launched a comprehensive training series for young professionals in the oil and gas industry.",
// //     image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
// //   },
// //   {
// //     title: "Partnership for Sustainable Energy",
// //     date: "December 10, 2024",
// //     location: "Global",
// //     description: "Announced a strategic partnership to deliver integrated sustainability solutions.",
// //     image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
// //   },
// // ];

// // const blogPosts = [
// //   {
// //     title: "5 Ways Digital Tools Are Transforming the Energy Sector",
// //     readTime: "7 min read",
// //     category: "Digital Transformation",
// //     description: "Explore how data-driven solutions are improving efficiency, safety, and sustainability.",
// //     image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
// //   },
// //   {
// //     title: "Optimizing Production in Brownfields",
// //     readTime: "6 min read",
// //     category: "Engineering Insights",
// //     description: "Key strategies and techniques for maximizing recovery in mature fields.",
// //     image: "https://images.pexels.com/photos/296086/pexels-photo-296086.jpeg?auto=compress&cs=tinysrgb&w=800",
// //   },
// //   {
// //     title: "Designing Software for Subsurface Engineers",
// //     readTime: "8 min read",
// //     category: "Product Design",
// //     description: "Best practices for building tools that subsurface teams actually love to use.",
// //     image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
// //   },
// // ];

// // const partnerLogos = [
// //   "/images/partners/P1.png",
// //   "/images/partners/P2.png",
// //   "/images/partners/P3.png",
// //   "/images/partners/P4.png",
// //   "/images/partners/P5.png",
// //   "/images/partners/P6.png",
// // ];

// // export default function Home() {
// //   return (
// //     <div className="pt-20">
// //       <Hero />
// //       <Products products={products} />
// //       <Services services={services} />
// //       <WhyChoose />
// //       <Stats />
// //       <Partners logos={partnerLogos} />
// //       <News newsEvents={newsEvents} />
// //       <Blog posts={blogPosts} />
       
// //       <CTA />
// //     </div>
// //   );
// // }



// // src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Partners from "../components/Partners";
import News from "../components/News";
import Blog from "../components/Blog";
import CTA from "../components/CTA";
import WhyChoose from "../components/WhyChoose";
// Import data from the central file
import { 
  products, 
  services, 
  newsEvents, 
  blogPosts, 
  partnerLogos 
} from "../data"; 


export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Products products={products} />
      <Services services={services} />
      <WhyChoose />
      <Stats />
      <Partners logos={partnerLogos} />
      <News newsEvents={newsEvents} />
      <Blog posts={blogPosts} />
        
      <CTA />
    </div>
  );
}


