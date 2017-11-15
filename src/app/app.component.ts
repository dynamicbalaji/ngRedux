import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState, rootReducer } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter: number = 0;

  constructor(private ngRedux: NgRedux<IAppState>){
    var subscription = ngRedux.subscribe(() => {
      console.log(ngRedux.getState());
      var store = ngRedux.getState();
      this.counter = store.counter;
    });
  }

  increment() {
    //this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT});
  }
}
