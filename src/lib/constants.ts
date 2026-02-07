import { 
  Droplets, 
  Zap, 
  Square, 
  Hammer, 
  Paintbrush, 
  Home, 
  Settings,
  Wrench,
  Shield,
  Clock,
  Award,
  Users,
  MapPin,
  DollarSign,
  CheckCircle,
  Phone,
  MessageSquare,
  Mail,
  Calendar,
  ChevronRight,
  Utensils,  // For kitchen icon
  Bath,      // For washroom icon
  Sparkles   // Added for sparkles icon
} from 'lucide-react';

export const services = [
  {
    id: 1,
    icon: Droplets,
    title: 'Plumbing Services',
    description: 'Complete plumbing solutions with leak-proof fittings and modern water systems.',
    features: ['Pipe installation & repair', 'Leak fixing', 'Water tank & motor fitting', 'Drainage solutions'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    icon: Zap,
    title: 'Electrical Work',
    description: 'Safe electrical installations with certified materials and safety standards.',
    features: ['New wiring & rewiring', 'Switches & sockets', 'Load management', 'Fault fixing'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 3,
    icon: Square,
    title: 'Tiles & Marble',
    description: 'Precision tile and marble work with perfect alignment and waterproofing.',
    features: ['Floor & wall tiles', 'Marble & granite', 'Leveling & alignment', 'Waterproofing'],
    color: 'from-gray-600 to-gray-800'
  },
  {
    id: 4,
    icon: Utensils,  // Changed from Kitchen to Utensils
    title: 'Kitchen Setup',
    description: 'Modern kitchen designs with efficient storage and premium finishes.',
    features: ['Kitchen cabinets', 'Countertops', 'Plumbing & electrical', 'Finishing'],
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 5,
    icon: Bath,  // Changed from Wrench to Bath for washroom
    title: 'Washroom Fitting',
    description: 'Complete washroom solutions with waterproofing and modern fixtures.',
    features: ['Sanitary installation', 'Shower fittings', 'Waterproofing', 'Tiling'],
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 6,
    icon: Hammer,
    title: 'Carpentry Work',
    description: 'Custom woodwork with durable materials and expert craftsmanship.',
    features: ['Doors & windows', 'Cabinets & shelves', 'Wardrobes', 'Polishing'],
    color: 'from-amber-700 to-yellow-600'
  },
  {
    id: 7,
    icon: Paintbrush,
    title: 'Paint & Polish',
    description: 'Professional painting with smooth finishes and color consultation.',
    features: ['Interior/exterior paint', 'Wall texture', 'Wood polish', 'Color schemes'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 8,
    icon: Home,
    title: 'Interior Work',
    description: 'Modern interior designs that blend elegance with functionality.',
    features: ['Ceiling designs', 'Wall panels', 'Lighting layout', 'Space optimization'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 9,
    icon: Settings,
    title: 'Custom Solutions',
    description: 'Tailored home solutions based on your specific needs and budget.',
    features: ['Personalized planning', 'Budget management', 'Expert consultation', 'Complete solutions'],
    color: 'from-green-500 to-emerald-500'
  }
];

export const projects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    category: 'Kitchen Setup',
    location: 'Islamabad',
    description: 'Complete kitchen makeover with custom cabinets and smart storage.',
    image: '/projects/Kitchen.jfif', // Your 1st image
    imageColor: 'from-amber-400 to-orange-500'
  },
  {
    id: 2,
    title: 'Luxury Bathroom Remodel',
    category: 'Washroom Fitting',
    location: 'Rawalpindi',
    description: 'Premium bathroom with imported fittings and waterproofing.',
    image: '/projects/washroom.jpg', // Your 2nd image
    imageColor: 'from-blue-400 to-cyan-500'
  },
  {
    id: 3,
    title: 'Complete Home Electrical',
    category: 'Electrical',
    location: 'Islamabad',
    description: 'Safe electrical wiring for 4-bedroom house with smart switches.',
    image: '/projects/tv.jpg', // Your 3rd image
    imageColor: 'from-yellow-400 to-orange-400'
  },
  {
    id: 4,
    title: 'Living Room Interior',
    category: 'Interior Work',
    location: 'Rawalpindi',
    description: 'Modern interior with custom furniture and accent lighting.',
    image: '/projects/lauch.jpg', // Your 4th image
    imageColor: 'from-purple-400 to-pink-500'
  },
  {
    id: 5,
    title: 'Marble Flooring Project',
    category: 'Tiles & Marble',
    location: 'Islamabad',
    description: 'Italian marble flooring with precise installation.',
    image: '/projects/tile1.jpg', // Your 5th image
    imageColor: 'from-gray-400 to-gray-600'
  },
  {
    id: 6,
    title: 'Custom Wardrobe Setup',
    category: 'Carpentry',
    location: 'Rawalpindi',
    description: 'Built-in wardrobe with smart storage solutions.',
    image: '/projects/cuboard1.jpg', // Your 6th image
    imageColor: 'from-amber-600 to-yellow-500'
  }
];

export const safetyFeatures = [
  'Verified & background-checked workers',
  'Respectful and professional behavior',
  'Complete privacy protection',
  'Clean and secure work process',
  'Regular updates and communication',
  'Safety equipment and protocols'
];

export const whyChooseUs = [
  { icon: Users, title: 'Skilled Team', desc: 'Certified professionals with 5+ years experience' },
  { icon: Clock, title: 'On-Time Delivery', desc: '90% projects completed before deadline' },
  { icon: Award, title: 'Quality Work', desc: 'Premium materials with 2-year warranty' },
  { icon: DollarSign, title: 'Fair Pricing', desc: 'Transparent quotes with no hidden costs' },
  { icon: MapPin, title: 'Local Experts', desc: 'Serving Rawalpindi & Islamabad since 2018' },
  { icon: Shield, title: 'Trust & Safety', desc: 'Verified workers and secure service' }
];

// Added for convenience
export { Sparkles };  // Export Sparkles for use in components