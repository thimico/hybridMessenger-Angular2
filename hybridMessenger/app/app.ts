import {App, Platform, Alert, NavController, IonicApp} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {Renderer} from '@angular/core';
import {EmployeeService} from './providers/employee-service/employee-service';

@App({
  template: '<ion-nav id="myNav" [root]="rootPage"></ion-nav>',
  providers: [EmployeeService],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any;
  AuthHandler: any;
  nav: any;
  app: any;

  constructor(platform: Platform, renderer: Renderer, app: IonicApp) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

    this.app = app;

    renderer.listenGlobal('document', 'wlInitFinished', () => {
      console.log('---> wlInitFinished event received');
      this.MFPInit();
    })
  }

  MFPInit() {
    this.rootPage = TabsPage;
    this.AuthInit();
  }

  ngAfterViewInit() {
    this.nav = this.app.getComponent('myNav');
  }

  AuthInit() {
    console.log("---> init AuthInit");
      this.AuthHandler = WL.Client.createWLChallengeHandler("UserLogin");
      console.log("---> called createWLChallengeHandler");
      this.AuthHandler.handleChallenge = ((renponse => {
        console.log("---> inside handleChallenge");
        this.displayLogin();
      }))
  }

  displayLogin() {
    let prompt = Alert.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });

    this.nav.present(prompt);
  }
}
