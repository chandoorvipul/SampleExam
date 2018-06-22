import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Formpart1Component } from "src/app/formpart1/formpart1.component";
import { Formpart2Component } from "src/app/formpart2/formpart2.component";
import { LastpartComponent } from "src/app/lastpart/lastpart.component";

const routes: Routes = [ { path: '',component: Formpart1Component },
{ path: 'part2',component: Formpart2Component },
{ path: 'feedback',component: LastpartComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
