import { Component, OnInit } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {Router} from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-card-set',
  templateUrl: './card-set.component.html',
  styleUrls: ['./card-set.component.css']
})
export class CardSetComponent implements OnInit {

  card:any;
 

  constructor(private cardsService: CardsService,
    private router:Router) { }
    cardsArray = [];
    searchText: string = "";

  ngOnInit() {
    this.cardsService.getCards().subscribe(
      list => {
        this.cardsArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }
   
  onAddsubmit(){
    let card ={
      card:this.card
    }

   // this.cardsService.addcard(card);
  }

  filterCondition(card) {
    return card.card ;
  }

}
