import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({
  color,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles[color]]: color,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
