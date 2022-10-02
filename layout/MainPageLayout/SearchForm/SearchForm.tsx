import { SearchFormProps } from "./SearchForm.props";
import styles from "./SearchForm.module.css";
import { Card } from "../../../components/Card/Card";
import { Htag } from "../../../components/Htag/Htag";
import { Button } from "../../../components/Button/Button";
import cn from "classnames";
import { useContext } from "react";
import { MainPageContext } from "../../../context/mainpage.context";
import { API } from "../../../helpers/api";

import Link from "next/link";

export const SearchForm = ({
  className,
  ...props
}: SearchFormProps): JSX.Element => {
  const {
    inputValue,
    setInputValue,
    setCharacterFromSearch,
    characterFromSearch,
  } = useContext(MainPageContext);

  return (
    <Card className={cn(styles.searchblock, className)} {...props}>
      <Htag className={styles.title} tag="h2">
        Or find a character by name:
      </Htag>
      <form className={styles.form}>
        <input
          value={inputValue}
          onChange={
            setInputValue
              ? (e): void => setInputValue(e.target.value)
              : undefined
          }
          className={styles.input}
          type="text"
          placeholder="Enter name"
        />

        <Button
          onClick={(): Promise<void> =>
            API.getCharacterFromSearch(inputValue, setCharacterFromSearch)
          }
          type="button"
          className={styles.button}
          color="red"
        >
          FIND
        </Button>

        <Link href={`/searchhero/rap`}>
          <Button color="grey">To page</Button>
        </Link>
      </form>
    </Card>
  );
};
