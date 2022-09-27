import { Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'square'
  })


export class Squarepipe implements PipeTransform {

    transform(num:number): number {
        return num * num ; //4*4
      }
}
