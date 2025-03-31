const express = require("express");
const {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController.js");
const upload = require("../middlewares/uploadMiddleware.js");
const router = express.Router();

router.get("/", getAllBookings);
router.get("/:id", getBookingById);
router.post("/", upload.single("paymentSlip"), createBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;

