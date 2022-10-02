import { CardListProps } from "./CardList.props";
import styles from "./CardList.module.css";
import { CardWithHero } from "../../../components/CardWithHero/CardWithHero";
import { MainPageContext } from "../../../context/mainpage.context";
import { useContext } from "react";
import cn from "classnames";

import { Pagination } from "../../../components/Pagination/Pagination";

export const CardList = ({
  className,
  ...props
}: CardListProps): JSX.Element => {
  const { charactersInfoForList, setChoosenCharacter } =
    useContext(MainPageContext);

  return (
    <div className={className} {...props}>
      <ul className={cn(styles.herolist)}>
        {charactersInfoForList.map((item) => {
          return (
            <li
              onClick={
                setChoosenCharacter
                  ? (): void => setChoosenCharacter(item)
                  : undefined
              }
              key={item.id}
            >
              <CardWithHero
                thumbnail={item.thumbnail}
                name={item.name}
              ></CardWithHero>
            </li>
          );
        })}
      </ul>
      <Pagination></Pagination>
    </div>
  );
};
