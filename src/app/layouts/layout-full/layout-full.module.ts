import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutFullComponent } from './layout-full.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutFullComponent, HomeComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class LayoutFullModule {}
