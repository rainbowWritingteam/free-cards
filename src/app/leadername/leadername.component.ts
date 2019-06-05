import { Component, OnInit } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {Router} from '@angular/router';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-leadername',
  templateUrl: './leadername.component.html',
  styleUrls: ['./leadername.component.css']
})
export class LeadernameComponent implements OnInit {

  name:any;
  id:any;
  nameArray=[];

  constructor(private cardsService: CardsService) { } 

    


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

      
  }


  Onsubmit(){

    let player ={
      name:this.name
    }

    this.cardsService.addPlayer(player,this.cardsService.gameid);




}
}
