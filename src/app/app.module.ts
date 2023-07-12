import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/store';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/PageNotFound/pageNotFound.component';

import { DepartmentListComponent } from './departmentList/departmentList.component';
import { DepartmentCardComponent } from './departmentList/departmentCard/departmentCard.component';
import { DepartmentDetailsComponent } from './departmentDetails/departmentDetails.component';
import { StudentCardComponent } from './departmentDetails/studentCard/studentCard.component';
import { FacultyCardComponent } from './departmentDetails/facultyCard/facultyCard.component';
import { SubjectCardComponent } from './departmentDetails/subjectCard/subjectCard.component';

import { CreateDepartmentComponent } from './ADMIN/department/createDepartment.component';
import { CreateFacultyComponent } from './ADMIN/faculty/createFaculty.component';
import { CreateStudentComponent } from './ADMIN/student/createStudent.component';
import { CreateSubjectComponent } from './ADMIN/subject/createSubject.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
	{ path: '', redirectTo: '/departments', pathMatch: 'full' },
	{ path: 'departments', component: DepartmentListComponent },
	{ path: 'department/:id', component: DepartmentDetailsComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'admin/create/department', component: CreateDepartmentComponent },
	{
		path: 'admin/create/department/:id',
		component: CreateDepartmentComponent,
	},
	{ path: 'admin/create/faculty', component: CreateFacultyComponent },
	{ path: 'admin/create/faculty/:id', component: CreateFacultyComponent },
	{ path: 'admin/create/student', component: CreateStudentComponent },
	{ path: 'admin/create/student/:id', component: CreateStudentComponent },
	{ path: 'admin/create/subject', component: CreateSubjectComponent },
	{ path: 'admin/create/subject/:id', component: CreateSubjectComponent },
	{ path: '**', component: PageNotFoundComponent },
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
		FacultyCardComponent,
		SubjectCardComponent,
		CreateDepartmentComponent,
		CreateFacultyComponent,
		CreateStudentComponent,
		CreateSubjectComponent,
		LoginComponent,
		RegisterComponent,
		PageNotFoundComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		RouterModule.forRoot(routes),
		FormsModule,
		BrowserAnimationsModule,
		StoreModule.forRoot({ auth: authReducer }),
		StoreModule.forRoot({}, {}),
		// StoreModule.forFeature('auth', authReducer),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
