import { useState } from "react"; // Add this import
import emailjs from "@emailjs/browser"; // Add this import
import { Slide, toast } from "react-toastify";

function ContactForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.warn("Please fill in all the fields!", {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: 1,
        theme: "dark",
        transition: Slide,
      });
      return;
    }
    setIsLoading(true); // Set loading to true at the start
    try {
      emailjs
        .send("service_ecqoimd", "template_ijgxvsd", formData, {
          publicKey: "Dwq0Xjb-sltEjePep",
        })
        .then(
          (response) => {
            toast.success("Success!", {
              position: "top-center",
              hideProgressBar: false,
              closeOnClick: true,
              draggable: true,
              progress: 1,
              theme: "dark",
              transition: Slide,
            });
          },
          (err) => {
            toast.error("Failed to send message. Please try again.", {
              position: "top-center",
              hideProgressBar: false,
              closeOnClick: true,
              draggable: true,
              progress: 1,
              theme: "dark",
              transition: Slide,
            });
          }
        );
    } catch (err) {
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: 1,
        theme: "dark",
        transition: Slide,
      });
    } finally {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsLoading(false); // Set loading to false in finally block
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="border-2 border-gray-200 p-2 rounded-md w-full md:w-1/2 mx-auto text-dark"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="border-2 border-gray-200 p-2 rounded-md w-full md:w-1/2 mx-auto text-dark"
      />
      <textarea
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        className="border-2 border-gray-200 p-2 rounded-md w-full md:w-1/2 mx-auto text-dark"
      ></textarea>
      <button
        type="submit"
        disabled={isLoading}
        className={`bg-primary text-white py-2 px-4 rounded-md w-[100px] md:w-[200px] lg:w-[250px] mx-auto ${
          isLoading ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}

export default ContactForm;
