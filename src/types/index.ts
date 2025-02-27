import { JSX } from "react";

export interface Industry {
    id: number;
    icons: JSX.Element;
    img: string;
    title?: string;
    text?: string;
}
