import { Pipe, PipeTransform } from '@angular/core';
import { Response } from '../model/response';

@Pipe({
  name: 'avgResponseScore'
})
export class AvgResponseScorePipe implements PipeTransform {

  transform(responses: Response[]): any {
    let sum = responses.reduce((a,b)=> a + b.score, 0); 
    return sum / responses.length;
  }
}
