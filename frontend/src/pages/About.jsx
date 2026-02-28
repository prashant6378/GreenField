import React, { useState } from "react";
import { Target, Eye, Users, Globe, Award, ChevronRight, X } from "lucide-react";
import { asset } from "../utils/asset";

// === THEME CONSTANTS ===
const THEME = {
  textDark: "text-[#1B4D3E]",
  bgDark: "bg-[#1B4D3E]",
  bgSage: "bg-[#AFE1AF]",
  textSage: "text-[#84A98C]",
  bgLight: "bg-[#f5faf7]", // Light sage tint for backgrounds
  bgWhite: "bg-white",
  buttonPrimary: "bg-white text-[#1B4D3E] hover:bg-[#f0fdf4] hover:shadow-xl",
};

const About = () => {
  // State to manage which team member's popup is open
  const [selectedMember, setSelectedMember] = useState(null);

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pioneering research-based solutions for the energy sector",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with universities and industry leaders",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality services",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "International team serving clients worldwide",
    },
  ];

  const achievements = [
    { metric: "2015", label: "Established" },
    { metric: "15+", label: "Projects Completed" },
    { metric: "10+", label: "Satisfied Clients" },
    { metric: "344 MT", label: "Carbon Footprint Reduced" },
  ];

  const teamMembers = [
    {
      name: "Vinnavadi C Babu Sivakumar",
      role: "CTO, Petroleum Engineering Solutions",
      image: asset("/images/team/Babu Sir.jpeg"),
      bio: `Sivakumar is a dynamic Oil and Gas Industry professional with enriched expertise & experience of more than 4 decades in the areas of Project Management; Well Completions; Sand Control; Artificial Lift & EOR/IOR; Production Operations; Process Reengineering and Team Management. He has been working hands on in the Oil and Gas Industry across India, Middle East and South East Asia regions.

Sivakumar is a Post-Graduate in Petroleum Engineering from the Indian Institute of Technology (ISM) Dhanbad. He has presented and published several papers at SPE conferences on Artificial Lift, Thermal Stimulation with Downhole heaters and Chemical and Bacterial well treatments for water shutoff. Sivakumar has also been a line trainer and conducted classroom courses on Production Enhancement, Well Stimulation, Artificial Lift, Sand Control and Well Completions.

Sivakumar is currently associated with M/S Greenfield Oil and Trading Company as a Principal Technical Consultant (Production Technology/Petroleum Engineering).`,
    },
    {
      name: "Gaurav Dwivedi",
      role: "CTO, Technology",
      image: asset("/images/team/Gaurav Sir.png"),
      bio: `Gaurav Dwivedi, a seasoned system software professional, boasts of 20+ years of extensive experience in graphics system engineering and development. His expertise spans technical leadership, planning, reporting, resource management, risk management, mentorship, and cross-team coordination throughout the Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC). His technical proficiency encompasses a wide array of skills including C, C++, Java, GPU architecture, microcontroller firmware, GPU power and performance profiling, and more, demonstrating versatility across different technologies.

In his current role as Chief Technology Officer at Greenfield Oil and Trading Services, Gaurav spearheads software development initiatives and makes crucial architectural decisions. Notably, he is playing a pivotal role in crafting specialized software solutions tailored for the oil and gas industry, with a focus on greenhouse gas emission calculations.

Gaurav holds a B. Tech in Electronics Engineering from the Indian Institute of Technology (IIT), Dhanbad, and has pursued advanced certification in Deep Learning Foundations and Applications from IISC Bangalore. Additionally, he has patents to his credit, reflecting his innovative prowess. Gaurav is proficient in English and Hindi, with a basic understanding of Korean.`,
    },
    {
      name: "Abhishek Gupta",
      role: "Principal Petroleum Engineer",
      image: asset("/images/team/Abhishek Sir.png"),
      bio: `Abhishek Gupta is a Principal Petroleum Engineer at Greenfield Oil and Trading Services, bringing approximately 13 years of extensive experience in the global Oil & Gas sector. He is a recognized specialist in well intervention, possessing deep technical proficiency in Rig Operations—specifically Completions and Workovers—as well as Rigless Operations involving Coiled Tubing, E-Line, Slickline, and Well Testing.
At Greenfield, Abhishek plays a pivotal role in the execution of sand management and consultancy projects, providing critical engineering support for complex well operations. His track record includes the successful delivery of high-stakes projects for major energy clients across Malaysia, India, Africa, and the Middle East. Abhishek is known for his ability to drive operational efficiency and deliver robust technical solutions in challenging international environments.
`,
    },
    {
      name: "Firoza Sheikh",
      role: "Petroleum Engineer | Product Champion-GREEN",
      image: asset("/images/team/Firoza.jpeg"),
      bio: `She is a Petroleum Engineer and Product Champion for GREEN product, where she leads research and development efforts shaping next-generation sustainability and carbon accounting solutions across energy, industrial, and allied sectors. Her work contributes to building data-driven systems that support organizations in navigating the transition toward a low-carbon and climate-resilient future.

With a strong engineering foundation, Firoza works at the intersection of petroleum engineering and ESG, translating complex operational data into credible carbon inventories and actionable emission reduction pathways. She plays a key role in shaping GREEN’s methodology and product direction, ensuring technical rigor, regulatory alignment, and long-term relevance as sustainability becomes central to future business and operational decision-making.`,
    },
    {
      name: "Swagat Pradhan",
      role: "Analytics and Optimization Engineer",
      image: asset("/images/team/Swagat.png"),
      bio: `With over 3+ years of experience in upstream oil and gas operations, he holds a degree in Petroleum Engineering and has worked closely with drilling, production, and well operations, gaining practical exposure to field workflows, reporting systems, and operational data management. Swagat has hands-on experience in coordinating technical data, understanding DPR/WSR workflows, and supporting decision-making through structured analysis, while handling multiple clients and projects simultaneously.

With a strong interest in digital transformation, he is currently expanding his expertise in data analytics and upstream software solutions, contributing to the development and implementation of tools such as AutoWellz and AutoPro. His work bridges domain knowledge and technology to improve operational efficiency, data visibility, and process standardization.`,
    },
    {
      name: "Kashish Bhardwaj",
      role: "Petroleum Engineer",
      image: asset("/images/team/kashish.jpeg"),
      bio: `Petroleum Engineer with a B. Tech from Chandigarh University (2019–2023), currently working at Greenfield Oil & Trading Services since October 2023. Actively involved in digital sand management projects, with hands-on experience in modeling and analysis using RockMaster™ and SandMaster™.

Passionate about applying technology-driven solutions to enhance upstream operational efficiency.`,
    }, { 
     name: "Sejal Jain",
      role: "Business Development Manager & HR Manager",
      image: asset("/images/team/Sejal.jpeg"),
      bio: `She is a dedicated professional with over 2+ years of experience in Business Development and Human Resources, combining strategic thinking with strong people-management skills. She holds an MBA in HR and Marketing, which enables her to effectively align business growth strategies with talent and organizational development.

In her current role, Sejal manages business development initiatives, client coordination, and partnership building, while also overseeing core HR functions such as recruitment, onboarding, employee engagement, and performance management. Her ability to handle multiple responsibilities ensures smooth internal operations and sustained business growth.

Driven by a results-oriented and people-first approach, Sejal contributes to building efficient processes, strengthening workplace culture, and supporting the company’s long-term objectives through structured planning and collaborative execution.`,
    },
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* ================= HERO ================= */}
      {/* Updated Background to Sage Green */}
      <section className={`${THEME.bgSage} ${THEME.textDark} py-16 md:py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
            About Greenfield Energy
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Leading the future of energy consultancy with innovative solutions
            and unparalleled expertise.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className={`text-3xl sm:text-4xl font-bold ${THEME.textDark} mb-4 md:mb-6`}>
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Founded in 2015, Greenfield Energy has established itself as a
                premier provider of oil and gas consultancy and software
                solutions. Our journey began with a simple vision: to bridge the
                gap between traditional engineering practices and modern digital
                solutions.
              </p>
              <p>
                Over the years, we've grown from a small team of passionate
                engineers to a global organization with expertise spanning
                continents. Our commitment to innovation, quality, and
                sustainability has earned us the trust of leading companies in
                the energy sector.
              </p>
              <p>
                Today, we continue to push boundaries, developing cutting-edge
                software and providing expert consultancy that empowers our
                clients to optimize operations and reduce environmental impact.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mt-8 md:mt-0 px-4 md:px-0">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full"
            />
            {/* Updated Box Color to Dark Green, Adjusted Positioning for Mobile */}
            <div className={`absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-6 ${THEME.bgSage} text-[#1B4D3E] p-4 sm:p-6 rounded-xl shadow-xl`}>
              <div className="text-3xl sm:text-4xl font-bold mb-1">9+</div>
              <div className="text-xs sm:text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION / MISSION & ACHIEVEMENTS ================= */}
      <section className={`py-16 md:py-20 ${THEME.bgLight}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Achievements */}
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center hover:shadow-xl transition"
                >
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${THEME.textDark} mb-2`}>
                    {item.metric}
                  </div>
                  <div className="text-sm sm:text-base text-gray-700 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Eye className={`w-10 h-10 sm:w-12 sm:h-12 ${THEME.textDark}`} />
              <h2 className={`text-3xl sm:text-4xl font-bold ${THEME.textDark}`}>Our Vision</h2>
            </div>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              To provide world-class consultancy and innovative software
              solutions that drive sustainability and operational excellence in
              the energy sector.
            </p>

            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Target className={`w-10 h-10 sm:w-12 sm:h-12 ${THEME.textDark}`} />
              <h2 className={`text-3xl sm:text-4xl font-bold ${THEME.textDark}`}>Our Mission</h2>
            </div>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              To deliver research-driven, customer-focused solutions that help
              our clients optimize workflows, reduce emissions, and innovate for
              a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${THEME.textDark} mb-4`}>
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center p-6 sm:p-8 rounded-xl ${THEME.bgLight} hover:shadow-xl transition-transform duration-300 hover:-translate-y-2`}
              >
                <div className={`${THEME.bgSage} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                  <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>

                <h3 className={`text-xl sm:text-2xl font-bold ${THEME.textDark} mb-3 sm:mb-4`}>
                  {value.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className={`py-16 md:py-20 ${THEME.bgLight}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${THEME.textDark} mb-4`}>
              Our Leadership & Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              A blend of industry veterans and professionals driving innovation
              in petroleum engineering, technology, and sustainability.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group h-full border-t-4 border-[#1B4D3E]`}
              >
                {/* Image Area */}
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className={`text-lg sm:text-xl font-bold ${THEME.textDark} mb-1`}>
                    {member.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 mb-3 sm:mb-4">
                    {member.role}
                  </p>
                  
                  {/* Truncated Bio (3 Lines Max) */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Read More Button */}
                  <div className="mt-auto">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className={`inline-flex items-center ${THEME.textDark} font-bold text-xs sm:text-sm hover:text-red-600 transition-colors group/btn`}
                    >
                      Read Full Profile
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POPUP MODAL WINDOW ================= */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with Blur */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedMember(null)}
          ></div>

          {/* Modal Content */}
          <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto relative z-10 animate-in fade-in zoom-in duration-300 border-t-8 border-[#1B4D3E]`}>
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full text-gray-400 hover:text-red-600 hover:bg-gray-100 transition-all"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Modal Text Content */}
            <div className="p-6 sm:p-8 md:p-12">
              <div className="mb-6 sm:mb-8 border-b border-gray-100 pb-4 sm:pb-6 pr-6">
                <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${THEME.textDark} mb-2`}>
                  {selectedMember.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-red-600">
                  {selectedMember.role}
                </p>
              </div>

              <div className="prose prose-sm sm:prose-base md:prose-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedMember.bio}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ================= OUR PARTNERS ================= */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center ${THEME.textDark} mb-12 md:mb-16`}>
            Our Partners
          </h2>

          {/* ================= OUR CLIENTS ================= */}
          <div className="mb-16 md:mb-20">
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${THEME.textDark} mb-6 md:mb-8 text-center md:text-left`}>
              Our Clients
            </h3>

            <div className="overflow-hidden relative h-[100px] md:h-[140px]">
              <div className="flex w-max items-center whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
                {/* Complete Set + Complete Duplicated Set for Flawless Loop */}
                {[
                  { img: asset("/images/Oil India.png"), size: "h-16 sm:h-20 md:h-24 max-w-[140px] md:max-w-[180px]" },
                  { img: asset("/images/petronas_carigali.png"), size: "h-20 sm:h-22 md:h-26 max-w-[160px] md:max-w-[210px]" },
                  { img: asset("/images/Cairn.png"), size: "h-20 sm:h-22 md:h-26 max-w-[150px] md:max-w-[200px]" },
                  { img: asset("/images/spoc.png"), size: "h-24 sm:h-28 md:h-34 max-w-[180px] md:max-w-[230px]" },
                  { img: asset("/images/KIRI.jpg"), size: "h-24 sm:h-28 md:h-34 max-w-[180px] md:max-w-[230px]" },
                  { img: asset("/images/SEE.png"), size: "h-20 sm:h-22 md:h-26 max-w-[150px] md:max-w-[200px]" },

                  // Exact duplicate for perfect marquee loop
                  { img: asset("/images/Oil India.png"), size: "h-16 sm:h-20 md:h-24 max-w-[140px] md:max-w-[180px]" },
                  { img: asset("/images/petronas_carigali.png"), size: "h-20 sm:h-22 md:h-26 max-w-[160px] md:max-w-[210px]" },
                  { img: asset("/images/Cairn.png"), size: "h-20 sm:h-22 md:h-26 max-w-[150px] md:max-w-[200px]" },
                  { img: asset("/images/spoc.png"), size: "h-24 sm:h-28 md:h-34 max-w-[180px] md:max-w-[230px]" },
                  { img: asset("/images/KIRI.jpg"), size: "h-24 sm:h-28 md:h-34 max-w-[180px] md:max-w-[230px]" },
                  { img: asset("/images/SEE.png"), size: "h-20 sm:h-22 md:h-26 max-w-[150px] md:max-w-[200px]" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-48 sm:w-60 md:w-72 mx-2 sm:mx-4 flex items-center justify-center"
                  >
                    <img
                      src={item.img}
                      alt="client-logo"
                      className={`${item.size} object-contain transition-transform duration-300 hover:scale-105`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= GLOBAL SERVICE PARTNERS ================= */}
          <div className="mb-16 md:mb-20">
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${THEME.textDark} mb-6 md:mb-8 text-center md:text-left`}>
              Global Service Partners
            </h3>

            <div className="overflow-hidden relative h-[100px] md:h-[140px]">
              <div className="flex w-max items-center whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
                {/* Complete Set + Complete Duplicated Set for Flawless Loop */}
                {[
                  asset("/images/Permian Oil & Gas.png"),
                  asset("/images/TPS.jpg"),
                  asset("/images/Sutera.png"),
                  asset("/images/Rara.png"),
                  asset("/images/GoldenGateBridge.png"),

                  // Exact duplicate
                  asset("/images/Permian Oil & Gas.png"),
                  asset("/images/TPS.jpg"),
                  asset("/images/Sutera.png"),
                  asset("/images/Rara.png"),
                  asset("/images/GoldenGateBridge.png"),
                ].map((img, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-56 sm:w-64 md:w-80 mx-2 sm:mx-4 flex items-center justify-center"
                  >
                    <img
                      src={img}
                      alt="service-partner-logo"
                      className="h-20 sm:h-24 md:h-26 max-w-[180px] md:max-w-[240px] object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= TECHNOLOGY PARTNERS ================= */}
          <div>
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${THEME.textDark} mb-6 md:mb-8 text-center md:text-left`}>
              Technology Partners
            </h3>

            <div className="overflow-hidden relative h-[100px] md:h-[140px]">
              <div className="flex w-max items-center whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
                 {/* Complete Set + Complete Duplicated Set for Flawless Loop */}
                {[
                  { img: asset("/images/images_1.png"), size: "h-16 sm:h-20 md:h-24 max-w-[140px] md:max-w-[190px]" },
                  { img: asset("/images/iit-dhanbad-feature-img-01.jpg"), size: "h-20 sm:h-24 md:h-28 max-w-[170px] md:max-w-[230px]" },
                  { img: asset("/images/NSP.png"), size: "h-16 sm:h-20 md:h-24 max-w-[130px] md:max-w-[180px]" },
                  { img: asset("/images/UGreen.jpg"), size: "h-16 sm:h-20 md:h-24 max-w-[130px] md:max-w-[180px]" },
                  { img: asset("/images/Adishree.jpeg"), size: "h-20 sm:h-26 md:h-32 max-w-[160px] md:max-w-[220px]" },
                  { img: asset("/images/HOPON.png"), size: "h-20 sm:h-22 md:h-26 max-w-[150px] md:max-w-[200px]" },

                  // Exact duplicate
                  { img: asset("/images/images_1.png"), size: "h-16 sm:h-20 md:h-24 max-w-[140px] md:max-w-[190px]" },
                  { img: asset("/images/iit-dhanbad-feature-img-01.jpg"), size: "h-20 sm:h-24 md:h-28 max-w-[170px] md:max-w-[230px]" },
                  { img: asset("/images/NSP.png"), size: "h-16 sm:h-20 md:h-24 max-w-[130px] md:max-w-[180px]" },
                  { img: asset("/images/UGreen.jpg"), size: "h-16 sm:h-20 md:h-24 max-w-[130px] md:max-w-[180px]" },
                  { img: asset("/images/Adishree.jpeg"), size: "h-20 sm:h-26 md:h-32 max-w-[160px] md:max-w-[220px]" },
                  { img: asset("/images/HOPON.png"), size: "h-20 sm:h-22 md:h-26 max-w-[150px] md:max-w-[200px]" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-48 sm:w-60 md:w-72 mx-2 sm:mx-4 flex items-center justify-center"
                  >
                    <img
                      src={item.img}
                      alt="tech-logo"
                      className={`${item.size} object-contain transition-transform duration-300 hover:scale-105`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= MARQUEE ANIMATION ================= */}
          <style>{`
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            /* Slow down marquee slightly on smaller screens for readability */
            @media (max-width: 768px) {
              .animate-marquee {
                animation: marquee 15s linear infinite;
              }
            }
          `}</style>

        </div>
      </section>

    </div>
  );
};

export default About;