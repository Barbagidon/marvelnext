import { MainPageLayout } from "../../layout/MainPageLayout/MainPageLayout";
import axios from "axios";
import { API } from "../../helpers/api";
import { ICharacterInfo } from "../../interfaces/MainPage/character.interfaces";
import { clearCharacterInfo } from "../../helpers/clearCharacterInfo";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { IMainPageProps } from "../../interfaces/MainPage/mainpage.interfaces";
import { MainPageContext } from "../../context/mainpage.context";
import { ICharactersInfo } from "../../interfaces/MainPage/charactersList.interfaces";
import { clearCharactersInfoForList } from "../../helpers/clearCharactersInfoForList";
import { ParsedUrlQuery } from "querystring";
import { pagesCount } from "../../helpers/pagesCount";
import { amountOfPages } from "../../helpers/amoutOfPages";
import { useContext, useEffect } from "react";

export default function MainPage(props: IMainPageProps): JSX.Element {
  const { setHero, setCharactersInfoForList, setArrWithNumberPages } =
    useContext(MainPageContext);

  const { characterInfo, charactersInfoForList, arrWithNumberPages } = props;

  useEffect(() => {
    if (setHero && setCharactersInfoForList && setArrWithNumberPages) {
      setHero(characterInfo);
      setCharactersInfoForList(charactersInfoForList);
      setArrWithNumberPages(arrWithNumberPages);
    }
  }, [
    characterInfo,
    charactersInfoForList,
    arrWithNumberPages,
    setHero,
    setCharactersInfoForList,
    setArrWithNumberPages,
  ]);

  return <MainPageLayout></MainPageLayout>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { paths } = pagesCount(amountOfPages, "characters");

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  try {
    const urlForRandomChar = API.getUrlCharacterForStaticProps(1009664);
    const { data: dirtyInfoAboutCharacter } = await axios.get<ICharacterInfo>(
      urlForRandomChar
    );

    const characterInfo = clearCharacterInfo(dirtyInfoAboutCharacter);

    const num = params?.id ? 400 + Number(params.id) * 9 : 400;
    const charactersUrl = API.getUrlCharactersForHeroesList(num);

    const { data: charactersInfo } = await axios.get<ICharactersInfo>(
      charactersUrl
    );

    const charactersInfoForList = clearCharactersInfoForList(charactersInfo);

    const { arrWithNumberPages } = pagesCount(amountOfPages);

    console.log(characterInfo);
    console.log(charactersInfoForList);

    return {
      props: {
        characterInfo,
        charactersInfoForList,
        arrWithNumberPages,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
