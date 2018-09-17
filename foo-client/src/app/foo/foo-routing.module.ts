import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main/main.component';

const routes: Routes = [
	{ 
		path: '', 
		component: FooComponent, 
		children: [
			{ path: 'login', component: LoginComponent },
			{ path: 'main', component: MainComponent }
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooRoutingModule { }
