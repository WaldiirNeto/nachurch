import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { headerModule } from './shared/header/header.module';
import { footerModule } from './shared/footer/footer.module';
import { notFoundModule } from './errors/not-found/not-found.module';
import { AppRoutingModule } from './app.routing.module';
import { AngularFireModule } from '@angular/fire';  
import { environment } from '../environments/environment';  




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    headerModule,
    footerModule,
    notFoundModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
