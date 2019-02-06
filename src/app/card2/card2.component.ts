import { Component, OnInit } from '@angular/core';
import { CardsService } from '../shared/cards.service';
import {Router, ActivatedRoute } from '@angular/router';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor(private cardsService: CardsService, private route: Router, private db:AngularFireDatabase,private router:ActivatedRoute) { }

  round2Array=[];
  id:any;
  nameArray=[];
  playerArray=[];
  
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

  submitContent(functionnality,application) {

 this.cardsService.addcard2(functionnality,application,this.cardsService.gameid);
 this.route.navigate(['card3']);
  }

}
