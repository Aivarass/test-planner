import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import {ButtonModule, DragDropModule, InputTextModule, TableModule} from "primeng";
import { PanelItemComponent } from './panel/panel-item/panel-item.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    PanelItemComponent
  ],
    imports: [
        BrowserModule,
        DragDropModule,
        TableModule,
        FormsModule,
        InputTextModule,
        ButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
