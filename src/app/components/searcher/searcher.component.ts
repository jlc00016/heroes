import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
})
export class SearcherComponent implements OnInit {

  heroes: any[] = [];
  searchString: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.searchString = params['searchString'];
      this.heroes = this.heroesService.searchHeroes(params['searchString']);
    });
  }

}
