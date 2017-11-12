import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateMessageComponent } from './create-message/create-message.component';
import { VigenerePipe } from './create-message/vigenere.pipe';
import {InboxComponent} from './inbox/inbox.component';
import {ModalComponent} from './modal.component';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    HomePageComponent,
    NavbarComponent,
    CreateMessageComponent,
    VigenerePipe,
    InboxComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }