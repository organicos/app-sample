import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'registrations', loadChildren: './pages/registrations-page/registrations-page.module#RegistrationsPageModule' },
  { path: 'survey', loadChildren: './pages/survey-page/survey-page.module#SurveyPageModule' },
  { path: '**', loadChildren: './pages/not-found/not-found.module#NotFoundModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    /*
     * PreloadAllModules
     *
     * Makes rounting faster.
     * Deserves more bandwith analysis in large apps
     */
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
