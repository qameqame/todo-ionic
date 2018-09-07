import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputItemPage } from './input-item';

@NgModule({
  declarations: [
    InputItemPage,
  ],
  imports: [
    IonicPageModule.forChild(InputItemPage),
  ],
})
export class InputItemPageModule {}
