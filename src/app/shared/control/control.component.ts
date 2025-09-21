import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.None // allows us to use SCSS nested classes like .control input, and .control textarea. This is not normally used.
})
export class ControlComponent {
  lable = input.required<string>();

}
