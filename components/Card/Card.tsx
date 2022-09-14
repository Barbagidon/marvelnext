import { PageLinkProps } from "./Card.props";
import styles from "./Card.module.css";
import cn from "classnames";

export const Card = ({
  background = "white",
  className,
  children,
  ...props
}: PageLinkProps): JSX.Element => {
  return (
    <div
      className={cn(className, styles.card, {
        [styles[background]]: background,
      })}
      {...props}
    >
      {children}
    </div>
  );
};
