export interface IMember {
  checkedIn: boolean;
  createdAt: number;
  key?: string;
  title: string;
}


export class Member implements IMember {
  checkedIn: boolean = false;
  createdAt: number = Firebase.ServerValue.TIMESTAMP;
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
