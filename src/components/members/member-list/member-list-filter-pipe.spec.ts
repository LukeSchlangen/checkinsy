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

  it('should return list of checkedOut members if param `filterType` is `checkedOut`', () => {
    expect(pipe.transform(list, ['checkedOut'])).toEqual([{checkedIn: false}]);
  });

  it('should return list of checkedOut members if param `filterType` is `checkedIn`', () => {
    expect(pipe.transform(list, ['checkedIn'])).toEqual([{checkedIn: true}]);
  });

  it('should return provided list if param `filterType` is not `checkedOut` or `checkedIn`', () => {
    expect(pipe.transform(list, [''])).toBe(list);
  });

  it('should return provided list if list is undefined and filter is provided', () => {
    list = undefined;
    expect(pipe.transform(list, ['checkedOut'])).toBe(list);
  });
});
