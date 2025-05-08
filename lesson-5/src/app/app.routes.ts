import {Routes} from '@angular/router';
import {CatFactsComponent} from './cat-facts/cat-facts.component';
import {ParentComponent} from './parent/parent.component';
import {activateGuard} from './activate.guard';
import {CatFactDetailsComponent} from './cat-fact-details/cat-fact-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  },
  {
    path: 'cat-facts',
    component: CatFactsComponent,
    // children: [
    //   {
    //     path: ':id',
    //     component: CatFactDetailsComponent
    //   }
    // ]
  },
  {
    path: 'fact/:id',
    loadComponent: () => import('./cat-fact-details/cat-fact-details.component').then(c => c.CatFactDetailsComponent),
    canActivate: [
      activateGuard
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
