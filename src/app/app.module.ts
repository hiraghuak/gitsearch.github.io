import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DbpageComponent } from './dbpage/dbpage.component';
import { HttpcallComponent } from './httpcall/httpcall.component';
import { MydirectiveDirective } from './mydirective.directive';
import { MybossDirective } from './myboss.directive';
import { MycolDirective } from './mycol.directive';
import { UserComponent } from './user/user.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {CanActivate} from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';
import {FormsModule} from '@angular/forms';
import { ModuleWithProviders } from '@angular/core';

import { HttpModule } from '@angular/http';
import { ProfileService } from './services/profile.service';



// routing
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch : 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent,
  children: [
    {
      path : '' ,
      component : UserinfoComponent
    },
    {
      path : ':id' ,
      component : UserinfoComponent
    }
  ]
},
  { path: 'form', component: AboutusComponent },
  { path: '**', component: NotFoundComponent }
];

const aboutRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    DbpageComponent,
    HttpcallComponent,
    MydirectiveDirective,
    MybossDirective,
    MycolDirective,
    UserComponent,
    AboutusComponent,
    HomeComponent,
    NotFoundComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthGuard,
    ProfileService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
