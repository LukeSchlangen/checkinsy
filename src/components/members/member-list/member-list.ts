import { ChangeDetectionStrategy, Component, Input } from 'angular2/core';
import { RouterLink, RouteParams } from 'angular2/router';
import { List } from 'immutable';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import { MemberItem } from '../member-item/member-item';
import { MemberListFilterPipe } from './member-list-filter-pipe';

const styles: string = require('./member-list.scss');
const template: string = require('./member-list.html');


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    RouterLink,
    MemberItem
  ],
  pipes: [
    MemberListFilterPipe
  ],
  selector: 'member-list',
  styles: [styles],
  template
})

export class MemberList {
  @Input() members: ReplaySubject<List<any>>;

  filter: string;

  constructor(params: RouteParams) {
    this.filter = params.get('filter');
  }
}
