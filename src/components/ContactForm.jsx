import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === "success" && (
        <div className="bg-green-50 dark:bg-green-500/10 border border-green-500 text-green-700 dark:text-green-400 px-4 py-3 rounded-lg">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 dark:bg-red-500/10 border border-red-500 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
            }`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            placeholder="Your company (optional)"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
              errors.subject
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
            }`}
            placeholder="What's this about?"
          />
          {errors.subject && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-vertical text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
            errors.message
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
          }`}
          placeholder="Tell me about your project or inquiry..."
        />
        {errors.message && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full btn-primary ${
          isSubmitting ? "opacity-75 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
