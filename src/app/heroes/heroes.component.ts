import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    constructor(private heroService: HeroService,
                private messageService: MessageService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    /* a mock object */
    heroes: Hero[] = [];

    /* assign an empty Hero object */
    selectedHero: Hero = new Hero();

    /*
      trigger: when the the hero is selected
    */
    onSelect(hero: Hero): void {
        if(this.heroes.indexOf(hero) > -1) {
            if(hero !== this.selectedHero) {
                this.messageService.add(`Hero ${hero.name} changed`);
                this.selectedHero = hero;
            }
            this.messageService.add(`Hero ${hero.name} selected`);
        }
        else
            this.messageService.add(`Hero ${hero && hero.name} selected does not exist`);
    }

}
