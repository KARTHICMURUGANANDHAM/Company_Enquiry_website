
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Calendar, Award } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-construction-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">About Rapid Solutions</h1>
            <p className="text-xl text-gray-200">
              We're a team of dedicated construction professionals committed to delivering 
              excellence in every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2005, Rapid Solutions began as a small team of construction specialists with a shared vision: 
                to deliver high-quality construction and reacon brick services that exceed client expectations.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've grown into a trusted name in the industry, known for our attention to detail, 
                commitment to quality, and dedication to customer satisfaction.
              </p>
              <p className="text-gray-700 mb-6">
                Today, we're proud to be a leading construction company, serving residential and commercial clients 
                with the same passion and commitment that drove us from day one.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-construction-600">15+</span>
                  <span className="ml-2 text-gray-600">Years Experience</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-construction-600">500+</span>
                  <span className="ml-2 text-gray-600">Projects Completed</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-construction-600">98%</span>
                  <span className="ml-2 text-gray-600">Client Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80" 
                alt="Rapid Solutions Team" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-construction-100 text-construction-700 flex items-center justify-center mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To deliver exceptional construction and reacon brick solutions that transform spaces, 
                enhance communities, and exceed client expectations through innovative approaches, 
                skilled craftsmanship, and unwavering commitment to quality.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Uphold the highest standards of quality and safety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Foster lasting relationships with clients and partners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Deliver projects on time and within budget</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-construction-100 text-construction-700 flex items-center justify-center mb-6">
                <Calendar size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To be the most trusted and respected construction company, recognized for our 
                innovative approaches, sustainable practices, and ability to bring architectural 
                visions to life while building lasting relationships with our clients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Lead the industry in sustainable construction practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Continuously innovate and improve our methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-construction-600 mt-1 mr-2 shrink-0" />
                  <span>Expand our positive impact on communities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our success is driven by our talented team of professionals who bring expertise, 
              passion, and dedication to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden text-center">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Robert Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Robert Johnson</h3>
                <p className="text-construction-600 mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  With over 25 years of experience in construction and leadership, 
                  Robert has guided Rapid Solutions from its inception.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden text-center">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Sarah Miller" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Sarah Miller</h3>
                <p className="text-construction-600 mb-3">Lead Architect</p>
                <p className="text-gray-600 text-sm">
                  Sarah brings creative vision and technical expertise to every project, 
                  ensuring both aesthetics and functionality.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden text-center">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://randomuser.me/api/portraits/men/22.jpg" 
                  alt="David Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">David Chen</h3>
                <p className="text-construction-600 mb-3">Project Manager</p>
                <p className="text-gray-600 text-sm">
                  David excels at coordinating complex projects, ensuring they're delivered 
                  on time and within budget.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden text-center">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://randomuser.me/api/portraits/women/28.jpg" 
                  alt="Maria Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Maria Rodriguez</h3>
                <p className="text-construction-600 mb-3">Customer Relations</p>
                <p className="text-gray-600 text-sm">
                  Maria ensures clear communication and outstanding customer service 
                  throughout the project lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-construction-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              These principles guide every decision we make and every action we take.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. From materials to workmanship, we maintain the highest standards 
                in everything we do.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency, building trust with our clients through ethical 
                business practices.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek better ways to build, incorporating new technologies and methods to improve outcomes.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Safety</h3>
              <p className="text-gray-600">
                The wellbeing of our team and clients is paramount. We maintain rigorous safety protocols at every job site.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We listen to our clients, understand their needs, and work tirelessly to exceed their expectations.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally responsible construction practices that minimize waste and energy use.
              </p>
            </div>
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
            <h2 className="heading-lg mb-6">Ready to Work with Us?</h2>
            <p className="text-xl mb-8">
              Let us bring our expertise and dedication to your next construction project.
            </p>
            <Button asChild size="lg" className="btn-secondary">
              <Link to="/enquiry">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
