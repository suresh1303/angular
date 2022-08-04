import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { EmpserviceService} from './empservice.service';
import { HttpClientModule } from '@angular/common/http';
import { BasicComponent } from './basic/basic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { Department1Component } from './department1/department1.component';
import { Department2Component } from './department2/department2.component';
import { FormComponent } from './form/form.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ConditionalComponent } from './conditional/conditional.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    ChildComponent,
    BasicComponent,
    PageNotFoundComponent,
    EmpdetailsComponent,
    Department1Component,
    Department2Component,
    FormComponent,
    ReactiveComponent,
    FormbuilderComponent,
    ConditionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
