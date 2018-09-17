import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooRoutingModule } from './foo-routing.module';
import { MDBBootstrapModule, WavesModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import { FooComponent } from './foo/foo.component';
import { MainComponent } from './main/main/main.component';
import { AuthenticationService } from './authentication.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	HttpClientModule,
	FooRoutingModule,
	WavesModule.forRoot(),
	MDBBootstrapModule.forRoot()
  ],
  providers: [
	AuthenticationService
  ],
  declarations: [LoginComponent, FooComponent, MainComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class FooModule { }
