import { Activity } from './activity';
import { Base } from './base';
import { Status } from './status';

export interface Day extends Base {
    status: Status
    signedInDateTime: string,
    SignedOutDateTime?: string,
    staffSignedInBy: string,
    staffSignedOutBy: string,
    activities?: Array<Activity>[],
    meals?: Array<Activity>[],
    sleep?: Array<Activity>[],
    changes?: Array<Activity>[]
}
