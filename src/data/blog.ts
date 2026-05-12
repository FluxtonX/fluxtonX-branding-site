import b1 from "@/assets/blog-feat.webp";
import b2 from "@/assets/blog-chip.webp";
import b3 from "@/assets/blog-2.webp";
import b4 from "@/assets/blog-1.webp";
import b5 from "@/assets/blog-sun.webp";
import b6 from "@/assets/blog-3.webp";
import caseEnergy from "@/assets/case-energy.webp";

export const tabs = ["All", "AI", "Mobile", "Web", "Cloud", "Design", "Business"];

export interface Article {
  slug: string;
  img: string;
  cat: string;
  read: string;
  title: string;
  desc: string;
  author: string;
  date: string;
  category: string; // The filter category
  content?: string[]; // Optional content for detail page
}

export const articles: Article[] = [
  { 
    slug: "generative-governance", 
    img: b1, 
    cat: "AI & Automation", 
    read: "12 min read", 
    title: "Generative Governance: A New Framework for Enterprise AI", 
    desc: "Establishing guardrails for generative technology within highly regulated financial environments requires more than just speed.", 
    author: "Sarah Chen", 
    date: "Oct 24",
    category: "AI",
    content: [
      "The rapid adoption of generative AI has outpaced traditional governance structures, leaving enterprises exposed to significant risk.",
      "A robust framework must prioritize data lineage, algorithmic transparency, and human-in-the-loop validation.",
      "At FluxtonX, we've developed the 'SecureAI' methodology to ensure that innovation doesn't come at the cost of compliance."
    ]
  },
  { 
    slug: "quantum-banking", 
    img: b2, 
    cat: "Financial Services", 
    read: "8 min read", 
    title: "The Ledger of Tomorrow: Quantum Resistance in Banking", 
    desc: "Preparing global financial systems for the quantum computing shift through cryptographic resilience and architecture.", 
    author: "Marcus Thorne", 
    date: "Oct 18",
    category: "Business",
    content: [
      "Quantum computing threatens the very foundation of modern banking: cryptography.",
      "Post-quantum cryptographic standards are no longer a theoretical exercise but a strategic necessity.",
      "We examine how top-tier banks are architecting their ledgers to be resistant to tomorrow's computing power."
    ]
  },
  { 
    slug: "hybrid-by-design", 
    img: b3, 
    cat: "Cloud Architecture", 
    read: "15 min read", 
    title: "Hybrid by Design: Why the Public Cloud Isn't the Only Answer", 
    desc: "Analyzing the cost-performance ratio of multi-cloud strategies for high-frequency trading platforms and large-scale data.", 
    author: "Elena Rodriguez", 
    date: "Oct 12",
    category: "Cloud",
    content: [
      "The rush to the public cloud has led to unforeseen egress costs and latency issues for data-intensive applications.",
      "A hybrid approach allows for the flexibility of the cloud while maintaining the control of on-premise infrastructure.",
      "Strategic placement of workloads is the key to optimizing both performance and OpEx."
    ]
  },
  { 
    slug: "systematic-elegance", 
    img: b4, 
    cat: "Design & UX", 
    read: "9 min read", 
    title: "Systematic Elegance: Building Design Systems for Scale", 
    desc: "Moving beyond UI kits to create living design ecosystems that empower thousands of developers across global teams.", 
    author: "Thomas Kahl", 
    date: "Oct 05",
    category: "Design",
    content: [
      "Design systems are often treated as static documentation, which leads to drift and inconsistency.",
      "True systematic elegance comes from integrating design tokens directly into the CI/CD pipeline.",
      "Empowering developers with a unified language reduces time-to-market and improves user trust."
    ]
  },
  { 
    slug: "sustainable-digital", 
    img: b5, 
    cat: "Business Strategy", 
    read: "10 min read", 
    title: "Sustainable Digitalization: The ROI of Green Tech", 
    desc: "How environmental responsibility is becoming a primary driver for technological investment and competitive positioning.", 
    author: "Linda Wu", 
    date: "Sep 29",
    category: "Business",
    content: [
      "ESG metrics are now a critical factor in investment decisions and corporate reputation.",
      "Green technology isn't just about saving the planet; it's about reducing long-term energy costs and improving efficiency.",
      "We explore the intersection of digital transformation and environmental sustainability."
    ]
  },
  { 
    slug: "beyond-the-browser", 
    img: b6, 
    cat: "Mobile Solutions", 
    read: "8 min read", 
    title: "Beyond the Browser: The Resurgence of Native Excellence", 
    desc: "Why high-stakes user interactions still demand the performance and security of native mobile development over web-first.", 
    author: "Arthur Miller", 
    date: "Sep 22",
    category: "Mobile",
    content: [
      "Web technologies have come a long way, but native apps still offer superior access to device hardware and smoother UX.",
      "For high-security applications, native code provides a more robust sandbox environment.",
      "The choice between native and web should be driven by user needs, not developer convenience."
    ]
  },
  { 
    slug: "architects-dilemma", 
    img: caseEnergy, 
    cat: "Enterprise Strategy", 
    read: "18 min read", 
    title: "The Architect's Dilemma: Balancing Agility with Legacy Stability", 
    desc: "Modern enterprises face the critical challenge of upgrading core infrastructure without disrupting global operations.", 
    author: "Julien Devereaux", 
    date: "Sep 15",
    category: "Business",
    content: [
      "In the current global economic landscape, digital transformation is no longer a peripheral objective but a fundamental requirement for institutional survival.",
      "As enterprises scale, the complexity of their legacy systems often acts as a friction point, slowing down innovation and increasing operational risk.",
      "True architectural precision isn't about the speed of movement, but the integrity of the system during transition."
    ]
  },
  { 
    slug: "web3-enterprise", 
    img: b2, 
    cat: "Web Technology", 
    read: "11 min read", 
    title: "Web3 in the Enterprise: Beyond the Hype", 
    desc: "Exploring practical applications of decentralized protocols in supply chain and identity management.", 
    author: "Sarah Chen", 
    date: "Sep 10",
    category: "Web",
    content: [
      "Decentralized ledger technology is finding its feet in enterprise supply chain management.",
      "Beyond the volatility of public blockchains, private and permissioned networks offer real value.",
      "Identity management is the next frontier for Web3 adoption in the corporate world."
    ]
  },
  { 
    slug: "ai-driven-security", 
    img: b4, 
    cat: "AI & Security", 
    read: "14 min read", 
    title: "AI-Driven Security: Proactive Threat Mitigation", 
    desc: "Using machine learning to predict and neutralize threats before they penetrate the network perimeter.", 
    author: "Marcus Thorne", 
    date: "Sep 05",
    category: "AI",
    content: [
      "Traditional perimeter defense is no longer sufficient in a world of persistent and advanced threats.",
      "AI allows for the analysis of trillions of signals in real-time to identify anomalous behavior.",
      "Proactive mitigation is the only way to stay ahead of the ever-evolving threat landscape."
    ]
  }
];
