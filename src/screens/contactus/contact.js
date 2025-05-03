import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const phone = form.current.user_phone.value;
    const title = form.current.title.value;
    const userMessage = form.current.message.value;

    const fullMessage = `Message: ${userMessage}\nName: ${name}\nPhone: ${phone}`;

    console.log(fullMessage, 'fullMessage')
    // Dynamically set the message input value to include all info
    form.current.message.value = fullMessage;



    console.log("Title:", title);
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Full Message:", fullMessage);

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    ).then(
      (result) => {
        console.log("EmailJS Response:", result);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log("EmailJS Error:", error.text);
        alert("Failed to send the message.");
      }
    );
  };


  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>
            For any inquiries, feel free to call us on the provided phone number. You can also click on "Chat with Us" to connect via WhatsApp, or simply fill out the form with accurate details — our team will get back to you shortly.          </p>
        </div>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-left">
            <input type="text" name="user_name" placeholder="Your Name" required />
            {/* <input type="email" name="user_email" placeholder="Your Email Address" required /> */}
            <input type="tel" name="user_phone" placeholder="Phone" required />
          </div>
          <div className="form-right">
            <textarea name="message" placeholder="Your Message..." rows="6" required></textarea>
            <button type="submit">Submit Now</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
