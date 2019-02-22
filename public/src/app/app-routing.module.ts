import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    { path: 'dashboard',component: DashboardComponent },
    { path: 'edit/:id',component: EditComponent },
    { path: 'new',component: NewComponent },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' }, 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }