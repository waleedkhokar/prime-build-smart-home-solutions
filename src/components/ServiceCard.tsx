'use client';

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    color: string;
  };
  index: number;
}

const ServiceCard = ({ service}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200`}></div>
      
      <div className="relative bg-white rounded-3xl p-8 h-full border border-gray-100">
        {/* Icon with gradient */}
        <div className={`relative inline-block p-4 rounded-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300 ${
          isHovered ? `bg-gradient-to-br ${service.color}` : 'bg-gray-50'
        }`}>
          <Icon className={`w-10 h-10 ${
            isHovered ? 'text-white' : `text-gradient bg-gradient-to-br ${service.color} bg-clip-text text-transparent`
          }`} />
          <div className="absolute -inset-1 bg-gradient-to-br from-white/50 to-transparent rounded-2xl blur-md"></div>
        </div>
        
        {/* Title */}
        <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          {service.description}
        </p>
        
        {/* Features */}
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
              <span className="text-gray-700 font-medium">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Button */}
        <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
          isHovered 
            ? `bg-gradient-to-r ${service.color} text-white shadow-xl transform -translate-y-1`
            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
        }`}>
          <span>Learn More</span>
          <ChevronRight className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-2' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;