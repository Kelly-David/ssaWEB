import { Base } from "./base";

export interface Contact extends Base{
    isParent: boolean,
    firstName: string, 
    lastName: string, 
    phone: string,
    email: string, 
    note?: string,
}
