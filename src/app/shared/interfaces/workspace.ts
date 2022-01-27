import { Mission } from "./mission";

export interface Workspace {
  id:number;
  name:string;
  totalHours:string;
  missions:Mission[]
}
