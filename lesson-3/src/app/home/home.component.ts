import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ChildComponent} from '../child/child.component';
import {CatFactService} from '../services/cat-fact.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    ChildComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public catFacts: any[] = [];

  constructor(private catFactService: CatFactService) {}

  ngOnInit() {
    this.catFactService.getFacts(5).subscribe(res => {
      console.log(res);
      this.catFacts = res?.data;
    })
  }

}
