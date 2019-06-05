import { Component, OnInit } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {Router, ActivatedRoute} from '@angular/router';
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
  cardsArray=[];
  gameid:any;
  id: number;

  constructor(private cardsService: CardsService, private router: Router, private route : ActivatedRoute) { 
     
    }

  ngOnInit() {

    this.gameid = this.route.snapshot.params.id;
   
    // get the set of cards of all the players
    this.cardsService.getPlayersdash(this.gameid).subscribe(
      list => {
          this.round2Array = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          });
        }); 

      this.getGame();
      this.getCard();
  } 

   // get the cards content
  getCard() {
    this.cardsService.getcard(this.cardsService.gameid).subscribe(
      list => {
        this.cardsArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  // get the game project name
  getGame(){
    this.cardsService.getGame(this.gameid).subscribe(
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