export class RegistrationParty {

    password: string
    firstName: string
    lastName: string
    email: string

    constructor(pw: string, fName: string, lName: string, em: string) {
        this.password = pw
        this.firstName = fName
        this.lastName = lName
        this.email = em
    }

}