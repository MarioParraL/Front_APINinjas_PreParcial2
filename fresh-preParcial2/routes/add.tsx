import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import AddRestaurante from "../components/AddRestaurante.tsx";
import RestaurantesCollection from "../db/restaurante.ts";

type Data = {
  added: boolean;
  name: string;
};

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");
    const type = url.searchParams.get("type");
    const city = url.searchParams.get("city");

    if (
      name && name?.length > 0 && type && type?.length > 0 && city &&
      city?.length > 0
    ) {
      try {
        const API_KEY = Deno.env.get("API_KEY");
        if (!API_KEY) {
          return new Response("API_KEY Error");
        }

        const url = `https://api.api-ninjas.com/v1/city?name=${city}`;
        const data = await fetch(url, {
          headers: {
            "X-API-KEY": API_KEY,
          },
        });

        const response = await data.json();
        const population = response[0].population;

        await RestaurantesCollection.insertOne({
          name,
          type,
          city,
          population,
        });

        return ctx.render({ added: true, name });
      } catch (_e) {
        return new Response("Db error in adding", { status: 500 });
      }
    }
    return ctx.render();
  },
};

const Page = (props: PageProps<Data>) => {
  return (
    <>
      <AddRestaurante />
      {props.data?.added && (
        <p>El restaurante {props.data?.name} se ha añadido correctamente</p>
      )}
    </>
  );
};

export default Page;
