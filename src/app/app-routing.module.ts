import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';
import { BookComponent } from './book/book.component';
import { BookingComponent } from './booking/booking.component';
import { HelpComponent } from './help/help.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RewardComponent } from './reward/reward.component';
import { RouteGuard } from './route-guard/route.guard';
import { ViewComponent } from './view/view.component';
// 1. Give appropriate route for routing
// 2. Any invalid route should redirect to HomeComponent
const routes: Routes = [
//  give appropriate route for reward and help component and render it in navbar component
{path:'login',component:LoginComponent, canActivate: [AuthGuard]},

{path:'logout', component: LogOutComponent},

{path:'register',component:RegisterComponent, canActivate: [AuthGuard]},

{path:'home/:book',component:BookComponent, canActivate: [RouteGuard]},

{path:'home',component:HomePageComponent},

{path:'reward',component:RewardComponent},

{path:'help',component:HelpComponent},

{path:'booking',component:BookingComponent, canActivate: [RouteGuard]},

{path:'view/:moviesId',component:ViewComponent},

{path:'**',redirectTo:'/home',pathMatch:'full'}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
