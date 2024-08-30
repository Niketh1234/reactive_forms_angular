import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddStoreComponent } from './add-store/add-store.component';
import { EmailPipe } from './pipes/email.pipe';
import { SampleComponent } from './sample/sample.component';
import { SalutePipe } from './pipes/salute.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    AddStoreComponent,
    EmailPipe,
    SampleComponent,
    SalutePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
