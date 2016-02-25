import { IMember, Member } from './member';


export class MemberService {
  constructor(private ref: Firebase) {}

  createMember(title: string): void {
    this.ref.push(new Member(title), (error: Error) => {
      if (error) {
        console.error('ERROR @ createMember :', error);
      }
    });
  }

  deleteMember(member: IMember): void {
    this.ref.child(member.key).remove((error: Error) => {
      if (error) {
        console.error('ERROR @ deleteMember :', error);
      }
    });
  }

  updateMember(member: IMember, changes: any): void {
    this.ref.child(member.key).update(changes, (error: Error) => {
      if (error) {
        console.error('ERROR @ updateMember :', error);
      }
    });
  }
}
