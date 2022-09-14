import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PageLinkProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  background?: string;
  children: ReactNode;
}
