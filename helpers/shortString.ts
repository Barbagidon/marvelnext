export const shortString = (
  string: string,
  firstIndex: number,
  secondIndex: number,
  circles = true
): string => {
  return string.substring(firstIndex, secondIndex) + (circles ? "..." : "");
};
