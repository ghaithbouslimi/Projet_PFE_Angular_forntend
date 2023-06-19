import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RoleService } from 'src/app/services/role.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  UserList : any ;
  RoleList : any ; 
  SelectedRole : string | undefined ; 
  Role = ''
  form : any  = {
     //id : 0 ,
     matricule : "" , 
     email : "",
     username:"", 
     password : "", 
     numtel : "" ,
     roles : []
  }

  constructor( 
     private userService : UsersService ,
     private roleToken : TokenStorageService , 
     private roleService : RoleService        ) { }

  ngOnInit(): void {
    this.getAllUser()
    this.roleService.getRoles().subscribe((doc:any)=>{
      this.RoleList = doc ; 
    })
    this.Role = this.roleToken.getUser().roles

  }  
  getAllUser() {
    this.userService.getAllUsers().subscribe((doc : any)=>{
      this.UserList = doc;
      console.log(doc)

    })
  }
  
  PostUser( )  {
    //let {matricule , username , email , paswword , numtel } = this.form ; 
    console.log(this.SelectedRole)
    console.log(this.form)
    this.form.roles.push(this.SelectedRole)
    console.log(this.form)
   // return
     this.userService.AddUser(this.form).subscribe((doc : any)=>{
      this.getAllUser()
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: ' User added successfully ',
        showConfirmButton: false,
        timer: 1500
      })
     } , err =>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Change your Matricule!',
      })
     }) 
  }

 
  editUser(user : User){
   this.userService.getById(user).subscribe((doc:any)=>{
    console.log(doc)
    this.form.id = doc.id ; 
    this.form.username = doc.username;
    this.form.email = doc.email ;
    this.form.password = doc.password;
    this.form.numTel = doc.numTel;
 
   })
  }
  updateUser(){
    //const {id , matricule , username , email , paswword , numtel } = this.form ; 
    this.form.roles.push(this.SelectedRole)
    console.log(this.form)
    
    this.userService.Update(this.form).subscribe((doc:any)=>{
      this.getAllUser()
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: ' User updated successfully! ',
        showConfirmButton: false,
        timer: 1500
      })
     } , err =>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something is Wrong!',
      })
     }) 
  }
  deleteUser( user : User){
   this.userService.DeleteUser(user).subscribe((doc:any)=>{
    this.getAllUser()
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't to delete this user!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
   })
  } 

  onSubmit() {
    console.log(this.SelectedRole)
  }

  
  
  
}
