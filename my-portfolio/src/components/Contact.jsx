import { useState } from "react";

export default function Contact() {
  const [emailError, setEmailError] = useState("");

  function validateEmail(email) {
    const regex =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
  }

  function handleEmailChange(e) {
    const value = e.target.value;

    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }

  return (
    <section id="contact" className="px-8 py-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        noValidate
        className="space-y-4 bg-gray-800 p-6 rounded-lg border border-gray-700"
      >
        <input type="hidden" name="form-name" value="contact" />

        {/* Name */}
        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            minLength={2}
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            onChange={handleEmailChange}
            className={`w-full p-2 rounded bg-gray-900 border ${
              emailError ? "border-red-500" : "border-gray-700"
            } focus:outline-none`}
          />
          {emailError && (
            <p className="text-red-400 text-sm mt-1">
              {emailError}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            required
            minLength={10}
            rows="4"
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!!emailError}
          className="bg-blue-500 disabled:bg-gray-600 px-6 py-2 rounded text-white font-medium transition hover:-translate-y-1"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
