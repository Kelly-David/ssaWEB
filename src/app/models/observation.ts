import { Base } from './base';
import { Status } from './status';

export interface Observation extends Base{
    status: Status,
    title: string,
    description: string,
    notes?: Array<string>[],
    photoURL?: string,
    photoAltText?: string,
    photoFileName?: string,
    tags?: Array<string>[],
    managerApproved?: boolean,
    parentApproved?: boolean
}
