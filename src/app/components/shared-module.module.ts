import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';





@NgModule({
  declarations: [HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule {

}
