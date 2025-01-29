import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await axios.post(
        "https://pritishportfolio.onrender.com/contact",
        formData
      );
      setStatusMessage({
        type: "success",
        text: response.data.message,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: error.response?.data?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Contact Me
          </h2>
          <p className="text-gray-600 text-center mt-2">
            I'd love to hear from you! Feel free to reach out using the form below.
          </p>

          {/* Contact Form */}
          <div className="mt-10">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                  required
                />
              </div>

              {/* Subject */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                  required
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className={`bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            {/* Status Message */}
            {statusMessage && (
              <div
                className={`mt-6 text-center text-lg ${
                  statusMessage.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {statusMessage.text}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
