import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatatableComponent } from './datatable/datatable.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DemoMaterialModule} from './material-module';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import {NavService} from './nav.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { RegisterCandidateComponent } from './register-candidate/register-candidate.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, DatatableComponent, NavigationHeaderComponent, MenuListItemComponent, RegisterCandidateComponent, HomeComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  bootstrap: [AppComponent],
  providers: [NavService]
})
export class AppModule { }
