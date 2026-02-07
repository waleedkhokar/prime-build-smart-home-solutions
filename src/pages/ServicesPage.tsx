import ServiceCard from '../components/ServiceCard';
import ScrollAnimation from '../components/animations/ScrollAnimation';
import { services } from '../lib/constants';
import { Wrench, CheckCircle, Shield, Clock, Award, Sparkles } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
        <div className="container-custom text-center relative z-10">
          <ScrollAnimation animation="fadeUp">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-bold">Professional Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600">
                Premium Home
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Construction Services
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Complete home solutions with expert craftsmanship, modern technology, and quality materials
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* All Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ScrollAnimation key={service.id} animation="fadeUp" delay={index * 0.1}>
                <ServiceCard service={service} index={index} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <ScrollAnimation animation="fadeUp">
            <div className="text-center mb-16">
              <h2 className="section-heading">Our Service Process</h2>
              <p className="section-subheading">
                Systematic approach ensuring quality, transparency, and timely delivery
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Free site visit and detailed assessment' },
              { step: '02', title: 'Planning', desc: 'Customized plan with transparent quote' },
              { step: '03', title: 'Execution', desc: 'Professional work with regular updates' },
              { step: '04', title: 'Completion', desc: 'Final inspection and quality assurance' },
            ].map((process, index) => (
              <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.2}>
                <div className="relative">
                  {/* Connecting line for desktop */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-12 left-3/4 w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30"></div>
                  )}
                  
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500">
                    <div className="relative mb-6">
                      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-20 group-hover:opacity-30"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-12 transition-transform duration-300">
                        <span className="text-2xl font-bold text-white">{process.step}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                    <p className="text-gray-600">{process.desc}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slideLeft">
              <div>
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-3 rounded-full mb-8">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-bold">Why Our Services Stand Out</span>
                </div>
                <h2 className="section-heading">Premium Quality Assured</h2>
                <p className="text-gray-600 text-lg mb-10">
                  We go beyond basic services to deliver exceptional results that stand the test of time.
                </p>
                <div className="space-y-8">
                  {[
                    { icon: Shield, title: 'Certified Materials', desc: 'Using only premium, certified materials for durability' },
                    { icon: Wrench, title: 'Expert Craftsmanship', desc: 'Skilled professionals with 5+ years experience' },
                    { icon: Clock, title: 'Timely Completion', desc: '90% projects completed before deadline' },
                    { icon: CheckCircle, title: '2-Year Warranty', desc: 'Comprehensive warranty on all our work' },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-6 p-6 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-2xl">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <benefit.icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 text-white p-12 rounded-3xl shadow-2xl">
                  <h3 className="text-3xl font-bold mb-8 text-center">Get Instant Quote</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Service Type', value: 'Select from 9 services' },
                      { label: 'Project Size', value: 'Small to Large scale' },
                      { label: 'Timeline', value: 'Flexible scheduling' },
                      { label: 'Budget', value: 'Transparent pricing' },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                        <span className="text-gray-300">{item.label}</span>
                        <span className="font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Request Free Quote
                  </button>
                  <p className="text-center text-gray-400 mt-6">
                    Get response within 2 hours
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center">
        <ScrollAnimation animation="scale">
          <h2 className="section-heading !text-white mb-8">Ready to Transform Your Home?</h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto">
            Contact us today for professional consultation and free estimate
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-4 bg-white text-blue-600 hover:bg-gray-100 font-bold px-12 py-6 rounded-2xl text-xl transition-all duration-500 hover:shadow-2xl"
          >
            <span>Get Free Estimate</span>
            <span className="text-2xl">🚀</span>
          </a>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default ServicesPage;