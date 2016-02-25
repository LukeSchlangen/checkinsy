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

import { MemberListFilterPipe } from './member-list-filter-pipe';


describe('MemberListFilterPipe', () => {
  let pipe: MemberListFilterPipe;
  let list: any[];

  beforeEach(() => {
    list = [{checkedIn: true}, {checkedIn: false}];
    pipe = new MemberListFilterPipe();
  });

  it('should return provided list if param `filterType` is not provided', () => {
    expect(pipe.transform(list)).toBe(list);
    expect(pipe.transform(list, [])).toBe(list);
  });

  it('should return list of active members if param `filterType` is `active`', () => {
    expect(pipe.transform(list, ['active'])).toEqual([{checkedIn: false}]);
  });

  it('should return list of active members if param `filterType` is `checkedIn`', () => {
    expect(pipe.transform(list, ['checkedIn'])).toEqual([{checkedIn: true}]);
  });

  it('should return provided list if param `filterType` is not `active` or `checkedIn`', () => {
    expect(pipe.transform(list, [''])).toBe(list);
  });

  it('should return provided list if list is undefined and filter is provided', () => {
    list = undefined;
    expect(pipe.transform(list, ['active'])).toBe(list);
  });
});
