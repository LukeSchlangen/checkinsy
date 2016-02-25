import { provide } from 'angular2/core';
import { FIREBASE_MEMBERS_URL } from '../../config';
import { AuthService } from '../auth/auth-service';
import { MemberService } from './member-service';
import { MemberStore } from './member-store';


export const MEMBER_PROVIDERS: any[] = [
  provide(MemberService, {
    deps: [AuthService],
    useFactory: (auth: AuthService): MemberService => {
      return new MemberService(new Firebase(`${FIREBASE_MEMBERS_URL}/${auth.id}`));
    }
  }),

  provide(MemberStore, {
    deps: [AuthService],
    useFactory: (auth: AuthService): MemberStore => {
      return new MemberStore(new Firebase(`${FIREBASE_MEMBERS_URL}/${auth.id}`));
    }
  })
];
