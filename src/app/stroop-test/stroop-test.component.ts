import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { StroopTestResultsComponent } from '../stroop-test-results/stroop-test-results.component';

@Component({
  selector: 'app-stroop-test',
  standalone: true,
  imports: [NgFor, NgIf, StroopTestResultsComponent],
  templateUrl: './stroop-test.component.html',
  styleUrl: './stroop-test.component.css'
})

export class StroopTestComponent {
  colorList: Array<any> = [
    { name: 'Blue' },
    { name: 'Yellow' },
    { name: 'Green' },
    { name: 'Pink' },
    { name: 'Purple' },
    { name: 'Orange' },
    { name: 'Red' },
    { name: 'Black' },
    { name: 'Gray' },
    { name: 'White' },
  ];

  colorToBeSelected: any;
  colorToWord: any;
  correct: number = 0;
  wrong: number = 0;
  click: number = 0;
  finalCorrect: string = '';
  finalIncorrect: string = '';
  showResults = false;

  selectedColor(event: any, color: any) {
    if (this.click === 9) {
      console.log("end")
      this.finalCorrect = this.correct.toString();
      this.finalIncorrect = this.wrong.toString();
      const testContainer = document.querySelectorAll<HTMLElement>('.test-container')[0]
      this.showResults = !this.showResults;
      testContainer.style.display = "none"
      return
    } else {
      this.click += 1;
      if (color.name === this.colorToBeSelected.name) {
        this.correct++
      } else {
        this.wrong++
      }
      this.colorToBeSelected = (this.colorList[(Math.floor(Math.random() * this.colorList.length))]);
      this.colorToWord = (this.colorList[(Math.floor(Math.random() * this.colorList.length))]);

      const wordColor = document.querySelectorAll<HTMLElement>('.colorToWord')[0]

      wordColor.style.color = this.colorToBeSelected.name
    }
  }

  ngOnInit(): void {
    this.colorToBeSelected = (this.colorList[(Math.floor(Math.random() * this.colorList.length))]);
    this.colorToWord = (this.colorList[(Math.floor(Math.random() * this.colorList.length))]);

    const wordColor = document.querySelectorAll<HTMLElement>('.colorToWord')[0]

    wordColor.style.color = this.colorToBeSelected.name
  }
}