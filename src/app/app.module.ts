import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DragDropModule, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ListComponent } from './list/list.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './open-close/open-close.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    OpenCloseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DragDropModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
