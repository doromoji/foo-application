import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooModule } from './foo/foo.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(
		[
			
			{ path: 'foo', loadChildren: './foo/foo.module#FooModule' }
		],
		{
			enableTracing: true
		}
	)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
