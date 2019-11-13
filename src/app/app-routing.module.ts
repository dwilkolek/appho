import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ConstructionsComponent } from './components/constructions/constructions.component';
import { RodFinderComponent } from './components/constructions/rod-finder/rod-finder.component';
import { RoofPressureCoefficientComponent } from './components/constructions/roof-pressure-coefficient/roof-pressure-coefficient.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'constructions', component: RodFinderComponent },
  { path: 'constructions/rod-finder', component: RodFinderComponent },
  { path: 'constructions/roof-pressure-coefficients', component: RoofPressureCoefficientComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
