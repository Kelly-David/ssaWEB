import { Base } from './base';
import { Status } from './status';
import { Day } from './day';
import { Contact } from './contact';
import { Snippet } from './snippet';
import { Group } from './group';

export interface Child extends Base{
    firsName: string,
    lastName: string,
    dateOfBirth: string, 
    address: string,
    gender: string,
    isToiletTrained: boolean,
    status: Status,
    group:Group,
    days: Array<Day>[],
    contacts: Array<Contact>[],
    notes: Array<Snippet>[]
}
