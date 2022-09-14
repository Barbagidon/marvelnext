import { PProps } from "./P.props";
import styles from "./P.module.css";
import cn from "classnames";

export const P = ({
  size = "small",
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
    {...props}
      className={cn(styles.p, className, {
        [styles[size]]: size,
      })}
     
    >
      {children}
    </p>
  );
};
