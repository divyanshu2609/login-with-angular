import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from "./Components/form";
import {
  MdButtonModule, MdCardModule, MdDatepickerModule, MdInputModule, MdNativeDateModule,
  MdRadioModule
} from "@angular/material";
import {SignUpFormComponent} from "./Components/sign_up_form";
import {LayoutComponent} from "./Components/layout";
import {HomePageComponent} from "./Components/home_screen";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {MaterialModule} from "./material.module";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./reducers/index";
import {AuthGuard} from "./guards/auth";
import {AnonymousGuard} from "./guards/anonymous";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SignUpFormComponent,
    LayoutComponent,
    HomePageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdCardModule,
    HttpModule,
    MdButtonModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer)

  ],
  providers: [AuthGuard, AnonymousGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
