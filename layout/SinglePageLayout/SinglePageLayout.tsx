import { Header } from "../MainPageLayout/Header/Header";
import { SinglePageLayoutProps } from "./SinglePageLayout.props";
import styles from "./SinglePageLayout.module.css";
import cn from "classnames";
import { Banner } from "./Banner/Banner";
import { HeroInfo } from "./HeroInfo/HeroInfo";

export const SinglePageLayout = ({
  className,
  ...props
}: SinglePageLayoutProps): JSX.Element => {

  
  return (
    <div className={cn(className, styles.layout)} {...props}>
      <Header></Header>
      <main className={cn(styles.main)}>
        <Banner></Banner>
        <HeroInfo></HeroInfo>
      </main>
    </div>
  );
};
