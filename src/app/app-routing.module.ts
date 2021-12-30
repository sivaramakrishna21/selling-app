import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import {LogComponent} from './auth/log/log.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {HomeComponent} from './home/home.component';
import {DisplayComponent} from './auth/display/display.component'

const routes: Routes = [
  {
    path: 'login',
    component: LogComponent
  },
  {
    path:'display',
    component:DisplayComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {path:'products',component:ProductListComponent},
  {path:"products/:productid",component:ProductDetailsComponent},
  {path:"cart",component:CartComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
