import React, { useState, useEffect } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data here using API calls or any other method
    // Example: fetch('your_submit_endpoint', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
  };
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
