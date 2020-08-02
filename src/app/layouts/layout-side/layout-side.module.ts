import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutSideComponent } from './layout-side.component';
import { ColExampleComponent } from 'src/app/pages/col-example/col-example.component';
import { RowExampleComponent } from 'src/app/pages/row-example/row-example.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LayoutSideComponent, ColExampleComponent, RowExampleComponent],
  imports: [CommonModule, SharedModule, RouterModule, FlexLayoutModule],
})
export class LayoutSideModule {}
