import { BrowserModule, ɵgetDOM} from '@angular/platform-browser';
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
import { FirstComponent } from './first/first.component';
import { Card1Component } from './card1/card1.component';
import { CountdownModule } from 'ngx-countdown';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';
import { Card7Component } from './card7/card7.component';
import { Round1Component } from './round1/round1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatDialogModule, MatDialogRef} from '@angular/material';
import  { Ng2CarouselamosModule} from 'ng2-carouselamos';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LabelsComponent } from './labels/labels.component';
import { PlayersComponent } from './players/players.component';
import { GamecreationComponent } from './gamecreation/gamecreation.component';
import { LeadernameComponent } from './leadername/leadername.component'; 





export function IlmsCookieStrategy(http: Http) {
  return new CookieXSRFStrategy('RESPONSE_TOKEN', 'X-CSRFToken');
}



const appRoutes: Routes = [
  {path :'game' ,component: GameComponent},
  {path :'set' ,component:CardSetComponent},
  {path :'name' ,component:FirstComponent},
  {path :'leader' ,component:LeadernameComponent},
  {path :'createyourgame' ,component:GamecreationComponent},
  {path :'' ,component:PlayersComponent},
  {path :'cards' ,component:LabelsComponent},
  {path :'card1' ,component:Card1Component},
  {path :'card2' ,component:Card2Component},
  {path :'card3' ,component:Card3Component},
  {path :'card4' ,component:Card4Component},
  {path :'card5' ,component:Card5Component},
  {path :'card6' ,component:Card6Component},
  {path :'card7' ,component:Card7Component},
  {path :'round1' ,component:Round1Component},
  {path :'dash/:id' ,component:DashboardComponent}

]






@NgModule({
  declarations: [
    AppComponent,
    CardSetComponent,
    CardsComponent,
    StartComponent,
    GameComponent,
    FirstComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    Card6Component,
    Card7Component,
    Round1Component,
    DashboardComponent,
    LabelsComponent,
    PlayersComponent,
    GamecreationComponent,
    LeadernameComponent,
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
    Ng2CarouselamosModule,
    HttpClientModule
  ],
  providers: [CardsService,AuthService, {provide: Http}],
  bootstrap: [AppComponent ]
})
export class AppModule { }
