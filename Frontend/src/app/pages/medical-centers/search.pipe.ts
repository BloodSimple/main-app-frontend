import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any) {
    if(!value) return null;  //if no data, return null
    if(!args) return value; //if no search value, retrun data

    args= args.trim();
    args = args.toLowerCase();
    console.log(args);
    return value.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }

}
