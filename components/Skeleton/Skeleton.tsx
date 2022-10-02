import { SkeletonProps } from "./Skeleton.props";
import styles from "./Skeleton.module.css";
import cn from "classnames";
import { Htag } from "../Htag/Htag";

export const Skeleton = ({
  className,
  ...props
}: SkeletonProps): JSX.Element => {
  return (
    <div className={className} {...props}>
      <Htag tag="h3" className={styles.skeletontitle}>
        Please select a character to see information
      </Htag>
      <div className={styles.skeleton}>
        <div className={cn(styles.skeletonheader)}>
          <div className={cn(styles.skeletoncircle, styles.pulse)}></div>
          <div className={cn(styles.skeletonmini, styles.pulse)}></div>
        </div>
        <div className={cn(styles.skeletonblock, styles.pulse)}></div>
        <div className={cn(styles.skeletonblock, styles.pulse)}></div>
        <div className={cn(styles.skeletonblock, styles.pulse)}></div>
      </div>
    </div>
  );
};
