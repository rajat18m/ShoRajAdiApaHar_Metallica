import { Pipe, PipeTransform } from '@angular/core';
import { TradeToSee } from 'src/model/TradeToSee';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(metals: Array<TradeToSee>, metName: string) {

        if(metName == "") {
            return metals
        }

        let filteredMetals = metals.filter(met => met.name.toLowerCase().includes(metName.toLowerCase()));
        console.log(metals, metName);
        return filteredMetals;
        
    }

}