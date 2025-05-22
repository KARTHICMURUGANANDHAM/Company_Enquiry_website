
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle,
  ArrowRight,
  Send,
  Calendar,
  Users,
  Home as HomeIcon,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-construction-800 text-white min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')",
            backgroundBlendMode: "overlay" 
          }}
        ></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="heading-xl mb-6">
              Building Your Future with <span className="text-accent1">Expertise</span> and <span className="text-accent1">Precision</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Rapid Solutions delivers top-quality construction and reacon brick services, 
              bringing exceptional craftsmanship and innovative solutions to every project.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-outline border-white text-white hover:bg-white hover:text-construction-800">
                <Link to="/enquiry">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-lg mb-4">Why Choose Rapid Solutions?</h2>
            <p className="text-gray-600 text-lg">
              We deliver excellent customer service, quality workmanship, and timely project completion 
              at competitive prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-construction-100 text-construction-700 flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-600 mb-4">
                Our skilled professionals bring years of experience and dedication to every project.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Licensed & certified professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Continuous training & education</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-construction-100 text-construction-700 flex items-center justify-center mb-6">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">On-Time Delivery</h3>
              <p className="text-gray-600 mb-4">
                We pride ourselves on delivering projects within budget and on schedule.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Strict project management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Regular progress updates</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-construction-100 text-construction-700 flex items-center justify-center mb-6">
                <HomeIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Materials</h3>
              <p className="text-gray-600 mb-4">
                We use only the highest quality materials ensuring durability and performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Premium-grade products</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Sustainable & eco-friendly options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer a comprehensive range of construction and reacon brick services 
              tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Residential Construction</h3>
                <p className="text-gray-600 mb-4">
                  From custom homes to renovations, we bring your residential vision to life with quality craftsmanship.
                </p>
                <Button asChild variant="ghost" className="group">
                  <Link to="/services" className="flex items-center text-construction-700 font-medium">
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Commercial Construction</h3>
                <p className="text-gray-600 mb-4">
                  We deliver commercial spaces that combine functionality, aesthetics, and efficiency for businesses.
                </p>
                <Button asChild variant="ghost" className="group">
                  <Link to="/services" className="flex items-center text-construction-700 font-medium">
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&q=80')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Reacon Brick Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Our specialty in reacon brick construction provides durable, aesthetically pleasing structures.
                </p>
                <Button asChild variant="ghost" className="group">
                  <Link to="/services" className="flex items-center text-construction-700 font-medium">
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-construction-700 text-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Start Your Construction Project?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Contact us today for a free consultation and quote. Let us help you bring your vision to reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="btn-secondary">
                <Link to="/enquiry">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-construction-700">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section (Simple version) */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Don't just take our word for it — hear from our satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Rapid Solutions completed our office renovation on time and within budget. 
                The team was professional, attentive to detail, and a pleasure to work with."
              </p>
              <div>
                <p className="font-bold">John Smith</p>
                <p className="text-sm text-gray-500">CEO, Tech Innovations</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The reacon brick work by Rapid Solutions transformed our property. 
                The quality of their work and attention to detail exceeded our expectations."
              </p>
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Homeowner</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "We've partnered with Rapid Solutions on multiple commercial projects. 
                Their expertise, reliability, and collaborative approach make them our go-to construction partner."
              </p>
              <div>
                <p className="font-bold">Michael Chen</p>
                <p className="text-sm text-gray-500">Project Manager, Urban Developers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-construction-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="heading-md mb-4">Have Questions?</h2>
                <p className="text-gray-600 mb-6">
                  Our team is ready to answer any questions you may have about our services.
                  Contact us today to learn more about how we can help with your construction needs.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <MapPin className="mr-3 text-construction-600 shrink-0 mt-1" size={20} />
                    <span>123 Construction Ave, Building City, State, 12345</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="mr-3 text-construction-600 shrink-0" size={20} />
                    <span>(123) 456-7890</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-3 text-construction-600 shrink-0" size={20} />
                    <span>info@rapidsolutions.com</span>
                  </li>
                </ul>
                <Button asChild className="btn-primary">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="quickName" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="quickName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-construction-500 focus:border-construction-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="quickEmail" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="quickEmail"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-construction-500 focus:border-construction-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="quickMessage" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="quickMessage"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-construction-500 focus:border-construction-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full btn-primary flex items-center justify-center">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
