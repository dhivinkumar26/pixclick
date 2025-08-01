import React, { useState } from 'react';
import axios from 'axios';

const BrandForm = () => {
  const initialState = {
    brandName: '',
    logoUrl: '',
    website: '',
    category: '',
    description: '',
    amt: '',
    discount: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form...');
    console.log('Form Data:', formData);

    try {
      const res = await axios.post('https://---/api/brands', formData);
      setMessage('Brand saved successfully!');
      console.log('API Response', res.data);
    } catch (error) {
      setMessage('Something went wrong!');
      console.error('API Error', error);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
    setMessage('');
    console.log('Form has been reset');
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow p-6 rounded-md mt-6">
      <h2 className="text-xl font-bold mb-4">Add Brand Details</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="brandName"
          placeholder="Brand Name"
          className="w-full border px-3 py-2 rounded"
          value={formData.brandName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="logoUrl"
          placeholder="Logo URL"
          className="w-full border px-3 py-2 rounded"
          value={formData.logoUrl}
          onChange={handleChange}
        />

        <input
          type="text"
          name="website"
          placeholder="Website"
          className="w-full border px-3 py-2 rounded"
          value={formData.website}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full border px-3 py-2 rounded"
          value={formData.category}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Brand Description"
          className="w-full border px-3 py-2 rounded"
          value={formData.description}
          onChange={handleChange}
          rows={3}
        />

        <input
          type="number"
          name="amt"
          placeholder="Amount (₹)"
          className="w-full border px-3 py-2 rounded"
          value={formData.amt}
          onChange={handleChange}
        />

        <input
          type="number"
          name="discount"
          placeholder="Discount (%)"
          className="w-full border px-3 py-2 rounded"
          value={formData.discount}
          onChange={handleChange}
        />

        <div className="flex justify-between gap-4">
          <button
            type="submit"
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="flex-1 bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
          >
            Reset
          </button>
        </div>
      </form>

      {message && <p className="mt-4 text-center text-sm text-blue-600">{message}</p>}
    </div>
  );
};

export default BrandForm;
