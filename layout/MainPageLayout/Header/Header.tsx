import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import { Htag } from "../../../components/Htag/Htag";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header {...props} className={styles.header}>
      <Htag className={styles.headertext} tag="h1">
        <a href="/">
          <span className={styles.marvel}>Marvel</span> information portal
        </a>
      </Htag>
    </header>
  );
};
