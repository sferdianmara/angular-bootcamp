import {Component, Input, OnInit} from '@angular/core';
import {filter, map, Observable, switchMap} from 'rxjs';
import {CatFactService} from '../services/cat-fact-api.service';
import {AsyncPipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cat-fact-details',
  standalone: true,
  imports: [
    AsyncPipe,
  ],
  templateUrl: './cat-fact-details.component.html',
  styleUrl: './cat-fact-details.component.css'
})
export class CatFactDetailsComponent implements OnInit {
  public catFact$: Observable<string | undefined> = new Observable<string | undefined>();

  constructor(private catFactService: CatFactService, private activatedRoute: ActivatedRoute) {
  }

  // @Input() set id(id: string) {
  //   const index: number = +id;
  //   if (index != null && !isNaN(index)) {
  //     this.catFact$ = this.catFactService.getFact(index);
  //   }
  // }

  public ngOnInit() {
    this.catFact$ = this.activatedRoute.params.pipe(
      map(params => params['id']),
      switchMap(id => this.catFactService.getFact(+id))
    );
  }

}
