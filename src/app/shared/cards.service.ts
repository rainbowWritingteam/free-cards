import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import * as firebase from 'firebase';
import { findLast } from '@angular/compiler/src/directive_resolver';
import { query } from '@angular/animations';


@Injectable()
export class CardsService {

  constructor(private firebase: AngularFireDatabase) { }
  gameList: AngularFireList<any>;
  key:any;
  gamekey:any;
  playerkey:any;
  gameid:any;


  Gameid(id){
    this.gameid=id;
    return this.gameid;
  }
  

  addgame(gameid) {

  this.gamekey=firebase.database().ref().child('game').push(gameid).key;
  return this.gamekey;
  
 }

 getGame(id){

  this.gameList = this.firebase.list('game',query=>query.orderByKey().startAt(id).limitToFirst(1));
   return this.gameList.snapshotChanges();
 }

getPlayername(id){

  this.gameList = this.firebase.list('game/'+id+'/users',query=>query.orderByKey().startAt(id));
   return this.gameList.snapshotChanges();
 } 

 getLeader(id,playerkey){

  this.gameList = this.firebase.list('game/'+id+'/users/'+playerkey);
   return this.gameList.snapshotChanges();
 }


 getPlayer(id){
  this.gameList= this.firebase.list('game/'+id+'/users',query=>query.orderByKey().startAt(this.playerkey).limitToLast(1));
  return this.gameList.snapshotChanges();
 }


 getPlayerid(id:number){
  this.gameList= this.firebase.list('users/'+id);
  return this.gameList.snapshotChanges();
 }

 addcard(card,id) {
  firebase.database().ref().child('game/'+id+'/playingcards').push(card);
 }

getcard(id) {
  this.gameList= this.firebase.list('game/'+id+'/playingcards');
  return this.gameList.snapshotChanges(); 
}

deletecard(id,cardkey){
  firebase.database().ref().child('game/'+id+'/playingcards/'+cardkey).remove();

}

 addcard1(card,id) {

  firebase.database().ref().child('game/'+id+'/users/'+this.playerkey+'/round1').update({functionnality:card});
 }

 addcard2(func,app,id) {

  firebase.database().ref().child('game/'+id+'/users/'+this.playerkey+'/round2').update({functionnality:func,application:app});
 }

 addcard3(func,app,tech,id) {

  firebase.database().ref().child('game/'+id+'/users/'+this.playerkey+'/round3').update({functionnality:func,application:app,relevantTechnology:tech});
 }

 addcard4(func,app,tech,weak,id) {

  firebase.database().ref().child('game/'+id+'/users/'+this.playerkey+'/round4').update({functionnality:func,application:app,relevantTechnology:tech,weaknesses:weak});
 }

 addcard5(func,app,tech,weak,cust,id) {

  firebase.database().ref().child('game/'+id+'/users/'+this.playerkey+'/round5').update({functionnality:func,application:app,relevantTechnology:tech,weaknesses:weak,customer:cust});
 }

 addcard6(func,app,tech,weak,cust,needs,id) {

  firebase.database().ref().child('game/'+id+'/users/'+this.playerkey+'/round6').update({functionnality:func,application:app,relevantTechnology:tech,weaknesses:weak,customer:cust,needs:needs});
 }

 addcard7(func,app,tech,weak,cust,needs,trends,id) {

  firebase.database().ref().child('game/'+id+'/users/'+this.playerkey+'/round7').update({functionnality:func,application:app,relevantTechnology:tech,weaknesses:weak,customer:cust,needs:needs,trendsIssues:trends});
 }


 getCards() {
  this.gameList = this.firebase.list('game/playingcards');
  return this.gameList.snapshotChanges();
 // this.firebase.list('users',query=>query.orderByKey().endAt("-LWV-AR3YxFMkB-mRq7O").limitToLast(2));

}

getPlayersall(id) {
  this.gameList = this.firebase.list('game/'+id+'/users');
   return this.gameList.snapshotChanges();
}
   


getPlayers(id) {
  this.gameList = this.firebase.list('game/'+id+'/users');
   return this.gameList.snapshotChanges();
 //this.gameList= this.firebase.list('users',query=>query.orderByKey().);
   //return this.gameList.snapshotChanges();
}

getPlayerCard(id){
  this.gameList= this.firebase.list('game/'+id+'/users',query=>query.orderByKey().endAt(this.playerkey).limitToLast(2));
  return this.gameList.snapshotChanges();
}

getPlayer1Card(id){
  this.gameList= this.firebase.list('game/'+id+'/users',query=>query.orderByKey().startAt(this.playerkey).limitToLast(1));
  return this.gameList.snapshotChanges();
}


getPlayersdash(id) {
  this.gameList = this.firebase.list('game/'+id+'/users');
   return this.gameList.snapshotChanges();
}

getPlayingcards(id) {
  this.gameList = this.firebase.list('game/'+id+'/playingcards');
   return this.gameList.snapshotChanges();
}

  
getId(id){
  this.gameList = this.firebase.list('game',query=>query.orderByChild('gameid').equalTo(id));
  return this.gameList.snapshotChanges(); 

}

addPlayer(name,game){
  this.playerkey= firebase.database().ref().child("game/"+game+"/users").push(name).key;
 // this.gameList.push(name);
  return this.playerkey;
}


         
}

