import { createContext, PropsWithChildren, useEffect, useReducer } from "react";
import { IMainPageContext } from "../interfaces/MainPage/mainPageContext.interfaces";

import {
  CHANGE_HERO,
  CHOOSE_CHARACTER,
  GET_INPUT_VALUE,
  REFRESH_INFO_HERO_LIST,
  SAVE_CHARACTER_URL,
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
  characterInfo,
  charactersInfoForList,
  arrWithNumberPages,
}: PropsWithChildren<IMainPageContext>): JSX.Element => {
  const [state, dispatch] = useReducer(MainPageReducer, {
    loading: false,
    setLoading: (set) => {
      console.log("loading");
      dispatch({ type: SET_LOADING, payload: set });
    },
    characterInfo,
    setHero: (characterInfo) => {
      dispatch({ type: CHANGE_HERO, payload: characterInfo });
    },
    charactersInfoForList,
    choosenCharacter: undefined,
    setChoosenCharacter: (choosenCharacter) => {
      dispatch({ type: CHOOSE_CHARACTER, payload: choosenCharacter });
    },
    inputValue: "",
    setInputValue: (value) => {
      dispatch({ type: GET_INPUT_VALUE, payload: value });
    },
    arrWithNumberPages,
    characterUrl: "",
    setCharacterUrl: (url) => {
      dispatch({ type: SAVE_CHARACTER_URL, payload: url });
    },
    characterFromSearch: undefined,
    setCharacterFromSearch: (characterInfo) => {
      dispatch({ type: SET_CHARACTER_FROM_SEARCH, payload: characterInfo });
    },
  });

  useEffect(() => {
    dispatch({ type: REFRESH_INFO_HERO_LIST, payload: charactersInfoForList });
  }, [charactersInfoForList]);

  return (
    <MainPageContext.Provider value={state}>
      {children}
    </MainPageContext.Provider>
  );
};
