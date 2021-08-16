import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

//forms module
import { FormsModule } from '@angular/forms';

// custom component 
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TitleandsearchComponent } from './titleandsearch/titleandsearch.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { PhonesComponent } from './phones/phones.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';

// firebase modules
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { CartComponent } from './cart/cart.component';

//auth module
import { ReactiveFormsModule } from "@angular/forms";
import { SignoutComponent } from './signout/signout.component';

//auth guard
import { SshopGuard } from './sshop.guard';
import { AuthService } from './database/auth.service';
import { AlldataService } from './database/alldata.service';
import { EdituserdetailComponent } from './edituserdetail/edituserdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TitleandsearchComponent,
    SliderComponent,
    FooterComponent,
    CategoryComponent,
    PhonesComponent,
    SignupComponent,
    LoginComponent,
    MyaccountComponent,
    MywishlistComponent,
    CartComponent,
    SignoutComponent,
    EdituserdetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SshopGuard,
    AuthService,
    AlldataService,
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
