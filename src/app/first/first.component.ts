import { Component, OnInit } from '@angular/core';
import {CardsService} from '../shared/cards.service';
import {NgZone} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

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
   // this.router.navigateByUrl('players/'+this.id, { skipLocationChange: true } );
  /* this.currentUrl = this.router.url + '?';

   this.router.navigateByUrl(this.currentUrl)
    .then(() => {
      this.router.navigated = false;
      this.router.navigate(['players',this.id]);
    }); */
   // this.router.navigate(['players']);
   

  // this.router.navigate(['players']);



  }

}
