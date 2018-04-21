import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    /*
      messages filtered from all the messages
      at messagesService.messages
    */
    messages_filtered: string[];

    /* max amount of messages to show in the view */
    messages_max: number = 20;

    constructor(public messageService: MessageService) { }

    filterMessages(): void {
        var filter = this.messageService.messages
            .slice(-this.messages_max)
            .reverse();
        this.messages_filtered = filter;
    }

    bindFilterMessages(): void {
        this.messageService.onAdd((this.filterMessages).bind(this));
    }

    ngOnInit() {
        this.bindFilterMessages();
    }

}
