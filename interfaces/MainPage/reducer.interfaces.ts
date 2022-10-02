import {
  CHANGE_HERO,
  CHOOSE_CHARACTER,
  GET_INPUT_VALUE,
  REFRESH_INFO_HERO_LIST,
  SAVE_CHARACTER_URL,
  SET_CHARACTER_FROM_SEARCH,
  SET_LOADING,
} from "../../reducers/MainPageConst";
import { IClearCharacterInfo } from "./clearCharacterInfo.interfaces";
import { IClearCharactersInfoForList } from "./clearCharactersInfoForList";
import { randomCharErrorMessages } from "./messagesForNullContent.interfaces";

export type IMainPageReducer =
  | {
      type: typeof CHANGE_HERO;
      payload: IClearCharacterInfo | randomCharErrorMessages;
    }
  | { type: typeof SET_LOADING; payload: boolean }
  | { type: typeof CHOOSE_CHARACTER; payload: IClearCharactersInfoForList }
  | { type: typeof GET_INPUT_VALUE; payload: string }
  | {
      type: typeof REFRESH_INFO_HERO_LIST;
      payload: IClearCharactersInfoForList[];
    }
  | {
      type: typeof SAVE_CHARACTER_URL;
      payload: string;
    }
  | {
      type: typeof SET_CHARACTER_FROM_SEARCH;
      payload: IClearCharacterInfo;
    };
