import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import {routing} from './app.routing';

import {SimpleTinyMCEComponent} from './components/simpletinymce/simpletinymce.component';
import {EditorComponent} from './components/editor/editor.component';

import {NavBarComponent} from './components/navbar/navbar.component'
import {AccueilComponent} from './components/accueil/accueil.component';
import {DatalogueComponent} from './components/datalogue/datalogue.component';
import {FaqComponent} from './components/faq/faq.component';
import {PretComponent} from './components/pret/pret.component';



@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule  ],
  declarations: [ AppComponent, NavBarComponent, AccueilComponent, DatalogueComponent, FaqComponent, PretComponent, SimpleTinyMCEComponent, EditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
