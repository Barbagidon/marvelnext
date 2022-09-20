import { IClearCharacterInfo } from "./clearCharacterInfo.interfaces";
import { IClearCharactersInfoForList } from "./clearCharactersInfoForList";
import { randomCharErrorMessages } from "./errorMessages.interfaces";

export interface IMainPageContext {
  loading?: boolean;
  setLoading?: (set: boolean) => void;
  characterInfo: IClearCharacterInfo | string;
  setHero?: (
    characterInfo: IClearCharacterInfo | randomCharErrorMessages
  ) => void;
  charactersInfoForList: IClearCharactersInfoForList[];
  chooseCharacter?: IClearCharactersInfoForList;
  setChooseCharacter?: (chooseCharacter: IClearCharactersInfoForList) => void;
}
