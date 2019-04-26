export class Party {

    partyID: number
    password: string
    firstName: string
    lastName: string
    email: string

    constructor(pID: number, pw: string, fName: string, lName: string, em: string) {
        this.partyID = pID
        this.password = pw
        this.firstName = fName
        this.lastName = lName
        this.email = em
    }

}