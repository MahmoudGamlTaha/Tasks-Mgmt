export interface Mission {
  id:number;
  mission_id: number,
  name: string,
  creationDate: string,
  hours: number,
  minutes: number,
  status: number,
  subMissions: Mission[]
}
