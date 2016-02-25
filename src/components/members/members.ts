import { Component } from 'angular2/core';
import { CanActivate } from 'angular2/router';
import { AuthRouteHelper } from 'core/auth/auth-route-helper';
import { MemberStore } from 'core/member/member-store';
import { MemberForm } from './member-form/member-form';
import { MemberList } from './member-list/member-list';

const template: string = require('./members.html');


@Component({
  directives: [
    MemberForm,
    MemberList
  ],
  selector: 'members',
  template
})

@CanActivate(() => AuthRouteHelper.requireAuth())

export class Members {
  constructor(public memberStore: MemberStore) {}
}
