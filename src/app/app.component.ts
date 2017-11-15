import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { IAppState, rootReducer } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // Using String
  @select('counter') count;
  // Using Array
  @select(['messaging', 'newMsgs']) newMsgs;
  // Using Arrow function
  @select((s: IAppState) => s.messaging.newMsgs) newMsgs1;


  constructor(private ngRedux: NgRedux<IAppState>){
  }

  increment() {
    //this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT});
  }
}
