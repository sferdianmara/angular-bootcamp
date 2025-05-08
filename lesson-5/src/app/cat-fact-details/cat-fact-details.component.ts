import {Component, Input, OnInit} from '@angular/core';
import {filter, interval, map, mergeMap, Observable, switchMap, tap} from 'rxjs';
import {CatFactService} from '../services/cat-fact-api.service';
import {AsyncPipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

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

  @Input() set id (id: string) {
    this.catFact$ = this.catFactService.getFact(+id);
  }

  constructor(private catFactService: CatFactService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
   // TODO: use automatic component binding

  public ngOnInit() {
    // this.catFact$ = this.activatedRoute.params.pipe(
    //   map(params => params?.['id']),
    //   tap(() => console.warn('before request')),
    //   switchMap(id => this.catFactService.getFact(id)),
    //   tap(() => console.warn('after request')),
    // );
  }

  public navigateToNext(): void {
    //this.router.navigate(['/fact/2']);
  }

}
