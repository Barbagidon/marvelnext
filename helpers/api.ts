import axios from "axios";
import { IAPI } from "../interfaces/MainPage/api.interfaces";
import { ICharacterInfo } from "../interfaces/MainPage/character.interfaces";
import { randomCharErrorMessages } from "../interfaces/MainPage/errorMessages.interfaces";
import { clearCharacterInfo } from "./clearCharacterInfo";
import { getTimeStampAndHash } from "./getTimeStampAndHash";

export const API: IAPI = {
  domain: process.env.NEXT_PUBLIC_DOMAIN,
  getUrlCharacterForStaticProps: (id) => {
    const hash = getTimeStampAndHash().md;
    const timeStamp = getTimeStampAndHash().timeStamp;

    return (
      API.domain +
      `characters/${id}?&ts=${timeStamp}&apikey=${process.env.NEXT_PUBLIC_KEY}&hash=${hash}`
    );
  },
  getUrlCharactersForHeroesList: () => {
    const hash = getTimeStampAndHash().md;
    const timeStamp = getTimeStampAndHash().timeStamp;

    return (
      API.domain +
      `characters?limit=9&offset=400&ts=${timeStamp}&apikey=${process.env.NEXT_PUBLIC_KEY}&hash=${hash}`
    );
  },
  changeHeroHandle: async (setHero, setLoading) => {
    if (setHero && setLoading) {
      try {
        setLoading(true);
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        const { data } = await axios.get<ICharacterInfo>(
          `${process.env.NEXT_PUBLIC_DOMAIN}characters/${id}?apikey=${process.env.NEXT_PUBLIC_KEY}`
        );

        const clearInfo = clearCharacterInfo(data);
        setLoading(false);
        setHero(clearInfo);
      } catch (error) {
        setLoading(false);
        setHero(randomCharErrorMessages);
      }
    }
  },
};
