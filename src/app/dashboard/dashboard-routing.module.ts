import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
{ 
  path: '', 
  component: DashboardComponent,
  children:[{
    path: 'test',
    component: SettingComponent,
    data :{ id:'1', name:"Angular"}
  }]
}, 
{ 
  path: 'setting', 
  loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
