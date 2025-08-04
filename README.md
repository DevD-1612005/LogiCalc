# 🔢 LogiCalc – The Logical Calculator

LogiCalc is a full-stack calculator application that performs arithmetic operations, saves history, and allows deletion of records. Built with Node.js, Express, MongoDB, and a responsive frontend using HTML, CSS, and JavaScript.

---

## 📌 Features

- ✅ Perform arithmetic operations (+, −, ×, ÷)
- 🧠 Auto-calculates results in real time
- 📜 View history of past calculations
- ❌ Delete all saved calculations
- 💾 MongoDB-based persistent data storage

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Environment**: dotenv

---

## ⚙️ How to Run the Project Locally

Follow these steps to install and run LogiCalc on your system.

### 1. Clone the Repository

```
git clone https://github.com/DevD-1612005/LogiCalc.git
cd LogiCalc
```

---

### 2. Install Server Dependencies

Navigate to the backend folder and install dependencies:

```
cd server
npm install
```

---

### 3. Set Up Environment Variables

In the `server` folder, create a file named `.env` and paste this:

```
MONGO_URI=your_mongodb_connection_string
```

> Replace `your_mongodb_connection_string` with your actual MongoDB Atlas URI.

---

### 4. Start the Backend Server

```
node index.js
```

> Server will run on `http://localhost:5000`

---

### 5. Open the Frontend (Client)

Navigate to the `client` folder and open `index.html` in your browser:

```
cd ../client
```

Then just double-click `index.html` or run it via Live Server in VS Code.

---

## 🧪 API Endpoints (Backend)

| Method | Route           | Description                   |
|--------|------------------|-------------------------------|
| POST   | `/calculate`     | Submits a calculation         |
| GET    | `/calculations`  | Returns all past calculations |
| DELETE | `/calculations`  | Deletes all saved history     |

---

## 📁 Project Structure

```
LogiCalc/
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server/
│   ├── models/
│   │   └── calculations.js
│   ├── index.js
│   └── .env (hidden)
│
├── README.md
└── package.json
```

---

## 🚀 Future Enhancements

- User login and personal history (JWT)
- Scientific calculator features
- Save/export calculation logs
- Deployment to Render / Vercel / Netlify

---

## 👤 Author

**Debangsu Das**  
B.Sc. (Hons) CSDA, IIT Patna  
Email: debangsu_2312res233@iitp.ac.in

---

## 📎 GitHub Link

[🔗 https://github.com/DevD-1612005/LogiCalc](https://github.com/DevD-1612005/LogiCalc)
