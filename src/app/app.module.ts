import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LaunchPage } from '../pages/launch/launch';
import { LoginPageModule } from '../pages/login/login.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';

@NgModule({
  declarations: [
    MyApp,
    LaunchPage
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    DashboardPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LaunchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
