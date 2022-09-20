export const shortString = (
  string: string,
  firstIndex: number,
  secondIndex: number
): string => {
  return string.substring(firstIndex, secondIndex) + "...";
};
