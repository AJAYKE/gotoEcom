import { SCRIPT_URL } from "@/app/utils/googleSheets";
import React, { useState } from "react";
import { content } from "../../constants/content";
import Button from "../common/Button";
import "./styles/SignUp.css";
import SuccessMessage from "./SuccessMessage";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          formType: "interest",
          email: email,
        }),
      });

      console.log("Form submitted successfully");
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      if (retryCount < 1) {
        setRetryCount((prevCount) => prevCount + 1);
        tryAlternativeSubmission();
        return;
      }

      setError(
        "Unable to submit the form. Please try again later or contact support."
      );
      setIsSubmitting(false);
    }
  };

  const tryAlternativeSubmission = async () => {
    try {
      const params = new URLSearchParams({
        formType: "signup",
        email: email,
      });

      await fetch(`${SCRIPT_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });

      console.log("Alternative submission successful");
      setSubmitted(true);
    } catch (err) {
      console.error("Error with alternative submission:", err);
      setError(
        "Unable to submit the form. Please try again later or contact support."
      );
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="signup-section" id="contact-us">
        <SuccessMessage type="signUp" />
      </section>
    );
  }

  return (
    <section className="signup-section" id="contact-us">
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
                aria-describedby={error ? "email-error" : undefined}
              />
            </div>

            {error && (
              <p className="error-message" id="email-error" role="alert">
                {error}
              </p>
            )}

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
