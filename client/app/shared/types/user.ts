export class User {
  constructor(
    public email: any,
    public name: string,
    public role: string,
    public photo: any,
    public studentData: any,
    public advisorData: any,
    public supervisorData: any,
    public adminData: any,
    public superadminData: any,
    public lastLoginTime: Array<number>,
    public createAt: number
  ) {  }
}