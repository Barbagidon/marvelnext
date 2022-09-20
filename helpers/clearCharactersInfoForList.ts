import { ICharactersInfo } from "../interfaces/MainPage/charactersList.interfaces";
import { IClearCharactersInfoForList } from "../interfaces/MainPage/clearCharactersInfoForList";

export const clearCharactersInfoForList = (
  charactersInfo: ICharactersInfo
): IClearCharactersInfoForList[] => {
  const infoAboutHeroes = charactersInfo.data.results;

  return infoAboutHeroes.map((item) => {
    return {
      name: item.name,
      description: item.description,
      id: item.id,
      comics: item.comics,
      thumbnail: item.thumbnail.path + "." + item.thumbnail.extension,
    };
  });
};
