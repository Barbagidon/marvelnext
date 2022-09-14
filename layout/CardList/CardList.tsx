import { CardListProps } from "./CardList.props";
import styles from "./CardList.module.css";

export const CardList = ({ ...props }: CardListProps): JSX.Element => {
  return <div {...props}>CardList </div>;
};
