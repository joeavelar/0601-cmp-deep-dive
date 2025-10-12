import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit{

  // passing the template variable, in this example "#form"
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>; 

  // can be used as a fnction that returns the element.
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form') ; // is a signnal


  enteredTitle = '';
  enteredText = ''; 


  // @Output() add = new EventEmitter({title: string; text: string});  
  // alternate modern method for an event emitter.
  add = output<{title: string; text: string}>(); 

  ngOnInit(): void {
      // there is a posibility that 'this.form' is initialized. 
  }

  ngAfterViewInit(): void {
    console.log('We hit AfterViewInit within the new-ticket.component.');
    console.log(this.form().nativeElement);
  }

  // called as a result of using 'ngSubmit' within the template. 
  // onSubmit(title: string, ticketText: string, form: HTMLFormElement) {

  // Alternet method of passing "form: HTMLFormElement" when passing as an argument isn't an option. 
  // onSubmit(title: string, ticketText: string) {    

  // using two-way binding, parameters aren't required. 
  onSubmit() {    
  // onSubmit(titleElement: HTMLInputElement) {
    // The value can be found within the element on the "value" property in the browser webtools. 
    // const enteredtitle = titleElement.value;
    // console.dir(titleElement);
    // console.log('Entered title:' + enteredtitle); 

    // this.add.emit({title: title, text: ticketText});
    // console.log('Title: ' + title);
    // console.log('Ticket: ' + ticketText);

    // using two-way binding instead. 
    this.add.emit({title: this.enteredTitle, text: this.enteredText});
    console.log('Title: ' + this.enteredTitle);
    console.log('Ticket: ' + this.enteredText);

    // clears all the input elements on the form. 
    // form.reset(); 

    // Alternate method using ViewChild. 
    // this.form()?.nativeElement.reset();
    
    // with two-way binding, we can clear the form by clearing the values directly. 
    this.enteredTitle = '';
    this.enteredText = '';
        
  }

}
