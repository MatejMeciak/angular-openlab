import { UserService } from './user.service';
import { ItemService } from './item.service';
import { HeroService } from './hero.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { MaterialModule } from './material.module';
import { ItemsComponent } from './items/items.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuymenuComponent } from './buymenu/buymenu.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    ItemsComponent,
    MessagesComponent,
    ItemDetailComponent,
    DashboardComponent,
    BuymenuComponent,
    HeroSearchComponent,
    NavigationBarComponent,
    DropdownComponent,
    HeroFormComponent,
    ItemFormComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
),
    BrowserAnimationsModule,
  ],
  providers: [
    HeroService,
    ItemService,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
