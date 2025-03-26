import { FunctionalComponent } from "preact/src/index.d.ts";
import { Restaurante } from "../types.ts";
type Props = {
  restaurantes: Restaurante[];
};

const ListRestaurantes: FunctionalComponent<Props> = (props) => {
  const restaurantes = props.restaurantes;
  return (
    <div>
      <h2>Restaurantes guardados</h2>
      {restaurantes.map((r) => (
        <div class="RestauranteNombre">
          <a href={`/restaurante/${r.id}`}>{r.name}</a>
        </div>
      ))}
    </div>
  );
};

export default ListRestaurantes;
