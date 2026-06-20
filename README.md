<h1 align="center">🎥 Gather</h1>

<p align="center">
  A full-stack <b>Zoom-style Video Conferencing Web App</b> built with <b>React</b>, <b>Node.js</b>, <b>Express</b>, <b>Socket.IO</b>, and <b>WebRTC</b>.  
  Users can create or join meeting rooms instantly, communicate through real-time video and audio, and collaborate seamlessly from anywhere.
</p>

## 🌐 Live Demo
🔗 [Gather on Render](https://gathervideofrontend-k2eo.onrender.com)

---

## 🏗️ Tech Stack

| Layer | Technology Used |
|-------|----------------|
| 💻 Frontend | React.js, CSS Modules, Material UI |
| ⚙️ Backend | Node.js, Express.js |
| 🗄️ Database | MongoDB with Mongoose |
| 🔄 Real-Time Communication | WebRTC, Socket.IO |
| 🔒 Authentication & Security | bcrypt, crypto |
| ☁️ Hosting | Render |

---

## 🗂️ Project Structure
```

```

---

## ✨ Features

- 🔐 **User Authentication** — Secure signup and login system with encrypted credentials
- 🎥 **HD Video Meetings** — Real-time video conferencing powered by WebRTC
- 🎙️ **Audio Controls** — Instantly mute and unmute your microphone
- 📹 **Video Controls** — Turn your camera on or off during meetings
- 💬 **Live Chat** — Exchange messages with participants in real time
- 🖥️ **Screen Sharing** — Share your screen for presentations and collaboration
- 🔗 **Custom Meeting Links** — Create and join meetings using personalized room links
- 📜 **Meeting History** — Access a record of your previous meetings
- 👥 **Multi-Participant Rooms** — Connect and collaborate with multiple users simultaneously
- ⚡ **Real-Time Communication** — Low-latency signaling and synchronization using Socket.IO
- 🔒 **Secure Sessions** — Protected user accounts and meeting access using bcrypt and crypto

---

## 🏗️ System Architecture

Gather follows a full-stack architecture built with **React**, **Node.js**, **Express**, **MongoDB**, **Socket.IO**, and **WebRTC** to enable secure real-time video conferencing.

![System Architecture](screenshots/architecture.png)

### Frontend Layer

The frontend is built using React and is responsible for authentication, routing, meeting management, and user interactions.

**Key Components**

* **AuthContext** manages global authentication state.
* **Route Guards** protect private routes from unauthorized access.
* **Landing Page** serves as the application's entry point.
* **Authentication Page** handles user sign-in and registration.
* **Home Dashboard** allows users to create or join meetings.
* **Video Meeting Room** manages video/audio streams, screen sharing, and chat.
* **History Page** displays records of previous meetings.

### Backend Layer

The backend is built with Node.js and Express and provides both REST APIs and real-time communication services.

**Core Modules**

* **Express Server (`app.js`)** initializes the application and middleware.
* **User Routes** expose authentication and user-related endpoints.
* **User Controller** processes requests and business logic.
* **Socket Manager** handles real-time signaling, room management, chat messages, and WebRTC event coordination.

### Database Layer

MongoDB is used for persistent storage through Mongoose models.

**Collections**

* **User Model** stores user credentials and profile information.
* **Meeting Model** stores meeting metadata and meeting history.

### Request Flow

1. Users authenticate through the React frontend.
2. Protected routes are validated using the authentication context.
3. HTTP requests are sent to Express APIs for user and meeting operations.
4. Socket.IO establishes real-time communication channels.
5. WebRTC peer connections enable direct audio/video streaming between participants.
6. Meeting and user information is persisted in MongoDB.
7. Meeting history is retrieved and displayed through the History dashboard.

### Real-Time Communication Flow

```text
User A ↔ Socket.IO Signaling Server ↔ User B
        ↓
     WebRTC
        ↓
 Direct Peer-to-Peer
 Audio / Video / Screen Share
```


## 🧭 Pages & Features

### 🎥 Landing Page (`/`)

A sleek, dark-themed introduction featuring an intuitive user interface that invites users to connect seamlessly through high-quality video communication.

![Landing Page](screenshots/main.png)

---

### 🔐 Sign In / Sign Up (`/login`, `/signup`)

Secure user onboarding and login system built with encrypted credentials to protect user data and personalize the meeting experience.

![Authentication](screenshots/signin.png)

---

### 🏠 Dashboard (`/home`)

A streamlined interface where users can instantly host or join a video session by entering a custom or shared meeting code.

![Dashboard](screenshots/home.png)

---

### 🎙️ Lobby & Device Setup (`/:meetingCode`)

A pre-flight camera and microphone configuration screen allowing users to verify their audio/video feeds and set their display name before entering the room.

![Lobby](screenshots/landing.png)

---

### 👥 Conference Rooms (`/:meetingCode`)

A dynamic grid layout that effortlessly scales to support multiple simultaneous video streams with synchronized peer connections. Users can mute/unmute audio, toggle video, share screen, send/receive chat messages in real-time and communicate seamlessly during meetings.

![Conference Room](screenshots/multipleuser.png)

---

### 💬 Collaboration Tools

Integrated live text chat and ultra-low-latency screen sharing functionality to drive interactive presentations and real-time collaboration.

![Screen Share](screenshots/screenshare1.png)
![Chat & Screen Share](screenshots/screenshare.png)

---

### 🔗 Custom Meeting Links

Create and share personalized meeting links, allowing participants to join sessions instantly without complex setup.

---

### 📜 Meeting History (`/history`)

A dedicated historical log displaying a clean, chronological timeline of all past sessions and meeting codes for easy reference.

![Meeting History](screenshots/history.png)

---

## ⚡ Key Features

* Secure user authentication with encrypted passwords using bcrypt
* Create and join meetings through custom meeting links
* Real-time video conferencing powered by WebRTC
* Multi-user meeting rooms with dynamic participant management
* Live text chat during meetings
* Screen sharing for presentations and collaboration
* Mute/unmute microphone controls
* Turn camera on/off during meetings
* Meeting history tracking and retrieval
* Protected routes and authenticated user sessions
* Real-time signaling and room synchronization using Socket.IO
* Responsive and modern user interface built with Material UI

---

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/gather.git
cd gather
```

### 2. Install dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

### 3. Set up environment variables

Create a `.env` file inside the backend directory:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:3000
```

### 4. Run the application

#### Start Backend

```bash
cd backend
npm start
```

#### Start Frontend

```bash
cd frontend
npm run dev
```

### 5. Visit in your browser

```text
https://gathervideofrontend-k2eo.onrender.com
```

---

## 🧰 Skills & Tools Used

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,css,nodejs,express,mongodb,git,github,vscode" />
</p>

<p align="center">
  <b>Additional Technologies:</b> Material UI • WebRTC • Socket.IO • Mongoose • bcrypt • Crypto
</p>

---

<p align="center">
  💡 Built with passion by <b>Anwesha Pal</b>
</p>
