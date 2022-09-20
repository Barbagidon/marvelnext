import { IMainPageContext } from "./mainPageContext.interfaces";

export interface IAPI {
  domain: typeof process.env.NEXT_PUBLIC_DOMAIN;
  getUrlCharacterForStaticProps: (id: number) => string;
  getUrlCharactersForHeroesList: () => string;
  changeHeroHandle: (
    setHero?: IMainPageContext["setHero"],
    setLoading?: IMainPageContext["setLoading"]
  ) => void;
}
