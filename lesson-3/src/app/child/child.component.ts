import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {

  @Input() index: number = 0;

  constructor() {
    console.log("Creating an instance of ChildComponent");
  }

  public ngOnInit() {
    // log something, that the component was initialized
  }

}
