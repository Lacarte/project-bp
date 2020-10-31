import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {
  MatBottomSheet,
  MatBottomSheetRef
} from '@angular/material/bottom-sheet';

import { AuthService } from '../../services/auth.service';
import { SidenavService } from '../sidenav/sidenav.service';
import { UIService } from '../../services/ui.service';
import { DataService } from '../../services/data.service';
import { Login } from '../../interfaces/login';
import { LoginBottomsheetComponent } from '../login-bottomsheet/login-bottomsheet.component';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: null,
    password: null
  };

  hide = true;

  // form: FormGroup;
  private formSubmitAttempt: boolean;

  public loginForm: FormGroup = new FormGroup({
    $key: new FormControl(null),

    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  constructor(
    // private fb: FormBuilder,
    public authenticationService: AuthenticationService,
    private uiService: UIService,
    private dataService: DataService,
    private bottomSheet: MatBottomSheet
  ) {
    this.authenticationService.logout();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  public initializeFormGroup(): void {
    this.loginForm.setValue({
      $key: null,
      email: '',
      password: ''
    });
  }

  onSubmit(form: NgForm): void {
    console.log('form.valid => ', form.valid);

    if (form.valid) {
      this.authenticationService.signIn(this.login);
    }
  }

  openBottomSheet(): void {
    this.bottomSheet.open(LoginBottomsheetComponent);
  }
}
