import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { NgxEditorModule } from 'ngx-editor';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

let config = {
  apiKey: "AIzaSyCqNTKQvkIWqx9fS0EVrvFrnkLk56GTHQg",
  authDomain: "scribe-f0662.firebaseapp.com",
  databaseURL: "https://scribe-f0662.firebaseio.com",
  projectId: "scribe-f0662",
  storageBucket: "scribe-f0662.appspot.com",
  messagingSenderId: "1027982510812"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
