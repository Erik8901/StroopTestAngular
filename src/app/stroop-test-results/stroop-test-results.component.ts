import { Component, Input } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
@Component({
  selector: 'app-stroop-test-results',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './stroop-test-results.component.html',
  styleUrl: './stroop-test-results.component.css'
})
export class StroopTestResultsComponent {
  @Input() resultsCorrect = ''; // decorate the property with @Input()
  @Input() resultsInCorrect = ''; // decorate the property with @Input()
  @Input() show = false; // decorate the property with @Input()
  ngOnInit(): void {
  }
}