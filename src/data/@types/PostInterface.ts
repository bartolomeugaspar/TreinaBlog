import { JSX } from "react";

export interface PostInterface {
    id: number;
    title: string;
    description: string;
    pictureUrl: string;
    slug: string;
    content?: JSX.Element;
}