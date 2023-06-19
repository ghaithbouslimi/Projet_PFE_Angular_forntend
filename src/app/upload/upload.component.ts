import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UspicklistService } from '../services/uspicklist.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  file: any;

  constructor( private usPicklist : UspicklistService  , private http : HttpClient) { }

  ngOnInit(): void {
  }
  onFileChange(event: any) {
    this.file = event.target.files[0];
  }
  uploadExcel() {
    const formData = new FormData();
    formData.append('file', this.file, this.file.name);
    this.usPicklist.postUs(formData)
      .subscribe(
       ( res : any ) => console.log(res),
       ( err : any)=> console.log(err)
      );

      // this.http.post<any>("http://localhost:8084/api/product/upload" , formData).subscribe(
      //   (res : any) => console.log('add successfully')
      // )
  }
 
}
