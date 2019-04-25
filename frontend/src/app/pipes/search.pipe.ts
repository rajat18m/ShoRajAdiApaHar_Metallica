import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(metals: Array<Metal>, metName: string) {

        let filteredMetals = metals.filter(met => met.name.toLowerCase().includes(metName.toLowerCase()));
        console.log(metals, metName);
        return filteredMetals;
        
    }

}