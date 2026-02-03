import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { CONTACT_CONTENT } from "../constants/content";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.warn("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.send(
        "service_ecqoimd",
        "template_ijgxvsd",
        formData,
        "Dwq0Xjb-sltEjePep"
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          {CONTACT_CONTENT.text}
        </p>

        <div className="max-w-2xl mx-auto glass-card p-8 rounded-2xl">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your message here..."
                className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`mt-2 py-3 px-6 rounded-lg bg-primary hover:bg-blue-600 text-white font-semibold transition-all flex items-center justify-center gap-2 ${
                isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02]"
              }`}
            >
              {isLoading ? (
                  <>Sending...</>
              ) : (
                  <>Send Message <FaPaperPlane size={14} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
