import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FishingPageRoutingModule } from './fishing-routing.module';

import { FishingPage } from './fishing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FishingPageRoutingModule
  ],
  declarations: [FishingPage]
})
export class FishingPageModule {}
