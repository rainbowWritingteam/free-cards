import { Component, OnInit } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {Router} from '@angular/router'
import { getTemplateContent } from '@angular/core/src/sanitization/html_sanitizer';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

 
  players:any;
  playingcards:any;

  constructor(private cardsService: CardsService,
    private router:Router) { }
    playersArray = [];
    playingcardsArray=[];
    searchText: string = "";

  ngOnInit() {
   
     this.cardsService.getCards().subscribe(
        list => {
          this.playingcardsArray = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          });
        }); 

  
this.getContent();
        
         
  }

 
getContent(){

 /* this.cardsService.getPlayers().subscribe(
    list => {
      this.playersArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    }); */

   

}
 

}
