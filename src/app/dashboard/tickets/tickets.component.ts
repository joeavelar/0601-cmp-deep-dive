import { Component } from '@angular/core';

import { NewTicketComponent } from "./new-ticket/new-ticket.component";
// import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {

}
