import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username : null , 
    password : null
  };
  
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthServiceService,
              private tokenStorage: TokenStorageService, 
              private router : Router
     
     ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const {username , password} = this.form
    this.authService.login(username , password ).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.roles = this.tokenStorage.getUser().roles;
        this.roles.forEach((a:any)=>{

           if(a==='ROLE_OPERATOR'){
            this.router.navigate(['/mangment']) 
            console.log(a)
            const Toast = Swal.mixin({
              toast: true,
              position: 'center',
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            
            Toast.fire({
              icon: 'success',
              title: 'Signed in successfully'
            })
                  
           }else if (a==='ROLE_ADMIN'){
            this.router.navigate(['/mangment'])
            console.log(a)
            const Toast = Swal.mixin({
              toast: true,
              position: 'center',
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            
            Toast.fire({
              icon: 'success',
              title: 'Signed in successfully'
            })

           }else if (a==='ROLE_AGENT') {
           this.router.navigate(['/mangment'])
           console.log(a)
           const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Logged   successfully'
          })
           } else {
            const Toast = Swal.mixin({
             toast: true,
             position: 'center',
             showConfirmButton: false,
             timer: 3000,
             timerProgressBar: true,
             didOpen: (toast) => {
               toast.addEventListener('mouseenter', Swal.stopTimer)
               toast.addEventListener('mouseleave', Swal.resumeTimer)
             }
           })
           
           Toast.fire({
             icon: 'error',
             title: 'Login   Failed'
           })
           this.router.navigate(['/login'])

           }
        })
      },
      err =>{
        this.errorMessage = err.error.message;
        console.log(this.errorMessage)
        Swal.fire({
          
          icon: 'error',
          title: 'Login Failed',
          text: 'Check your details !',
        })
       }
      
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
