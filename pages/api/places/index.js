import dbConnect from '@/db/connect';
import Place from '@/db/models/Place';

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === 'GET') {
    try {
      const places = await Place.find();
      if (!places) {
        return response.status(404).json({message: 'Not found.'});
      }
      return response.status(200).json(places);
    } catch (e) {
      console.error(e);
      return response.status(500).json({message: 'Error creating place'});
    }
  }
  if (request.method === 'POST') {
    try {
      await Place.create(request.body);
      return response.status(201).
          json({'Message': 'Place created successfully'});
    } catch (e) {
      console.error(e);
      return response.status(500).json({message: 'Error creating place'});
    }
  }
}