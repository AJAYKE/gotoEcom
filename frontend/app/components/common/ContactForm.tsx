import React, { useState } from "react";
import { content } from "../../constants/content";
import { submitToGoogleSheets } from "../../utils/googleSheets";
import Button from "./Button";
import "./styles/ContactForm.css";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx4VTKcHC56Ok1DrOkJO65wC2nxJH9Tqa4jevZqjqI/dev";

interface ContactFormProps {
  className?: string;
  onSubmit?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  className = "",
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const dataToSubmit = {
        ...formData,
        formType: "contact",
      };

      const response = await submitToGoogleSheets(
        dataToSubmit,
        GOOGLE_SCRIPT_URL
      );

      if (response.success) {
        setFormData({
          name: "",
          contact: "",
          email: "",
          message: "",
        });
        if (onSubmit) onSubmit();
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError("Failed to submit form. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`contact-form ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{content.contactForm.fields.name}</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Type here"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">{content.contactForm.fields.contact}</label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="form-input"
            placeholder="Type here"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">{content.contactForm.fields.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Type here"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">{content.contactForm.fields.message}</label>
          <textarea
            id="message"
            name="message"
            className="form-input textarea"
            placeholder="Type here"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          ></textarea>
        </div>

        {error && <p className="error-message">{error}</p>}

        <Button className="submit" type="submit" variant="primary" fullWidth>
          {isSubmitting ? "Submitting..." : content.contactForm.buttonText}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
