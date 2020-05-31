import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestpipePipe implements PipeTransform {

  transform(value: string, replaceString: string): string {
    return value.replace(replaceString, '-test pipe-');
  }

}
