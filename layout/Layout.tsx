import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import cn from "classnames";
import { Header } from "./Header/Header";
import { RandomChar } from "./RandomChar/RandomChar";
import { CardList } from "./CardList/CardList";
import { Sidebar } from "./Sidebar/Sidebar";
import { SearchForm } from "./SearchForm/SearchForm";

export const Layout = ({ className, ...props }: LayoutProps): JSX.Element => {
  return (
    <div className={cn(className, styles.layout)} {...props}>
      <Header></Header>
      <main className={cn(styles.main)}>
        <RandomChar className={styles.randomchar}></RandomChar>
        <CardList className={styles.cardlist}></CardList>
        <Sidebar className={styles.sidebar}></Sidebar>
        <SearchForm className={styles.searchform}></SearchForm>
      </main>
    </div>
  );
};
