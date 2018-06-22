import { Component, OnInit } from '@angular/core';
import { HttpService } from "src/app/http.service";

@Component({
  selector: 'app-lastpart',
  templateUrl: './lastpart.component.html',
  styleUrls: ['./lastpart.component.css']
})
export class LastpartComponent implements OnInit {
  formData: {};

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.formData = this.http.getForm()
    console.log(this.formData)
  }

}
