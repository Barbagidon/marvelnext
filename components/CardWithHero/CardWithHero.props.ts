import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardWithHeroProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  thumbnail: string;
}
