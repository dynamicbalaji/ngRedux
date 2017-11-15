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
  @select() counter;

  constructor(private ngRedux: NgRedux<IAppState>){
  }

  increment() {
    //this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT});
  }
}
