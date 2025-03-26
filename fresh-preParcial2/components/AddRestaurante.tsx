import { FunctionalComponent } from "preact/src/index.d.ts";

const AddRestaurante: FunctionalComponent = () => {
  return (
    <div>
      <form method="GET" action="/add" class="AddForm">
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="type" placeholder="Type" />
        <input type="text" name="city" placeholder="City" />
        <button type="submit">Añadir Restaurante</button>
      </form>
    </div>
  );
};

export default AddRestaurante;
