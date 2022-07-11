import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurdOperationsComponent } from './components/curd-operations/curd-operations.component';
import { UsersComponent } from './components/users/users.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RxjsLearningComponent } from './components/rxjs-learning/rxjs-learning.component';
import { RxjsSearchComponent } from './components/rxjs-search/rxjs-search.component';
import { TdfComponent } from './components/tdf/tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    CurdOperationsComponent,
    UsersComponent,
    UserProfileComponent,
    RxjsLearningComponent,
    RxjsSearchComponent,
    TdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
