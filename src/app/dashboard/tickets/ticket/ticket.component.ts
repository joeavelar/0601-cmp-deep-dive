import { Component, input, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {
  data = input.required<Ticket>();
  isVisible = signal(false);

  onToggleDetails() {

    // this.isVisible.set(!this.isVisible());
    this.isVisible.update((wasVisible) => !wasVisible);

  }

}
