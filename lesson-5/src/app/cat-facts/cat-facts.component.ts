import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CatFactService} from '../services/cat-fact-api.service';
import {Observable} from 'rxjs';
import {AsyncPipe, NgForOf} from '@angular/common';
import {CatFactCardComponent} from '../cat-fact-card/cat-fact-card.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    AsyncPipe,
    CatFactCardComponent,
    RouterOutlet,
  ],
  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.css'
})
export class CatFactsComponent implements OnInit {
  public catFacts$: Observable<string[]> = new Observable<string[]>();

  constructor(private catFactApi: CatFactService) {
  }

  ngOnInit() {
   this.catFacts$ = this.catFactApi.getFacts();
  }

}
