import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
    }

    register() {
      console.log('register clicked');
    }

    table() {
      console.log('table clicked');
    }

    chart() {
      console.log('chart clicked');
    }
}
