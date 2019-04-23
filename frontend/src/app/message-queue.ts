import { HttpClient } from '@angular/common/http';

class MessageQueue {

    constructor(private http : HttpClient) {
    }

    invoke(msg, source: Target, target : Target, extras : Extras = null) {
        var result
        
        // Dealing with target
        switch(target) {
            case Target.TRADE : {
                result = this.http.get('http://localhost:9090/api/trade')
            }

            case Target.NOTIFICATION : {
                if(extras == Extras.EMAIL) {
                    // Call Mail API here
                    result = "Success!"
                }
                else if(extras == Extras.MARKET) {
                    result = this.http.get('http://localhost:9090/api/market')
                }
                else {
                    result = "Error!"
                }
            }

            case Target.TRANSFER : {
                result = this.http.post('http://localhost:9090/api/transfer', msg)
            }

            case Target.USER : {
                if(extras == Extras.REGISTER) {
                    result = this.http.post('http://localhost:9090/api/user', msg)
                }
                else if(extras == Extras.LOGIN) {
                    result = this.http.get('http://localhost:9090/api/user', msg)
                }
                else {
                    result = "Error!"
                }
            }

            case Target.MARKET : {
                // Query API here.
                this.http.get('insert API URL here', result)
            }
        }

        // Sending response to source
        switch(source) {
            // case Target.TRADE : {
            //     this.http.post('http://localhost:9090/api/trade', result)
            // }

            // case Target.NOTIFICATION : {
            //     if(extras != Extras.MARKET) {
            //         result = "Error!"
            //     }
            //     this.http.post('http://localhost:9090/api/notification', result)
            // }

            // case Target.TRANSFER : {
            //     this.http.post('http://localhost:9090/api/trade', result)
            // }

            // case Target.USER : {
            //     if(extras == Extras.REGISTER) {
            //         this.http.get('http://localhost:9090/api/user', result)
            //     }
            //     else if(extras == Extras.LOGIN) {
            //         this.http.post('http://localhost:9090/api/trade', result)
            //     }
            //     else {
            //         result = "Error!"
            //         this.http.get('http://localhost:9090/api/user', result)
            //     }
            // }

        }
    }


}

enum Target {

    TRADE,  // Trade Service
    NOTIFICATION,   // Notification Service
    TRANSFER,   // Transfer Service
    USER,   // User Management Service
    MARKET  // Market Data Service

}

enum Extras {

    EMAIL,          // Send Email
    MARKET,         // Get Market Prices
    REGISTER,       // Register User
    LOGIN           // User Login
}