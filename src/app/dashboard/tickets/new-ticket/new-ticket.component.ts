import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";


@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss'
})
export class NewTicketComponent {

  // called as a result of using 'ngSubmit' within the template. 
  onSubmit(titleElement: HTMLInputElement) {
    // The value can be found within the element on the "value" property in the browser webtools. 
    const enteredtitle = titleElement.value;
    console.dir(titleElement);
    console.log('Entered title:' + enteredtitle); 
  }

}
