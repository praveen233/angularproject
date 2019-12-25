import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PgComponent } from './pg/pg.component';

import { MyserviceService}  from './myservice.service' 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { RoomComponent } from './room/room.component';
import { VkrComponent } from './vkr/vkr.component';
import { ComfortsComponent } from './comforts/comforts.component';
import { CarComponent } from './vkr/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    PgComponent,
    RoomComponent,
    VkrComponent,
    ComfortsComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
         {
            path: 'new-pg',
            component: PgComponent
         },
         {
          path: 'new-vkr',
            component: VkrComponent 
         },
         {
          path: 'new-room',
          component: RoomComponent
         },
         {
          path: 'new-comforts',
          component: ComfortsComponent
         }
      ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
