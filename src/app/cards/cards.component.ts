import { Component, OnInit } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {Router,ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private cardsService: CardsService,
    private router:Router,private route:ActivatedRoute) { }
gameid :any;
id:number;
round2Array=[];
nameArray=[];


  ngOnInit() {

    this.gameid = this.route.params.subscribe(params => {
      this.id = +params['id']; });

      this.cardsService.getPlayersdash(this.gameid).subscribe(
        list => {
            this.round2Array = list.map(item => {
              return {
                $key: item.key,
                ...item.payload.val()
              };
            });
          }); 
  
        this.getGame();
  
  
    }
  
  
    getGame(){
      this.cardsService.getGame(this.gameid).subscribe(
        list => {
          this.nameArray = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          });
        });
    }


}
