import { MongoClient } from "mongodb";
import { RestauranteDB } from "../types.ts";

const url = Deno.env.get("MONGO_URL");
if (!url) {
  throw new Error("MONGO_URL is not set");
}

const client = new MongoClient(url);
await client.connect();

const db = client.db("PreParcial2");
const RestaurantesCollection = db.collection<RestauranteDB>("restaurantes");

export default RestaurantesCollection;
