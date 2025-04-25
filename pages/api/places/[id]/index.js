import {places} from '@/lib/db';
import dbConnect from '@/db/connect';
import Place from '@/db/models/Place';

export default async function handler(request, response) {
  await dbConnect();
  const {id} = request.query;

  const place = places.find((place) => place.id === id);

  if (!place) {
    response.status(404).json({status: 'Not found'});
    return;
  }

  if (request.method === 'DELETE') {
    await Place.findByIdAndDelete(id);
    return response.status(200).json({status: 'Place deleted successfully'});
  }

  response.status(200).json(place);
}
