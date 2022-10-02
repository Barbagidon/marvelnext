import { IMainPageContext } from "../interfaces/MainPage/mainPageContext.interfaces";
import { IMainPageReducer } from "../interfaces/MainPage/reducer.interfaces";
import {
  CHANGE_HERO,
  CHOOSE_CHARACTER,
  GET_INPUT_VALUE,
  REFRESH_INFO_HERO_LIST,
  SET_CHARACTER_FROM_SEARCH,
  SET_LOADING,
} from "./MainPageConst";

export function MainPageReducer(
  state: IMainPageContext,
  action: IMainPageReducer
): IMainPageContext {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_HERO:
      return {
        ...state,
        characterInfo: payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    case CHOOSE_CHARACTER:
      return {
        ...state,
        choosenCharacter: payload,
      };

    case GET_INPUT_VALUE:
      return {
        ...state,
        inputValue: payload,
      };
    case REFRESH_INFO_HERO_LIST:
      return {
        ...state,
        charactersInfoForList: payload,
      };

    case SET_CHARACTER_FROM_SEARCH:
      console.log("search");
      return {
        ...state,
        characterFromSearch: payload,
      };

    default:
      return state;
  }
}
