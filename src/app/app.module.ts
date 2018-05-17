import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { MedicoPage } from '../pages/medico/medico';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { Utils } from '../entity/Utils';
import { CookieService } from 'angular2-cookie/core';
import { InterceptorHttpService } from '../providers/InterceptorHttpService';
import { PerfilServiceProvider } from '../providers/perfil-service/perfil-service';
import { PerfilPage } from '../pages/perfil/perfil';
import { MedicoServiceProvider } from '../providers/medico-service/medico-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    MedicoPage,
    TabsPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    MedicoPage,
    TabsPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    CookieService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ,
    {
      provide: Http,
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
        return new InterceptorHttpService(backend, defaultOptions);
      },
      deps: [XHRBackend, RequestOptions]
    }
    ,
    LoginServiceProvider,
    Utils,
    PerfilServiceProvider,
    MedicoServiceProvider
  ]
})
export class AppModule {}
