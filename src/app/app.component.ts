import { Component } from '@angular/core';
interface SideNavToggle {
  screenWidth : number 
  collapsed : boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  isSideNavCollapsed = false ; 
screenWidth = 0 
 
onToogleSideNav( data : SideNavToggle) : void {
this.screenWidth = data.screenWidth
this.isSideNavCollapsed = data.collapsed
}

}

