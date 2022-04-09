import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Message { text: string, type: MessageType }

export enum MessageType {
  Success,
  Error
}

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {

  private messages$ = new Subject<Message>();

  onNewMessage$ = this.messages$.asObservable();

  constructor() { }

  notifyForMessage(message: Message) {
    this.messages$.next(message);
  }

  clear(): void {
    this.messages$.next(undefined!)
  }

}
