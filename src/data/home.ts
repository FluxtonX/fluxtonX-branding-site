import { Layers, BrainCircuit, Banknote, HeartPulse, ShoppingBag, Landmark, Truck, Smartphone, Cpu, Laptop, Palette, Activity, Sparkles, Rocket } from "lucide-react";
import serviceAi from "@/assets/service-ai-platforms.png";
import serviceMobile from "@/assets/service-mobile-dev.png";
import serviceSaas from "@/assets/service-saas.png";
import serviceFintech from "@/assets/service-fintech.png";
import serviceAutomation from "@/assets/service-automation.png";
import serviceWeb from "@/assets/service-web-platforms.png";
import serviceUiux from "@/assets/service-uiux.png";

export const services = [
  { slug: "ai-platforms", icon: BrainCircuit, image: serviceAi, title: "AI-powered platforms", desc: "Building intelligent systems that leverage machine learning and automation to solve complex business challenges." },
  { slug: "mobile-dev", icon: Smartphone, image: serviceMobile, title: "Mobile application development", desc: "Creating high-performance, cross-platform mobile apps using Flutter and modern frameworks." },
  { slug: "saas-engineering", icon: Layers, image: serviceSaas, title: "SaaS product engineering", desc: "Engineering scalable and resilient SaaS products designed for long-term growth and high user concurrency." },
  { slug: "fintech-systems", icon: Banknote, image: serviceFintech, title: "Fintech and payment systems", desc: "Developing secure and compliant financial technology solutions and seamless payment integrations." },
  { slug: "enterprise-automation", icon: Cpu, image: serviceAutomation, title: "Enterprise workflow automation", desc: "Streamlining business operations through custom automation and intelligent workflow orchestration." },
  { slug: "web-platforms", icon: Laptop, image: serviceWeb, title: "Web platforms and dashboards", desc: "Designing and building robust web applications and data-driven dashboards for enterprise scale." },
  { slug: "uiux-architecture", icon: Palette, image: serviceUiux, title: "UI/UX design and scalable architectures", desc: "Combining premium user experiences with clean, maintainable, and scalable system architectures." },
];

export const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "5+", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
];

export const industries = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Activity, label: "Fitness" },
  { icon: Truck, label: "Logistics" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: Landmark, label: "Enterprise Operations" },
  { icon: Sparkles, label: "AI Systems" },
  { icon: Rocket, label: "On-demand Services" },
];

export const clients = ["NovaBank", "HealthCore", "RetailX", "Meridian", "PrimeOps", "OrbitNet", "CivicAI", "Lumina", "Vertex", "Apex"];

export const testimonials = [
  { quote: "FluxtonX transformed our legacy infrastructure into a high-performance cloud ecosystem. Their attention to architectural precision and security was unlike anything we've seen from other vendors.", name: "Daniel Hayes", role: "CTO, NovaBank" },
  { quote: "Working with FluxtonX felt less like outsourcing and more like an extension of our own engineering team. Outcomes were measurable from day one.", name: "Priya Nair", role: "VP Engineering, HealthCore" },
  { quote: "Their applied intelligence practice unlocked insights we didn't know existed in our data. Genuine business impact within a quarter.", name: "Marcus Lee", role: "Chief Data Officer, RetailX" },
];

export const posts = [
  { title: "The Future of Generative AI in Enterprise Workflows", category: "AI & Engineering", img: "/src/assets/blog-1.webp" },
  { title: "Multi-Cloud vs Hybrid: Finding the Right Balance", category: "Cloud Engineering", img: "/src/assets/blog-2.webp" },
  { title: "Zero Trust: The New Foundation of Digital Security", category: "Cybersecurity", img: "/src/assets/blog-3.webp" },
];
