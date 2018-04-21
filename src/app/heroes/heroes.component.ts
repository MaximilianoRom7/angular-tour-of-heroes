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

    /* assign an empty Hero object */
    selectedHero: Hero = new Hero();

    /*
      trigger: when the the hero is selected
     */
    onSelect(hero: Hero): void {
        if(this.heroes.indexOf(hero) > -1) {
            if(hero !== this.selectedHero) {
                console.log(`Hero ${hero.id} changed`);
                this.selectedHero = hero;
            }
            console.log(`Hero ${hero.id} selected`);
        }
        else
            console.log(`Hero ${hero && hero.id} selected does not exist`);
    }

}
