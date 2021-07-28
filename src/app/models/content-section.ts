import { ContentItem } from "./content-item";

export interface ContentSection {
    id: string,
    name: string, 
    items: Array<ContentItem>[]
}
