import { PageLinkProps } from "./PageLink.props";
import styles from "./PageLink.module.css";
import cn from "classnames";
import { MainPageContext } from "../../context/mainpage.context";
import { useContext, useEffect } from "react";
import router from "next/router";

export const PageLink = ({ ...props }: PageLinkProps): JSX.Element => {
  const { characterUrl, setCharacterUrl } = useContext(MainPageContext);

  useEffect(() => {
    console.log(characterUrl);
  }, [characterUrl]);

  return (
    <nav {...props}>
      <a href="!#" className={cn(styles.pagelink, styles.active)}>
        Characters
      </a>
      <div
        className={styles.pagelink}
        onClick={(): void => {
          setCharacterUrl ? setCharacterUrl(router.asPath) : null;
        }}
      >
        {" "}
        Comics
      </div>
    </nav>
  );
};
