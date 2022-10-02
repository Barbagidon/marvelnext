export const pagesCount = (
  num: number,
  nameOfPage?: string,
 
): { paths: string[]; arrWithNumberPages: number[] } => {
  const arrWithNumberPages: number[] = [];
  for (let i = 0; i <= num; i += 9) {
    if (i === 9 && arrWithNumberPages.length < 1) {
      arrWithNumberPages.push(1);
    } else if (arrWithNumberPages.length >= 1) {
      arrWithNumberPages.push(
        arrWithNumberPages[arrWithNumberPages.length - 1] + 1
      );
    }
  }
  const pathes = {
    paths: arrWithNumberPages.map((item) => {
      return `/${nameOfPage}/${item}`;
    }),
    arrWithNumberPages,
  };

  return pathes;
};
