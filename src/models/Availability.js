import mongoose from 'mongoose';

const AvailabilitySchema = new mongoose.Schema({
    professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    timeSlots: [{ type: Date }],
});

export default mongoose.models.Availability || mongoose.model('Availability', AvailabilitySchema);
