import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cat-fact-card',
  standalone: true,
  imports: [],
  templateUrl: './cat-fact-card.component.html',
  styleUrl: './cat-fact-card.component.css'
})
export class CatFactCardComponent {
  @Input() fact: string = '';
  @Input() id: number | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  public navigateToFact(): void {
    this.router.navigate([this.id], { relativeTo: this.activatedRoute });
  }
}
