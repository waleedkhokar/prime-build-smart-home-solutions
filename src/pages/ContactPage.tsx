'use client';

import { useState } from 'react';
import ScrollAnimation from '../components/animations/ScrollAnimation';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to an API
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
        <div className="container-custom text-center relative z-10">
          <ScrollAnimation animation="fadeUp">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-full mb-6">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-bold">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600">
                Contact Us
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Let's Build Together
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Get professional consultation for your home construction and improvement projects
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <ScrollAnimation animation="fadeUp">
                <div className="space-y-8">
                  {[
                    {
                      icon: Phone,
                      title: 'Call Us',
                      desc: 'Available 8 AM - 7 PM',
                      value: '+92 319 5707402',
                      color: 'from-blue-500 to-cyan-500',
                    },
                    {
                      icon: Mail,
                      title: 'Email Us',
                      desc: 'We respond quickly',
                      value: 'qasimiqbal333444@gmail.com',
                      color: 'from-purple-500 to-pink-500',
                    },
                    {
                      icon: MapPin,
                      title: 'Service Areas',
                      desc: 'Where we operate',
                      value: 'Rawalpindi & Islamabad',
                      color: 'from-green-500 to-emerald-500',
                    },
                    {
                      icon: Clock,
                      title: 'Working Hours',
                      desc: 'Our schedule',
                      value: 'Mon-Sat: 8:00 AM - 7:00 PM',
                      color: 'from-orange-500 to-amber-500',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="flex items-start space-x-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-3">{item.desc}</p>
                          <p className="text-lg font-semibold text-gray-900">{item.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollAnimation animation="fadeUp" delay={0.2}>
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
                  <div className="relative bg-white p-12 rounded-3xl shadow-2xl border border-gray-100">
                    <div className="flex items-center space-x-6 mb-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                        <Send className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
                        <p className="text-gray-600">Fill the form below and we'll get back to you soon</p>
                      </div>
                    </div>

                    {isSubmitted ? (
                      <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                          <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                        <p className="text-gray-600 text-xl">We'll contact you within 2 hours.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <label className="block text-lg font-medium text-gray-900 mb-3">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
                              placeholder="Your's Good Name"
                            />
                          </div>
                          <div>
                            <label className="block text-lg font-medium text-gray-900 mb-3">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
                              placeholder="add here email @gmail.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <label className="block text-lg font-medium text-gray-900 mb-3">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
                              placeholder="heres add yours number "
                            />
                          </div>
                          <div>
                            <label className="block text-lg font-medium text-gray-900 mb-3">
                              Service Interested In
                            </label>
                            <select
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg bg-white"
                            >
                              <option value="">Select a service</option>
                              <option value="plumbing">Plumbing Services</option>
                              <option value="electrical">Electrical Work</option>
                              <option value="tiles">Tiles & Marble</option>
                              <option value="kitchen">Kitchen Setup</option>
                              <option value="carpentry">Carpentry Work</option>
                              <option value="painting">Paint & Polish</option>
                              <option value="interior">Interior Work</option>
                              <option value="custom">Custom Solutions</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-lg font-medium text-gray-900 mb-3">
                            Your Message *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg resize-none"
                            placeholder="Describe your project or requirement in detail..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xl rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                          Send Message
                        </button>

                        <p className="text-center text-gray-500 text-lg">
                          We typically respond within 2 hours during business hours
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </ScrollAnimation>

              {/* WhatsApp CTA */}
              <ScrollAnimation animation="fadeUp" delay={0.4}>
                <div className="mt-16 relative overflow-hidden">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-3xl opacity-20"></div>
                  <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 text-white p-12 rounded-3xl shadow-2xl">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                      <div className="mb-8 md:mb-0 md:pr-8">
                        <h3 className="text-3xl font-bold mb-4">Quick Response via WhatsApp</h3>
                        <p className="text-xl text-green-100">Get instant answers and quick service estimates</p>
                      </div>
                  <a
  href="https://wa.me/923195707402"
  className="group bg-white text-green-600 hover:bg-gray-100 font-bold px-10 py-5 rounded-2xl text-xl transition-all duration-500 hover:shadow-2xl inline-flex items-center space-x-4"
>
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
  </svg>
  <span>WhatsApp Now</span>
</a> 
                      
                    
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <ScrollAnimation animation="fadeUp">
            <div className="text-center mb-16">
              <h2 className="section-heading">Service Coverage Areas</h2>
              <p className="section-subheading">
                We provide comprehensive home services throughout Rawalpindi and Islamabad
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                city: 'Rawalpindi',
                areas: ['All Sectors & Colonies', 'Commercial Areas', 'Bahria Town Phase 1-8', 'DHA Rawalpindi', 'Cantt Areas', 'New/Old City'],
                color: 'from-blue-500 to-cyan-500',
              },
              {
                city: 'Islamabad',
                areas: ['All Sectors (F, G, I, etc.)', 'Blue Area', 'Bahria Town Islamabad', 'DHA Islamabad', 'Gulberg Greens', 'Park View City'],
                color: 'from-purple-500 to-pink-500',
              },
            ].map((location, index) => (
              <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.2}>
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${location.color} rounded-2xl flex items-center justify-center`}>
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{location.city}</h3>
                  </div>
                  <ul className="space-y-4">
                    {location.areas.map((area, i) => (
                      <li key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${location.color}`}></div>
                        <span className="text-gray-700 text-lg font-medium">{area}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Service Status:</span>
                      <span className="inline-flex items-center px-6 py-3 rounded-full text-lg font-bold bg-gradient-to-r from-green-100 to-emerald-100 text-green-800">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        Active Service
                      </span>
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

export default ContactPage;