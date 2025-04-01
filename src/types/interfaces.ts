import { CSSProperties, JSX } from "react";

export interface CardProps {
  description: string;
  name: string;
  image?: JSX.Element;
  cost?: string;
  country?: string;
  style?: CSSProperties | undefined;
}