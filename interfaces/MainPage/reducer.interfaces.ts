import {
  CHANGE_HERO,
  CHOOSE_CHARACTER,
  SET_LOADING,
} from "../../reducers/MainPageConst";
import { IClearCharacterInfo } from "./clearCharacterInfo.interfaces";
import { IClearCharactersInfoForList } from "./clearCharactersInfoForList";
import { randomCharErrorMessages } from "./errorMessages.interfaces";

export type IMainPageReducer =
  | {
      type: typeof CHANGE_HERO;
      payload: IClearCharacterInfo | randomCharErrorMessages;
    }
  | { type: typeof SET_LOADING; payload: boolean }
  | { type: typeof CHOOSE_CHARACTER; payload: IClearCharactersInfoForList };
