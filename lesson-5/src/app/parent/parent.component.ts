import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  constructor(private router: Router) {
  }

  public navigateToCatFacts() {
    this.router.navigate(['/cat-facts']);
  }
}
