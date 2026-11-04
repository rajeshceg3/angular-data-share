import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent {
  readonly message$ = this.messages.message$;
  constructor(private readonly messages: MessageService) {}
  newMessage(value: string): void { this.messages.update(value); }
}
