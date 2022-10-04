import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import { Card } from "../../../components/Card/Card";
import { Htag } from "../../../components/Htag/Htag";
import { P } from "../../../components/P/P";
import cn from "classnames";
import { Button } from "../../../components/Button/Button";
import { useContext } from "react";
import { MainPageContext } from "../../../context/mainpage.context";
import { Skeleton } from "../../../components/Skeleton/Skeleton";
import Image from "next/image";
import {
  dontHaveComics,
  dontHaveInforamtion,
} from "../../../interfaces/MainPage/messagesForNullContent.interfaces";
import Link from "next/link";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  const { choosenCharacter } = useContext(MainPageContext);

  return (
    <Card
      id="sidebar"
      className={cn(className, {
        [styles.sidebar]: choosenCharacter,
        [styles.skeleton]: !choosenCharacter,
      })}
      {...props}
    >
      {choosenCharacter ? (
        <>
          <div className={styles.heroimage}>
            <Image
              layout="responsive"
              width={150}
              height={150}
              priority={true}
              src={choosenCharacter.thumbnail}
            ></Image>
          </div>
          <Htag tag="h2" className={styles.herotitle}>
            {choosenCharacter.name}
          </Htag>

          <Link href={choosenCharacter.homepage}>
            <a className={styles.buttonlink} target={"_blank"}>
              <Button
                color="red"
                className={cn(styles.homepagebtn, styles.btn)}
              >
                HOMEPAGE
              </Button>
            </a>
          </Link>
          <Link href={choosenCharacter.wiki}>
            <a className={styles.buttonlink} target={"_blank"}>
              <Button color="grey" className={cn(styles.wikibtn, styles.btn)}>
                WIKI
              </Button>
            </a>
          </Link>

          <P className={styles.descr}>
            {choosenCharacter.description.length < 1
              ? dontHaveInforamtion
              : choosenCharacter.description}
          </P>
          <Htag tag="h4" className={styles.comicslisttitle}>
            Comics:
          </Htag>
          <ul className={styles.comicslist}>
            {choosenCharacter?.comics?.items &&
            choosenCharacter?.comics?.items.length < 1 ? (
              <span className={styles.donthave}>{dontHaveComics}</span>
            ) : (
              choosenCharacter?.comics?.items.map((item, i) => {
                if (i < 10) {
                  return (
                    <li className={styles.comicsitem} key={item.name}>
                      {item.name}
                    </li>
                  );
                }
              })
            )}
          </ul>
        </>
      ) : (
        <Skeleton></Skeleton>
      )}
    </Card>
  );
};
