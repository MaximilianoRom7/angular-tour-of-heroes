import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    /* a mock object */
    heroes: Hero[] = HEROES;

    /*
      trigger: when the the hero is selected
     */
    onSelect(hero: Hero): void {
        if(this.heroes.indexOf(hero) > -1) {
            console.log(`Hero ${hero.id} selected`);
            this.selectedHero = hero;
        }
        else
            console.log(`Hero ${hero && hero.id} selected does not exist`);
    }

}
