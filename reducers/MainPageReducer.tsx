import { IMainPageContext } from "../interfaces/MainPage/mainPageContext.interfaces";
import { IMainPageReducer } from "../interfaces/MainPage/reducer.interfaces";
import {
  CHANGE_HERO,
  CHOOSE_CHARACTER,
  CLEAR_CHARACTER_FROM_SEARCH,
  GET_INPUT_VALUE,
  REFRESH_INFO_HERO_LIST,
  SET_ARR_WITH_NUMBER_PAGES,
  SET_CHARACTER_FROM_SEARCH,
  SET_LOADING,
} from "./MainPageConst";

export function MainPageReducer(
  state: IMainPageContext,
  { type, payload }: IMainPageReducer
): IMainPageContext {
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
      return {
        ...state,
        characterFromSearch: payload,
      };

    case CLEAR_CHARACTER_FROM_SEARCH:
      return {
        ...state,
        characterFromSearch: undefined,
      };

    case SET_ARR_WITH_NUMBER_PAGES: {
      return {
        ...state,
        arrWithNumberPages: payload,
      };
    }

    default:
      return state;
  }
}
