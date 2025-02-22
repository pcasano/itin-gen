import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatValue'
})
export class FormatValuePipe implements PipeTransform {
  transform(value: any, defaultValue: string = '-'): any {
    return value == null ? defaultValue : value;
  }
}
