import { projects } from '../lib/constants';
import ScrollAnimation from '../components/animations/ScrollAnimation';
import { Calendar, MapPin, CheckCircle, Star, TrendingUp } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
        <div className="container-custom text-center relative z-10">
          <ScrollAnimation animation="fadeUp">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-full mb-6">
              <Star className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-bold">Our Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600">
                Featured
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Projects & Work
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our quality workmanship and successful home improvement projects across Rawalpindi & Islamabad
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} animation="fadeUp" delay={index * 0.1}>
                <div className="group relative">
                  {/* Project Image - Uses your images */}
                  <div className="relative h-64 rounded-t-3xl mb-6 overflow-hidden bg-gray-100">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.imageColor}`}></div>
                    )}
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Location */}
                    <div className="absolute bottom-6 left-6 flex items-center space-x-2 text-white">
                      <MapPin className="w-5 h-5" />
                      <span className="font-semibold">{project.location}</span>
                    </div>
                    
                    {/* View Project overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold transform group-hover:scale-110 transition-transform duration-300">
                        View Project
                      </button>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 bg-white rounded-b-3xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">{project.description}</p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">Completed</span>
                      </div>
                      <button className="flex items-center space-x-2 text-blue-600 font-bold group">
                        <span>View Details</span>
                        <span className="text-xl transform group-hover:translate-x-2 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="container-custom">
          <ScrollAnimation animation="fadeUp">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {[
                { number: '250+', label: 'Projects Completed', icon: '🏆' },
                { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
                { number: '5+', label: 'Years Experience', icon: '📅' },
                { number: '50+', label: 'Expert Team', icon: '👷' },
              ].map((stat, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-6xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-xl text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollAnimation animation="fadeUp">
            <div className="text-center mb-16">
              <h2 className="section-heading">What Our Clients Say</h2>
              <p className="section-subheading">
                Real feedback from homeowners who trusted us with their projects
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Ali Raza', location: 'Islamabad', review: 'Professional team, on-time delivery. Kitchen renovation exceeded expectations!', rating: 5 },
              { name: 'Sara Khan', location: 'Rawalpindi', review: 'Safe and respectful workers. Completed bathroom fitting perfectly.', rating: 5 },
              { name: 'Ahmed Hassan', location: 'Islamabad', review: 'Quality materials, fair pricing. Will hire again for next project.', rating: 5 },
            ].map((testimonial, index) => (
              <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.2}>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  {/* Stars */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">"{testimonial.review}"</p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;