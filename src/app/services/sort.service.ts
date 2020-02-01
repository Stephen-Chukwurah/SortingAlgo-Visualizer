import { Injectable, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UTILS } from '../constants/utils.constants';
import { AppFacade } from '../+state/app.facade';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SortService {

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
          this.mergeSort(barContainer); 
          break;
        }
        case 6: {
          this.heapSort(barContainer); 
          break;
        }
        default: {
          this.insertionSort(barContainer); 
          break;
        }
      }
    });
  }

  private insertionSort(barContainer: ElementRef){ this.toastr.error('No Visulizr Available yet');this.facade.triggerNotSorting();}
  private bubbleSort(barContainer: ElementRef){ this.toastr.error('No Visulizr Available yet');this.facade.triggerNotSorting();}
  private quickSort(barContainer: ElementRef){ this.toastr.error('No Visulizr Available yet');this.facade.triggerNotSorting();}
  private mergeSort(barContainer: ElementRef){ this.toastr.error('No Visulizr Available yet');this.facade.triggerNotSorting();}
  private heapSort(barContainer: ElementRef){ this.toastr.error('No Visulizr Available yet');this.facade.triggerNotSorting();}

  private selectionSort(barContainer: ElementRef) {
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
          barList[i].children[UTILS.child].attributes[UTILS.style].value = `${UTILS.defaultColor} height: ${this.getHeightValue(barList[minIndex].children[UTILS.child].attributes[UTILS.style].value)}%;`
          barList[minIndex].children[UTILS.child].attributes[UTILS.style].value = `${UTILS.defaultColor} height: ${temp}%;`
        }

        if(i === barList.length - 1){
          this.facade.triggerNotSorting();
          this.toastr.success('Done !');
        }
      }, 300 * i);
    }
  }

  private getHeightValue(value: string) {
    let input = value.split(" ");
    let result = parseFloat(input[3]);
    return result;
  }
  
}
