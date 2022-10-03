import { RandomCharProps } from "./RandomChar.props";
import styles from "./RandomChar.module.css";
import { Card } from "../../../components/Card/Card";
import { Htag } from "../../../components/Htag/Htag";
import { P } from "../../../components/P/P";
import { Button } from "../../../components/Button/Button";
import Image from "next/image";
import cn from "classnames";
import { useContext } from "react";
import { MainPageContext } from "../../../context/mainpage.context";
import { shortString } from "../../../helpers/shortString";
import { API } from "../../../helpers/api";
import Preloader from "./preloader.svg";
import {
  dontHaveInforamtion,
  notFound,
} from "../../../interfaces/MainPage/messagesForNullContent.interfaces";

export const RandomChar = ({
  className,
  ...props
}: RandomCharProps): JSX.Element => {
  const { characterInfo, loading, setHero, setLoading, characterFromSearch } =
    useContext(MainPageContext);

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <Card
        className={
          loading && characterFromSearch && characterFromSearch !== notFound
            ? styles.loading
            : styles.hero
        }
      >
        {loading && characterFromSearch && characterFromSearch !== notFound ? (
          <Preloader></Preloader>
        ) : typeof characterInfo === "string" ? (
          characterInfo
        ) : (
          <>
            <div className={styles.img}>
              <Image
                width={180}
                height={180}
                priority={true}
                src={characterInfo.thumbnail}
              />
            </div>

            <Htag className={styles.heroname} tag="h2">
              {characterInfo.name}
            </Htag>
            <P className={styles.descr}>
              {characterInfo.description.length > 0
                ? shortString(characterInfo.description, 0, 228)
                : dontHaveInforamtion}
            </P>
            <div className={styles.buttons}>
              <Button color="red">HOMEPAGE</Button>
              <Button className={cn(styles.wikibutton)} color="grey">
                WIKI
              </Button>
            </div>
          </>
        )}
      </Card>
      <Card background="grey" className={cn(styles.trycard)}>
        <div className={styles.trytext}>
          Random character for today! <br /> Do you want to get to know him
          better?
        </div>

        <div className={cn(styles.trytext, styles.bottomtext)}>
          Or choose another one
        </div>
        <Button
          className={cn(styles.button, styles.trybutton)}
          color="red"
          onClick={(): void => API.changeHeroHandle(setHero, setLoading)}
        >
          TRY IT
        </Button>

        <div className={styles.hummerImage}>
          <Image width={200} height={190} src="/hummer.png"></Image>
        </div>
      </Card>
    </div>
  );
};
