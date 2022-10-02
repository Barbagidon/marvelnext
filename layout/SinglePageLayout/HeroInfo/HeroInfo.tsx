import { HeroInfoProps } from "./HeroInfo.props";
import styles from "./HeroInfo.module.css";
import { Htag } from "../../../components/Htag/Htag";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { MainPageContext } from "../../../context/mainpage.context";

import { API } from "../../../helpers/api";
import Preloader from "../../MainPageLayout/RandomChar/preloader.svg";
import { dontHaveInforamtion } from "../../../interfaces/MainPage/messagesForNullContent.interfaces";
import cn from "classnames";

export const HeroInfo = ({
  className,
  ...props
}: HeroInfoProps): JSX.Element => {
  const {
    characterFromSearch,
    setCharacterFromSearch,
    setLoading,
    loading,
    clearCharacterFromSearch,
  } = useContext(MainPageContext);

  useEffect(() => {
    if (!characterFromSearch && typeof window != "undefined" && setLoading) {
      API.getCharacterFromSearch(
        window.location.pathname.substring(12).replace("%20", " "),
        setCharacterFromSearch,
        setLoading
      );
    }

    if (clearCharacterFromSearch) {
      return () => clearCharacterFromSearch();
    }
  }, []);

  return (
    <div
      {...props}
      className={cn(className, {
        [styles.wrapper]: !loading,
        [styles.loadingwrapper]: loading,
      })}
    >
      {loading ? (
        <Preloader className={styles.preloader}></Preloader>
      ) : (
        <>
          <div className={styles.heroImage}>
            <Image
              width={290}
              height={290}
              src={characterFromSearch?.thumbnail || "/notimage.png"}
              alt={characterFromSearch?.name}
            />
          </div>
          <Htag tag="h3" className={styles.heroTitle}>
            {characterFromSearch?.name}
          </Htag>
          <div className={styles.heroDescr}>
            {characterFromSearch && characterFromSearch?.description.length > 0
              ? characterFromSearch?.description
              : dontHaveInforamtion}
          </div>
        </>
      )}
    </div>
  );
};
