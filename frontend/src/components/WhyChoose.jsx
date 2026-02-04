// import React from "react";
// import { Zap, Users, Award, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function WhyChoose() {
//   return (
//     <section className="py-20 bg-[#1B4D3E] text-white">
//       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

//         {/* LEFT SIDE */}
//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-8">
//             Why G.O.T.S?
//           </h2>

//           <div className="space-y-8">
//             {/* 1 */}
//             <div className="flex items-start gap-4">
//               <Zap className="w-10 h-10 text-white" />
//               <div>
//                 <h3 className="text-xl font-semibold">Innovative Solutions</h3>
//                 <p className="text-gray-200">
//                   Research-based, cutting-edge technology tailored to your needs.
//                 </p>
//               </div>
//             </div>

//             {/* 2 */}
//             <div className="flex items-start gap-4">
//               <Users className="w-10 h-10 text-white" />
//               <div>
//                 <h3 className="text-xl font-semibold">Global Expertise</h3>
//                 <p className="text-gray-200">
//                   World-class team of engineering consultants and developers.
//                 </p>
//               </div>
//             </div>

//             {/* 3 */}
//             <div className="flex items-start gap-4">
//               <Award className="w-10 h-10 text-white" />
//               <div>
//                 <h3 className="text-xl font-semibold">Cost-Effective</h3>
//                 <p className="text-gray-200">
//                   Efficient solutions without compromising quality.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="bg-white/10 p-10 rounded-2xl backdrop-blur border border-white/30">
//           <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
//           <p className="text-gray-100 mb-6 leading-relaxed">
//             To provide world-class oil and gas consultancy along with innovative
//             customized software solutions that drive sustainability and
//             efficiency in the energy sector.
//           </p>

//           <Link
//             to="/about"
//             className="bg-white text-[#1B4D3E] px-6 py-3 rounded-lg inline-flex items-center gap-2 font-semibold"
//           >
//             Learn More <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// }
import React from "react";
import {
  Settings,
  Globe,
  Award,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import { asset } from "../utils/asset";

const data = [
  {
    title: "Customization of IT Solutions",
    desc:
      "Our Software and IT professionals along with Oil & Gas R&D experts develop customized workflows and applications including cost & time tracking, reporting, risk analysis, project economics, and database management.",
    icon: Settings,
    image: asset("/images/1.jpg"),
  },
  {
    title: "Global Pool of Consultants",
    desc:
      "Our global network of oil and gas consultants partners with you to deliver effective solutions from reservoir engineering to surface facilities, covering geoscience through process facilities.",
    icon: Globe,
    image: asset("/images/2.jpg"),
  },
  {
    title: "Quality Driven",
    desc:
      "We are a lean and flexible organization focused on client-centric solutions, ensuring minimal procedural hurdles while delivering timely, high-quality engineering and IT services.",
    icon: Award,
    image: asset("/images/3.jpg"),
  },
  {
    title: "Safety First",
    desc:
      "Safety is our highest priority. Every product and service is delivered with strict adherence to safety standards to reduce hazards and ensure reliability.",
    icon: ShieldCheck,
    image: asset("/images/4.jpg"),
  },
  {
    title: "Cost Effective Engineering Solutions",
    desc:
      "Our engineers focus on economical excellence by tracking and optimizing key economic parameters to reduce cost and save valuable project time.",
    icon: TrendingDown,
    image: asset("/images/5.jpg"),
  },
];

export default function WhyChoose() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2F27] mb-4">
            Why Choose <span className="text-[#2FBF9C]">Greenfield OTS</span>
          </h2>
          <p className="text-[#2F4F44] max-w-3xl mx-auto text-lg">
            Delivering technology-driven, safe and cost-effective oil & gas
            engineering and IT solutions through global expertise.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="
                  group
                  bg-[#AFE1AF]
                  rounded-2xl
                  overflow-hidden
                  shadow-lg
                  transition-all duration-500
                  hover:-translate-y-4
                  hover:shadow-2xl
                "
              >
                {/* IMAGE */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full h-full object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                  />
                  {/* overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="
                        w-12 h-12
                        rounded-xl
                        flex items-center justify-center
                        bg-[#2FBF9C]/15
                        text-[#2FBF9C]
                      "
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-semibold text-[#144D3A]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[#2F4F44] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}