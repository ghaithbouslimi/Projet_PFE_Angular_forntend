import { NgModule  , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SocketComponent } from './socket/socket.component';
import { SuiviUSComponent } from './suivi-us/suivi-us.component';
import { UploadComponent } from './upload/upload.component';
import { MangmentComponent } from './mangment/mangment.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UsersComponent } from './dashbord/users/users.component';
import { StatComponent } from './dashbord/stat/stat.component';
import { RolesComponent } from './dashbord/roles/roles.component';
import { LineChartComponent } from './dashbord/line-chart/line-chart.component';
import { PieChartComponent } from './dashbord/pie-chart/pie-chart.component';
import { ProfileComponent } from './profile/profile.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
const routes: Routes = [ 
  
  { path:'header' , component : HeaderComponent},
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {path:'login' , component : LoginComponent} ,
  {path:'socket' , component: SocketComponent , canActivate : [AuthGuard]} , 
  {path:'suivius' , component : SuiviUSComponent , canActivate : [AuthGuard]} , 
  {path:'upload' , component : UploadComponent} , 
  {path:'mangment' , component : MangmentComponent  ,  canActivate : [AuthGuard]} ,
  {path:'sidenav' , component : SidenavComponent,  canActivate : [AuthGuard]} , 
  {path:'users' , component : UsersComponent ,  canActivate : [AuthGuard]}  , 
  {path:'stat' , component : StatComponent ,  canActivate : [AuthGuard]}, 
  {path:'roles' , component:RolesComponent ,  canActivate : [AuthGuard]} , 
  {path:'line-chart' , component : LineChartComponent , canActivate : [AuthGuard]},
  {path:'pie-chart' , component:PieChartComponent , canActivate : [AuthGuard]} , 
  {path:'profile', component : ProfileComponent , canActivate : [AuthGuard]} , 
  {path:'maintenance' , component: MaintenanceComponent, canActivate : [AuthGuard]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] ,
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
