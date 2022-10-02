import { createContext, PropsWithChildren, useReducer } from "react";
import { IMainPageContext } from "../interfaces/MainPage/mainPageContext.interfaces";

import {
  CHANGE_HERO,
  CHOOSE_CHARACTER,
  CLEAR_CHARACTER_FROM_SEARCH,
  GET_INPUT_VALUE,
  REFRESH_INFO_HERO_LIST,
  SAVE_CHARACTER_URL,
  SET_ARR_WITH_NUMBER_PAGES,
  SET_CHARACTER_FROM_SEARCH,
  SET_LOADING,
} from "../reducers/MainPageConst";
import { MainPageReducer } from "../reducers/MainPageReducer";

export const MainPageContext = createContext<IMainPageContext>({
  characterInfo: {
    name: "Thor",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg",
    description:
      "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
    id: 1009664,
  },
  charactersInfoForList: [],
  arrWithNumberPages: [],
});

export const MainPageContextProvider = ({
  children,
}: PropsWithChildren<IMainPageContext>): JSX.Element => {
  const [state, dispatch] = useReducer(MainPageReducer, {
    loading: false,
    setLoading: (set) => {
      dispatch({ type: SET_LOADING, payload: set });
    },
    characterInfo: "",
    setHero: (characterInfo) => {
      dispatch({ type: CHANGE_HERO, payload: characterInfo });
    },
    charactersInfoForList: [],
    setCharactersInfoForList: (charactersInfoForList) => {
      dispatch({
        type: REFRESH_INFO_HERO_LIST,
        payload: charactersInfoForList,
      });
    },
    choosenCharacter: undefined,
    setChoosenCharacter: (choosenCharacter) => {
      dispatch({ type: CHOOSE_CHARACTER, payload: choosenCharacter });
    },
    inputValue: "",
    setInputValue: (value) => {
      dispatch({ type: GET_INPUT_VALUE, payload: value });
    },
    arrWithNumberPages: [],
    setArrWithNumberPages: (arrWithNumberPages) => {
      dispatch({
        type: SET_ARR_WITH_NUMBER_PAGES,
        payload: arrWithNumberPages,
      });
    },

    characterUrl: "",
    setCharacterUrl: (url) => {
      dispatch({ type: SAVE_CHARACTER_URL, payload: url });
    },
    characterFromSearch: undefined,
    setCharacterFromSearch: (characterInfo) => {
      dispatch({ type: SET_CHARACTER_FROM_SEARCH, payload: characterInfo });
    },

    clearCharacterFromSearch: () => {
      dispatch({ type: CLEAR_CHARACTER_FROM_SEARCH, payload: undefined });
    },
  });

  return (
    <MainPageContext.Provider value={state}>
      {children}
    </MainPageContext.Provider>
  );
};
