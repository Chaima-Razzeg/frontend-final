import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EmployeComponent } from './employe/employe.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { DepartementComponent } from './departement/departement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { PosteComponent } from './poste/poste.component';
import { AddPosteComponent } from './add-poste/add-poste.component';
import { UpdatePosteComponent } from './update-poste/update-poste.component';
import { PostulerComponent } from './postuler/postuler.component';
import { CandEnAttenteComponent } from './cand-en-attente/cand-en-attente.component';
import { CandValidComponent } from './cand-valid/cand-valid.component';
import { CongeComponent } from './conge/conge.component';
import { CongeEnAttenteComponent } from './conge-en-attente/conge-en-attente.component';
import { CongeValidComponent } from './conge-valid/conge-valid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RechercheParCinComponent } from './recherche-par-cin/recherche-par-cin.component';
import { RechercheParNomDepComponent } from './recherche-par-nom-dep/recherche-par-nom-dep.component';
import { RechercheParNomPosComponent } from './recherche-par-nom-pos/recherche-par-nom-pos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReponseComponent } from './reponse/reponse.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MesCongesComponent } from './mes-conges/mes-conges.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({

  declarations: [
    AppComponent,
    NavComponent,
    EmployeComponent,
    AddEmployeComponent,
    UpdateEmployeComponent,
    DepartementComponent,
    AddDepartementComponent,
    UpdateDepartementComponent,
    PosteComponent,
    AddPosteComponent,
    UpdatePosteComponent,
    PostulerComponent,
    CandEnAttenteComponent,
    CandValidComponent,
    CongeComponent,
    CongeEnAttenteComponent,
    CongeValidComponent,
    DashboardComponent,
    RechercheParCinComponent,
    RechercheParNomDepComponent,
    RechercheParNomPosComponent,
    LoginComponent,
    HomeComponent,
    ReponseComponent,
    ForbiddenComponent,
    MesCongesComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
