import { IClearCharacterInfo } from "./clearCharacterInfo.interfaces";
import { IClearCharactersInfoForList } from "./clearCharactersInfoForList";

export interface IMainPageProps {
  characterInfo: IClearCharacterInfo;
  charactersInfoForList: IClearCharactersInfoForList[];
  arrWithNumberPages: number[];
}
