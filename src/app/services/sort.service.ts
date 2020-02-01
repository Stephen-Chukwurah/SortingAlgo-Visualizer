import { Injectable, ElementRef } from '@angular/core';
import { UTILS } from '../constants/utils.constants';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  selectionSort(barContainer: ElementRef) {
    let barList: HTMLCollection = barContainer.nativeElement.children;
    let currentValue, minValue, minIndex, currentIterableValue, temp: number = 0;
    for (let i = 0; i < barList.length; i++) {
      setTimeout(() => {
        currentValue = this.getHeightValue(barList[i].children[UTILS.child].attributes[UTILS.style].value);
        minValue = currentValue;
        minIndex = i;

        // barList[i].children[UTILS.child].attributes[UTILS.style].value = `${UTILS.sortingColor} height: ${currentValue}%;`;
        
        for (let j = i; j < barList.length; j++) {
          currentIterableValue = this.getHeightValue(barList[j].children[UTILS.child].attributes[UTILS.style].value);
          if (currentIterableValue < minValue) {
            minValue = currentIterableValue;
            minIndex = j;

            // barList[j].children[UTILS.child].attributes[UTILS.style].value = `${UTILS.sortingColor} height: ${currentIterableValue}%;`;
          }
        }
        if (minValue < currentValue) {
          temp = currentValue;
          barList[i].children[UTILS.child].attributes[UTILS.style].value = `${UTILS.sortingColor} height: ${this.getHeightValue(barList[minIndex].children[UTILS.child].attributes[UTILS.style].value)}%;`
          barList[minIndex].children[UTILS.child].attributes[UTILS.style].value = `${UTILS.defaultColor} height: ${temp}%;`
        }
      }, 1000 * i);
    }
  }

  getHeightValue(value: string) {
    let input = value.split(" ");
    let result = parseFloat(input[3]);
    return result;
  }
  
}
