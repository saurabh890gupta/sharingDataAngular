import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from 'src/app/home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
{
 path:'home',
 component:HomeComponent
},
{
  path:'auth',
  loadChildren:'../app/baseComponent/base-component.module#BaseComponentModule'
 },
 {
   path:'owner',
   component:OwnerComponent
 },
 {
   path:'shop',
   component:ShopComponent  
 }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
