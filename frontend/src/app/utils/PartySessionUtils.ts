import { Party } from 'src/model/Party';
import { AssetsHelper } from 'src/app/utils/AssetsHelper';
import { Assets } from 'src/model/Assets';
import { Side } from 'src/model/NominatedTrade';
import { FinalAsset } from 'src/model/FinalAsset';

export class PartySessionUtils {

    currentParty: Party
    assetsHelper: AssetsHelper
    currentAssets: Array<FinalAsset>

    constructor(party: Party, aHelper: AssetsHelper) {
        this.currentParty = party
        this.assetsHelper = aHelper
        this.currentAssets = this.calculateCurrentAssets()
    }

    calculateCurrentAssets() : Array<FinalAsset> {
        var retVal: Array<FinalAsset> = []
        var allAssets: Array<Assets> = []
        var allMetalNames: Array<string> = []

        // First, adding all assets to allAssets and all metal names to allMetalNames
        this.assetsHelper.nominatedTrades.forEach(nomTrade => {

            allAssets.push(new Assets(nomTrade.metal.name, nomTrade.metal.quantity, nomTrade.side))
            
            // If allMetalNames doesn't include current metal's name
            if(!(allMetalNames.includes(nomTrade.metal.name))) {
                allMetalNames.push(nomTrade.metal.name)
            }

        });

        // Now, processing.
        allMetalNames.forEach(metalName => {
            
            // First, finding all assets of the metal
            var allAssetsOfMetal: Array<Assets> = allAssets.filter(element => element.assetName == metalName)

            // Now, creating Quantity parameter and initializing it as 0
            var finalAssetQuantity: number = 0

            // Now iterating through allAssetsOfMetal to calculate quantity
            allAssetsOfMetal.forEach(assetOfMetal => {

                // + for BUY
                if(assetOfMetal.assetSide == Side.BUY) {
                    finalAssetQuantity += assetOfMetal.assetQuantity
                }

                // - for SELL
                else if(assetOfMetal.assetSide == Side.SELL) {
                    finalAssetQuantity -= assetOfMetal.assetQuantity
                }

            })

            // Now, adding new FinalAsset to retVal
            retVal.push(new FinalAsset(metalName, finalAssetQuantity))

        })

        return retVal
    }

}