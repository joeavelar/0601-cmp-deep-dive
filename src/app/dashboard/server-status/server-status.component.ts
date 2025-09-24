import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss'
})
export class ServerStatusComponent implements OnInit {
  // When specific string values are used/needed, use the TypeScript feature called "Literal Types"
  currentStatus: 'online' | 'offline' | 'unknown' = 'online'; 

  constructor() {}

  // Runs once after Angular has initialized all the component's inputs.
  ngOnInit() {
    console.log('We hit ngOnInit');
    setInterval(() => {
      const rnd = Math.random(); // 0 to 0.99999

      if (rnd < 0.5 ) {
        this.currentStatus = 'online';
        // console.log('online');
      } else if (rnd < 0.9 ) {
        this.currentStatus = 'offline';
        // console.log('offline');
      } else {
        this.currentStatus = 'unknown';
        // console.log('unknwon');
      }
    }, 3000); 
  }

  ngAfterViewInit() {
    console.log("We hit ngAfterViewInit");
  }

}
