import { Pipe, PipeTransform } from 'angular2/core';
import { IMember } from 'core/member/member';


@Pipe({
  name: 'filterMembers',
  pure: true
})

export class MemberListFilterPipe implements PipeTransform {
  transform(list: IMember[], filterType?: string[]): IMember[] {
    if (!list || !filterType) {
      return list;
    }

    switch (filterType[0]) {
      case 'checkedOut':
        return list.filter((member: IMember) => {
          return !member.checkedIn;
        });

      case 'checkedIn':
        return list.filter((member: IMember) => {
          return member.checkedIn;
        });

      default:
        return list;
    }
  }
}
