import React from 'react';

const StreamCard = ({ stream, onSelect }) => (
  <div className="border p-4 m-2 rounded shadow" onClick={() => onSelect(stream)}>
    <h2 className="text-xl font-bold">{stream.title}</h2>
    <p>{stream.category}</p>
    <p>{stream.quality}</p>
  </div>
);

export default StreamCard;