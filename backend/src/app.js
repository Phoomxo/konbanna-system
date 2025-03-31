const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const prisma = require("./config/db.js"); // นำ Prisma Client มาใช้
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const placeRoutes = require("./routes/placeRoutes.js");
const activityRoutes = require("./routes/activityRoutes.js");
const bookingRoutes = require("./routes/bookingRoutes.js");
const roomRoutes = require("./routes/roomRoutes.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/places", placeRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/uploads", express.static("uploads"));

// ทดสอบ API Health Check
app.get("/", async (req, res) => {
  try {
    // ทดสอบการเชื่อมต่อกับ DB
    await prisma.$connect();
    res.json({ message: "Patient Transport API is running!" });
  } catch (error) {
    res.status(500).json({ error: "Database connection failed" });
  }
});

module.exports = app;
