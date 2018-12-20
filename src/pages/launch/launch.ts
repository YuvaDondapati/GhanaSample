import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';
//import { Router } from '@angular/router';

/**
 * Generated class for the LaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch',
  templateUrl: 'launch.html',
})
export class LaunchPage {

  olamIcon: "https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300";
  slider = [
    {
      title: "slider 1",
      Description:"Under our Packaged Foods Business, subsidiary Nutrifoods Ghana operates the the largest biscuits company in the country, producing household brands such as Milky Magic",
      image:"/assets/imgs/slide4.png"
    }, {
      title: "slider 2",
      Description:"Under our Packaged Foods Business, subsidiary Nutrifoods Ghana operates the the largest biscuits company in the country, producing household brands such as Milky Magic",
      image:"/assets/imgs/slide4.png"
    }, {
      title: "slider 3",
      Description:"Under our Packaged Foods Business, subsidiary Nutrifoods Ghana operates the the largest biscuits company in the country, producing household brands such as Milky Magic",
      image:"/assets/imgs/slide4.png"
    }, {
      title: "slider 4",
      Description:"Under our Packaged Foods Business, subsidiary Nutrifoods Ghana operates the the largest biscuits company in the country, producing household brands such as Milky Magic",
      image:"/assets/imgs/slide4.png"
    }
  ];

 constructor(private nav: NavController) {
  }
  
  goToLogin(){
   // this.router.navigateByUrl('login');
   console.log("button clicked");
   this.nav.push(LoginPage);
  }
}
