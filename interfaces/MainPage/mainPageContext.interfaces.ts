import { IClearCharacterInfo } from "./clearCharacterInfo.interfaces";
import { IClearCharactersInfoForList } from "./clearCharactersInfoForList";

import {
  notFound,
  randomCharErrorMessages,
} from "./messagesForNullContent.interfaces";

export interface IMainPageContext {
  loading?: boolean;
  arrWithNumberPages: number[];
  setArrWithNumberPages?: (arrWithNumberPages: number[]) => void;
  setLoading?: (set: boolean) => void;
  characterInfo: IClearCharacterInfo | string;
  setHero?: (
    characterInfo: IClearCharacterInfo | randomCharErrorMessages
  ) => void;
  charactersInfoForList: IClearCharactersInfoForList[];
  setCharactersInfoForList?: (
    charactersInfoForList: IClearCharactersInfoForList[]
  ) => void;
  choosenCharacter?: IClearCharactersInfoForList;
  setChoosenCharacter?: (choosenCharacter: IClearCharactersInfoForList) => void;
  inputValue?: string;
  setInputValue?: (value: string) => void;
  characterUrl?: string;
  setCharacterUrl?: (url: string) => void;
  characterFromSearch?: IClearCharacterInfo | typeof notFound;
  setCharacterFromSearch?: (
    characterInfo: IClearCharacterInfo | typeof notFound
  ) => void;
  clearCharacterFromSearch?: () => void;
}
