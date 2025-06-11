# CoBro Stream

> Indie-built container-native WebRTC broadcasting platform with under-100ms latency and no BS.

## 🌟 Why CoBro?
- Built for developers, streamers, and rebels who want freedom from bloated stream platforms.
- Runs on containers. Broadcasts from browsers.
- Streams in real-time. Literally milliseconds.

## 💡 Features
- 🎥 WebRTC + VP9 low-latency broadcasting
- 🚢 Container-first backend (Node.js + Redis)
- 🔐 JWT-based Auth
- 📡 TURN-ready signaling
- 🧩 Plug & Play frontend in React + TailwindCSS
- 💵 Plans: Pro (Free), Premium ($9.90/mo), Enterprise ($99.90/mo)

## 📦 Setup

```bash
git clone https://github.com/hasmetdurak/cobro
cd cobro
```

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm run start
```

### Docker (Redis + Backend)
```bash
cd docker
docker-compose up
```

## 🚀 Usage
1. Broadcasters: Go to `/publish`, enter title/category, and stream via browser.
2. Viewers: Go to `/`, click on live stream, and enjoy under-100ms latency.

## 🤝 Contribution
We love pull requests. Please read [`CONTRIBUTING.md`](docs/CONTRIBUTING.md)

## 📜 License
MIT — use it, fork it, improve it.
