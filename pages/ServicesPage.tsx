import React from 'react';
import { Hammer, Home, Ruler, HardHat, Building, PaintBucket, CheckCircle, Clock, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Home,
    title: "General Building",
    description: "Comprehensive building services for all types of construction projects with expert craftsmanship and attention to detail.",
    img: "/assets/mark_stewart_hallway_refurb.jpeg"
  },
  {
    icon: Hammer,
    title: "Fire and Flood Renovation",
    description: "Specialist restoration services to repair and restore properties damaged by fire or flood, returning them to their former glory."
  },
  {
    icon: Building,
    title: "Loft Conversions",
    description: "Unlock the potential of your attic. Creating master suites, offices, and additional bedrooms with expert design.",
    img: "/assets/mark_stewart_conversion_stairs_after.webp"
  },
  {
    icon: HardHat,
    title: "Project Management",
    description: "Complete project oversight from planning to completion, ensuring your build stays on time, on budget, and to specification."
  },
  {
    icon: Home,
    title: "Sustainable Construction",
    description: "Eco-friendly building solutions using sustainable materials and energy-efficient designs for a greener future."
  },
  {
    icon: Building,
    title: "Workshop Design / Construction",
    description: "Custom-built workshops tailored to your specific needs, from hobbyist spaces to professional working environments."
  },
  {
    icon: HardHat,
    title: "Foundations",
    description: "Expert foundation work ensuring solid, stable bases for all construction projects with proper groundwork and drainage."
  },
  {
    icon: Shield,
    title: "Insurance Claim Specialist",
    description: "Experienced in handling insurance-related repairs and renovations, working directly with insurers for seamless claims."
  },
  {
    icon: Ruler,
    title: "Structural Design",
    description: "Professional structural engineering and design services to ensure safety, compliance, and optimal building performance."
  },
  {
    icon: Hammer,
    title: "Demolition",
    description: "Safe and efficient demolition services for full or partial building removal, including site clearance and waste disposal."
  },
  {
    icon: Home,
    title: "New Builds",
    description: "Complete project management from foundation to finish. We build dream homes with uncompromising quality and craftsmanship.",
    img: "/assets/4-Holmwood-Farm-copy-e1759921061483.webp"
  },
  {
    icon: Ruler,
    title: "Extensions / Conversions",
    description: "Expand your living space seamlessly with single-story, double-story, and garage conversions that blend perfectly with existing structures.",
    img: "/assets/mark_steward_conversion_after.webp"
  },
  {
    icon: Building,
    title: "Period Property Restoration",
    description: "Specialist restoration of period and heritage properties, preserving character while integrating modern comforts.",
    img: "/assets/mark_stewart_house_refurb_after.jpeg"
  },
  {
    icon: PaintBucket,
    title: "Refurbishments",
    description: "Complete property refurbishment services, modernizing interiors and exteriors while maintaining structural integrity.",
    img: "/assets/mark_stewart_house_refurb_after_2.jpeg"
  },
  {
    icon: Hammer,
    title: "Property Maintenance / Repair",
    description: "Ongoing maintenance and repair services to keep your property in excellent condition year-round."
  },
  {
    icon: Building,
    title: "Garage Conversions",
    description: "Transform unused garage space into functional living areas, home offices, gyms, or additional bedrooms."
  },
  {
    icon: Award,
    title: "Heritage Property Specialist",
    description: "Expert conservation and restoration of listed and heritage buildings, respecting historical significance and regulations."
  },
  {
    icon: HardHat,
    title: "Structural Steels",
    description: "Installation of structural steel beams and supports for load-bearing alterations, extensions, and new builds."
  },
  {
    icon: Home,
    title: "Garden Studios",
    description: "Beautiful garden studio constructions for home offices, art studios, gyms, or guest accommodations."
  },
  {
    icon: Clock,
    title: "Emergency Builder Service",
    description: "24/7 emergency building services for urgent repairs, storm damage, and structural issues requiring immediate attention."
  }
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning craftsmanship with attention to every detail"
  },
  {
    icon: Clock,
    title: "On Time",
    description: "Projects delivered within agreed timelines and milestones"
  },
  {
    icon: Shield,
    title: "Guaranteed",
    description: "Comprehensive warranties and insurance-backed guarantees"
  },
  {
    icon: CheckCircle,
    title: "Quality",
    description: "Premium materials and skilled tradespeople on every project"
  }
];

