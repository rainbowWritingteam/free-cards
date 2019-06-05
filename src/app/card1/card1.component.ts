import { Component, OnInit, Inject } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {Router,ActivatedRoute} from '@angular/router';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Headers, Response, URLSearchParams,RequestOptions} from '@angular/http';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})

export class Card1Component implements OnInit {

  cardname:any;
  cardcontent:any;
  id:any;

  constructor(private http: HttpClient,  private cardsService: CardsService,
    private route:Router,private firebase: AngularFireDatabase,private router:ActivatedRoute) { }

    nameArray=[];
    playerArray=[];
    cardsArray=[];
    

  ngOnInit() {

       //get the name of the game 
        this.cardsService.getGame(this.cardsService.gameid).subscribe(
          list => {
            this.nameArray = list.map(item => {
              return {
                $key: item.key,
                ...item.payload.val()
              };
            });
          });


   this.getPlayername();
   this.getCard();
  }


  //Get the game players  
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

  //Get the card titles
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



 // Store the card body 
  submitContent(card) {
    this.cardsService.addcard1(card,this.cardsService.gameid);
    this.route.navigate(['card2']);
  }

}
