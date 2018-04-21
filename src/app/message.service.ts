import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

    constructor() {
        this.messages = [];
    }

    messages: string[];

    add(message: string): void {
        this.messages.push(message);
    }

    clear(): void {
        this.messages = [];
    }

}
