import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ListRestaurantes from "../components/ListRestaurantes.tsx";
import RestaurantesCollection from "../db/restaurante.ts";
import { Restaurante } from "../types.ts";

type Data = {
  restaurantes: Restaurante[];
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const restaurantesDB = await RestaurantesCollection.find().toArray();
    const restaurantes = restaurantesDB.map((r) => ({
      id: r._id.toString(),
      name: r.name,
      type: r.type,
      city: r.city,
      population: r.population,
    }));
    return ctx.render({ restaurantes });
  },
};

const Page = (props: PageProps<Data>) => {
  const restaurantes = props.data.restaurantes;
  return <ListRestaurantes restaurantes={restaurantes} />;
};

export default Page;
