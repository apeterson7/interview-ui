import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interviewStatus'
})
export class InterviewStatusPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    switch(value) { 
      case 1: { 
         return 'New';
      } 
      case 2: { 
         return 'Under Review';
      } 
      case 3: { 
        return 'Finalized';
      } 
      default: { 
        return 'Error';
        break; 
      } 
   } 
  }

}
