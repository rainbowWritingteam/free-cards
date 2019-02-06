import { Component, OnInit } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {Router,ActivatedRoute} from '@angular/router';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { getTypeNameForDebugging } from '@angular/common/src/directives/ng_for_of';


@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  cardname:any;
  cardcontent:any;
  id:any;

  constructor(private cardsService: CardsService,
    private route:Router,private firebase: AngularFireDatabase,private router:ActivatedRoute) { }

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


 


 
  submitContent(card) {
    this.cardsService.addcard1(card,this.cardsService.gameid);
    this.route.navigate(['card2']);
  }
}
