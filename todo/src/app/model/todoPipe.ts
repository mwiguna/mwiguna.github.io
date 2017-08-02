import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], args: any[]): any {
  	if(items) {
  		if(items.length != undefined) return items.filter(item => item.keterangan.toLowerCase().indexOf(args) !== -1);
  		else return [items];
  	}
  }
}