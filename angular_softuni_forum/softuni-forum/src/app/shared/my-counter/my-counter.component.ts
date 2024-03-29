import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { decrement, increment, IRootState, reset } from 'src/app/+store';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  // count$ = of(0); // The type is Observable<number>
  count$: Observable<number> = this.store.select(rootState => rootState.counter);

  constructor(private store: Store<IRootState>) { }

  ngOnInit(): void {
  }

  increment(): void {
    this.store.dispatch(increment())
  }
  decrement(): void {
    this.store.dispatch(decrement())
  }
  reset(): void {
    this.store.dispatch(reset())
  }

}
