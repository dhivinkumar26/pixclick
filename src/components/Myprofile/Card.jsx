// components/Card.js
import React from 'react';

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}

export default Card;