import React from 'react';

const StreamCard = ({ stream, onSelect }) => (
  <div
    className="bg-white p-4 rounded shadow hover:bg-gray-100 cursor-pointer"
    onClick={() => onSelect(stream)}
  >
    <h3 className="font-bold">{stream.title}</h3>
    <p>Quality: {stream.quality}</p>
    <p>Category: {stream.category}</p>
  </div>
);

export default StreamCard;