import {
  Box,
  Workflow,
  Cpu,
  Mountain,
  Leaf,
  Code,
  Briefcase,
  Users,
  Award,
  Brain,
  TrendingUp,
} from "lucide-react";
import { asset } from "../utils/asset";

export const products = [
  {
    icon: Box,
    name: "SandMaster",
    tagline: "Advanced Sand Management",
    description:
      "Comprehensive software solution for sand management in oil and gas operations. Monitor, predict, and optimize sand control strategies with real-time analytics.",
    features: [
      "Real-time sand production monitoring",
      "Predictive analytics",
      "Automated reporting",
      "Risk assessment tools",
    ],
    video:
      "https://player.vimeo.com/video/637143154?autoplay=1&muted=1&loop=1&background=1",
  },
  {
    icon: Workflow,
    name: "AutoWellz",
    tagline: "Well Operation Workflow",
    description:
      "Streamline your well operations with automated workflow management. From planning to execution, manage every aspect efficiently.",
    features: [
      "Workflow automation",
      "Real-time collaboration",
      "Document management",
      "Compliance tracking",
    ],
    video:
      "https://player.vimeo.com/video/686737424?autoplay=1&muted=1&loop=1&background=1",
  },
  {
    icon: Cpu,
    name: "AutoPro",
    tagline: "Engineering Process Digitization",
    description:
      "Transform your engineering processes with digital solutions. Automate routine tasks, enhance accuracy, and improve efficiency.",
    features: [
      "Process automation",
      "Digital workflows",
      "Data integration",
      "Performance optimization",
    ],
    // IMPORTANT: Ensure file exists at public/videos/autopro.mp4
    video: asset("/video/autopro.mp4"),
  },
  {
    icon: Mountain,
    name: "RockMaster",
    tagline: "Rock Mechanical Stability",
    description:
      "Advanced rock mechanics analysis tool for evaluating wellbore stability, formation integrity, and geomechanical risks.",
    features: [
      "Wellbore stability analysis",
      "Geomechanical modeling",
      "Risk prediction",
      "Formation evaluation",
    ],
    video:
      "https://player.vimeo.com/video/637143154?autoplay=1&muted=1&loop=1&background=1",
  },
  {
    icon: Leaf,
    name: "GREEN",
    tagline: "GHG Emissions Calculator",
    description:
      "Calculate, track, and reduce your carbon footprint with our comprehensive emissions calculator.",
    features: [
      "Emissions calculation",
      "Carbon footprint tracking",
      "Sustainability reporting",
      "Reduction strategies",
    ],
     video:
      "https://player.vimeo.com/video/686737424?autoplay=1&muted=1&loop=1&background=1",
  },
];

export const services = [
  {
    id:1,
    icon: Code,
    title: "Software Engineering",
    description: "Customized software solutions tailored to industry needs.",
  },
  {
    id:2,
    icon: Briefcase,
    title: "Oil and Gas Consultancy",
    description: "Expert consultancy services with global engineering team.",
  },
  {
    id:3,
    icon: Users,
    title: "Customized Training",
    description: "Professional training programs for industry professionals.",
  },
  {
    id: 4,
    icon: Brain, // make sure to import Brain from lucide-react
    title: "AI & ML Solutions",
    description: "Intelligent AI and machine learning solutions to drive automation, insights, and innovation.",
  },
 
];

