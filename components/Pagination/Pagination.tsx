import { PaginationProps } from "./Pagination.props";
import styles from "./Pagination.module.css";
import cn from "classnames";
import { useContext, useEffect, useState } from "react";
import { MainPageContext } from "../../context/mainpage.context";
import router from "next/router";
import { Pagination as Pag } from "@mui/material";
import { goToPage } from "../../helpers/goToPage";

export const Pagination = ({
  className,
  ...props
}: PaginationProps): JSX.Element => {
  const [choosenPage, setChoosenPage] = useState<number>(1);

  const { charactersInfoForList, arrWithNumberPages } =
    useContext(MainPageContext);

  useEffect(() => {
    if (window) {
      setChoosenPage(
        Number(router.asPath.substring(router.asPath.lastIndexOf("/") + 1))
      );
    }
  }, [charactersInfoForList]);

  return (
    <div className={cn(styles.paginationwrapper, className)} {...props}>
      <Pag
        defaultPage={1}
        siblingCount={1}
        boundaryCount={0}
        size="small"
        page={choosenPage}
        count={arrWithNumberPages.length}
        onChange={(_, num): void => goToPage("characters", num)}
        sx={{
          ".MuiPagination-ul": {
            justifyContent: "center",
            marginTop: "20px",
          },
          ".MuiPaginationItem-root": {
            transition: "all 0.3s",
            fontSize: "22px",
            fontWeight: "700px",
            backgroundColor: "inherit !important",
            "&:hover": {
              color: "#9F0013",
            },
          },
          ".Mui-selected": {
            backgroundColor: "inherit !important",
            transform: "translateY(-3px)",
            color: "#9F0013",
          },

          ".MuiPaginationItem-ellipsis": {
            display: "none",
          },
        }}
      ></Pag>
    </div>
  );
};
