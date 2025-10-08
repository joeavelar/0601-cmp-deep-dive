import { Component, DestroyRef, OnDestroy, OnInit, effect, inject, signal } from '@angular/core';


@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss'
})
export class ServerStatusComponent implements OnInit {
  // When specific string values are used/needed, use the TypeScript feature called "Literal Types"
  // currentStatus: 'online' | 'offline' | 'unknown' = 'online'; 

  // We can update the currentStatus function to be a signal. 
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online') ; 


  // Used for ngOnDestroy() method
  // private IntervalID!: ReturnType<typeof setInterval>;
  // private IntervalID?: NodeJS.Timeout; // is generating an error. 

  // modern method without using ngOnDestroy() method
  private desstroyRef = inject(DestroyRef);


  constructor() {
    // using effect() function will result in Angular setting up a subscription to the function within. Otherwise no subscription is setup of effect() function is not used. 
    effect(() => {
      console.log(this.currentStatus());
   }); 
    
  }

  // Runs once after Angular has initialized all the component's inputs.
  ngOnInit() {
    console.log('We hit ngOnInit');
    // this.IntervalID = setInterval(() => {
    // this is the alternate method using DestroyRef option, we'll use: const interval
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 to 0.99999

      if (rnd < 0.5 ) {
        // this.currentStatus = 'online';
        this.currentStatus.set('online');
        // console.log('online');
      } else if (rnd < 0.9 ) {
        // this.currentStatus = 'offline';
        this.currentStatus.set('offline');
        // console.log('offline');
      } else {
        // this.currentStatus = 'unknown';
        this.currentStatus.set('unknown');
        // console.log('unknwon');
      }
    }, 3000); 

    // This is the new modern method for cleaning up left over data/memory/etc.
    this.desstroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log("We hit ngAfterViewInit");
  }

  // ngOnDestroy(): void {
  //   // We will do clean up work as required. 

  //   // clearInterval(this.IntervalID);  // 
  //   clearTimeout(this.IntervalID);  
  // }

  // alternative method to ngOnDestroy()


}
