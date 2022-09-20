import { createContext, PropsWithChildren, useReducer } from "react";
import { IMainPageContext } from "../interfaces/MainPage/mainPageContext.interfaces";

import {
  CHANGE_HERO,
  CHOOSE_CHARACTER,
  SET_LOADING,
} from "../reducers/MainPageConst";
import { MainPageReducer } from "../reducers/MainPageReducer";

export const MainPageContext = createContext<IMainPageContext>({
  characterInfo: {
    name: "",
    description: "",
    thumbnail: "",
    id: 1,
  },
  charactersInfoForList: [],
  chooseCharacter: {
    name: "",
    description: "",
    thumbnail: "",
    id: 1,
  },
});

export const MainPageContextProvider = ({
  children,
  characterInfo,
  charactersInfoForList,
  chooseCharacter,
}: PropsWithChildren<IMainPageContext>): JSX.Element => {
  const [state, dispatch] = useReducer(MainPageReducer, {
    loading: false,
    setLoading: (set) => {
      dispatch({ type: SET_LOADING, payload: set });
    },
    characterInfo,
    setHero: (characterInfo) => {
      dispatch({ type: CHANGE_HERO, payload: characterInfo });
    },
    charactersInfoForList,
    chooseCharacter,
    setChooseCharacter: (chooseCharacter) => {
      dispatch({ type: CHOOSE_CHARACTER, payload: chooseCharacter });
    },
  });

  return (
    <MainPageContext.Provider value={state}>
      {children}
    </MainPageContext.Provider>
  );
};
