import { Component, OnInit } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {Router,ActivatedRoute} from '@angular/router';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { defineBase, query } from '@angular/core/src/render3';


@Component({
  selector: 'app-round1',
  templateUrl: './round1.component.html',
  styleUrls: ['./round1.component.css']
})
export class Round1Component implements OnInit {

  constructor(private cardsService: CardsService,
    private router:Router, private db:AngularFireDatabase) { }
    playersArray= [];
    id:any;
    nameArray=[];
    playerArray=[];
    


  ngOnInit() {

    
    this.cardsService.getPlayersall(this.cardsService.gameid).subscribe(
      list => {
        this.playersArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });


      this.getName();
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


  getName(){
    this.cardsService.getPlayername(this.cardsService.gameid).subscribe(
      list => {
        this.playerArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }
 
  onclick(){

    this.router.navigate(['card1']);

  }

}
