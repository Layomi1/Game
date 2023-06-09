import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptors';
import { HttpErrorInterceptor } from './interceptors/http-errors.interceptor';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import{MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,
    HttpClientModule,
    GaugeModule.forRoot(),
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