export const newsEvents = [
  {
    title: "Greenfield Energy at SPE Conference 2025",
    date: "March 15, 2025",
    location: "Abu Dhabi",
    description:
      "Presented our latest research on production optimization and carbon reduction strategies.",
    image:
      "https://images.pexels.com/photos/247318/pexels-photo-247318.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "New Training Program for Reservoir Engineers",
    date: "January 28, 2025",
    location: "Online",
    description:
      "Launched a comprehensive training series for young professionals in the oil and gas industry.",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Partnership for Sustainable Energy",
    date: "December 10, 2024",
    location: "Global",
    description:
      "Announced a strategic partnership to deliver integrated sustainability solutions.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const blogPosts = [
  {
    title:
      "Driving Sustainability in India: Revolutionizing Carbon Footprint Calculation Software with GREEN",
    category: "Sustainability",
    readTime: "10 min read",
    date: "May 1, 2024",
    comments: "Gots No Comments",
    image: "/images/blog/1.jpg",
    description:
      "How GREEN is transforming sustainability in India with accurate emission factors, LCA solutions, and unified sector-wide carbon accounting.",
    content: `
      <p>
        In the quest for a greener, more sustainable future, businesses and individuals alike are increasingly turning to innovative tools to measure and mitigate their carbon footprints. Enter our cutting-edge carbon footprint calculation software, uniquely tailored for the Indian market. With its extensive emission factor database, country-specific insights, and advanced features, GREEN is set to transform sustainability efforts across industries. Let’s explore how:
      </p>

      <h3>Country-Specific Emission Factors</h3>
      <p>
        One of the standout features of our carbon footprint calculation software is its extensive database of emission factors tailored specifically for India. By incorporating region-specific data on energy consumption, transportation, industrial processes, and more, GREEN provides unparalleled accuracy in carbon footprint assessments. Whether you’re a local business or a multinational corporation operating in India, you can rely on our software to deliver precise insights into your environmental impact.
      </p>

      <h3>Scope 1, 2, and 3 Emissions Calculation</h3>
      <p>
        Our software goes beyond conventional carbon footprinting by encompassing emissions across all three scopes as defined by the Greenhouse Gas Protocol. From direct emissions (Scope 1) to indirect emissions from purchased electricity (Scope 2) and supply chain activities (Scope 3), our comprehensive approach ensures that users gain a holistic understanding of their carbon impact. This enables organizations to prioritize emission reduction efforts and align with global sustainability goals.
      </p>

      <h3>Wide Range of Conversion Factors and Units</h3>
      <p>
        With a diverse array of conversion factors and units for emission calculation, GREEN caters to the unique needs of various industries and applications. From metric tons of CO2 equivalents to kilograms of methane or nitrous oxide, our software supports multiple units for emissions quantification. This flexibility allows users to conduct analyses across different sectors and seamlessly integrate with existing reporting frameworks.
      </p>

      <h3>Unified Sector-Wide Emission Calculation</h3>
      <p>
        In addition to its comprehensive suite of features, GREEN offers the unique advantage of calculating emissions across all sectors, all within a single platform. Whether you’re in manufacturing, transportation, agriculture, or any other industry, our software provides a centralized hub for conducting carbon footprint assessments. This integrated approach streamlines the process, eliminating the need for multiple tools or disparate systems. By consolidating emissions data from diverse sectors, organizations gain a holistic view of their environmental impact, enabling them to develop targeted mitigation strategies and drive sustainable practices across their entire operations. With GREEN, managing emissions across all sectors has never been easier or more efficient.
      </p>

      <h3>Comprehensive LCA Solutions</h3>
      <p>
        Beyond carbon footprinting, GREEN offers comprehensive Life Cycle Assessment (LCA) solutions, allowing users to evaluate the environmental impacts of products, processes, or services from cradle to grave. By analyzing the entire life cycle, including raw material extraction, production, use, and disposal, organizations can identify areas for improvement and implement targeted sustainability initiatives to minimize their ecological footprint.
      </p>

      <h3>Advanced Data Visualization</h3>
      <p>
        Visualizing complex environmental data is crucial for effective decision-making. That’s why GREEN features advanced data visualization tools that transform raw emissions data into intuitive graphs, charts, and interactive dashboards. Whether it’s tracking emission trends over time, identifying hotspots, or communicating sustainability performance to stakeholders, our visualization capabilities make data interpretation effortless and insightful.
      </p>

      <h3>User-Friendly Interface and Reporting</h3>
      <p>
        We understand that sustainability professionals and decision-makers need intuitive tools to drive meaningful change effectively. That’s why GREEN features a user-friendly interface with intuitive navigation and robust reporting capabilities. Whether you’re generating carbon footprint reports for internal stakeholders, regulatory compliance, or corporate sustainability disclosures, our software streamlines the process, saving time and resources while enhancing transparency and accountability.
      </p>

      <h3>Scalable and Customizable Solutions</h3>
      <p>
        GREEN offers scalable and customizable solutions to meet the evolving needs of organizations, irrespective of size or sector. Whether it’s a small business seeking basic carbon accounting or a multinational corporation requiring advanced LCA modeling, GREEN adapts to diverse requirements. With customizable features and flexible deployment options, organizations can tailor their sustainability efforts and drive meaningful change effectively.
      </p>

      <h3>Conclusion: Empowering Sustainability in India and Beyond</h3>
      <p>
        As India continues its journey towards sustainable development, our carbon footprint calculation software emerges as a catalyst for positive change. By harnessing the power of data-driven insights, advanced LCA capabilities, and comprehensive emissions accounting, businesses and individuals can reduce their environmental impact, drive efficiency gains, and contribute to a healthier planet for future generations. Join us in revolutionizing sustainability practices in India and beyond with our innovative software solution. Together, we can build a more sustainable and resilient world for all.
      </p>
    `,
  },

  {
    title: "The Silent Revolution in Field Operations",
    category: "Field Operations",
    readTime: "6 min read",
    date: "10 May 2025",
    comments: "No Comments",
    image: asset("/images/blog/2.png"),
    description:
      "How AI-driven predictive maintenance is quietly reshaping drilling and exploration operations.",
    content: `
      <h2>The Silent Revolution in Field Operations</h2>
      <p>
        Out on the drilling sites, AI is working quietly but powerfully. This is the realm of Predictive Maintenance, the application that is arguably delivering the fastest and most measurable returns.
      </p>

      <p>
        Imagine thousands of sensors constantly monitoring equipment health — vibration, temperature, and pressure — with algorithms that spot patterns invisible to the human eye. These systems can predict maintenance needs with startling accuracy, helping companies reduce costly downtime by nearly half. The implications are enormous, not just for efficiency and cost control, but for fundamental safety too, preventing catastrophic failures before they occur.
      </p>

      <p>
        Meanwhile, exploration teams are achieving what was once thought impossible. Complex geological data that traditionally took months to analyze and interpret? AI can now process it in hours, while actually improving accuracy. It’s like giving geologists a superpower — the ability to see through rock and time with unprecedented clarity, significantly reducing the financial risk of drilling “dry wells.”
      </p>
    `,
  },

  {
    title:
      "The $100 Million Algorithm: Why Oil & Gas Companies Are Betting Their Future on AI",
    category: "Artificial Intelligence",
    readTime: "8 min read",
    date: "12 May 2025",
    comments: "No Comments",
    image: asset("/images/blog/3.png"),
    description:
      "Why AI is becoming the most valuable algorithm in Oil & Gas operations worldwide.",
    content: `
      <h3>Meta Title:</h3>
      <p>The $100 Million Algorithm: AI's True Impact on Oil & Gas Efficiency</p>

      <h3>Meta Description:</h3>
      <p>
        AI is the $100 Million algorithm for O&G. Predictive maintenance, enhanced exploration, and autonomous operations lead directly to 30–70% profit improvements.
      </p>

      <p>
        Imagine this: The drill suddenly tells you it needs fixing, hours before it actually breaks down. Or, the geologist looks at months of underground scanning data and gets the answer in just a few hours. This isn't something for the future—it's what oil and gas companies are doing right now.
      </p>

      <p><strong>And the catalyst?</strong> Artificial Intelligence.</p>

      <p>
        The industry is rapidly discovering that the right algorithms aren't just incremental improvements; they are massive new revenue streams, safety protocols, and efficiency gains — hence the $100 Million Algorithm.
      </p>

      <p>
        But what does this transformation actually look like on the ground? How are these digital tools reshaping one of the world's most vital, high-stakes industries? The answers might surprise you.
      </p>
    `,
  },
];



export const partnerLogos = [
  asset("/images/NSP.png"),
  asset("/images/GoldenGateBridge.png"),
  asset("/images/UGreen.jpg"),
  asset("/images/HOPON.png"),
  asset("/images/AdreeEnergy.jpg"),
  asset("/images/partners/P1.png"),
];

export const statsData = [
  { icon: Briefcase, label: "Successful Projects", value: 15, unit: "+" },
  { icon: Users, label: "Happy Clients", value: 10, unit: "+" },
  { icon: Award, label: "Years Experience", value: 9, unit: "+" },
  { icon: TrendingUp, label: "Carbon Reduction", value: 344, unit: " MT" },
];