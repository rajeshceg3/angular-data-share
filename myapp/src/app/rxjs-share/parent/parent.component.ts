import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  readonly message$ = this.messages.message$;
  constructor(private readonly messages: MessageService) {}
}
