import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { Department } from 'src/app/models/department';
import { Faculty } from 'src/app/models/faculty';

import { DepartmentAPI } from 'src/app/shared/departmentApi';
import { FacultyAPI } from 'src/app/shared/facultyAPI';
import { AddressAPI } from 'src/app/shared/addressAPI';
import { FileAPI } from 'src/app/shared/fileAPI';
import { HttpClient } from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-create-faculty',
	templateUrl: './createFaculty.component.html',
})
export class CreateFacultyComponent implements OnInit {
	public title: string = 'Create Faculty';
	public id: number;
	public faculty: Faculty;
	public departments: Department[];
	public address: Address;
	public image: File;
	public buttonAction: string = 'create';

	private departmentApi = new DepartmentAPI();
	private facultyApi = new FacultyAPI();
	private addressAPI = new AddressAPI();
	private fileAPI = new FileAPI();

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private http: HttpClient
	) {
		this.faculty = new Faculty(
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
		this.image = new File([], '');
	}

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		this.getDepartments();
		if (this.id != null) {
			this.buttonAction = 'update';
			this.getFaculty();
		}
	}

	async getDepartments() {
		await this.departmentApi
			.getDepartments(this.http)
			.then((response: Department[]) => {
				this.departments = response;
			});
	}

	async getFaculty() {
		await this.facultyApi
			.getFaculty(this.http, this.id)
			.then((response: Faculty) => {
				this.faculty = response;
			});

		await this.getAddresse();
	}

	async getAddresse() {
		await this.addressAPI
			.getAddress(this.http, this.faculty.addressId)
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
				this.faculty.addressId = response.id;
			});
	}

	async createImage() {
		let formData = new FormData();
		formData.append('file', this.image);
		await this.fileAPI
			.createFile(this.http, formData)
			.then((response: any) => {
				this.faculty.profilePictureId = response.id;
			});
	}

	async createFaculty() {
		await this.createAddress();

		await this.createImage();

		await this.facultyApi
			.createFaculty(this.http, this.faculty)
			.then((response: Faculty) => {
				this.faculty = response;
			});

		if (this.faculty.id > 0) {
			alert('Faculty created successfully');
			this.faculty = new Faculty(
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
		} else {
			if (this.faculty.addressId > 0) {
				this.addressAPI.deleteAddress(
					this.http,
					this.faculty.addressId
				);
			}
			alert('Faculty creation failed');
		}
	}

	async updateFaculty() {
		let oldAddressId = this.faculty.addressId;
		let oldProfilePictureId = this.faculty.profilePictureId;
		await this.createAddress();

		await this.createImage();

		await this.facultyApi.updateFaculty(this.http, this.faculty);

		if (this.faculty.id > 0) {
			alert('Faculty updated successfully');
			this.faculty = new Faculty(
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
			this.addressAPI.deleteAddress(this.http, oldAddressId);
			this.fileAPI.deleteFile(this.http, oldProfilePictureId);
		} else {
			if (this.faculty.addressId > 0) {
				this.addressAPI.deleteAddress(
					this.http,
					this.faculty.addressId
				);
			}
			if (this.faculty.profilePictureId > 0) {
				this.fileAPI.deleteFile(
					this.http,
					this.faculty.profilePictureId
				);
			}
			this.faculty.addressId = oldAddressId;
			this.faculty.profilePictureId = oldProfilePictureId;
			alert('Faculty update failed');
		}
	}

	async deleteFaculty() {
		await this.facultyApi.deleteFaculty(this.http, this.faculty.id);
		await this.addressAPI.deleteAddress(this.http, this.faculty.addressId);
		await this.fileAPI.deleteFile(this.http, this.faculty.profilePictureId);

		this.router.navigate(['/admin/faculty']);
	}
}
