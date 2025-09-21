import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss'
})

// This component will be called called from the following components
// server-status.component.html, tickets.component.html, traffic.component.html


export class DashboardItemComponent {
  // @Input({required: true}) imageSrc!: string;
  // @Input({required: true}) altMessage!: string;
  // @Input({required: true})headerText!: string;


  // Two methods of setting up "Input"
  // Option 1
  @Input({required: true}) image!: {src: string, alt: string};
  // @Input({required: true}) title!: string;

  // Option 2 -- runs an input signal
  // image = input.required<{src: string, alt: string}>();  // signals are called as a function, example: image().src, image().alt
  title = input.required<string>();  // signals are called as a function, example: title()

}

