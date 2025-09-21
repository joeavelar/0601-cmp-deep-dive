import { Component, Input } from '@angular/core';

// We now would change the selector to extend (a Build-in Element) the button by using an 'attribute' selector. 
// Official docs: https://angular.dev/guide/components/selectors

@Component({
  // selector: 'app-button',

  // It is good practice to prefix your custom attribute with 'app', example 'appButton'. 
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  

}
