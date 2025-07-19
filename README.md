# 🕶️ Noctalk – Campus Messaging System

**Noctalk** is a secure and efficient bulk messaging system built for campus students. It allows users to register, authenticate, and send bulk SMS to multiple recipients through a modern client-server architecture.

This project was developed as part of the COMP 440: Client–Server Side Programming CAT.

---

## 📦 Technologies Used

| Layer | Stack |
|-------|-------|
| Frontend | Vue.js (or Nuxt.js) |
| Backend | Laravel (PHP) |
| Database | MySQL |
| Authentication | Firebase Auth (or JWT via Laravel) |
| Messaging Gateway | Africa’s Talking (bulk SMS) |
| Optional | Firebase Firestore (message logging or real-time features) |

---

## 🎯 Features

- 🔐 Secure user sign-up and login
- 📲 Send bulk SMS to multiple recipients
- 🧾 Message logs for accountability
- ✅ Authentication via secure tokens
- 🌐 Client-server separation (Vue frontend, Laravel backend)
- 💬 Optional real-time message logging (Firebase)

---

## 📁 Project Structure

```
noctalk/
├── frontend/           # Vue.js app
│   ├── pages/
│   ├── components/
│   └── services/       # API calls
├── backend/            # Laravel API
│   ├── app/Http/Controllers/
│   ├── routes/api.php
│   └── config/
├── database/           # MySQL schema
├── firebase/           # (Optional) Firebase config and functions
└── README.md
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/noctalk.git
cd noctalk
```

---

### 2. Backend (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
```

Update `.env` with your:

```env
AFRICASTALKING_USERNAME=sandbox
AFRICASTALKING_API_KEY=your_api_key
AFRICASTALKING_FROM=AFRICASTKNG
```

Run backend:

```bash
php artisan serve
```

---

### 3. Frontend (Vue.js)

```bash
cd frontend
npm install
npm run dev
```

---

### 4. Firebase (Optional)

- Enable **Authentication**
- Enable **Firestore**
- Store message logs or push notifications if needed

---

## 🔐 Authentication Flow

1. Users register or log in
2. Token is issued via Firebase or Laravel (JWT)
3. Token is stored in localStorage
4. Token is sent with all protected requests

---

## 💬 Bulk SMS Flow

1. User logs in and enters message + recipient numbers
2. Frontend sends a POST request to Laravel
3. Laravel sends message using Africa’s Talking SDK
4. Response is returned and optionally logged to Firestore

---

## 📄 Sample API Endpoints

| Endpoint | Method | Auth | Description |
|----------|--------|------|-------------|
| `/api/register` | POST | ❌ | Register a user |
| `/api/login` | POST | ❌ | Login and receive token |
| `/api/send-bulk-sms` | POST | ✅ | Send bulk SMS |
| `/api/messages` | GET | ✅ | Retrieve message logs |

---

## 📸 Screenshots (Add Later)

- [ ] Sign-up page
- [ ] Dashboard
- [ ] Bulk SMS form
- [ ] Message log table

---

## 📚 Documentation

The full 5-page write-up includes:

- System architecture
- Database schema
- Screenshots
- Key code snippets
- Deployment steps

---

## 👨‍🎓 Developed For

**COMP 440 – Client-Server Side Programming**  
Kenyatta University – July 2025  
By: [Your Name]

---

## 📜 License

This project is for educational use only. Noctalk is a demo system developed for academic purposes.
