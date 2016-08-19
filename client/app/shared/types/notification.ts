export class Notification {
  constructor(
    public _id: string,
    public from: string, //ref
    public  to: string, //ref
    public title: string,
    public description: string,
    public response: boolean,
    // "message" || "invitation" 
    public state: string,
    public read: boolean
  ) {  }
}