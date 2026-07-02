export interface Notification {
  id:number;
  message:string;
  type:'info'|'warning'|'error';
  priority:number; 
  viewed:boolean;
}
