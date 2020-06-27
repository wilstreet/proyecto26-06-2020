import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { PictureComponent } from './picture/picture.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCeX5Ro4gnlArDLZ9RIJ0Tva13A7Wlzheo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
