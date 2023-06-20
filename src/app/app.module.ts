import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { DepartmentListComponent } from './departmentList/departmentList.component';
import { DepartmentCardComponent } from './departmentList/departmentCard/departmentCard.component';
import { DepartmentDetailsComponent } from './departmentDetails/departmentDetails.component';
import { StudentCardComponent } from './departmentDetails/studentCard/studentCard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'department/:id', component: DepartmentDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DepartmentListComponent,
    DepartmentCardComponent,
    DepartmentDetailsComponent,
    StudentCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
