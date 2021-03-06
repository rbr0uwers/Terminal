import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BioComponent } from './bio/bio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent, data: {animation: 'aboutPage'}},
  {path: 'bio', component: BioComponent, data: {animation: 'bioPage'}},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '', pathMatch: 'full', redirectTo: 'about'},
  {path: '**', pathMatch: 'full', redirectTo: 'about'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
