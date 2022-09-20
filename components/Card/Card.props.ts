import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  background?: "grey" | "white";
  children: ReactNode;
}
