import Hero from '../components/Hero';
import { services, safetyFeatures, whyChooseUs } from '../lib/constants';
import ServiceCard from '../components/ServiceCard';
import ScrollAnimation from '../components/animations/ScrollAnimation';
import { Shield, Users, Clock, Award, DollarSign, MapPin, CheckCircle, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* Intro Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <ScrollAnimation animation="fadeUp">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-3 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold">Who We Are</span>
              </div>
              <h2 className="section-heading">Transforming Homes With Excellence</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Prime Build – Smart Home Solutions is a professional home construction and improvement service provider offering reliable, clean, and affordable solutions for homes and small commercial spaces.
                </p>
                <p>
                  We specialize in repair, installation, finishing, and interior work, delivered by a skilled and verified team. Our focus is on quality workmanship, customer safety, and long-term trust.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollAnimation animation="fadeUp">
            <div className="text-center mb-12">
              <h2 className="section-heading">Our Premium Services</h2>
              <p className="section-subheading">
                Comprehensive home solutions with expert craftsmanship and modern technology
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <ScrollAnimation key={service.id} animation="fadeUp" delay={index * 0.1}>
                <ServiceCard service={service} index={index} />
              </ScrollAnimation>
            ))}
          </div>

      <ScrollAnimation animation="fadeUp">
  <div className="text-center mt-12">
    <Link 
      to="/services" 
      className="btn-primary inline-flex items-center space-x-3 px-8 py-4 text-lg rounded-2xl"
    >
      <span>View All Services</span>
      <Sparkles className="w-5 h-5" />
    </Link>
  </div>
</ScrollAnimation>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeUp">
              <div>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 rounded-full mb-4">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-semibold">Safety First</span>
                </div>
                <h2 className="section-heading">Your Safety & Trust is Our Priority</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  We understand that many women and families live alone and need safe, trustworthy home services. That's why Prime Build ensures complete safety and comfort.
                </p>
                <div className="space-y-4">
                  {safetyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Verified Professional Team</h3>
                    <p className="text-gray-600">Background checked and trained experts</p>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Users className="w-8 h-8 text-blue-600" />
                          <div>
                            <p className="font-bold text-gray-900">Verified Workers</p>
                            <p className="text-gray-600 text-sm">100% background checked</p>
                          </div>
                        </div>
                        <span className="text-2xl">✅</span>
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Clock className="w-8 h-8 text-blue-600" />
                          <div>
                            <p className="font-bold text-gray-900">Real-time Updates</p>
                            <p className="text-gray-600 text-sm">Live project tracking</p>
                          </div>
                        </div>
                        <span className="text-2xl">✅</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollAnimation animation="fadeUp">
            <div className="text-center mb-12">
              <h2 className="section-heading">Why Choose Prime Build?</h2>
              <p className="section-subheading">
                We deliver excellence through our commitment to quality and customer satisfaction
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.1}>
                <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="container-custom text-center">
          <ScrollAnimation animation="fadeUp">
            <MapPin className="w-20 h-20 text-cyan-400 mx-auto mb-8" />
            <h2 className="section-heading !text-white">Our Service Areas</h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Serving all sectors of Rawalpindi & Islamabad with professional home services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700">
                <h3 className="text-3xl font-bold mb-6 text-cyan-300">Rawalpindi</h3>
                <ul className="space-y-3 text-lg text-gray-300">
                  <li>• All Sectors & Colonies</li>
                  <li>• Commercial Areas</li>
                  <li>• Bahria Town Phase 1-8</li>
                  <li>• DHA Rawalpindi</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700">
                <h3 className="text-3xl font-bold mb-6 text-cyan-300">Islamabad</h3>
                <ul className="space-y-3 text-lg text-gray-300">
                  <li>• All Sectors (F, G, I, etc.)</li>
                  <li>• Blue Area & Commercial</li>
                  <li>• Bahria Town Islamabad</li>
                  <li>• DHA Islamabad</li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
<section className="section-padding relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
  
  <div className="container-custom text-center relative z-10">
    <ScrollAnimation animation="scale">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">Need Professional Home Services?</h2>
      <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
        Let Prime Build handle it with expertise. Smart Solutions for Every Corner of Your Home
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
 <a
  href="https://wa.me/923195707402"
  className="flex items-center space-x-2 px-4 py-2 text-green-600 hover:text-green-700 font-medium transition-colors"
>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
  </svg>
  <span>WhatsApp</span>
</a>
       <a
  href="tel:+923195707402"
  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl text-gray-700"
>
  <Phone size={20} />
  <div>
    <p className="font-semibold">Call Us</p>
    <p className="text-sm">+92 319 5707402</p>
  </div>
</a>
      </div>
      <p className="mt-12 text-blue-200 text-xl">
        📩 Contact today for FREE estimate | 📞 Quick response guaranteed
      </p>
    </ScrollAnimation>
  </div>
</section>
    </>
  );
};

export default HomePage;