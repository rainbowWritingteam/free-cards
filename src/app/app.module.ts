import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CardsService} from './shared/cards.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './shared/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardSetComponent } from './card-set/card-set.component';
import { CardsComponent } from './cards/cards.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {FlexLayoutModule} from "@angular/flex-layout";
import { PlayersComponent } from './players/players.component';
import { FirstComponent } from './first/first.component';
import { Round1Component } from './round1/round1.component';
import { Round2Component } from './round2/round2.component';
import { Round3Component } from './round3/round3.component';
import { Round4Component } from './round4/round4.component';
import { Round5Component } from './round5/round5.component';
import { Card1Component } from './card1/card1.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { CountdownModule } from 'ngx-countdown';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';
import { Card7Component } from './card7/card7.component';
import { Progressbar2Component } from './progressbar2/progressbar2.component';
import { Progressbar3Component } from './progressbar3/progressbar3.component';
import { Progressbar4Component } from './progressbar4/progressbar4.component';
import { Progressbar5Component } from './progressbar5/progressbar5.component';
import { Progressbar6Component } from './progressbar6/progressbar6.component';
import { Progressbar7Component } from './progressbar7/progressbar7.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatDialogModule, MatDialogRef} from '@angular/material';
import  { Ng2CarouselamosModule} from 'ng2-carouselamos';
import { PlayercardComponent } from './playercard/playercard.component';



const appRoutes: Routes = [
  {path :'' ,component: GameComponent},
  {path :'set' ,component:CardSetComponent},
  {path :'cards' ,component:CardsComponent},
  {path :'players' ,component:PlayersComponent},
  {path :'round1' ,component:Round1Component},
  {path :'round2' ,component:Round2Component},
  {path :'round3' ,component:Round3Component},
  {path :'round4' ,component:Round4Component},
  {path :'round5' ,component:Round5Component},
  {path :'game' ,component:FirstComponent},
  {path :'card1' ,component:Card1Component},
  {path :'card2' ,component:Card2Component},
  {path :'card3' ,component:Card3Component},
  {path :'card4' ,component:Card4Component},
  {path :'card5' ,component:Card5Component},
  {path :'card6' ,component:Card6Component},
  {path :'card7' ,component:Card7Component},
  {path :'p' ,component:ProgressbarComponent},
  {path :'dash' ,component:DashboardComponent},
  {path :'player/:id' ,component:PlayercardComponent},
  {path :'game/:id' ,component:FirstComponent},
  {path :'players/:id' ,component:Round1Component}


]






@NgModule({
  declarations: [
    AppComponent,
    CardSetComponent,
    CardsComponent,
    StartComponent,
    GameComponent,
    PlayersComponent,
    FirstComponent,
    Round1Component,
    Round2Component,
    Round3Component,
    Round4Component,
    Round5Component,
    Card1Component,
    ProgressbarComponent,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    Card6Component,
    Card7Component,
    Progressbar2Component,
    Progressbar3Component,
    Progressbar4Component,
    Progressbar5Component,
    Progressbar6Component,
    Progressbar7Component,
    DashboardComponent,
    PlayercardComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireDatabaseModule,
    FormsModule,
    FlexLayoutModule,
    CountdownModule,
    AngularFireAuthModule,
    MatDialogModule,
    Ng2CarouselamosModule
  ],
  providers: [CardsService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
