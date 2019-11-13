import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { ConstructionsComponent } from './components/constructions/constructions.component';
import { RodFinderComponent } from './components/constructions/rod-finder/rod-finder.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoofPressureCoefficientComponent } from './components/constructions/roof-pressure-coefficient/roof-pressure-coefficient.component';
import { CoefComponent } from './components/constructions/roof-pressure-coefficient/coef/coef.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    ConstructionsComponent,
    RodFinderComponent,
    RoofPressureCoefficientComponent,
    CoefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
