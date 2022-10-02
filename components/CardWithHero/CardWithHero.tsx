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

  return (
    <Card
      className={cn(styles.cardwithhero, {
        [styles.choosencharacter]: choosenCharacter?.name === name,
      })}
      background="grey"
      {...props}
    >
      <Image width={200} height={190} src={thumbnail} alt={name}></Image>
      <div className={styles.cardbottom}>
        <Htag tag="h3" className={styles.heroname}>
          {name}
        </Htag>
      </div>
    </Card>
  );
};
