import { Component, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.None, // allows us to use SCSS nested classes like .control input, and .control textarea. This is not normally used.
  host: {
    // This defined once, but the class is added to 'app-contorl' whereever it's being used. 
    class: 'control',
    '(click)': 'onClick()'
  },
})
export class ControlComponent {
  // This is similar to using 'host:' within the '@Component()' section
  // This method of using HostBinding() is discouraged. Just here as an example only. Used for backward compatability. 
  // @HostBinding('class') className = 'control';


  // @HostListener('click')   onClick() {
  //   console.log('Clicked!');
  // };

  lable = input.required<string>();

  onClick() {
    console.log('Clicked!');
  }

}
