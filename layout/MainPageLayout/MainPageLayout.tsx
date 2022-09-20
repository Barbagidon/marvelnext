import { LayoutProps } from "./MainPageLayout.props";
import styles from "./MainPageLayout.module.css";
import cn from "classnames";
import { Header } from "./Header/Header";
import { RandomChar } from "./RandomChar/RandomChar";
import { CardList } from "./CardList/CardList";
import { Sidebar } from "./Sidebar/Sidebar";
import { SearchForm } from "./SearchForm/SearchForm";

export const MainPageLayout = ({
  className,
  ...props
}: LayoutProps): JSX.Element => {
  return (
    <div className={cn(className, styles.layout)} {...props}>
      <Header></Header>
      <main className={cn(styles.main)}>
        <RandomChar className={styles.randomchar}></RandomChar>
        <CardList className={styles.cardlist}></CardList>
        <div className={styles.sidebar}>
          <Sidebar></Sidebar>
          <SearchForm></SearchForm>
        </div>
      </main>
    </div>
  );
};
