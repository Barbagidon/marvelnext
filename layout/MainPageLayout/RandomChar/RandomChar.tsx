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
import { dontHaveInforamtion } from "../../../interfaces/MainPage/messagesForNullContent.interfaces";
import Link from "next/link";

export const RandomChar = ({
  className,
  ...props
}: RandomCharProps): JSX.Element => {
  const { characterInfo, loading, setHero, setLoading } =
    useContext(MainPageContext);

  // && characterFromSearch && characterFromSearch !== notFound
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <Card className={loading ? styles.loading : styles.hero}>
        {loading ? (
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
              <Link href={characterInfo.homepage}>
                <a className={styles.buttonlink} target={"_blank"}>
                  <Button color="red">HOMEPAGE</Button>
                </a>
              </Link>

              <Link href={characterInfo.wiki}>
                <a className={styles.buttonlink} target={"_blank"}>
                  <Button className={cn(styles.wikibutton)} color="grey">
                    WIKI
                  </Button>
                </a>
              </Link>
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
