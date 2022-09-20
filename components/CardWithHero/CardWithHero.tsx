import { CardWithHeroProps } from "./CardWithHero.props";
import styles from "./CardWithHero.module.css";
import { Card } from "../Card/Card";
import { Htag } from "../Htag/Htag";
import Image from "next/image";

export const CardWithHero = ({
  thumbnail,
  name,
  ...props
}: CardWithHeroProps): JSX.Element => {
 
  return (
    <Card
      className={styles.cardwithhero}
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
