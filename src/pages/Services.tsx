
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-construction-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              We provide comprehensive construction and reacon brick solutions tailored to
              meet your specific needs and exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="heading-md mb-4">Residential Construction</h2>
                <p className="text-gray-700 mb-6">
                  From custom homes to renovations and additions, our residential construction services
                  transform your ideas into beautiful, functional living spaces. We handle every aspect
                  of the building process with meticulous attention to detail.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-construction-600 mt-1 mr-3 shrink-0" />
                    <span>Custom home building</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-construction-600 mt-1 mr-3 shrink-0" />
                    <span>Home renovations and remodeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-construction-600 mt-1 mr-3 shrink-0" />
                    <span>Room additions and extensions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-construction-600 mt-1 mr-3 shrink-0" />
                    <span>Basement and attic conversions</span>
                  </li>
                </ul>
                <Button asChild className="btn-primary">
                  <Link to="/enquiry">Get a Quote</Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80"
                  alt="Residential Construction"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80"
                  alt="Commercial Construction"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="heading-md mb-4">Commercial Construction</h2>
                <p className="text-gray-700 mb-6">
                  Our commercial construction services deliver functional, attractive spaces that enhance your business
                  operations. We understand the unique requirements of commercial projects and deliver solutions that
                  optimize both form and function.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-construction-600 mt-1 mr-3 shrink-0" />
                    <span>Office buildings and interiors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-construction-600 mt-1 mr-3 shrink-0" />
                    <span>Retail and restaurant spaces</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-construction-600 mt-1 mr-3 shrink-0" />
                    <span>Industrial facilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-construction-600 mt-1 mr-3 shrink-0" />
                    <span>Warehouses and distribution centers</span>
                  </li>
                </ul>
                <Button asChild className="btn-primary">
                  <Link to="/enquiry">Get a Quote</Link>
                </Button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="heading-md mb-4">Reacon Brick Solutions</h2>
                <p className="text-gray-700 mb-6">
                  As specialists in reacon brick construction, we offer superior masonry services that combine
                  durability, aesthetics, and energy efficiency. Our expert masons create stunning brick structures
                  that stand the test of time.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-construction-600 mt-1 mr-3 shrink-0" />
                    <span>Reacon brick installation and repair</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-construction-600 mt-1 mr-3 shrink-0" />
                    <span>Brick facades and veneers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-construction-600 mt-1 mr-3 shrink-0" />
                    <span>Decorative brickwork and patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-construction-600 mt-1 mr-3 shrink-0" />
                    <span>Structural brick solutions</span>
                  </li>
                </ul>
                <Button asChild className="btn-primary">
                  <Link to="/enquiry">Get a Quote</Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&q=80"
                  alt="Reacon Brick Solutions"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-construction-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Additional Services</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Beyond our core offerings, we provide a range of specialized construction services
              to meet all your building needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Additional Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-construction-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Architectural Design</h3>
              <p className="text-gray-600 mb-4">
                Our in-house design team works closely with you to create architectural plans that
                reflect your vision while ensuring structural integrity and functionality.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Custom architectural designs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>3D modeling and visualization</span>
                </li>
              </ul>
              <Button asChild variant="ghost" className="group text-construction-700">
                <Link to="/enquiry" className="flex items-center font-medium">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Additional Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-construction-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Project Management</h3>
              <p className="text-gray-600 mb-4">
                Our experienced project managers oversee every aspect of the construction process,
                ensuring quality control, timely delivery, and budget adherence.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Comprehensive planning and scheduling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Budget monitoring and control</span>
                </li>
              </ul>
              <Button asChild variant="ghost" className="group text-construction-700">
                <Link to="/enquiry" className="flex items-center font-medium">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Additional Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-construction-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Electrical & Plumbing</h3>
              <p className="text-gray-600 mb-4">
                Our certified technicians handle all electrical and plumbing installations and repairs,
                ensuring code compliance and optimal functionality.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>New installations and upgrades</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Repair and maintenance services</span>
                </li>
              </ul>
              <Button asChild variant="ghost" className="group text-construction-700">
                <Link to="/enquiry" className="flex items-center font-medium">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Additional Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-construction-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Interior Finishing</h3>
              <p className="text-gray-600 mb-4">
                Transform your spaces with our expert interior finishing services, from drywall and
                painting to flooring and cabinetry.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Custom cabinetry and millwork</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Premium flooring installation</span>
                </li>
              </ul>
              <Button asChild variant="ghost" className="group text-construction-700">
                <Link to="/enquiry" className="flex items-center font-medium">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Additional Service 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-construction-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Landscaping</h3>
              <p className="text-gray-600 mb-4">
                Enhance your property's exterior with our comprehensive landscaping services,
                creating beautiful outdoor spaces that complement your building.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Landscape design and installation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Hardscaping and outdoor structures</span>
                </li>
              </ul>
              <Button asChild variant="ghost" className="group text-construction-700">
                <Link to="/enquiry" className="flex items-center font-medium">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Additional Service 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-construction-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Maintenance & Repairs</h3>
              <p className="text-gray-600 mb-4">
                Keep your property in optimal condition with our maintenance and repair services,
                addressing issues promptly to prevent costly damage.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Preventative maintenance programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Emergency repair services</span>
                </li>
              </ul>
              <Button asChild variant="ghost" className="group text-construction-700">
                <Link to="/enquiry" className="flex items-center font-medium">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Process</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We follow a structured approach to ensure every project is completed efficiently and to the highest
              standards of quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="w-16 h-16 bg-construction-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">1</div>
              <h3 className="text-xl font-bold mb-3 text-center">Consultation & Planning</h3>
              <p className="text-gray-600 text-center">
                We begin with a thorough consultation to understand your needs, goals, and budget,
                followed by detailed planning and design.
              </p>
              <div className="hidden lg:block absolute top-8 left-full w-full h-1 bg-construction-300 -z-10 transform -translate-x-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="w-16 h-16 bg-construction-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">2</div>
              <h3 className="text-xl font-bold mb-3 text-center">Design & Estimation</h3>
              <p className="text-gray-600 text-center">
                Our team creates detailed designs and provides comprehensive cost estimates for
                your review and approval.
              </p>
              <div className="hidden lg:block absolute top-8 left-full w-full h-1 bg-construction-300 -z-10 transform -translate-x-1/2"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="w-16 h-16 bg-construction-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">3</div>
              <h3 className="text-xl font-bold mb-3 text-center">Construction</h3>
              <p className="text-gray-600 text-center">
                With plans approved, our skilled team begins construction, maintaining clear communication
                throughout the process.
              </p>
              <div className="hidden lg:block absolute top-8 left-full w-full h-1 bg-construction-300 -z-10 transform -translate-x-1/2"></div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="w-16 h-16 bg-construction-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">4</div>
              <h3 className="text-xl font-bold mb-3 text-center">Completion & Handover</h3>
              <p className="text-gray-600 text-center">
                After thorough quality checks, we complete the project and provide you with all necessary
                documentation and warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-construction-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Contact us today to discuss your project needs and receive a free, no-obligation quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="btn-secondary">
                <Link to="/enquiry">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-construction-700">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
