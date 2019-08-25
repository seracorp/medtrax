import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'seras-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = {
    type: 'local',
    username: '',
    password: '',
    rememberMe: false,
  };

  ngOnInit(): void {}
}
