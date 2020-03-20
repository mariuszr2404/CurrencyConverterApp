import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';

const MaterialModules = [
  MatSliderModule,
  MatListModule,
  MatSidenavModule
];

@NgModule({
  imports: MaterialModules,
  exports: MaterialModules
})
export class MaterialDesignModule {}