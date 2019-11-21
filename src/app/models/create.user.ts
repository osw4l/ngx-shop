export class User {
  constructor(
    public _id: string,
    public username: string,
    public first_name: string,
    public last_name: string,
    public password: string,
    public email: string
  ) {}
}
