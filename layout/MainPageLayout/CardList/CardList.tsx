import { CardListProps } from "./CardList.props";
import styles from "./CardList.module.css";
import { CardWithHero } from "../../../components/CardWithHero/CardWithHero";
import { MainPageContext } from "../../../context/mainpage.context";
import { useContext } from "react";

export const CardList = ({ ...props }: CardListProps): JSX.Element => {
  const { charactersInfoForList } = useContext(MainPageContext);
  const log = (info) => {
    console.log(info);
  };

  return (
    <ul {...props} className={styles.herolist}>
      {charactersInfoForList.map((item) => {
        return (
          <li onClick={() => log(item)} key={item.id}>
            <CardWithHero
              thumbnail={item.thumbnail}
              name={item.name}
            ></CardWithHero>
          </li>
        );
      })}
    </ul>
  );
};
