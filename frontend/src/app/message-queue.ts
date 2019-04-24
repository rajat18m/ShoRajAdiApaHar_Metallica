import { HttpClient } from '@angular/common/http';

class MessageQueue {

    constructor(private http : HttpClient) {
    }

    invoke(msg, target : Target, extras : Extras = null) {
        
        var result  // Result from REST calls
        
        // Dealing with target
        switch(target) {
            case Target.TRADE : {
                // Fetching result from REST Service
                result = this.http.get('http://localhost:9090/api/trade', msg)
                
                // Add data for Rabbit Handler here
                
                // Now sending result to display
                this.http.post('http://localhost:9090/api/rabbithandler', result)
            }

            case Target.NOTIFICATION : {
                if(extras == Extras.EMAIL) {
                    // Call Mail API here
                    result = "Success!"
                }
                else if(extras == Extras.MARKET) {
                    result = this.http.get('http://localhost:9090/api/market', msg)
                }
                else {
                    result = "Error!"
                }
                this.http.post('http://localhost:9090/api/rabbithandler', result)
            }

            case Target.TRANSFER : {
                result = this.http.post('http://localhost:9090/api/transfer', msg)
                this.http.post('http://localhost:9090/api/rabbithandler', result)
            }

            case Target.PARTY : {
                if(extras == Extras.REGISTER) {
                    result = this.http.post('http://localhost:9090/api/party', msg)
                }
                else if(extras == Extras.LOGIN) {
                    result = this.http.get('http://localhost:9090/api/party', msg)
                }
                else {
                    result = "Error!"
                }
                this.http.post('http://localhost:9090/api/rabbithandler', result)
            }

            case Target.MARKET : {
                // Query API here.
                result = this.http.get('insert API URL here', msg)
                this.http.post('http://localhost:9090/api/rabbithandler', result)
            }
        }

        /*
            Rabbit Handler on Server side will have to handle the results
            and will have to call invoke again.
            The extended paths will also have to be handled by the rabbithandler.
            
            Structure:
            -----------

            Angular-MQ  -->  Rabbit-REST-Controller-in-Spring   -->   Rabbit-Listener-in-Spring   --> Repeat(if req)
        */


    }

}

enum Target {

    TRADE,  // Trade Service
    NOTIFICATION,   // Notification Service
    TRANSFER,   // Transfer Service
    PARTY,   // User Management Service
    MARKET  // Market Data Service

}

enum Extras {

    EMAIL,          // Send Email
    MARKET,         // Get Market Prices
    REGISTER,       // Register User
    LOGIN           // User Login
}