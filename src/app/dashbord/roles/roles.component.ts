import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
   ListRole : any  ; 
    form : any = {
        id : 0 , 
        name : ''  , 
    }
  constructor( private roleService : RoleService) { }

  ngOnInit(): void {
    this.getall();
  }
   getall(){
    this.roleService.getRoles().subscribe((doc:any)=>{
      this.ListRole = doc ; 
       })
   }
  addRole() { 
    const {id , name  } = this.form;
    console.log(this.form)
    this.roleService.AddRole(this.form).subscribe(
      (doc:any)=>{
        this.getall();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: ' Role added successfully ',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )

  }

  UpdateRole() {

  }
  // deleteRole( role :Role ) {
  // this.roleService.deleteRole(role).subscribe((doc:any)=>{
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire(
  //         'Deleted!',
  //         'Your file has been deleted.',
  //         'success'
  //       )
  //     }
  //   })
  // })
  // }
  // editRole( role :Role) {
  //   const {id , name  } = this.form;
  //   this.roleService.getById(role).subscribe((doc:any)=>{
  //    this.form.id = doc.id ; 
  //    this.form.name=doc.name;
  //   }) 
  // }
}
