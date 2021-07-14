import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatasetPageComponent } from './dataset-page/dataset-page.component';
import { Kpi1Component } from './dataset-page/kpi1/kpi1.component';
import { Kpi2Component } from './dataset-page/kpi2/kpi2.component';
import { Button3Component } from './dataset-page/dataset-table10/button3/button3.component';
import { Pagination4Component } from './dataset-page/dataset-table10/pagination4/pagination4.component';
import { DatasetTable10Component } from './dataset-page/dataset-table10/dataset-table10.component';
import { HeaderCell5Component } from './dataset-page/dataset-table10/header-cell5/header-cell5.component';
import { BodyCell6Component } from './dataset-page/dataset-table10/body-cell6/body-cell6.component';
import { BodyCell7Component } from './dataset-page/dataset-table10/body-cell7/body-cell7.component';
import { BodyCell8Component } from './dataset-page/dataset-table10/body-cell8/body-cell8.component';
import { BodyCell9Component } from './dataset-page/dataset-table10/body-cell9/body-cell9.component';

import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    DatasetPageComponent,
    Kpi1Component,
    Kpi2Component,
    Button3Component,
    Pagination4Component,
    DatasetTable10Component,
    HeaderCell5Component,
    BodyCell6Component,
    BodyCell7Component,
    BodyCell8Component,
    BodyCell9Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    // library.addIcons(faCoffee);
    // library.addIcons(fasStar, farStar);
    // library.addI
  }
}
