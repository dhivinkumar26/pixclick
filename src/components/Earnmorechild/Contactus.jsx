import React, { useState } from "react";

const ContactForm = () => {
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [selectedFile, setSelectedFile] = useState(null);
  const [feedback, setFeedback] = useState("");

  function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!topic) {
      return setFeedback("Please select a topic.");
    }
    if (!name.trim()) {
      return setFeedback("Please enter your name.");
    }
    if (!email.trim()) {
      return setFeedback("Please enter your email.");
    }
    if (!message.trim()) {
      return setFeedback("Please enter your message.");
    }
    const allowedChars = /^[a-zA-Z0-9\s\/\-+,\.?@#()!&%_]*$/;
    if (!allowedChars.test(message)) {
      return setFeedback(
        "Message contains invalid characters. Only / - + , . ? @ # () ! & % _ are allowed."
      );
    }
    if (!captchaInput.trim()) {
      return setFeedback("Please enter the captcha.");
    }
    if (captchaInput !== captcha) {
      setCaptcha(generateCaptcha());
      return setFeedback("Captcha does not match.");
    }

    setFeedback("Your message has been sent successfully, we will contact you soon.");
    setCaptcha(generateCaptcha());

    // Reset form (optional)
    setTopic("");
    setName("");
    setEmail("");
    setMessage("");
    setCaptchaInput("");
    setSelectedFile(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-semibold text-center mb-2">How can we help?</h2>
      <p className="text-center text-gray-600 mb-6">
        Please email us for any queries or questions about our program. Our support team will revert within 24 business hours.
      </p>

      {feedback && (
        <div className="text-center mb-4 text-sm font-medium text-red-600">
          {feedback}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Topic */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Choose Topic</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          >
            <option value="">Select from list below</option>
            <option value="account">Account Issue</option>
            <option value="payment">Payment Query</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>

        {/* Name & Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Enter your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Your name"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Enter your Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Your Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 h-32"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Upload Attachment</label>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition text-sm">
              Choose File
              <input
                type="file"
                accept=".png,.jpeg,.jpg,.pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <span className="text-sm text-gray-600">
              {selectedFile ? selectedFile.name : "No file chosen"}
            </span>
          </div>
          <p className="text-green-600 text-sm mt-1">
            Allowed file types: .png, .jpeg, .jpg, .pdf <br />
            Allowed file size: 2MB.
          </p>
        </div>

        {/* Captcha */}
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-3 font-bold text-lg tracking-widest">{captcha}</div>
          <button
            type="button"
            onClick={() => setCaptcha(generateCaptcha())}
            className="text-sm text-blue-600 underline"
          >
            Refresh
          </button>
          <input
            type="text"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md px-4 py-2"
            placeholder="Enter captcha"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
