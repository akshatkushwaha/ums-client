import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DepartmentDetailsComponent } from './pages/department-details/department-details.component';
import { StudentListComponentComponent } from './components/student-list-component/student-list-component.component';
import { DepartmentListComponentComponent } from './components/department-list-component/department-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DepartmentDetailsComponent,
    StudentListComponentComponent,
    DepartmentListComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
