import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private readonly message = new BehaviorSubject<string>('');
  readonly message$ = this.message.asObservable();

  update(value: string): void {
    this.message.next(value);
  }
}
