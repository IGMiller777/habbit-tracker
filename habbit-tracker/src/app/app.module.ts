import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AllhabitsComponent } from './components/allhabits/allhabits.component';
import { FormcontainerComponent } from './components/formcontainer/formcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AllhabitsComponent,
    FormcontainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
