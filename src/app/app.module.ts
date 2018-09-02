import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
} from '@angular/material';

import { AppComponent } from './app.component';

import 'hammerjs';
import { MyFormComponent } from './my-form/my-form.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { UserService } from './services/user.service';
import { Usertable2Component } from './usertable2/usertable2.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';

const appRoutes: Routes = [
  { path: 'table1', component: UsertableComponent},
  { path: 'table2', component: Usertable2Component },
  { path: 'address', component: MyFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    UsertableComponent,
    Usertable2Component,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true}),
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
