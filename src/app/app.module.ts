import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule, MatPaginatorModule, MatSortModule,
} from '@angular/material';

import { AppComponent } from './app.component';

import 'hammerjs';
import { MyFormComponent } from './my-form/my-form.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { UserService } from './services/user.service';
import { Usertable2Component } from './usertable2/usertable2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    UsertableComponent,
    Usertable2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
