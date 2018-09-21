import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FormComponent } from './Form/form/form.component';

// Framework

import { AlertModule, ModalModule, TabsModule } from 'ngx-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormCasillasComponent } from './Form/form-casillas/form-casillas.component';
import { FormDesplegableComponent } from './Form/form-desplegable/form-desplegable.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    FormCasillasComponent,
    FormDesplegableComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
