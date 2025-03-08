import React, { useState } from "react";
import { content } from "../../constants/content";
import { submitToGoogleSheets } from "../../utils/googleSheets";
import Button from "../common/Button";
import "./styles/SignUp.css";
import SuccessMessage from "./SuccessMessage";

// Replace with your actual deployed Google Apps Script web app URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx4VTKcHC56Ok1DrOkJO65wC2nxJH9Tqa4jevZqjqI/dev";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const dataToSubmit = {
        email,
        formType: "signup",
      };

      const response = await submitToGoogleSheets(
        dataToSubmit,
        GOOGLE_SCRIPT_URL
      );

      if (response.success) {
        setSubmitted(true);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError("Failed to submit. Please try again later.");
      console.error("Signup submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return <SuccessMessage type="signUp" />;
  }

  return (
    <section className="signup-section">
      <div className="signup-content">
        <div className="signup-info">
          <h2 className="signup-title">{content.signUp.headline}</h2>
          <p className="signup-description">{content.signUp.description}</p>
        </div>

        <div className="signup-form-container">
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">{content.signUp.placeholder}</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Type here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <Button
              type="submit"
              variant="primary"
              fullWidth
              className="submit-btn"
            >
              {isSubmitting ? "Submitting..." : content.signUp.buttonText}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
