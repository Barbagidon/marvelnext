import { ICharacterInfo } from "../interfaces/MainPage/character.interfaces";
import { IClearCharacterInfo } from "../interfaces/MainPage/clearCharacterInfo.interfaces";
import { dontHaveInforamtion } from "../interfaces/MainPage/messagesForNullContent.interfaces";

export const clearCharacterInfo = (
  data: ICharacterInfo
): IClearCharacterInfo => {
  return {
    name: data.data.results[0].name,
    thumbnail:
      data.data.results[0].thumbnail.path +
      "." +
      data.data.results[0].thumbnail.extension,
    description:
      data.data.results[0].description ??
      dontHaveInforamtion,

    id: data.data.results[0].id,
  };
};
