import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ChildComponent} from 'src/app/baseComponent/child/child.component';
import{ParentComponent} from 'src/app/baseComponent/parent/parent.component'

const routes :Routes=[
  {
    path:'child',
    component:ChildComponent,
  },
  {
    path:'parent',
    component:ParentComponent
  }
]


@NgModule({
  declarations: [ChildComponent,ParentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BaseComponentModule { }
