import { IClearCharacterInfo } from "./clearCharacterInfo.interfaces";
import { IClearCharactersInfoForList } from "./clearCharactersInfoForList";
import { IMainPageProps } from "./mainpage.interfaces";
import { randomCharErrorMessages } from "./messagesForNullContent.interfaces";

export interface IMainPageContext {
  loading?: boolean;
  arrWithNumberPages: number[];
  setLoading?: (set: boolean) => void;
  characterInfo: IClearCharacterInfo | string;
  setHero?: (
    characterInfo: IClearCharacterInfo | randomCharErrorMessages
  ) => void;
  charactersInfoForList: IClearCharactersInfoForList[];
  choosenCharacter?: IClearCharactersInfoForList;
  setChoosenCharacter?: (choosenCharacter: IClearCharactersInfoForList) => void;
  inputValue?: string;
  setInputValue?: (value: string) => void;
  characterUrl?: string;
  setCharacterUrl?: (url: string) => void;
  characterFromSearch?: IClearCharacterInfo;
  setCharacterFromSearch?: (characterInfo: IClearCharacterInfo) => void;
}
