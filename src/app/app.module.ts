import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {fakeBackendProvider} from './interceptors/fake-backend/backend.service';

import {AppComponent} from './app.component';
import {ReportsPageComponent} from './components/reports-page/reports-page.component';
import {CardComponent} from './components/card/card.component';
import {TagComponent} from './tag/tag.component';
import {CheckboxFilterComponent} from './components/filters/checkbox-filter.component';
import {InputFilterComponent} from './components/filters/input-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsPageComponent,
    CardComponent,
    TagComponent,
    CheckboxFilterComponent,
    InputFilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
