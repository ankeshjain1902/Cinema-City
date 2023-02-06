import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookComponent } from './book/book.component';
import { RewardComponent } from './reward/reward.component';
import { HelpComponent } from './help/help.component';
import { ViewComponent } from './view/view.component';
import { BookingComponent } from './booking/booking.component';
import { RegisterComponent } from './register/register.component';
import { LogOutComponent } from './log-out/log-out.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    NavbarComponent,
    BookComponent,
    RewardComponent,
    HelpComponent,
    ViewComponent,
    BookingComponent,
    RegisterComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
