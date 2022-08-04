import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { Department1Component } from './department1/department1.component';
import { Department2Component } from './department2/department2.component';
import { FormComponent } from './form/form.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormbuilderComponent} from './formbuilder/formbuilder.component';
import { ConditionalComponent } from './conditional/conditional.component';

const routes: Routes = [
  { path: '', redirectTo: '/request', pathMatch: 'full' },
  { path: 'request', component: TutorialsComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'formbuilder', component: FormbuilderComponent },
  { path: 'formpage', component: FormComponent },
  { path: 'conditional', component: ConditionalComponent },
  {
    path: 'empdetails/:id',
    component: EmpdetailsComponent,
    children: [
      { path: 'dept1', component: Department1Component }, 
      { path: 'dept2', component: Department2Component }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
