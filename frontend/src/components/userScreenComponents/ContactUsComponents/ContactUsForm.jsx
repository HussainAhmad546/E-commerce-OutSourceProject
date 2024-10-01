import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
//import { sendMessage } from "../../../api/contactApi"

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!description) newErrors.description = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const payload = { name, email, description };

    // const response = await sendMessage(payload);
    // if (response.success) {
    //   alert(response.message);
    //   setName("");
    //   setEmail("");
    //   setDescription("");
    // } else {
    //   alert(response.message);
    // }
  };

  return (
    <section className="container bg-white px-4 py-16 max-md:py-4 my-16 rounded">
      <h2 className="text-3xl font-bold text-center text-black mb-6">
        Get in Touch
      </h2>
      <hr className="border-2 border-black w-[20%] mx-auto mb-16"></hr>

      <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-8">
        <div className="w-[50%] max-md:w-[100%] max-md:p-4 p-14 space-y-6 max-md:space-y-2 items-center">
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="w-10 h-10 mr-1" />
            <p>
            Calzada la naranja 55, San Pedro Xalpa, Azcapotzalco CDMX cp. 02710 
            </p>
          </div>
          <hr className="border-1 mx-auto mb-16"></hr>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="w-8 h-8" />
            <p>ventasml323@gmail.com</p>
          </div>
          <hr className="border-1 mx-auto mb-16"></hr>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="w-8 h-8" />
            <p>5541459614</p>
          </div>
          <hr className="border-1 mx-auto mb-16"></hr>
          <div className="flex items-center space-x-4">
            <FaClock className="w-8 h-8" />
            <p>24 Hours</p>
          </div>
        </div>

        <div className="w-[50%] max-md:w-[100%] max-md:p-4 p-14 ">
          <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
          <form className="space-y-10 max-md:space-y-4" onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <input
                type="text"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <input
                type="email"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <textarea
                className={`w-full h-[173px] p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                  errors.description ? "border-red-500" : ""
                }`}
                placeholder="Write your message"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
              ></textarea>
              {errors.description && (
                <p className="text-red-500">{errors.description}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#303030] text-white p-3 rounded-lg font-semibold hover:bg-black transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
