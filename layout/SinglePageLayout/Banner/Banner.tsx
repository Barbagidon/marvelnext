import { HeaderProps } from "./Banner.props";
import styles from "./Banner.module.css";
import { Htag } from "../../../components/Htag/Htag";
import Image from "next/image";

export const Banner = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <div {...props} className={styles.banner}>
      <div className={styles.avengers}>
        <Image width={150} height={100} src="/Avengers.png" alt="avengers" />
      </div>

      <Htag tag="h3" className={styles.bannertext}>
        New comics every week! Stay tuned!
      </Htag>

      <Image
        width={130}
        height={100}
        src="/AvengersLogo.png"
        alt="avehngersLogo"
      />
    </div>
  );
};
