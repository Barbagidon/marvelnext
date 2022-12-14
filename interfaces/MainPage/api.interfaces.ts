import { IMainPageContext } from "./mainPageContext.interfaces";
import { MouseEvent } from "react";

export interface IAPI {
  domain: typeof process.env.NEXT_PUBLIC_DOMAIN;
  getUrlCharacterForStaticProps: (id: number) => string;
  getUrlCharactersForHeroesList: (num: number) => string;
  changeHeroHandle: (
    setHero?: IMainPageContext["setHero"],
    setLoading?: IMainPageContext["setLoading"]
  ) => void;
  getUrlForSearchChar: (charName: string | undefined) => string;
  getCharacterFromSearch: (
    hero: string | undefined,
    setHero: IMainPageContext["setCharacterFromSearch"],
    setLoading: IMainPageContext["setLoading"],
    e?: MouseEvent
  ) => Promise<void>;
}
