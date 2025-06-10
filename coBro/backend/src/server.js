const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const Redis = require('ioredis');
const jwt = require('jsonwebtoken');

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
});

app.use(express.json());

app.post('/auth', (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign({ email }, 'secret-key', { expiresIn: '1h' });
  res.json({ token });
});

app.get('/streams', async (req, res) => {
  const streams = await redis.lrange('streams', 0, -1);
  res.json(streams.map(JSON.parse));
});

app.post('/publish', async (req, res) => {
  const { title, quality, category } = req.body;
  const streamId = Date.now().toString();
  await redis.lpush('streams', JSON.stringify({ id: streamId, title, quality, category }));
  res.json({ streamId });
});

io.on('connection', (socket) => {
  console.log('Peer connected:', socket.id);

  socket.on('register', async ({ streamId, peerInfo }) => {
    await redis.geoadd(`peers:${streamId}`, peerInfo.longitude, peerInfo.latitude, socket.id);
    socket.join(streamId);
  });

  socket.on('offer', ({ streamId, offer }) => {
    socket.to(streamId).emit('offer', { offer, from: socket.id });
  });

  socket.on('answer', ({ streamId, answer, to }) => {
    socket.to(to).emit('answer', { answer });
  });

  socket.on('ice-candidate', ({ streamId, candidate, to }) => {
    socket.to(to).emit('ice-candidate', { candidate });
  });
});

http.listen(3000, () => console.log('Server running on port 3000'));