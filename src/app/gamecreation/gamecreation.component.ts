import { Component, OnInit } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {Router} from '@angular/router';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';


@Component({
  selector: 'app-gamecreation',
  templateUrl: './gamecreation.component.html',
  styleUrls: ['./gamecreation.component.css']
})
export class GamecreationComponent implements OnInit {

  gameid:any;
  val:any;


  constructor(private cardsService: CardsService,private af:AngularFireDatabase) { }
    cardsArray = [];

  ngOnInit() {
  }


  // Create the Game 
  Onsubmit(){
    let gameId ={
      gameid:this.gameid
    }
    this.cardsService.getId(this.gameid).subscribe(
      list => {

        if(Object(list.length)==0){

          this.cardsService.addgame(gameId);
          this.cardsService.Gameid(gameId);
        }

        else {
          console.log(Object(list[0]).key);
          this.cardsService.Gameid(Object(list[0]).key);
        
        }



  });
}




}
