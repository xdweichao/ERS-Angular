import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actionType'
})
export class ActionTypePipe implements PipeTransform {

  transform(value: number): string {
    const actionCodes = {
        1: "Lodging",
        2: "Travel",
        3: "Food",
        4: "Other"
    };
    
    return actionCodes[value];
  }
}
