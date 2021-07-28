import { ActivityType } from './activity-type';
import { Base } from './base';

export interface Activity extends Base {
    activityType: ActivityType;
    startDateTime?: string;
    endDateTime?: string;
    item: string;
    title: string,
    description: string,
    notes?: string,
    photoURL?: string,
    photoAltText?: string
}
