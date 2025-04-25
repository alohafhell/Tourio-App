import Places from "@/db/models/Places";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Places.findById(id);
    if (!place) {
      response.status(404).json({ status: "Place Not Found" });
      return;
    }
    response.status(200).json(place);
    return;
  }
}
