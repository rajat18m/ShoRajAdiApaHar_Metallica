export class Party {

    userID: number
    password: string
    firstName: string
    lastName: string
    email: string
    location: any;
    assets: Array<any>;

    constructor(pID: number, pw: string, fName: string, lName: string, loc, em: string, asts) {
        this.userID = pID
        this.password = pw
        this.firstName = fName
        this.lastName = lName
        this.email = em
        this.location = loc
        this.assets = asts
    }

}