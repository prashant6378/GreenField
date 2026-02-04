import React, { useEffect, useRef } from "react";
import { TrendingUp, Database, Zap, Cpu, Code, ChevronRight, Mail, Phone, BarChart3, Binary, HardHat, PieChart, Download, Check } from "lucide-react";
import { asset } from "../utils/asset";


/**
 * Custom Icon for Machine Learning
 */
const BrainCircuitIcon = ({ className }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
		<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
		<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
	</svg>
);


/**
 * DataAnalysis Component
 * - Styled to match the requested cleaner, green/white card theme.
 * - Uses exact content provided by the user.
 * - Full width (no sidebar).
 */
export default function DataAnalysis() {
	const NAV_TOP_PADDING = "pt-24";
	const contentRef = useRef(null);

	// Theme Colors
	const PRIMARY_COLOR = "#0F4C3A"; // Dark Emerald
	const LIGHT_GREEN = "#D1FAE5"; // Light background accent
	const ACCENT_COLOR = "#10B981"; // Brighter emerald
	const CTA_BG = "bg-[#AFE1AF] border-2 border-[#1B4D3E]";
	const CTA_TEXT = "text-[#1B4D3E]";

	// Data content based on user input
	const contentData = {
		intro: {
			title: "AI & ML Solutions",
			text: "With advent of big data analysis in Oil and Gas industry, operators and service partners are taking advantage of advanced algorithms and data science services for production optimization, time savings, efficiency of operations. Data Analytics framework for any task or process adds tremendous value creation for an organization. We, at GOTS with our experts in data science and advance algorithm builder cater to any data solutions for OIl and Gas industry application.",
		},
		whyUs: {
			title: "WHY US",
			points: [
				"A team of Upstream Oil and gas professionals providing strong technical foundation and understanding to your data",
				"The understanding and experience of oil professionals clubbed with team of algorithm experts to generate analysis and develop algorithms encompassing years of experience in one platform",
			]
		},
		scope: {
			title: "OUR SCOPE INCLUDES",
			sections: [
				{
					name: "Data Mining and Visualization:",
					slogan: "LET YOUR DATA NOURISHED AND ENHANCED BY EXPERTS",
					icon: BarChart3,
					items: [
						"Includes data mining and visualization of production, downhole log data, sub-surface rock mechanical analysis and sensors like Pressure, temperature, MPFMs",
						"Picture pattern algorithm to interpret seismic, reservoir and sub-surface data",
						"Integration of data with advance data base systems like NoSQL and other speciality database",
						"Choosing best visualization model for greater insight into the incoming data",
					],
					image: asset("/images/1.png")
				},
				{
					name: "Dashboard Creation:",
					slogan: "WHY JUST DEPEND ON COMMERCIAL PACKAGES TO SEE YOUR DATA...DIVE -IN WITH YOUR VIEW POINT",
					icon: Zap,
					items: [
						"Creation of dedicated dashboard",
						"Visualize --> Analyze and make on the spot decisions using advance data analytics, dashboard and cloud computing",
						"Ability to visualize data in your mobile applications",
					],
					image: asset("/images/2.png")
				},
				{
					name: "Machine learning and Predictive Modelling:",
					slogan: "EVEN A SINGLE EVENT FAILURE OPENS MILLION WAYS TO OTHER FAILURES...LET US HELP YOU TO VISUALIZE THE PATTERN",
					icon: BrainCircuitIcon,
					items: [
						"Machine learning algorithms and models to identify anomalies",
						"Identifying pattern and Predicting failure like",
						"Sand Control failure analysis, prediction and pro-active mitigation of failure",
						"Multi-phase flow modelling, flow regime and production prediction for optimum production",
						"Real time drilling data monitoring logic to identify stuck pipe, well control failure, ROP optimization and other drilling optimization for huge savings"
					],
					image: asset("/images/3.png")
				},
			]
		}
	};

	useEffect(() => {
		// Simple fade-in animation logic
		if (contentRef.current) {
			contentRef.current.style.opacity = "0";
			contentRef.current.style.transform = "translateY(8px)";
			setTimeout(() => {
				contentRef.current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
				contentRef.current.style.opacity = "1";
				contentRef.current.style.transform = "translateY(0)";
			}, 100);
		}
	}, []);

	const maxWClass = "max-w-7xl";

	// Component for the Scope Section (Data Mining, Dashboard, ML)
	const ScopeSection = ({ section, isReversed = false }) => (
		<div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100 mb-12`}>
			<div className={`space-y-6 ${isReversed ? 'lg:order-last' : 'lg:order-first'}`}>
				<div className="flex items-center gap-3">
					<section.icon className="w-8 h-8" style={{ color: PRIMARY_COLOR }} />
					<h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: PRIMARY_COLOR }}>
						{section.name}
					</h3>
				</div>
				<p className="text-lg font-bold" style={{ color: ACCENT_COLOR }}>
					{section.slogan}
				</p>
				<ul className="space-y-4">
					{section.items.map((item, idx) => (
						<li key={idx} className="flex items-start gap-3 text-slate-700">
							<Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
							<span>{item}</span>
						</li>
					))}
				</ul>
			</div>
			
			{/* Image placeholder for visual reference */}
			<div className={isReversed ? 'lg:order-first' : 'lg:order-last'}>
				<img
					src={section.image}
					alt={section.name}
					className="w-full h-auto object-cover rounded-2xl shadow-xl"
					onError={(e) => {
						e.currentTarget.style.display = "none";
						e.currentTarget.parentElement.style.backgroundColor = PRIMARY_COLOR;
						e.currentTarget.parentElement.innerHTML =
							`<div class="flex items-center justify-center h-64 text-white text-xl font-bold rounded-2xl p-4">${section.name} Placeholder</div>`;
					}}
				/>
			</div>
		</div>
	);


	return (
		<main className={`${NAV_TOP_PADDING} bg-gray-50 text-slate-800`}>
			{/* HERO (Styled like the user's header image) */}
	<header className="relative mb-12">
				{/* Background image container, adjusted clip path for rounded bottom corners */}
				<div className="absolute inset-0 bg-cover bg-center h-[300px] md:h-[450px] rounded-b-3xl overflow-hidden" 
					style={{ 
						backgroundImage: "url(https://www.appinio.com/hs-fs/hubfs/What%20is%20Data%20Analysis%20Definition%20Tools%20Examples.jpg?width=1000&name=What%20is%20Data%20Analysis%20Definition%20Tools%20Examples.jpg)",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						// Using rounded-b-3xl instead of clipPath for cleaner look
					}}
				>
					{/* Dark Green Overlay for Contrast and Branding */}
					<div className="absolute inset-0 bg-[#0F4C3A]/75"></div> {/* Increased opacity for better contrast */}
				</div>
				<div className={`${maxWClass} mx-auto px-6 md:px-12 relative z-10 py-16 md:py-32 h-[300px] md:h-[450px] flex items-center`}>
					<h1 className="text-4xl md:text-7xl font-extrabold text-white drop-shadow-xl max-w-4xl leading-tight">
						{contentData.intro.title}
					</h1>
				</div>
			</header>

			{/* MAIN CONTENT AREA - Full Width */}
			<div className={`${maxWClass} mx-auto px-6 lg:px-12 py-8`} ref={contentRef}>
				
				{/* Introduction */}
				<section className="mb-12">
					<p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto text-center">
						{contentData.intro.text}
					</p>
				</section>

				{/* WHY US section (styled like the white cards with green underline) */}
				<section className="mb-16">
					<h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-slate-800">
						{contentData.whyUs.title}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{contentData.whyUs.points.map((point, index) => (
							<div key={index} className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between group">
								<p className="text-xl font-medium text-slate-700 mb-4">{point}</p>
								<div className="w-1/2 h-1 rounded-full mt-4" style={{ backgroundColor: ACCENT_COLOR }}></div>
							</div>
						))}
					</div>
				</section>

				{/* SCOPE INCLUDES Sections */}
				<section className="mb-16">
					<h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-slate-800">
						{contentData.scope.title}
					</h2>
					
					{/* Data Mining and Visualization */}
					<ScopeSection section={contentData.scope.sections[0]} isReversed={false} />

					{/* Dashboard Creation */}
					<ScopeSection section={contentData.scope.sections[1]} isReversed={true} />

					{/* Machine learning and Predictive Modelling */}
					<ScopeSection section={contentData.scope.sections[2]} isReversed={false} />
				</section>
				
				{/* Call to Action/Contact */}
				<section className="mb-16">
					<div className="bg-[#D1FAE5] p-12 rounded-3xl text-center shadow-inner border border-emerald-200">
						<h3 className="text-3xl font-extrabold text-slate-800 mb-4">
							Ready to Optimize Your Operations?
						</h3>
						<p className="text-lg text-slate-600 mb-8">
							Contact our expert data team today to start leveraging your operational data for massive value creation.
						</p>
						<div className="relative inline-block group">
  {/* BUTTON */}
  <div
    className={`${CTA_BG} ${CTA_TEXT} inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-xl shadow-xl transition duration-300 transform hover:scale-[1.02] cursor-pointer`}
  >
    <Mail className="w-6 h-6" /> Talk to a Data Scientist
  </div>

  {/* HOVER CONTACT CARD */}
  <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-300
                  bg-white rounded-xl shadow-2xl p-6 w-80 z-50">

    <h4 className="text-lg font-bold text-[#1B4D3E] mb-2">
      Contact Us
    </h4>

    <p className="text-gray-600 text-sm mb-4">
      Speak directly with our data science expert.
    </p>

    <div className="space-y-2 text-sm">
      <p>📧 contact@company.com</p>
      <p>📞 +91 98765 43210</p>
    </div>
  </div>
</div>

					</div>
				</section>

			</div>

			<div className="h-16" />

			<style>{`
				main { font-family: 'Inter', sans-serif; }
				.rounded-2xl { border-radius: 1rem; }
				.rounded-3xl { border-radius: 1.5rem; }
			`}</style>
		</main>
	);
}