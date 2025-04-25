import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find();
    if (!places) {
      response.status(404).json({ message: "Not found." });
      return;
    }
    response.status(200).json(places);
    return;
  }
}
