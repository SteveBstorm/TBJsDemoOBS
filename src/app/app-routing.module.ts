import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './components/demo3/demo3.component';
import { NewbeerComponent } from './components/newbeer/newbeer.component';

const routes: Routes = [
  {path : "demo3", component : Demo3Component},
  {path : "demo1", component : Demo1Component},
  {path : "demo2", component : Demo2Component},
  {path : "add", component : NewbeerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
