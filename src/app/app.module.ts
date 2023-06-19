import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SuiviUSComponent } from './suivi-us/suivi-us.component';
import { SocketComponent } from './socket/socket.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { UploadComponent } from './upload/upload.component';
import { MangmentComponent } from './mangment/mangment.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UsersComponent } from './dashbord/users/users.component';
import { StatComponent } from './dashbord/stat/stat.component';
import { RolesComponent } from './dashbord/roles/roles.component';
import { LineChartComponent } from './dashbord/line-chart/line-chart.component';
import { PieChartComponent } from './dashbord/pie-chart/pie-chart.component'; 
import { CanvasJSChart } from 'src/assets/canvasjs.angular.component';
import { ProfileComponent } from './profile/profile.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { SidenavOAComponent } from './sidenav-oa/sidenav-oa.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        SuiviUSComponent,
        SocketComponent,
        SearchPipe,
        UploadComponent,
        MangmentComponent,
        SidenavComponent,
        UsersComponent,
        StatComponent,
        RolesComponent,
        LineChartComponent,
        PieChartComponent ,
        CanvasJSChart,
        ProfileComponent,
        MaintenanceComponent,
        SidenavOAComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        
        
    ]
})
export class AppModule { }
