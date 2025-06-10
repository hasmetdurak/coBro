import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import StreamCard from './components/StreamCard';

const socket = io('http://localhost:3000');

const App = () => {
  const [streams, setStreams] = useState([]);
  const [userType, setUserType] = useState('viewer');
  const [selectedStream, setSelectedStream] = useState(null);
  const [plan, setPlan] = useState('pro');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Spor');

  useEffect(() => {
    axios.get('http://localhost:3000/streams').then((response) => {
      setStreams(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">CoBro Stream</h1>
      {userType === 'viewer' ? (
        <div className="grid grid-cols-2 gap-4">
          {streams.map((stream, index) => (
            <StreamCard key={index} stream={stream} onSelect={setSelectedStream} />
          ))}
        </div>
      ) : (
        <div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Başlık" />
          <button onClick={() => {
            axios.post('http://localhost:3000/publish', { title, category, quality: '1080p' })
              .then(res => alert("Yayın Başlatıldı"));
          }}>Yayın Başlat</button>
        </div>
      )}
    </div>
  );
};

export default App;