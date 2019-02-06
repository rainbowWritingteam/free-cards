import { Component, OnInit } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private cardsService: CardsService,
    private router:Router) { }
    IdArray=[];

  ngOnInit() {
 /*   this.cardsService.getId().subscribe(
      list => {
        this.IdArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      }); */
  }

}
