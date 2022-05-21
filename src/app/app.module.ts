import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ItemComponent } from './core/item/item.component';
import { MainComponent } from './core/main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './core/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ItemComponent,
    MainComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
