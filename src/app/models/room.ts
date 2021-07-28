import { Base } from './base';
import { Child } from './child';

export interface Room extends Base{
    name: string,
    children: Array<Child>[]
}
