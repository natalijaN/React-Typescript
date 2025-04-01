import { JSX } from "react";

export interface CarType {
    id: number;
    image: JSX.Element;
    title: string;
    description: string;
    cost: string
}