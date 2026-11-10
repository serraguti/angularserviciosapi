import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ComicsComponent } from './components/comics-component/comics-component';
import { ServiceComics } from './services/service.comics';

@NgModule({
  declarations: [App, HomeComponent, MenuComponent, ComicsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    ServiceComics,
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App],
})
export class AppModule {}
