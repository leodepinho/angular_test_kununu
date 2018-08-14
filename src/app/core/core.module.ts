import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { HeaderComponent } from './components/header/header.component';

import { TranslationService } from "./services/translation.service";
import { DataMemoryStorageService } from "./services/data-memory-storage.service";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    TranslationService,
    DataMemoryStorageService
  ]
})
export class CoreModule { }