const getServiceAnimation = (title: string) => {
  switch (title) {
    case "General Building":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <g className="blueprint-lines">
            <rect x="80" y="60" width="80" height="120" fill="none" stroke="#1e3a8a" strokeWidth="2" className="draw-line" style={{strokeDasharray: 400, strokeDashoffset: 400, animation: 'draw 3s ease-in-out infinite'}} />
            <rect x="160" y="60" width="80" height="120" fill="none" stroke="#1e3a8a" strokeWidth="2" className="draw-line" style={{strokeDasharray: 400, strokeDashoffset: 400, animation: 'draw 3s ease-in-out 0.3s infinite'}} />
            <rect x="240" y="60" width="80" height="120" fill="none" stroke="#1e3a8a" strokeWidth="2" className="draw-line" style={{strokeDasharray: 400, strokeDashoffset: 400, animation: 'draw 3s ease-in-out 0.6s infinite'}} />
            <line x1="80" y1="120" x2="320" y2="120" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4" className="draw-line" style={{strokeDasharray: 240, strokeDashoffset: 240, animation: 'draw 3s ease-in-out 0.9s infinite'}} />
          </g>
        </svg>
      );

    case "Fire and Flood Renovation":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path d="M50,200 Q100,180 150,200 T250,200 T350,200 L350,280 L50,280 Z" fill="url(#waterGrad)" className="wave-motion" />
          <circle cx="200" cy="150" r="40" fill="none" stroke="#1e3a8a" strokeWidth="2" className="pulse-ring" />
          <circle cx="200" cy="150" r="25" fill="none" stroke="#3b82f6" strokeWidth="2" className="pulse-ring-delayed" />
        </svg>
      );

    case "Loft Conversions":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,200 L200,100 L300,200 Z" fill="none" stroke="#1e3a8a" strokeWidth="2" className="draw-line" style={{strokeDasharray: 500, strokeDashoffset: 500, animation: 'draw 4s ease-in-out infinite'}} />
          <rect x="140" y="200" width="120" height="80" fill="none" stroke="#1e3a8a" strokeWidth="2" className="draw-line" style={{strokeDasharray: 400, strokeDashoffset: 400, animation: 'draw 4s ease-in-out 0.5s infinite'}} />
          <line x1="200" y1="140" x2="200" y2="100" stroke="#3b82f6" strokeWidth="2" className="arrow-up" />
          <polygon points="200,90 195,100 205,100" fill="#3b82f6" className="arrow-up" />
        </svg>
      );

    case "Project Management":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <line x1="50" y1="80" x2="350" y2="80" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="50" y1="130" x2="350" y2="130" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="50" y1="180" x2="350" y2="180" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="50" y1="230" x2="350" y2="230" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="80" cy="80" r="8" fill="#1e3a8a" className="check-appear" style={{animation: 'fadeIn 0.5s ease-in-out 1s forwards', opacity: 0}} />
          <circle cx="80" cy="130" r="8" fill="#1e3a8a" className="check-appear" style={{animation: 'fadeIn 0.5s ease-in-out 2s forwards', opacity: 0}} />
          <circle cx="80" cy="180" r="8" fill="#3b82f6" className="check-appear" style={{animation: 'fadeIn 0.5s ease-in-out 3s forwards', opacity: 0}} />
          <circle cx="80" cy="230" r="8" fill="#94a3b8" className="check-appear" style={{animation: 'fadeIn 0.5s ease-in-out 4s forwards', opacity: 0}} />
        </svg>
      );

    case "Sustainable Construction":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="60" fill="none" stroke="#1e3a8a" strokeWidth="2" className="pulse-slow" />
          <path d="M200,100 Q220,130 200,160 Q180,130 200,100" fill="#3b82f6" opacity="0.3" className="leaf-grow" />
          <path d="M200,160 L200,200" stroke="#1e3a8a" strokeWidth="3" />
          <rect x="150" y="200" width="100" height="60" fill="none" stroke="#1e3a8a" strokeWidth="2" />
        </svg>
      );

    case "Workshop Design / Construction":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="400" height="300" fill="url(#grid)" />
          <rect x="120" y="80" width="160" height="140" fill="none" stroke="#1e3a8a" strokeWidth="3" className="draw-line" style={{strokeDasharray: 600, strokeDashoffset: 600, animation: 'draw 4s ease-in-out infinite'}} />
          <line x1="140" y1="100" x2="260" y2="100" stroke="#3b82f6" strokeWidth="2" className="draw-line" style={{strokeDasharray: 120, strokeDashoffset: 120, animation: 'draw 4s ease-in-out 1s infinite'}} />
        </svg>
      );

    case "Foundations":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="80" y="200" width="240" height="20" fill="#1e3a8a" opacity="0.2" className="layer-build" style={{animation: 'slideUp 0.5s ease-in-out 0.5s forwards', transform: 'translateY(20px)'}} />
          <rect x="80" y="180" width="240" height="20" fill="#1e3a8a" opacity="0.3" className="layer-build" style={{animation: 'slideUp 0.5s ease-in-out 1s forwards', transform: 'translateY(20px)'}} />
          <rect x="80" y="160" width="240" height="20" fill="#3b82f6" opacity="0.4" className="layer-build" style={{animation: 'slideUp 0.5s ease-in-out 1.5s forwards', transform: 'translateY(20px)'}} />
          <rect x="100" y="100" width="200" height="60" fill="none" stroke="#1e3a8a" strokeWidth="3" className="layer-build" style={{animation: 'slideUp 0.5s ease-in-out 2s forwards', transform: 'translateY(20px)'}} />
        </svg>
      );

    case "Insurance Claim Specialist":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <path d="M200,80 L240,100 L240,160 Q240,200 200,220 Q160,200 160,160 L160,100 Z" fill="none" stroke="#1e3a8a" strokeWidth="3" className="draw-line" style={{strokeDasharray: 400, strokeDashoffset: 400, animation: 'draw 3s ease-in-out infinite'}} />
          <circle cx="200" cy="150" r="70" fill="none" stroke="#3b82f6" strokeWidth="1" className="pulse-slow" opacity="0.5" />
          <path d="M180,150 L195,165 L220,135" stroke="#1e3a8a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="draw-line" style={{strokeDasharray: 60, strokeDashoffset: 60, animation: 'draw 3s ease-in-out 1s infinite'}} />
        </svg>
      );

    case "Structural Design":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <line x1="100" y1="250" x2="100" y2="100" stroke="#1e3a8a" strokeWidth="2" className="draw-line" style={{strokeDasharray: 150, strokeDashoffset: 150, animation: 'draw 2s ease-in-out infinite'}} />
          <line x1="200" y1="250" x2="200" y2="80" stroke="#1e3a8a" strokeWidth="2" className="draw-line" style={{strokeDasharray: 170, strokeDashoffset: 170, animation: 'draw 2s ease-in-out 0.3s infinite'}} />
          <line x1="300" y1="250" x2="300" y2="120" stroke="#1e3a8a" strokeWidth="2" className="draw-line" style={{strokeDasharray: 130, strokeDashoffset: 130, animation: 'draw 2s ease-in-out 0.6s infinite'}} />
          <line x1="80" y1="100" x2="320" y2="100" stroke="#3b82f6" strokeWidth="2" className="draw-line" style={{strokeDasharray: 240, strokeDashoffset: 240, animation: 'draw 2s ease-in-out 0.9s infinite'}} />
          <circle cx="100" cy="100" r="5" fill="#1e3a8a" />
          <circle cx="200" cy="80" r="5" fill="#1e3a8a" />
          <circle cx="300" cy="120" r="5" fill="#1e3a8a" />
        </svg>
      );

    case "Demolition":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="100" y="120" width="60" height="80" fill="#1e3a8a" opacity="0.3" className="block-fall" style={{animation: 'fallDown 2s ease-in-out infinite'}} />
          <rect x="170" y="140" width="60" height="60" fill="#3b82f6" opacity="0.3" className="block-fall" style={{animation: 'fallDown 2s ease-in-out 0.3s infinite'}} />
          <rect x="240" y="100" width="60" height="100" fill="#1e3a8a" opacity="0.3" className="block-fall" style={{animation: 'fallDown 2s ease-in-out 0.6s infinite'}} />
          <line x1="50" y1="220" x2="350" y2="220" stroke="#64748b" strokeWidth="3" />
        </svg>
      );

    case "New Builds":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="120" y="180" width="160" height="80" fill="none" stroke="#1e3a8a" strokeWidth="2" className="build-up" style={{animation: 'buildUp 3s ease-in-out infinite'}} />
          <polygon points="200,100 280,180 120,180" fill="none" stroke="#1e3a8a" strokeWidth="2" className="build-up" style={{animation: 'buildUp 3s ease-in-out 0.5s infinite'}} />
          <rect x="160" y="220" width="30" height="40" fill="#3b82f6" opacity="0.3" />
          <rect x="210" y="220" width="30" height="40" fill="#3b82f6" opacity="0.3" />
        </svg>
      );

    case "Extensions / Conversions":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="100" y="120" width="100" height="100" fill="none" stroke="#1e3a8a" strokeWidth="2" />
          <rect x="200" y="120" width="100" height="100" fill="none" stroke="#3b82f6" strokeWidth="2" className="expand" style={{animation: 'expandOut 3s ease-in-out infinite'}} />
          <line x1="205" y1="170" x2="295" y2="170" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4" />
        </svg>
      );

    case "Period Property Restoration":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="120" y="140" width="160" height="120" fill="none" stroke="#1e3a8a" strokeWidth="2" />
          <polygon points="200,80 280,140 120,140" fill="none" stroke="#1e3a8a" strokeWidth="2" />
          <rect x="160" y="200" width="30" height="60" fill="none" stroke="#3b82f6" strokeWidth="2" />
          <rect x="210" y="200" width="30" height="60" fill="none" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="150" cy="170" r="8" fill="none" stroke="#1e3a8a" strokeWidth="1" />
          <circle cx="250" cy="170" r="8" fill="none" stroke="#1e3a8a" strokeWidth="1" />
          <line x1="200" y1="80" x2="200" y2="60" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="200" cy="50" r="8" fill="none" stroke="#3b82f6" strokeWidth="2" className="pulse-slow" />
        </svg>
      );

    case "Refurbishments":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="80" fill="none" stroke="#1e3a8a" strokeWidth="2" className="rotate-slow" />
          <circle cx="200" cy="150" r="60" fill="none" stroke="#3b82f6" strokeWidth="2" className="rotate-reverse" />
          <path d="M200,90 L200,70 M210,95 L225,85" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "Property Maintenance / Repair":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="120" y="100" width="160" height="120" fill="none" stroke="#1e3a8a" strokeWidth="2" />
          <path d="M180,140 L170,150 L190,150 L180,140 M180,150 L180,180" stroke="#3b82f6" strokeWidth="3" className="pulse-slow" />
          <circle cx="230" cy="160" r="20" fill="none" stroke="#1e3a8a" strokeWidth="2" className="rotate-slow" />
          <line x1="230" y1="160" x2="245" y2="160" stroke="#1e3a8a" strokeWidth="2" />
        </svg>
      );

    case "Garage Conversions":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="100" y="120" width="120" height="100" fill="none" stroke="#1e3a8a" strokeWidth="2" />
          <rect x="110" y="160" width="100" height="60" fill="#1e3a8a" opacity="0.1" className="fade-out" style={{animation: 'fadeOutTransform 3s ease-in-out infinite'}} />
          <rect x="230" y="120" width="70" height="100" fill="none" stroke="#3b82f6" strokeWidth="2" className="expand" style={{animation: 'expandOut 3s ease-in-out infinite'}} />
        </svg>
      );

    case "Heritage Property Specialist":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <polygon points="200,70 120,130 120,230 280,230 280,130" fill="none" stroke="#1e3a8a" strokeWidth="2" />
          <rect x="180" y="190" width="40" height="40" fill="none" stroke="#1e3a8a" strokeWidth="2" />
          <polygon points="200,60 140,100 260,100" fill="none" stroke="#3b82f6" strokeWidth="2" />
          <line x1="200" y1="60" x2="200" y2="40" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="200" cy="30" r="8" fill="#3b82f6" className="pulse-slow" />
          <rect x="140" y="150" width="25" height="35" fill="none" stroke="#1e3a8a" strokeWidth="1" />
          <rect x="235" y="150" width="25" height="35" fill="none" stroke="#1e3a8a" strokeWidth="1" />
        </svg>
      );

    case "Structural Steels":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <line x1="100" y1="150" x2="300" y2="150" stroke="#1e3a8a" strokeWidth="4" className="draw-line" style={{strokeDasharray: 200, strokeDashoffset: 200, animation: 'draw 2s ease-in-out infinite'}} />
          <line x1="150" y1="100" x2="150" y2="200" stroke="#3b82f6" strokeWidth="4" className="draw-line" style={{strokeDasharray: 100, strokeDashoffset: 100, animation: 'draw 2s ease-in-out 0.5s infinite'}} />
          <line x1="250" y1="100" x2="250" y2="200" stroke="#3b82f6" strokeWidth="4" className="draw-line" style={{strokeDasharray: 100, strokeDashoffset: 100, animation: 'draw 2s ease-in-out 0.7s infinite'}} />
          <rect x="145" y="145" width="10" height="10" fill="#1e3a8a" />
          <rect x="245" y="145" width="10" height="10" fill="#1e3a8a" />
        </svg>
      );

    case "Garden Studios":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="150" y="140" width="100" height="80" fill="none" stroke="#1e3a8a" strokeWidth="2" />
          <polygon points="200,100 250,140 150,140" fill="none" stroke="#1e3a8a" strokeWidth="2" />
          <path d="M100,200 Q100,180 110,175 T130,175" stroke="#3b82f6" strokeWidth="2" fill="none" className="leaf-grow" />
          <path d="M300,210 Q300,190 290,185 T270,185" stroke="#3b82f6" strokeWidth="2" fill="none" className="leaf-grow" />
          <circle cx="115" cy="170" r="8" fill="#3b82f6" opacity="0.3" className="pulse-slow" />
          <circle cx="285" cy="180" r="8" fill="#3b82f6" opacity="0.3" className="pulse-slow" />
        </svg>
      );

    case "Emergency Builder Service":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="60" fill="none" stroke="#1e3a8a" strokeWidth="2" className="pulse-fast" />
          <circle cx="200" cy="150" r="40" fill="none" stroke="#3b82f6" strokeWidth="2" className="pulse-fast-delayed" />
          <path d="M200,110 L190,150 L210,145 L200,190" stroke="#1e3a8a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="200" cy="150" r="80" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" className="pulse-fast" />
        </svg>
      );

    default:
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="120" y="100" width="160" height="120" fill="none" stroke="#1e3a8a" strokeWidth="2" className="draw-line" style={{strokeDasharray: 560, strokeDashoffset: 560, animation: 'draw 4s ease-in-out infinite'}} />
        </svg>
      );
  }
};

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-24 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Building Services in Deal & Dover
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-8"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            From groundbreaking to final touches, we deliver exceptional construction services across Deal, Dover, and the wider Kent area.
          </p>
        </div>
      </div>

      {services.map((service, index) => (
        <section
          key={index}
          className={`py-16 px-6 sm:px-12 lg:px-24 ${
            index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              index % 2 === 0 ? '' : 'lg:flex-row-reverse'
            }`}>
              <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                    <service.icon size={28} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue">
                    {service.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg shadow-lg overflow-hidden relative">
                  {getServiceAnimation(service.title)}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl">
              Why Choose M E Stewart
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue"></div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue text-white">
                    <item.icon size={36} />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold uppercase text-brand-darkBlue">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-brand-darkBlue text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold uppercase sm:text-5xl">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-xl leading-relaxed opacity-90">
            Get in touch today for a free consultation and quote. Let's bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-brand-blue text-white lg:hover:bg-white lg:hover:text-brand-darkBlue shadow-lg lg:hover:shadow-2xl"
          >
            Get A Free Quote
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        @keyframes draw {
          0% {
            stroke-dashoffset: var(--dasharray, 400);
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: var(--dasharray, 400);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
        }

        .pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }

        .pulse-ring-delayed {
          animation: pulse-ring 2s ease-in-out 0.5s infinite;
        }

        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .wave-motion {
          animation: wave 3s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes pulse-fast {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.15);
          }
        }

        .pulse-fast {
          animation: pulse-fast 1.5s ease-in-out infinite;
        }

        .pulse-fast-delayed {
          animation: pulse-fast 1.5s ease-in-out 0.3s infinite;
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fallDown {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.5;
          }
        }

        .block-fall {
          animation: fallDown 2s ease-in-out infinite;
        }

        @keyframes buildUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          50%, 100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandOut {
          0%, 100% {
            transform: scaleX(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        .expand {
          transform-origin: left center;
        }

        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .rotate-slow {
          animation: rotate-slow 8s linear infinite;
          transform-origin: center;
        }

        @keyframes rotate-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .rotate-reverse {
          animation: rotate-reverse 6s linear infinite;
          transform-origin: center;
        }

        @keyframes fadeOutTransform {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 0.3;
          }
        }

        @keyframes leaf-grow {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        .leaf-grow {
          animation: leaf-grow 3s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes arrow-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .arrow-up {
          animation: arrow-float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
