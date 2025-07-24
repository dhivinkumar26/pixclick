import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react'; // For the close icon. Ensure 'lucide-react' is installed.

const AddMissingProfitModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    dateOfOrder: '',
    retailer: '',
    orderId: '',
    orderAmount: '',
    productName: '',
    attachment: null,
    termsAccepted: false,
  });

  // Debugging: Log when the modal is attempting to render
  useEffect(() => {
    if (isOpen) {
      console.log('AddMissingProfitModal is open and attempting to render.');
    }
  }, [isOpen]);


  // Dummy data for retailer options
  const retailerOptions = [
    { value: '', label: '--Select Retailer--' },
    { value: 'retailer1', label: 'Retailer A' },
    { value: 'retailer2', label: 'Retailer B' },
    { value: 'retailer3', label: 'Retailer C' },
  ];

  // Dummy data for the "Order Details" table (if there were existing orders)
  const dummyOrderDetails = [
    // { exitClickTime: '10:00 AM', transactionId: 'TXN123', transactionAmount: '₹500', earnings: '₹50', couponDetails: 'N/A', status: 'Pending' },
    // { exitClickTime: '11:30 AM', transactionId: 'TXN456', transactionAmount: '₹1200', earnings: '₹120', couponDetails: 'DISCOUNT10', status: 'Approved' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Missing Profit Ticket Submitted:', formData);
    // Here you would typically send this data to your API
    onClose(); // Close modal after submission
  };

  if (!isOpen) return null; // Crucial: If isOpen is false, this component renders nothing

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl mx-auto p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Temporary visual check */}
        

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">ADD MISSING PROFIT TICKET</h2>

        <form onSubmit={handleSubmit}>
          {/* Section 1: Date of Order */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="text-lg font-bold text-gray-700 mr-2">01</span>
              <h3 className="text-lg font-semibold text-gray-800">DATE OF ORDER</h3>
            </div>
            <input
              type="date"
              name="dateOfOrder"
              value={formData.dateOfOrder}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Section 2: Retailer Details */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="text-lg font-bold text-gray-700 mr-2">02</span>
              <h3 className="text-lg font-semibold text-gray-800">RETAILER DETAILS</h3>
            </div>
            <select
              name="retailer"
              value={formData.retailer}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
              required
            >
              {retailerOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Section 3: Order Details (Table) */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="text-lg font-bold text-gray-700 mr-2">03</span>
              <h3 className="text-lg font-semibold text-gray-800">ORDER DETAILS</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Have multiple exit clicks for the same retailer? Select any one and we will take care of the rest!
            </p>
            <div className="overflow-x-auto border border-gray-200 rounded-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exit Click Time</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Amount</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earnings</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coupon Details</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dummyOrderDetails.length > 0 ? (
                    dummyOrderDetails.map((order, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{order.exitClickTime}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{order.transactionId}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{order.transactionAmount}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{order.earnings}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{order.couponDetails}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{order.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-4 py-4 text-center text-sm text-gray-500">
                        No orders found for selected retailer.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Details */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="text-lg font-bold text-gray-700 mr-2">04</span>
              <h3 className="text-lg font-semibold text-gray-800">DETAILS</h3>
            </div>
            <div className="mb-4">
              <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-1">
                Order ID/Booking ID
              </label>
              <input
                type="text"
                id="orderId"
                name="orderId"
                value={formData.orderId}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Order ID/Booking ID"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Note - We only accept the following special characters: / \ , @ # ! &</p>
            </div>
            <div className="mb-4">
              <label htmlFor="orderAmount" className="block text-sm font-medium text-gray-700 mb-1">
                Order Amount (Excluding GST)
              </label>
              <input
                type="number"
                id="orderAmount"
                name="orderAmount"
                value={formData.orderAmount}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Order Amount"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Product Name"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Please list all the products you have purchased. Note - We only accept the following special characters: / \ , @ # ! &</p>
            </div>
            <div className="mb-4">
              <label htmlFor="attachment" className="block w-full text-sm font-medium text-gray-700 mb-1">
                Upload Attachment (Optional)
              </label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
                accept=".png, .jpg, .jpeg, .pdf"
              />
              <p className="text-xs text-gray-500 mt-1">Allowed file types: .png, .jpg, .jpeg, .pdf. Allowed file size: 2MB.</p>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                required
              />
              <label htmlFor="termsAccepted" className="ml-2 text-sm text-gray-900">
                I have read and understood all <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>.
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition duration-200 disabled:opacity-50"
            disabled={!formData.termsAccepted}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMissingProfitModal;