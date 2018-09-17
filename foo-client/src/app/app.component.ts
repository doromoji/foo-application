import { Component, ViewEncapsulation } from '@angular/core';
import { LoginComponent } from './foo/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'test-angular6';
}
