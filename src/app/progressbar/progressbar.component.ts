import { Component, OnInit,ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';


@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  
  @ViewChild('countdown') counter: CountdownComponent;
  width: any;
  constructor() { }

  ngOnInit() {

    this.width= 30;
  }



}
