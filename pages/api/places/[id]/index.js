import Place from '@/db/models/Place';
import dbConnect from '@/db/connect';

export default async function handler(request, response) {
  await dbConnect();
  const {id} = request.query;
  try {
    if (request.method === 'GET') {
      const place = await Place.findById(id);
      if (!place) {
        response.status(404).json({status: 'Place Not Found'});
        return;
      }
      response.status(200).json(place);
      return;
    }

    if (request.method === 'PUT') {
      const updatedPlace = request.body;
      await Place.findByIdAndUpdate(id, updatedPlace);
      response.status(200).json({message: 'Edited!'});
      return;
    }

    if (request.method === 'DELETE') {
      await Place.findByIdAndDelete(id);
      return response.status(200).json({status: 'Place deleted successfully'});
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({message: 'Internal Server Error.'});
  }
}
