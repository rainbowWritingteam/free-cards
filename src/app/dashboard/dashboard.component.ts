import { Component, OnInit } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {Router} from '@angular/router';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import * as _ from "lodash";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  round2Array=[];
  hideme=[];
  nameArray=[];

  constructor(private cardsService: CardsService, private router: Router) { 
     
    }

  ngOnInit() {
   
    this.cardsService.getPlayersdash(this.cardsService.gameid).subscribe(
      list => {
          this.round2Array = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          });
        }); 

      this.getGame();

  } 

  getGame(){
    this.cardsService.getGame(this.cardsService.gameid).subscribe(
      list => {
        this.nameArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }


}