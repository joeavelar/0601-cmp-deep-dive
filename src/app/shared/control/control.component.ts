import { AfterContentInit, Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation, afterRender, afterNextRender } from '@angular/core';

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
    ,'(click)': 'onClick()'
  },
})
export class ControlComponent implements AfterContentInit {
  // This is similar to using 'host:' within the '@Component()' section
  // This method of using HostBinding() is discouraged. Just here as an example only. Used for backward compatability. 
  // @HostBinding('class') className = 'control';


  // @HostListener('click')   onClick() {
  //   console.log('Clicked!');
  // };

  lable = input.required<string>();
  private el = inject(ElementRef); // becareful in using ElementRef to change data programatically, instead use Angular 

  // For ConetnetChild(''), the '' string is a form template of 'input' found within new-ticket.component.html template. 
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  // Alternative to the above but in a signal format. 
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() { 

    // to be called whenever there is a change anywhere in the application. 
    afterRender(() => {
      console.log('afterRender called.');
    //   console.log('ControlComponent constructor() afterRender()');
    //   console.log(this.el);
    //   console.log(this.control()); // signals require brackets ()
    })

    // to be called whenever the next change happens anywhere in teh application. 
    afterNextRender(() => {
      console.log('afterNextRender called.');
    })
  }

  ngAfterContentInit(): void {
      // ensures that data is initialized for 'this.control'. 
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control()); // signals require brackets ()
  }


}
