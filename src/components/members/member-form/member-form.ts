import { Component } from 'angular2/core';
import { MemberService } from 'core/member/member-service';

const styles: string = require('./member-form.scss');
const template: string = require('./member-form.html');


@Component({
  selector: 'member-form',
  styles: [styles],
  template
})

export class MemberForm {
  title: string = '';

  constructor(private memberService: MemberService) {}

  clear(): void {
    this.title = '';
  }

  submit(): void {
    const title: string = this.title.trim();
    if (title.length) {
      this.memberService.createMember(title);
    }
    this.clear();
  }
}
