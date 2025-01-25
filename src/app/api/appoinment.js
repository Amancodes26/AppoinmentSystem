import dbConnect from '../../utils/dbConnect';
import Appointment from '../../models/Appointment';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { studentId, professorId, timeSlot } = req.body;
        const appointment = new Appointment({ studentId, professorId, timeSlot });
        await appointment.save();
        return res.status(201).json(appointment);
    }

    if (req.method === 'DELETE') {
        const { appointmentId } = req.body;
        await Appointment.findByIdAndDelete(appointmentId);
        return res.status(204).send();
    }
}
