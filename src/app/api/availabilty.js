import dbConnect from '../../utils/dbConnect';
import Availability from '../../models/Availability';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { professorId, timeSlots } = req.body;
        const availability = new Availability({ professorId, timeSlots });
        await availability.save();
        return res.status(201).json(availability);
    }

    if (req.method === 'GET') {
        const { professorId } = req.query;
        const availability = await Availability.findOne({ professorId });
        return res.status(200).json(availability);
    }
}
