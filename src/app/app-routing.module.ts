import { LoginFormComponent } from './login-form/login-form.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { BuymenuComponent } from './buymenu/buymenu.component';
import { ItemsComponent } from './items/items.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'buymenu/:id', component: BuymenuComponent },
  { path: 'hero-form', component: HeroFormComponent },
  { path: 'item-form', component: ItemFormComponent },
  { path: 'login', component: LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }