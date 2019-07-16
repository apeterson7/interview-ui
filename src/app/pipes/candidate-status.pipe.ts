import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'candidateStatus'
})
export class CandidateStatusPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    switch(value) { 
      case 1: { 
         return 'Available';
      } 
      case 2: { 
         return 'Interviewing';
      } 
      case 3: { 
        return 'Hired';
      } 
      case 4: { 
        return 'Rejected';
      } 
      default: { 
        return 'Error'; 
        break; 
      } 
   } 
  }

}
