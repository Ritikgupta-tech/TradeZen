# 🚀 TradeZen

A full-stack **MERN Stack Stock Trading Platform** inspired by **Zerodha**, built using **React.js, Node.js, Express.js, and MongoDB Atlas**.

TradeZen provides a modern stock trading experience where users can securely register, log in, manage their portfolio, view holdings and positions, and place buy/sell orders through an intuitive dashboard.

---

## 🌐 Live Demo

| Service | Live URL |
|---------|----------|
| 🖥️ Frontend | https://tradezen-frontend-uarn.onrender.com |
| 📊 Dashboard | https://tradezen-dashboard.onrender.com |
| ⚙️ Backend API | https://tradezen-backend-suce.onrender.com |

> **Note:** The backend is hosted on Render's free tier, so the first request may take a few seconds if the service is inactive.

---

## ✨ Features

- 🔐 User Authentication (Signup & Login)
- 📊 Interactive Trading Dashboard
- 💼 Portfolio Holdings
- 📈 Open Positions
- 🛒 Buy & Sell Orders
- 📡 RESTful REST API
- ☁️ MongoDB Atlas Integration
- 📱 Responsive User Interface
- 🚀 Cloud Deployment using Render

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Material UI (MUI)
- Chart.js

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

### Deployment
- GitHub
- Render

---

# 📂 Project Structure

```text
TradeZen/
│
├── backend/
│   ├── model/
│   ├── routes/
│   ├── schemas/
│   ├── package.json
│   └── index.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ritikgupta-tech/TradeZen.git
cd TradeZen
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a **.env** file inside the **backend** folder.

```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server.

```bash
npm start
```

Backend runs on:

```
http://localhost:3002
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 4️⃣ Dashboard Setup

```bash
cd dashboard
npm install
npm start
```

Dashboard runs on:

```
http://localhost:3001
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/signup` | Register a new user |
| POST | `/login` | Login existing user |

### Holdings

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/allHoldings` | Get all portfolio holdings |

### Positions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/allPositions` | Get all trading positions |

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/newOrder` | Place a new order |

---

# 🔑 Environment Variables

Create a **.env** file inside the backend folder.

```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# 🚀 Deployment

TradeZen is deployed on **Render**.

| Service | Deployment Type |
|---------|-----------------|
| Backend | Web Service |
| Frontend | Static Site |
| Dashboard | Static Site |

---

# 🔮 Future Enhancements

- 📈 Live Stock Market Data
- 📊 Real-Time Price Charts
- ⭐ Stock Watchlist
- 💳 Wallet Integration
- 🔔 Real-Time Notifications
- 🌙 Dark Mode
- 📱 Enhanced Mobile Responsiveness
- 📉 Portfolio Analytics
- 📄 Transaction History
- 📊 Advanced Trading Insights

---

# 🤝 Contributing

Contributions are welcome!

1. Fork this repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 👨‍💻 Author

**Ritik Gupta**

🎓 B.Tech Computer Science Engineering

💻 MERN Stack & Java Developer

**GitHub:**  
https://github.com/Ritikgupta-tech

---

# ⭐ Support

If you found this project helpful, please consider giving it a **⭐ Star** on GitHub.

---

<p align="center">
Made with ❤️ by <strong>Ritik Gupta</strong>
</p>
