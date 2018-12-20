import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import {DashboardPage} from '../dashboard/dashboard';
import { AuthService } from '../../providers/authService';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
 providers:[ AuthService]
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { email: '', password: '' };
  constructor(public navCtrl: NavController, private auth:AuthService, private alertCtrl: AlertController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ngOnInit(){
      // this.loginForm = new FormGroup(
      //   {loginEmail: new FormControl(),
      //   loginPassword: new FormControl()}
      // );
  }
  checkAndLogin():void{
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(
              allowed => {
                console.log("allowed is"+allowed);
                if(allowed){
                  //navigate to next screen
                  this.navCtrl.push(DashboardPage);
                }else{
                  //show error
                  this.showError("Access Denied");
                }
              }, error=>{
                this.showError(error);
              } );
    //console.log(this.loginForm.value);
  }

  showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
  goToDashboard(){
    this.navCtrl.push(DashboardPage);
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  forgotPassword(){
    console.log("forgot password clicked.");
  }
}
