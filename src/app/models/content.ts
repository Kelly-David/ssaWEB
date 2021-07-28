import { ContentSection } from './content-section';

export interface Content {
    id: string,
    name: string, 
    contentSections: Array<ContentSection>[]
}