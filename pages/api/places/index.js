import dbConnect from '@/db/connect';
import Place from '@/db/models/Place';
import {places} from '@/lib/db';

export default async function handler(request, response) {
  await dbConnect();
  response.status(200).json(places);
  if (request.method === 'POST') {
    try {
      await Place.create(request.body);
      return response.status(201).json({'Message': 'Place created successfully'});
    } catch (e) {
      console.error(e);
      return response.status(500).json({message: 'Error creating place'});
    }
  }
}
