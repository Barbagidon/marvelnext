import { Comics } from "./charactersList.interfaces";

export interface IClearCharactersInfoForList {
  name: string;
  description: string;
  id: number;
  comics?: Comics;
  thumbnail: string;
}
