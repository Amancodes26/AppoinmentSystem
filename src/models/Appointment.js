import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  professorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  timeSlot: { type: Date, required: true },
  status: { type: String, enum: ["booked", "cancelled"], default: "booked" },
});

export default mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);
