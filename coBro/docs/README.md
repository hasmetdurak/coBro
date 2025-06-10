CoBro Stream 

Hey there! I'm an indie dev pouring my heart into CoBro Stream, a game-changing live streaming platform that delivers 1080p, 4K video with sub-100ms latency—all straight from your browser! Built with WebRTC and VP9, this is my dream to make real-time streaming accessible for everyone, from gamers to sports fans to virtual concert-goers. No hefty server costs, no downloads, just pure, low-latency magic. 
Why CoBro Stream?
I got tired of laggy streams ruining the vibe of live events. Whether it's a clutch moment in a game or a goal in a soccer match, every millisecond counts. So, I built CoBro Stream to be:

Blazing Fast: <100ms latency for near-instant playback.
Peer-to-Peer: Uses WebRTC to distribute streams, slashing server load.
High Quality: VP9 codec for crisp 1080p (up to 4K/8K) with efficient bandwidth.
Browser-Based: No apps to install—just fire up cobrostream.com.
Indie Spirit: Built by one dev, powered by the community.

Think of it as the lovechild of Twitch and Zoom, but leaner, meaner, and way faster. Perfect for sports, gaming, concerts, or any live event where timing is everything.
Features 

Ultra-Low Latency Streaming: Watch or broadcast with <100ms delay.
P2P Architecture: Peers share the load, making it scalable and cost-effective.
VP9 Encoding: High-quality video at low bandwidth (1080p at 8-12 Mbps).
SaaS Experience: Stream or watch directly in the browser with React.js + Tailwind CSS.
Secure: AES-256 encryption, JWT authentication, and WebRTC's DTLS.
Dockerized Backend: Node.js + Redis for real-time peer discovery and signaling.
Flexible Plans:
Viewers: Free (Pro, 720p/1080p) or Premium ($9.90/mo, unlimited quality).
Broadcasters: Pro ($29.90/mo, 720p), Premium ($49.90/mo, 1080p), Enterprise ($99.90/mo, 4K/8K).



Tech Stack 🛠

Frontend: React.js, Tailwind CSS, WebRTC, FFmpeg.js (for browser-based VP9 encoding).
Backend: Node.js, Express, Socket.IO (WebRTC signaling), Redis (peer discovery).
Infra: Docker, Kubernetes-ready for cloud deployment (AWS/Google Cloud).
Protocol: Custom UDP-based RTP with FEC and selective retransmission for reliability.

Getting Started 
Want to try it out? Here's how to spin up CoBro Stream locally:
Prerequisites

Node.js 18+
Docker
Redis (or use the Dockerized version)

Installation

Clone the repo:
git clone https://github.com/hasmetdurak/cobro.git
cd cobrostream


Set up the backend:
cd backend
npm install


Set up the frontend:
cd ../frontend
npm install


Run with Docker (recommended):
cd ../docker
docker-compose up


Or run manually:

Start Redis: redis-server
Start backend: cd backend && npm start
Start frontend: cd frontend && npm start


Open http://localhost:3000 in your browser. 


Usage

Viewers: Browse the stream catalog, pick a 1080p broadcast, and watch with <100ms latency.
Broadcasters: Hit the "Start Broadcast" tab, choose your camera/screen, and go live!

Roadmap 
As an indie dev, I'm dreaming big but building step-by-step. Here's
