import { RandomCharProps } from "./RandomChar.props";
import styles from "./RandomChar.module.css";
import { Card } from "../../components/Card/Card";
import { Htag } from "../../components/Htag/Htag";
import { P } from "../../components/P/P";
import { Button } from "../../components/Button/Button";
import Image from "next/image";
import cn from "classnames";

export const RandomChar = ({
  className,
  ...props
}: RandomCharProps): JSX.Element => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <Card className={styles.hero}>
        <img className={styles.img} src="thor.png" alt="thor" />

        <Htag className={styles.heroname} tag="h2">
          THOR
        </Htag>
        <P className={styles.descr}>
          As the Norse God of thunder and lightning, Thor wields one of the
          greatest weapons ever made, the enchanted hammer Mjolnir. While others
          have described Thor as an over-muscled, oafish imbecile, he's quite
          smart and compassionate...
        </P>
        <div className={styles.buttons}>
          <Button color="red">HOMEPAGE</Button>
          <Button className={cn(styles.wikibutton)} color="grey">
            WIKI
          </Button>
        </div>
      </Card>
      <Card background="grey" className={cn(styles.trycard)}>
        <div className={styles.trytext}>
          Random character for today! <br /> Do you want to get to know him
          better?
        </div>

        <div className={cn(styles.trytext, styles.bottomtext)}>
          Or choose another one
        </div>
        <Button className={cn(styles.button, styles.trybutton)} color="red">
          TRY IT
        </Button>

        <div className={styles.hummerImage}>
          <Image width={200} height={190} src="/hummer.png"></Image>
        </div>
      </Card>
    </div>
  );
};
