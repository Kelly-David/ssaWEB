import { AccessGroup } from "./access-group";
import { Child } from "./child";
import { Base } from './base';

export interface User extends Base{
    firsName: string,
    lastName: string,
    address: string,
    email: string, 
    phone?: string
    password: string,
    accessGroups: Array<AccessGroup>[], 
    children?: Array<Child>[],
    canLogin: boolean
}
