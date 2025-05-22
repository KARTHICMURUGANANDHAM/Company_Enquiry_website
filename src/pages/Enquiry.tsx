
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Enquiry = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "residential",
    message: "",
    budget: "",
    timeframe: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log("Form data to be sent:", formData);
            
      // Success notification
      toast({
        title: "Enquiry Submitted Successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        service: "residential",
        message: "",
        budget: "",
        timeframe: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your enquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-construction-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Request a Quote</h1>
            <p className="text-xl text-gray-200">
              Fill out the form below to get a free, no-obligation quote for your construction 
              or reacon brick project. We'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-construction-500 focus:border-construction-500"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-construction-500 focus:border-construction-500"
                    placeholder="johndoe@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-construction-500 focus:border-construction-500"
                    placeholder="(123) 456-7890"
                  />
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-construction-500 focus:border-construction-500"
                    placeholder="123 Main St, City, State"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-construction-500 focus:border-construction-500"
                  >
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="reacon">Reacon Brick Solutions</option>
                    <option value="renovation">Building Renovations</option>
                    <option value="design">Architectural Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated Budget
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-construction-500 focus:border-construction-500"
                    placeholder="$5,000 - $10,000"
                  />
                </div>

                {/* Timeframe */}
                <div>
                  <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Timeframe
                  </label>
                  <input
                    type="text"
                    id="timeframe"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-construction-500 focus:border-construction-500"
                    placeholder="e.g., Next month, Q3 2023"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-construction-500 focus:border-construction-500"
                  placeholder="Please provide details about your project, requirements, and any questions you have."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn-primary w-full md:w-auto px-8 py-3"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </Button>
                <p className="mt-3 text-sm text-gray-500">
                  We'll get back to you within 1-2 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Choose Rapid Solutions?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              When you choose us for your construction needs, you're choosing quality, expertise, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-construction-100 text-construction-700 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mt-4">Free Detailed Quotes</h3>
              </div>
              <p className="text-gray-600 text-center">
                We provide comprehensive, transparent quotes with no hidden costs or obligations.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-construction-100 text-construction-700 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mt-4">Expert Team</h3>
              </div>
              <p className="text-gray-600 text-center">
                Our licensed and experienced professionals deliver exceptional craftsmanship on every project.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-construction-100 text-construction-700 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mt-4">On-Time Completion</h3>
              </div>
              <p className="text-gray-600 text-center">
                We pride ourselves on delivering projects within budget and on schedule, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-construction-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Question 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">How long does it take to get a quote?</h3>
              <p className="text-gray-600">
                We typically provide quotes within 1-2 business days after receiving your enquiry. 
                For more complex projects, we may schedule a site visit before finalizing the quote.
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Do you offer warranties on your work?</h3>
              <p className="text-gray-600">
                Yes, we provide warranties on all our construction work. The specific terms vary depending 
                on the project type, but we stand behind the quality of our craftsmanship.
              </p>
            </div>

            {/* Question 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">What is the typical timeline for a construction project?</h3>
              <p className="text-gray-600">
                Project timelines vary widely depending on scope and complexity. Small renovations might take a few 
                weeks, while larger commercial projects could span several months. We provide detailed timelines 
                during the quote process.
              </p>
            </div>

            {/* Question 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Are you licensed and insured?</h3>
              <p className="text-gray-600">
                Absolutely. Rapid Solutions is fully licensed and insured, giving you peace of mind throughout 
                your project. We maintain all necessary certifications and insurance coverage, including liability 
                and worker's compensation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Enquiry;
