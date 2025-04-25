import { places } from "../../../lib/db";
import mongoose from "mongoose";

export default function handler(request, response) {
  response.status(200).json(places);
  return;
}
