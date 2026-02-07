import ScrollAnimation from '../components/animations/ScrollAnimation';
import { Users, Target, Shield, Award, Clock, Heart, Sparkles, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slideLeft">
              <div>
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-full mb-8">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-bold">About Prime Build</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600">
                    Building Trust
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Through Excellence
                  </span>
                </h1>
                <p className="text-2xl text-gray-600 mb-10">
                  Your trusted partner for professional home construction and improvement services in Rawalpindi & Islamabad since 2018.
                </p>
             <div className="flex flex-wrap gap-6">
  <a
    href="/contact"
    className="btn-primary px-8 py-4 text-lg rounded-2xl inline-flex items-center space-x-3"
  >
    <span>Contact Us</span>
    <span>📞</span>
  </a>
  
  <a
    href="https://wa.me/923195707402"
    className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-medium px-8 py-4 text-lg rounded-2xl inline-flex items-center space-x-3 transition-all duration-300 hover:shadow-md"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
    </svg>
    <span>WhatsApp</span>
  </a>
</div>
</div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 text-white p-12 rounded-3xl shadow-2xl">
                  <div className="text-center mb-10">
                    <div className="text-7xl font-bold mb-4">5+</div>
                    <div className="text-2xl text-cyan-300">Years of Excellence</div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">250+</div>
                      <div className="text-gray-400">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">98%</div>
                      <div className="text-gray-400">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">50+</div>
                      <div className="text-gray-400">Experts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">24/7</div>
                      <div className="text-gray-400">Support</div>
                    </div>
                  </div>
                  <div className="mt-10 pt-8 border-t border-gray-800">
                    <p className="text-center text-gray-300">
                      Serving Rawalpindi & Islamabad with professional home services
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollAnimation animation="fadeUp">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    To provide reliable, high-quality home construction and improvement services that enhance living spaces while ensuring complete customer satisfaction and safety.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Deliver exceptional craftsmanship</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Ensure customer safety and trust</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Provide transparent and fair pricing</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Build long-term relationships</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeUp" delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-8">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    To become the most trusted and preferred home services provider in Rawalpindi & Islamabad, known for quality, reliability, and customer-centric approach.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Expand service coverage area</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Introduce smart home solutions</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Build lasting customer relationships</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Set industry quality standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <ScrollAnimation animation="fadeUp">
            <div className="text-center mb-16">
              <h2 className="section-heading">Our Core Values</h2>
              <p className="section-subheading">
                The principles that guide our work and define our company culture
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Shield, title: 'Integrity', desc: 'Honest and transparent in all dealings', color: 'from-blue-500 to-cyan-500' },
              { icon: Award, title: 'Quality', desc: 'Never compromise on workmanship', color: 'from-purple-500 to-pink-500' },
              { icon: Users, title: 'Teamwork', desc: 'Collaborative approach to excellence', color: 'from-green-500 to-emerald-500' },
              { icon: Clock, title: 'Punctuality', desc: 'Respect for clients time', color: 'from-orange-500 to-amber-500' },
              { icon: Heart, title: 'Care', desc: 'Treat every home as our own', color: 'from-red-500 to-pink-500' },
              { icon: TrendingUp, title: 'Excellence', desc: 'Strive for perfection in every project', color: 'from-indigo-500 to-purple-500' },
            ].map((value, index) => (
              <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.1}>
                <div className="group bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-8 mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollAnimation animation="fadeUp">
            <div className="text-center mb-16">
              <h2 className="section-heading">Meet Our Team</h2>
              <p className="section-subheading">
                Skilled professionals dedicated to delivering exceptional results
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: 'Project Manager', role: 'Oversees all projects', exp: '10+ years' },
              { name: 'Lead Carpenter', role: 'Expert woodwork', exp: '8+ years' },
              { name: 'Electrical Head', role: 'Certified electrician', exp: '12+ years' },
              { name: 'Plumbing Expert', role: 'Water systems', exp: '15+ years' },
            ].map((member, index) => (
              <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.2}>
                <div className="text-center group">
                  {/* Avatar with gradient */}
                  <div className="relative mb-8 mx-auto w-40 h-40">
                    <div className="absolute -ins-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30 group-hover:opacity-50"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                      <div className="text-4xl">👷</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600">Experience: {member.exp}</p>
                  
                  {/* Skills */}
                  <div className="mt-6 flex justify-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                    ))}
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

export default AboutPage;