import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

    messages: string[] = [];
    onAddHandlers = [];

    constructor() {
        this.messages = [];
    }

    add(message: string): void {
        this.messages.push(message);
        this.onAddHandlersCall();
    }

    /* trigger: when add method is called */
    onAdd(func): void {
        if(this.onAddHandlers.indexOf(func) > -1)
            /* handler alredy registered */
            return
        this.onAddHandlers.push(func);
    }

    /* call all the onAdd handlers */
    onAddHandlersCall(): void {
        this.onAddHandlers.map(e => e());
    }

    clear(): void {
        this.messages = [];
    }

}
