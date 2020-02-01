import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map} from 'rxjs/operators';
import * as EntityActions from './app.actions';


@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions  ) {}

  setDataSize = createEffect(() =>
    this.actions$.pipe(
      ofType(EntityActions.setDataSize),
      map((action) => {
        const bars: Bar[] = this.generateRandomDataSet(action.data);
        return EntityActions.loadData({ data: bars });
      })
    )
  );

  generateRandomDataSet(sizeOfArray){
    let max = +sizeOfArray;
    let random: Array<Bar> = [];
    for(let i = 0;i<max ; i++){
        let temp = Math.floor(Math.random()*max);
        if((random.findIndex(i => i.value === temp)) == -1){
            random.push({label:"blue", color: "blue", value: temp, percentage: `${temp}%`});
        }
        else
         i--;
    }
    return random;
  }

}
