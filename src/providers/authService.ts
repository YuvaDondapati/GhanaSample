import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

export class User {
    name: string;
    email: string;
   
    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }
  }

@Injectable()
export class AuthService{
    currentUser: User;
    public login(credentials){
        console.log("credentials.email"+credentials.email);
        if(credentials.email == '' && credentials.password == ''){
            console.log("in if");
            return Observable.throw("Please enter credentials");
        }else {
            return Observable.create(observer => {
                console.log("in else");
                // At this point make a request to your backend to make a real check!
                let access = (credentials.password === "yuva" && credentials.email === "yuva@olam.com");
                this.currentUser = new User('Yuva', 'yuva@olam.com');
                observer.next(access);
                observer.complete();
              });
        }      
    }

    public register(credentials) {
        if (credentials.email === null || credentials.password === null) {
          return Observable.throw("Please insert credentials");
        } else {
          // At this point store the credentials to your backend!
          return Observable.create(observer => {
            observer.next(true);
            observer.complete();
          });
        }
      }
}