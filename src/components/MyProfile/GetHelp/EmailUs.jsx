import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('Mayakannan C');
  const [email, setEmail] = useState('mayakannan02@gmail.com');
  const [message, setMessage] = useState('');
  const [topic, setTopic] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('yFG7s'); // Example static captcha, ideally generated dynamically

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message, topic, captcha });
    if (captcha !== generatedCaptcha) {
      alert('Incorrect captcha. Please try again.');
      return;
    }
    alert('Form submitted successfully (for demonstration purposes)!');
  };

  const refreshCaptcha = () => {
    // Logic to generate a new captcha
    // For now, let's just simulate a change
    const newCaptcha = Math.random().toString(36).substring(2, 7); // Simple random string
    setGeneratedCaptcha(newCaptcha);
    setCaptcha(''); // Clear user's captcha input
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">
        How can we help?
      </h2>
      <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div> {/* Green underline */}

      <p className="text-gray-600 text-center mb-8">
        Please email us for any queries or questions about our program. Our support team will revert within 24 business hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Choose Topic */}
        <div>
          <label htmlFor="topic" className="block text-gray-700 text-sm font-bold mb-2">
            Choose Topic
          </label>
          <div className="relative">
            <select
              id="topic"
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 appearance-none"
            >
              <option value="">Select from list below</option>
              <option value="general">General Inquiry</option>
              <option value="technical">Technical Support</option>
              <option value="billing">Billing</option>
              <option value="other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Enter your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Enter your Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Your Message */}
        <div>
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 resize-y"
            placeholder="Type your message here..."
          ></textarea>
          <p className="text-gray-500 text-sm mt-1">
            We only accept the following special characters / - + . , ? @ # ( ) ! & % _
          </p>
        </div>

        {/* Upload Attachment */}
        <div className="mt-6">
          <label htmlFor="attachment" className="block text-gray-700 text-sm font-bold mb-2">
            Upload Attachment
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="file"
              id="attachment"
              name="attachment"
              className="hidden" // Hide the default file input
            />
            <label
              htmlFor="attachment"
              className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md inline-flex items-center"
            >
              Choose File
            </label>
            <span className="text-gray-500">No file chosen</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Allowed file types: .png, .jpeg, .jpg, .pdf.
          </p>
          <p className="text-gray-500 text-sm">
            Allowed file size: 2MB.
          </p>
        </div>

        {/* Captcha */}
        <div className="flex items-center space-x-4 mt-6">
          <div className="text-2xl font-bold italic text-gray-700 bg-gray-200 px-4 py-2 rounded-md tracking-wider select-none">
            {generatedCaptcha}
          </div>
          <button
            type="button"
            onClick={refreshCaptcha}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 focus:outline-none"
            aria-label="Refresh Captcha"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004 12v1a8.001 8.001 0 0115.356-2L20 10V5h-1.341c-.534-.69-.974-1.296-1.391-1.742"
              ></path>
            </svg>
          </button>
          <input
            type="text"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Enter captcha"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;