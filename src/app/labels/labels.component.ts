import { Component, OnInit } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {Router,ActivatedRoute} from '@angular/router';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { defineBase, query } from '@angular/core/src/render3';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {

  constructor(private cardsService: CardsService,
    private router:Router, private db:AngularFireDatabase) { }
    i = 0;
    playersArray= [];
    id:any;
    nameArray=[];
    writingArray=[];
    name:any;



  ngOnInit() {

    // get the cards titles created
    this.cardsService.getPlayingcards(this.cardsService.gameid).subscribe(
      list => {
        this.writingArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
   console.log(this.writingArray);
  }


  // Create the cards
  Onsubmit(){

    let player ={
      name:this.name
    }

    this.cardsService.addcard(player,this.cardsService.gameid);
  }



  delete(playerkey){

    this.cardsService.deletecard(this.cardsService.gameid,playerkey);
  }

}
