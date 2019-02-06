import { Component, OnInit } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {Router} from '@angular/router';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';




@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameid:any;
  val:any;


  constructor(private cardsService: CardsService,private af:AngularFireDatabase) { }
    cardsArray = [];

 
    ngOnInit() {
    
  /*  this.cardsService.getId(this.gameid).subscribe(
      list => {

        if(Object(list.length)==0){
          console.log("new ");
        }

        else {
          console.log("old");
        }
     /*   this.cardsArray = list.map(item => {
          return {
            $key: item.key,

          };
        }); 
      });  */

      

     
  }

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

// this.cardsService.addgame(gameId);
// this.router.navigate(['game']);   

  });
}

}
