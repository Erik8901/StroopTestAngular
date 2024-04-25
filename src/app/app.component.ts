import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { StroopTestComponent } from './stroop-test/stroop-test.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StroopTestComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  testStarted = false;

  startTest() {
    this.testStarted = !this.testStarted
  }
}
