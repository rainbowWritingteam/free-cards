import { Component, OnInit } from '@angular/core';
import { CardsService } from '../shared/cards.service';
import {Router,ActivatedRoute } from '@angular/router';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-card6',
  templateUrl: './card6.component.html',
  styleUrls: ['./card6.component.css']
})
export class Card6Component implements OnInit {

  constructor(private cardsService: CardsService, private route: Router, private db:AngularFireDatabase,private router:ActivatedRoute) { }

  round2Array =[];
  nameArray = [];
  playerArray=[];
  cardsArray=[];
  id:any;

  ngOnInit() {
 
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

submitContent(functionnality,application,technology,weaknesses,customer,needs) {

  this.cardsService.addcard6(functionnality,application,technology,weaknesses,customer,needs,this.cardsService.gameid);
  //this.route.navigate(['card7',this.cardsService.gameid]); 
  this.route.navigate(['card7']); 

   }

}
