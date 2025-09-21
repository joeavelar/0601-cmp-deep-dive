import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.None, // allows us to use SCSS nested classes like .control input, and .control textarea. This is not normally used.
  host: {
    // This defined once, but the class is added to 'app-contorl' whereever it's being used. 
    class: 'control'
  },
})
export class ControlComponent {
  lable = input.required<string>();

}
