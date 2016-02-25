/* tslint:disable:no-unused-variable */
import {
  afterEach,
  beforeEach,
  describe,
  fdescribe,
  xdescribe,
  expect,
  it,
  fit,
  xit
} from 'angular2/testing';
/* tslint:enable:no-unused-variable */

import { MemberService } from './member-service';


describe('MemberService', () => {
  let firebaseRef;
  let memberService;

  beforeEach(() => {
    firebaseRef = new Firebase('members/github:123');
    memberService = new MemberService(firebaseRef);
  });

  describe('Creating a member', () => {
    it('should push new member to firebase', (done: any) => {
      firebaseRef.on('child_added', (snapshot: FirebaseDataSnapshot) => {
        expect(snapshot.val().title).toEqual('test');
        done();
      });

      memberService.createMember('test');
      firebaseRef.flush();
    });
  });
});
