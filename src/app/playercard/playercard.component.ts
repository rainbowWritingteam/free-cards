import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardsService} from '../shared/cards.service';

@Component({
  selector: 'app-playercard',
  templateUrl: './playercard.component.html',
  styleUrls: ['./playercard.component.css']
})
export class PlayercardComponent implements OnInit {
  playersArray=[];

  constructor(private route:ActivatedRoute, private cardService : CardsService) { }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    this.cardService.getPlayerid(id).subscribe(
      list => {
        
          this.playersArray = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          });
        });



  }

}
