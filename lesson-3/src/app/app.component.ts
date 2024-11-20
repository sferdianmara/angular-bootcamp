import {Component, Inject, InjectionToken} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {APP_CONFIG, AppConfig} from './app.config';

const MY_APP_CONFIG_VARIABLE: AppConfig = {
  title: 'Hello! This is Lesson 3, about Services & DI.',
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: APP_CONFIG, useValue: MY_APP_CONFIG_VARIABLE }]
})
export class AppComponent {
  title = 'lesson-3';

  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.title = config.title;
  }
}
