import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import AppComponent from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';
import { ModalModule } from 'ngb-modal';
import { ModComponent } from './mod/mod.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ElectricityComponent } from './electricity/electricity.component';
import {HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    LogoutComponent,
    ModComponent,
    DropdownComponent,
    ElectricityComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,  
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      progressBar : true,
      timeOut: 5000,
      enableHtml: true,
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
