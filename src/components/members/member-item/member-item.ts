import { Component, Input } from 'angular2/core';
import { IMember } from 'core/member/member';
import { MemberService } from 'core/member/member-service';
import { Autofocus } from 'directives/autofocus-directive';

const styles: string = require('./member-item.scss');
const template: string = require('./member-item.html');


@Component({
  directives: [
    Autofocus
  ],
  selector: 'member-item',
  styles: [styles],
  template
})

export class MemberItem {
  @Input() model: IMember;

  editing: boolean = false;
  title: string = '';

  constructor(private memberService: MemberService) {}

  delete(): void {
    this.memberService.deleteMember(this.model);
  }

  editTitle(): void {
    this.editing = true;
    this.title = this.model.title;
  }

  saveTitle(): void {
    if (this.editing) {
      const title: string = this.title.trim();
      if (title.length && title !== this.model.title) {
        this.memberService.updateMember(this.model, {title});
      }
      this.stopEditing();
    }
  }

  stopEditing(): void {
    this.editing = false;
  }

  toggleStatus(): void {
    this.memberService.updateMember(this.model, {
      checkedIn: !this.model.checkedIn
    });
  }
}
