import router from "next/router";

export const goToPage = (
  nameOfPage: string,
  num: number,
): void => {
  router.push(
    {
      pathname: `/${nameOfPage}/${num}`,
    },
    undefined,
    { scroll: false }
  );
};
