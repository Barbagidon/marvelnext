import { PageLinkProps } from "./PageLink.props";
import styles from "./PageLink.module.css";
import cn from "classnames";

export const PageLink = ({ ...props }: PageLinkProps): JSX.Element => {
  return (
    <nav {...props}>
      <a href="!#" className={cn(styles.pagelink, styles.active)}>
        Characters
      </a>
      <a href="!#" className={styles.pagelink}>
        {" "}
        Comics
      </a>
    </nav>
  );
};
