import { OptionalId } from "mongodb";

export type Restaurante = {
  id: string;
  name: string;
  type: string;
  city: string;
  population: string;
};

export type RestauranteDB = OptionalId<{
  name: string;
  type: string;
  city: string;
  population: string;
}>;
