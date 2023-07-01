import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { Department } from 'src/app/models/department';
import { Student } from 'src/app/models/student';

import { DepartmentAPI } from 'src/app/shared/departmentAPI';
import { StudentAPI } from 'src/app/shared/studentAPI';
import { AddressAPI } from 'src/app/shared/addressAPI';
import { FileAPI } from 'src/app/shared/fileAPI';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'create-student',
  templateUrl: './createStudent.component.html',
})
export class CreateStudentComponent implements OnInit {
  public title: string = 'Create Student';
  public id: number;
  public student: Student;
  public address: Address;
  public departments: Department[];
  public image: File;
  public buttonAction: string = 'create';

  private departmentApi = new DepartmentAPI();
  private studentApi = new StudentAPI();
  private addressAPI = new AddressAPI();
  private fileAPI = new FileAPI();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.student = new Student(
      0,
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      new Date(),
      0,
      '',
      0
    );
    this.address = new Address(0, '', '', '', '', '', '');
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDepartments();
    if (this.id != null) {
      this.buttonAction = 'update';
      this.getStudent();
    }
  }

  async getDepartments() {
    await this.departmentApi
      .getDepartments(this.http)
      .then((response: Department[]) => {
        this.departments = response;
      });
  }

  async getStudent() {
    await this.studentApi
      .getStudent(this.http, this.id)
      .then((response: Student) => {
        this.student = response;
      });
    await this.getAddresses();
  }

  async getAddresses() {
    await this.addressAPI
      .getAddress(this.http, this.student.addressId)
      .then((response: Address) => {
        this.address = response;
      });
  }

  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }

  async createAddress() {
    await this.addressAPI
      .createAddress(this.http, this.address)
      .then((response: Address) => {
        this.student.addressId = response.id;
      });
  }

  async createImage() {
    let formData = new FormData();
    formData.append('file', this.image);
    await this.fileAPI.createFile(this.http, formData).then((response: any) => {
      this.student.profilePictureId = response.id;
    });
  }

  async createStudent() {
    await this.createAddress();

    if (this.image != null) {
      await this.createImage();
    }

    await this.studentApi
      .createStudent(this.http, this.student)
      .then((response: Student) => {
        this.student = response;
      });

    if (this.student.id > 0) {
      alert('Student created successfully');
      window.location.reload();
    } else {
      if (this.student.addressId > 0) {
        await this.addressAPI.deleteAddress(this.http, this.student.addressId);
      }
      alert('Student creation failed');
    }
  }

  async updateStudent() {
    let oldAddressId = this.student.addressId;
    let oldProfilePictureId = this.student.profilePictureId;
    await this.createAddress();
    if (this.image != null) {
      await this.createImage();
    }

    await this.studentApi.updateStudent(this.http, this.student);

    if (this.student.id > 0) {
      alert('Student updated successfully');
      this.addressAPI.deleteAddress(this.http, oldAddressId);
      this.fileAPI.deleteFile(this.http, oldProfilePictureId);
      window.location.reload();
    } else {
      if (this.student.addressId > 0) {
        await this.addressAPI.deleteAddress(this.http, this.student.addressId);
      }
      if (this.student.profilePictureId > 0) {
        await this.fileAPI.deleteFile(this.http, this.student.profilePictureId);
      }
      this.student.addressId = oldAddressId;
      this.student.profilePictureId = oldProfilePictureId;
      alert('Student update failed');
    }
  }

  async deleteStudent() {
    await this.studentApi.deleteStudent(this.http, this.student.id);
    await this.addressAPI.deleteAddress(this.http, this.student.addressId);
    await this.fileAPI.deleteFile(this.http, this.student.profilePictureId);

    this.router.navigate(['/admin/students']);
  }
}
