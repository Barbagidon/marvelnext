import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import { Card } from "../../../components/Card/Card";
import { Htag } from "../../../components/Htag/Htag";
import { P } from "../../../components/P/P";
import cn from "classnames";
import { Button } from "../../../components/Button/Button";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <Card className={cn(className, styles.sidebar)} {...props}>
      <img className={styles.heroimage} src="/herocard.png" alt="hero" />
      <Htag tag="h3" className={styles.herotitle}>
        LOKI
      </Htag>
      <Button color="red" className={cn(styles.homepagebtn, styles.btn)}>
        HOMEPAGE
      </Button>
      <Button color="grey" className={cn(styles.wikibtn, styles.btn)}>
        WIKI
      </Button>
      <P className={styles.descr}>
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
      </P>
      <Htag tag="h4" className={styles.comicslisttitle}>
        Comics:
      </Htag>
      <ul className={styles.comicslist}>
        <li> All-Winners Squad: Band of Heroes (2011) #3</li>
      </ul>
    </Card>
  );
};
