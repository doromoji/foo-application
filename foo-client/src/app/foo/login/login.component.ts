import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  model = {
    'username': '',
    'password': ''
  };
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.model.username, this.model.password).subscribe(principal => {
      console.log(principal);
    }, error => console.log('error', error));
  }

}
