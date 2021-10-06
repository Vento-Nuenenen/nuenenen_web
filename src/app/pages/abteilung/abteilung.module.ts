import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbteilungComponent } from './abteilung.component';
import { AbteilungRoutingModule } from './abteilung-routing.module';
import { AbteilungCardComponent } from './components/abteilung-card/abteilung-card.component';
import { AbteilungSideBarComponent } from './components/abteilung-side-bar/abteilung-side-bar.component';
import { MaterialModule } from '@core/modules/material.module';

@NgModule({
  declarations: [AbteilungComponent, AbteilungCardComponent, AbteilungSideBarComponent],
  imports: [CommonModule, MaterialModule, AbteilungRoutingModule],
})
export class AbteilungModule {}
