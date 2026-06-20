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
├── Backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── socketManager.js
│   │   │   └── user.controller.js
│   │   ├── models/
│   │   │   ├── meeting.model.js
│   │   │   └── user.model.js
│   │   ├── routes/
│   │   │   └── users.routes.js
│   │   └── app.js
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── components/
│   │   │   │   ├── Content.js
│   │   │   │   ├── CustomIcons.js
│   │   │   │   ├── SignInCard.js
│   │   │   │   └── SignInStyle.css
│   │   │   ├── authentication.jsx
│   │   │   ├── history.jsx
│   │   │   ├── home.jsx
│   │   │   ├── landing.jsx
│   │   │   └── VideoMeet.jsx
│   │   ├── styles/
│   │   │   ├── history.css
│   │   │   ├── landingComponent.module.css
│   │   │   └── videoComponent.module.css
│   │   ├── utils/
│   │   │   └── withAuth.jsx
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── environment.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── images/
├── node_modules/
├── src/
│   ├── controllers/
│   │   ├── socketManager.js
│   │   └── user.controller.js
│   ├── models/
│   │   ├── meeting.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   └── users.routes.js
│   └── app.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

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

Gather is a full-stack video conferencing platform built with **React**, **Node.js**, **Express**, **MongoDB**, **Socket.IO**, and **WebRTC**.

![System Architecture](https://github.com/anwesha24-code/Zoom/blob/dea3c8c5f3d9271050a46fccd3317cbc2ef0a4bc/images/diagram.png)

### Frontend

* **AuthContext** manages authentication state.
* **Protected Routes** secure private pages.
* **Landing, Authentication, Home, Video Meet, and History** pages handle the user experience.

### Backend

* **Express Server** handles API requests.
* **User Routes & Controllers** manage authentication and business logic.
* **Socket Manager** coordinates real-time signaling and room events.

### Database

* **User Model** stores user information.
* **Meeting Model** stores meeting details and history.

### Flow

1. Users authenticate and access protected routes.
2. Frontend communicates with Express APIs.
3. Socket.IO handles real-time signaling.
4. WebRTC establishes peer-to-peer audio, video, and screen-sharing connections.
5. User and meeting data are stored in MongoDB.

### Real-Time Communication

```text
User A ↔ Socket.IO ↔ User B
        ↓
      WebRTC
        ↓
 Audio • Video • Screen Share
```
## 🧭 Pages & Features

### 🎥 Landing Page (`/`)

A sleek, dark-themed introduction featuring an intuitive user interface that invites users to connect seamlessly through high-quality video communication.

![Landing Page](https://github.com/anwesha24-code/Zoom/blob/dea3c8c5f3d9271050a46fccd3317cbc2ef0a4bc/images/main.png)

---

### 🔐 Sign In / Sign Up (`/auth`)

Secure user onboarding and login system built with encrypted credentials to protect user data and personalize the meeting experience.

![Authentication](https://github.com/anwesha24-code/Zoom/blob/dea3c8c5f3d9271050a46fccd3317cbc2ef0a4bc/images/signin.png)

---

### 🏠 Dashboard (`/home`)

A streamlined interface where users can instantly host or join a video session by entering a custom or shared meeting code.

![Dashboard](https://github.com/anwesha24-code/Zoom/blob/dea3c8c5f3d9271050a46fccd3317cbc2ef0a4bc/images/home.png)

---

### 🎙️ Lobby & Device Setup (`/:meetingCode`)

A pre-flight camera and microphone configuration screen allowing users to verify their audio/video feeds and set their display name before entering the room.

![Lobby](https://github.com/anwesha24-code/Zoom/blob/dea3c8c5f3d9271050a46fccd3317cbc2ef0a4bc/images/landing.png)

---

### 👥 Conference Rooms (`/:meetingCode`)

A dynamic grid layout that effortlessly scales to support multiple simultaneous video streams with synchronized peer connections. Users can mute/unmute audio, toggle video, share screen, send/receive chat messages in real-time and communicate seamlessly during meetings.

![Conference Room](https://github.com/anwesha24-code/Zoom/blob/dea3c8c5f3d9271050a46fccd3317cbc2ef0a4bc/images/multipleuser.png)

---

### 💬 Collaboration Tools

Integrated live text chat and ultra-low-latency screen sharing functionality to drive interactive presentations and real-time collaboration.

![Screen Share](https://github.com/anwesha24-code/Zoom/blob/dea3c8c5f3d9271050a46fccd3317cbc2ef0a4bc/images/screenshare1.png)
![Chat & Screen Share](https://github.com/anwesha24-code/Zoom/blob/dea3c8c5f3d9271050a46fccd3317cbc2ef0a4bc/images/screenshare.png)

---

### 🔗 Custom Meeting Links

Create and share personalized meeting links, allowing participants to join sessions instantly without complex setup.

---

### 📜 Meeting History (`/history`)

A dedicated historical log displaying a clean, chronological timeline of all past sessions and meeting codes for easy reference.

![Meeting History](https://github.com/anwesha24-code/Zoom/blob/dea3c8c5f3d9271050a46fccd3317cbc2ef0a4bc/images/history.png)

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
  <img src="https://img.shields.io/badge/Material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
  <img src="https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=webrtc&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" />
  <img src="https://img.shields.io/badge/bcrypt-4A90E2?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Crypto-FF6F00?style=for-the-badge&logo=securityscorecard&logoColor=white" />
</p>

---

<p align="center">
  💡 Built with passion by <b>Anwesha Pal</b>
</p>
