import { CardWithHeroProps } from "./CardWithHero.props";
import styles from "./CardWithHero.module.css";
import { Card } from "../Card/Card";
import { Htag } from "../Htag/Htag";
import Image from "next/image";
import { useContext } from "react";
import { MainPageContext } from "../../context/mainpage.context";
import cn from "classnames";

export const CardWithHero = ({
  thumbnail,
  name,
  ...props
}: CardWithHeroProps): JSX.Element => {
  const { choosenCharacter } = useContext(MainPageContext);

  function scrollTo(): void {
    const el = document.getElementById("sidebar");
    el?.scrollIntoView({ block: "start", inline: "start", behavior: "smooth" });
  }

  return (
    <Card
      className={cn(styles.cardwithhero, {
        [styles.choosencharacter]: choosenCharacter?.name === name,
      })}
      background="grey"
      onClick={
        window && window.screen.width < 1085
          ? (): void => scrollTo()
          : undefined
      }
      {...props}
    >
      <Image
        priority={true}
        width={200}
        height={190}
        src={thumbnail}
        alt={name}
      ></Image>

      <div className={styles.cardbottom}>
        <Htag tag="h3" className={styles.heroname}>
          {name}
        </Htag>
      </div>
    </Card>
  );
};
