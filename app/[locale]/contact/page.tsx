import React from "react";
import "./page.css";
import Footer from "@/components/molecules/Footer/Footer";
import { Header } from "@/components/molecules/Header/Header";

const ContactUs: React.FC = () => {
  return (
    <>
      <Header /> {/* Agrega el header aquí */}
      <div className="contact-us">
        <div className="contact-us__container">
          <h1>Contact Us</h1>
          <p>
            We're here to help. Get in touch and we'll get back to you as soon
            as we can.
          </p>
          <form className="contact-us__form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
            ></textarea>

            <button type="submit" className="contact-us__button">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer /> {/* Agrega el footer aquí */}
    </>
  );
};

export default ContactUs;
