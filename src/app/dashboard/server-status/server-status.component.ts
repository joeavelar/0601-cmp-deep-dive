import { Component } from '@angular/core';


@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss'
})
export class ServerStatusComponent {
  // When specific string values are used/needed, use the TypeScript feature called "Literal Types"
  currentStatus: 'online' | 'offline' | 'unknown' = 'online'; 

  constructor() {
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
    }, 5000); 
  }

}
