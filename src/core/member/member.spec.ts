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

import { Member } from './member';


describe('Member', () => {
  let member: Member;

  beforeEach(() => {
    member = new Member('test');
  });

  it('should set title with provided `title` param', () => {
    expect(member.title).toBe('test');
  });

  it('should set `checkedIn` to `false`', () => {
    expect(member.checkedIn).toBe(false);
  });

  it('should set `createdAt` to firebase timestamp placeholder', () => {
    expect(member.createdAt).toEqual(Firebase.ServerValue.TIMESTAMP);
  });
});
