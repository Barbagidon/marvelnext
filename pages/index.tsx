import { MainPageLayout } from "../layout/MainPageLayout/MainPageLayout";
import axios from "axios";
import { API } from "../helpers/api";
import { ICharacterInfo } from "../interfaces/MainPage/character.interfaces";
import { clearCharacterInfo } from "../helpers/clearCharacterInfo";
import { GetStaticProps } from "next";
import { IMainPageProps } from "../interfaces/MainPage/mainpage.interfaces";
import { MainPageContextProvider } from "../context/mainpage.context";
import { ICharactersInfo } from "../interfaces/MainPage/charactersList.interfaces";
import { clearCharactersInfoForList } from "../helpers/clearCharactersInfoForList";

export default function MainPage({
  characterInfo,
  charactersInfoForList,
}: IMainPageProps): JSX.Element {
  return (
    <MainPageContextProvider
      characterInfo={characterInfo}
      charactersInfoForList={charactersInfoForList}
    >
      <MainPageLayout></MainPageLayout>
    </MainPageContextProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const urlForRandomChar = API.getUrlCharacterForStaticProps(1009664);
  const { data: dirtyInfoAboutCharacter } = await axios.get<ICharacterInfo>(
    urlForRandomChar
  );
  const characterInfo = clearCharacterInfo(dirtyInfoAboutCharacter);

  const charactersUrl = API.getUrlCharactersForHeroesList();
  const { data: charactersInfo } = await axios.get<ICharactersInfo>(
    charactersUrl
  );

  const charactersInfoForList = clearCharactersInfoForList(charactersInfo);

  return {
    props: {
      characterInfo,
      charactersInfoForList,
    },
  };
};
