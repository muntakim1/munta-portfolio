import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Simulate email sending or integrate email API
      console.log("Form Data:", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="relative bg-gray-900 py-20 px-8 overflow-hidden">
      {/* Decorative Graphics */}

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Contact Muntakim</h2>
        <p className="text-gray-300 mt-4">
          Have a question or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 mt-12 max-w-2xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-300 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-300 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-300 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Send Message
        </button>
        {status && <p className="mt-4 text-center text-gray-300">{status}</p>}
      </form>
    </section>
  );
};

export default ContactSection;
