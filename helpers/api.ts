import axios from "axios";
import { IAPI } from "../interfaces/MainPage/api.interfaces";
import { ICharacterInfo } from "../interfaces/MainPage/character.interfaces";
import {
  notFound,
  randomCharErrorMessages,
} from "../interfaces/MainPage/messagesForNullContent.interfaces";
import { clearCharacterInfo } from "./clearCharacterInfo";
import { hash, timeStamp } from "./getTimeStampAndHash";

export const API: IAPI = {
  domain: process.env.NEXT_PUBLIC_DOMAIN,
  getUrlCharacterForStaticProps: (id) => {
    return (
      API.domain +
      `characters/${id}?&ts=${timeStamp}&apikey=${process.env.NEXT_PUBLIC_KEY}&hash=${hash}`
    );
  },
  getUrlCharactersForHeroesList: (num) => {
    return (
      API.domain +
      `characters?limit=9&offset=${num}&ts=${timeStamp}&apikey=${process.env.NEXT_PUBLIC_KEY}&hash=${hash}`
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
  getUrlForSearchChar: (name) => {
    return (
      API.domain +
      `/characters?name=${name}&apikey=${process.env.NEXT_PUBLIC_KEY}`
    );
  },
  getCharacterFromSearch: async (hero, setHero, setLoading) => {
    if (setHero && setLoading) {
      try {
        setLoading(true);
        const { data } = await axios.get<ICharacterInfo>(
          API.getUrlForSearchChar(hero)
        );
        setLoading(false);
        const clearInfo = clearCharacterInfo(data);
        setHero(clearInfo);
      } catch (error) {
        setHero(notFound);
      }
    }
  },
};
