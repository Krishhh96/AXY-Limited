import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  isAuth = false;
  erroObj: boolean;
  loginData;
  selectBoxData;
  firstName;
  contactObj = {};
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.signIn().subscribe((signInData) => {
      this.loginData = signInData;
    });
    this.authService.selectBoxData().subscribe((selData) => {
      this.selectBoxData = selData;
      console.log(this.selectBoxData);
    });
  }

  signIn(formData: NgForm) {
    if (!formData.valid) return;
    const email = formData.value.email;
    const id = formData.value.id;
    const currentUser = this.loginData.find((user) => user.id == id);
    console.log(currentUser);
    if (currentUser.email === email) {
      this.isAuth = true;
      this.erroObj = false;
      this.firstName = currentUser.firstName;
    } else {
      this.isAuth = false;
      this.erroObj = true;
    }
    console.log(this.isAuth);
    formData.reset();
  }

  contactData(contactData: NgForm) {
    this.contactObj = {
      name: contactData.value.firstName,
      country: contactData.value.country,
      contactNumber: contactData.value.contact,
    };
    this.isAuth = false;
  }
}
