import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RxjsLearningComponent } from './components/rxjs-learning/rxjs-learning.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CurdOperationsComponent } from './components/curd-operations/curd-operations.component';
import { UsersComponent } from './components/users/users.component';
import { RxjsSearchComponent } from './components/rxjs-search/rxjs-search.component';

const routes: Routes = [
  {path:"", component:CurdOperationsComponent},
  {path:"rxjs-learning", component:RxjsLearningComponent},
  {path:"rxjs-search", component:RxjsSearchComponent},
  {
    path:"users",
    children:[
      {path:"", component:UsersComponent},
      {path:":id", component:UserProfileComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
