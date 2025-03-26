import { FunctionalComponent } from "preact/src/index.d.ts";

const Header: FunctionalComponent = () => {
  return (
    <div class="Header">
      <div>
        <a href={"/add"}>Añadir Restaurante</a>
      </div>
      <div>
        <a href={"/list"}>Mostrar Restaurantes</a>
      </div>
    </div>
  );
};

export default Header;
