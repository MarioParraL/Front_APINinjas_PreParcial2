import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { ObjectId } from "mongodb";
import RestaurantesCollection from "../../db/restaurante.ts";
import { Restaurante } from "../../types.ts";

type Data = {
  restaurante: Restaurante;
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const id = ctx.params.id;
    try {
      const restauranteDB = await RestaurantesCollection.findOne({
        _id: new ObjectId(id),
      });
      if (!restauranteDB) {
        return new Response("Restaurante no encontrado", { status: 404 });
      }

      return ctx.render({
        restaurante: {
          id: restauranteDB._id.toString(),
          name: restauranteDB.name,
          type: restauranteDB.type,
          city: restauranteDB.city,
          population: restauranteDB.population,
        },
      });
    } catch (_e) {
      return new Response("DB Error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<Data>) => {
  const restaurante = props.data.restaurante;
  return (
    <div class="Todos">
      <h1>{restaurante.name}</h1>
      <p>{restaurante.type}</p>
      <p>{restaurante.city}</p>
      <p>City population: {restaurante.population}</p>
    </div>
  );
};

export default Page;
