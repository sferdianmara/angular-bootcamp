import {ActivatedRouteSnapshot, Routes} from '@angular/router';
import {CatFactsComponent} from './cat-facts/cat-facts.component';
import {ParentComponent} from './parent/parent.component';
import {activateGuard} from './activate-guard';

export const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  },
  {
    path: 'cat-facts',
    component: CatFactsComponent
  },
  {
    path: 'fact/:id',
    canActivate: [activateGuard],
    loadComponent: () => import('./cat-fact-details/cat-fact-details.component').then(c => c.CatFactDetailsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
