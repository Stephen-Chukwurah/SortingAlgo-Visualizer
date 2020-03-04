import { Injectable, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UTILS, STR } from '../constants/utils.constants';
import { AppFacade } from '../+state/app.facade';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  private globalCount: number = 0;

  constructor(private facade: AppFacade, private toastr: ToastrService) { }

  doSort(barContainer: ElementRef) {
    this.facade.currentPane$.pipe(take(1)).subscribe((pane: Pane) => {
      switch (pane.id) {
        case 1: {
          this.insertionSort(barContainer); 
          break;
        }
        case 2: {
          this.selectionSort(barContainer); 
          break;
        }
        case 3: {
          this.bubbleSort(barContainer); 
          break;
        }
        case 4: {
          this.quickSort(barContainer); 
          break;
        }
        case 5: {
          this.mergeSort(); 
          break;
        }
        case 6: {
          this.heapSort(); 
          break;
        }
        default: {
          this.insertionSort(barContainer); 
          break;
        }
      }
    });
  }

  private insertionSort(barContainer: ElementRef){ 
    let barList: HTMLCollection = barContainer.nativeElement.children;
    let j, currentValue, key, temp: number = 0;
    for(let i = 1; i < barList.length; i++){
      setTimeout(() => {
        currentValue = this.getHeightValue(barList[i].firstElementChild.getAttribute(`${STR.style}`));
        key = currentValue;
        j = i - 1;
        while(j >= 0 && key < this.getHeightValue(barList[j].firstElementChild.getAttribute(`${STR.style}`))) {
          temp = this.getHeightValue(barList[j].firstElementChild.getAttribute(`${STR.style}`));
          barList[j].firstElementChild.setAttribute(`${STR.style}`, `${UTILS.defaultColor} height: ${this.getHeightValue(barList[j + 1].firstElementChild.getAttribute(`${STR.style}`))}%;`);
          barList[j + 1].firstElementChild.setAttribute(`${STR.style}`, `${UTILS.defaultColor} height: ${temp}%;`);
          j--;
        }
        if(i === barList.length - 1){
          this.done();
        }
      }, 100 * i);
    }
  }

  private bubbleSort(barContainer: ElementRef){
    let barList: HTMLCollection = barContainer.nativeElement.children;
    let temp: number = 0; 
    for(let i = 0; i < barList.length - 1; i++) {
      setTimeout(() => {
        for(let j = 0; j < barList.length - 1 - i; j++) {
          if(this.getHeightValue(barList[j].firstElementChild.getAttribute(`${STR.style}`)) > this.getHeightValue(barList[j + 1].firstElementChild.getAttribute(`${STR.style}`))) {
            temp = this.getHeightValue(barList[j].firstElementChild.getAttribute(`${STR.style}`));
            barList[j].firstElementChild.setAttribute(`${STR.style}`, `${UTILS.defaultColor} height: ${this.getHeightValue(barList[j + 1].firstElementChild.getAttribute(`${STR.style}`))}%;`);
            barList[j + 1].firstElementChild.setAttribute(`${STR.style}`, `${UTILS.defaultColor} height: ${temp}%;`);
          }
        }
        if(i === barList.length - 2){
          this.done();
        }
      }, 100 * i);
    }
  }

  private quickSort(barContainer: ElementRef){ 
    let barList: HTMLCollection = barContainer.nativeElement.children;
    let left: number = 0;
    let right: number = barList.length -1;
    this.qSort(barList, left, right);
  }

  private qSort(barList: HTMLCollection, left: number, right: number) {
    let index: number;
    if (barList.length) {
      setTimeout(() => {
        index = this.partition(barList, left, right);
        if (left < index - 1) { //more elements on the left side of the pivot
          this.qSort(barList, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
          this.qSort(barList, index, right);
        }
        this.globalCount++;
        if((barList.length - 1) === this.globalCount) { 
          this.globalCount = 0;
          this.done();
        }
      }, 500);
    }
  }

  partition(items, left, right) {
    let pivot   = this.getHeightValue(items[Math.floor((right + left) / 2)].firstElementChild.getAttribute(`${STR.style}`)), //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (this.getHeightValue(items[i].firstElementChild.getAttribute(`${STR.style}`)) < pivot) {
            i++;
        }
        while (this.getHeightValue(items[j].firstElementChild.getAttribute(`${STR.style}`)) > pivot) {
            j--;
        }
        if (i <= j) {

            let temp = this.getHeightValue(items[i].firstElementChild.getAttribute(`${STR.style}`));
           items[i].firstElementChild.setAttribute(`${STR.style}`, `${UTILS.defaultColor} height: ${this.getHeightValue(items[j].firstElementChild.getAttribute(`${STR.style}`))}%;`);
           items[j].firstElementChild.setAttribute(`${STR.style}`, `${UTILS.defaultColor} height: ${temp}%;`);

            i++;
            j--;
        }
    }
    return i;
}

  private mergeSort(){ this.toastr.error('No Visulizr Available yet');this.facade.triggerNotSorting();}
  private heapSort(){ this.toastr.error('No Visulizr Available yet');this.facade.triggerNotSorting();}

  private selectionSort(barContainer: ElementRef) {
    let barList: HTMLCollection = barContainer.nativeElement.children;
    let currentValue, minValue, minIndex, currentIterableValue, temp: number = 0;
    for (let i = 0; i < barList.length; i++) {
      setTimeout(() => {
        currentValue = this.getHeightValue(barList[i].firstElementChild.getAttribute(`${STR.style}`));
        minValue = currentValue;
        minIndex = i;
        
        for (let j = i; j < barList.length; j++) {
          currentIterableValue = this.getHeightValue(barList[j].firstElementChild.getAttribute(`${STR.style}`));

          if (currentIterableValue < minValue) {
            minValue = currentIterableValue;
            minIndex = j;
          }
        }
        if (minValue < currentValue) {
          temp = currentValue;
          barList[i].firstElementChild.setAttribute(`${STR.style}`, `${UTILS.defaultColor} height: ${this.getHeightValue(barList[minIndex].firstElementChild.getAttribute(`${STR.style}`))}%;`);
          barList[minIndex].firstElementChild.setAttribute(`${STR.style}`, `${UTILS.defaultColor} height: ${temp}%;`);
        }

        if(i === barList.length - 1){
          this.done();
        }
      }, 100 * i);
    }
  }

  // returns the numeric value of a bar height
  private getHeightValue(value: string) {
    let input = value.split("height:")[1].trim();
    let result = parseFloat(input);
    return result;
  }

  // Shows a done toastr message after any sort
  private done() {
    this.facade.triggerNotSorting();
    this.toastr.success('Done !');
  }

  
}
