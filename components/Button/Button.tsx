import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Button = forwardRef(
  (
    { color, children, className, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ): JSX.Element => {
    return (
      <button
        ref={ref}
        className={cn(styles.button, className, {
          [styles[color]]: color,
        })}
        {...props}
      >
        {children}
      </button>
    );
  }
);
