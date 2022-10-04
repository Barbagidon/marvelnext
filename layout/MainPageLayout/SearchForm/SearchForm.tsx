import { SearchFormProps } from "./SearchForm.props";
import styles from "./SearchForm.module.css";
import { Card } from "../../../components/Card/Card";
import { Htag } from "../../../components/Htag/Htag";
import { Button } from "../../../components/Button/Button";
import cn from "classnames";
import { useContext, useState } from "react";
import { MainPageContext } from "../../../context/mainpage.context";
import { API } from "../../../helpers/api";

import Link from "next/link";
import { notFound } from "../../../interfaces/MainPage/messagesForNullContent.interfaces";

export const SearchForm = ({
  className,
  ...props
}: SearchFormProps): JSX.Element => {
  const {
    inputValue,
    setInputValue,
    setCharacterFromSearch,
    characterFromSearch,
    setLoading,
  } = useContext(MainPageContext);

  const [requiredFieldMessage, setRequiredFieldMessage] =
    useState<boolean>(false);

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
          onClick={(e): void => {
            if (!inputValue) {
              setRequiredFieldMessage(true);
            } else {
              API.getCharacterFromSearch(
                inputValue,
                setCharacterFromSearch,
                setLoading,
                e
              );
            }
          }}
          type="button"
          className={styles.button}
          color="red"
        >
          FIND
        </Button>
        {characterFromSearch && characterFromSearch != notFound ? (
          <>
            <span className={styles.successMsg}>
              There is! Visit {characterFromSearch.name} page?
            </span>
            <Link
              href={`/searchhero/${characterFromSearch.name || inputValue}`}
            >
              <Button className={styles.toPageBtn} color="grey">
                To page
              </Button>
            </Link>
          </>
        ) : characterFromSearch === notFound ? (
          <span className={styles.errormessage}>
            The character was not found. Check the name and try again
          </span>
        ) : requiredFieldMessage ? (
          <span className={styles.errormessage}>This field is required</span>
        ) : null}
      </form>
    </Card>
  );
};
