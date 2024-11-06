import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'lesson-1';

  public ngOnInit(): void {
    // only strictly typed if you want it so
    let x: any = 1;
    x = [1,2,3];
    // console.warn(x);

    const obj1: any = {
      name: 'Mara',
      age: 25
    };
    obj1.lastName = 'Sferdian';
    // console.warn(obj1);

    // better
    const obj2: { age: number, name: string, lastName?: string} = {
      name: 'Mara',
      age: 25
    };
    obj2.lastName = 'Sferdian';
    // console.warn(obj2);

    const arr: number[] = [1,2,3,4];
    // console.warn(arr[6]);
    arr[6] = 7;
    // console.warn(arr);

    for (const i in arr) { // iterate through object keys
      // console.warn(i, arr[i]);
    }

    for (const e of arr) { // iterate through values
      // console.warn(e);
    }

    const copy = [...arr, 8];
    // console.warn(copy);

    if ('') {   // falsy values: false, null, undefined, 0, '', NaN; truthy - all others
      // console.warn('empty string is truthy');
    } else {
      // console.warn('empty string is falsy');
    }
    if ([]) {
     // console.warn('empty array is truthy');
    }

    const arr1 = [1,2,3];
    const arr2 = [5,6,7];
    const arr3 = [...arr1, 4, ...arr2, ...arr1];
    //console.warn(arr3);

    const object1 = {
      name: 'Mary',
      age: 17
    };
    const object2 = {
      hasALittleLamb: true,
      age: 20
    };
    const object3 = {
      ...object1,
      ...object2
    };
    //console.warn(object3);

    const object4: any = {
      o1: object1,
      o2: object2,
    };

    const object5 = { ...object4 };
    object5.o2 = {};
    object5.o1.age = 14;

    //console.log(object4);
    //console.log(object5);

    // for fun: https://github.com/denysdovhan/wtfjs
  }
}
