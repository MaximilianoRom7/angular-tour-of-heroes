import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

    constructor(private messageService: MessageService) { }

    /*
      This method returns an observable the same
      way the http lib does, making this request async
     */
    getHeroes(): Observable<Hero[]> {
        this.messageService.add("HeroService: fetched heroes");
        return of(HEROES);
    }

}
