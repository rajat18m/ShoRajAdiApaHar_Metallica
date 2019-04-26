import { Side } from './NominatedTrade';

export class Assets {

    assetName: string
    assetQuantity: number
    assetSide: Side

    constructor(aName: string, aQuantity: number, aSide: Side) {
        this.assetName = aName
        this.assetQuantity = aQuantity
        this.assetSide = aSide
    }

}