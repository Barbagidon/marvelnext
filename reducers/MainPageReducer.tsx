import { IMainPageContext } from "../interfaces/MainPage/mainPageContext.interfaces";
import { IMainPageReducer } from "../interfaces/MainPage/reducer.interfaces";
import { CHANGE_HERO, CHOOSE_CHARACTER, SET_LOADING } from "./MainPageConst";

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
        chooseCharacter: payload,
      };

    default:
      return state;
  }
}
