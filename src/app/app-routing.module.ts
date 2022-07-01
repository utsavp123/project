import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'user', component: UserComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'electricity', component: ElectricityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
