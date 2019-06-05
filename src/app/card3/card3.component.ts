import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {CardsService} from '../shared/cards.service';



@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit {

  constructor(private cardsService: CardsService, private route: Router, private db:AngularFireDatabase,private router:ActivatedRoute ) { }

  round2Array =[];
  nameArray = [];
  id:any;
  playerArray=[];
  cardsArray=[];

  ngOnInit() {
 
     // get game project name
    this.cardsService.getGame(this.cardsService.gameid).subscribe(
      list => {
        this.nameArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
      


      this.getContent();
      this.getPlayername();
      this.getCard();
    }
  
   // get players name
    getPlayername (){
  
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

    // get cards title
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
  

    // get content of previous player
  getContent(){

    this.cardsService.getPlayers(this.cardsService.gameid).subscribe(
      list => {
        
      if(Object(list[0].key)== this.cardsService.playerkey){

       
        this.cardsService.getPlayer1Card(this.cardsService.gameid).subscribe(
          list => 
          this.round2Array = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          })
        );
      }

      else {

        this.cardsService.getPlayerCard(this.cardsService.gameid).subscribe(
          list => 
          this.round2Array = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          })
        );
      }
    });
  }


  // Store the cards content , we have 3 cards
  submitContent(functionnality,application,technology) {

     this.cardsService.addcard3(functionnality,application,technology,this.cardsService.gameid);
     this.route.navigate(['card4']);
      }

}
