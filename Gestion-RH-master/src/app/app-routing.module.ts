import { MesCongesComponent } from './mes-conges/mes-conges.component';
import { RechercheParNomDepComponent } from './recherche-par-nom-dep/recherche-par-nom-dep.component';
import { CongeValidComponent } from './conge-valid/conge-valid.component';
import { CongeEnAttenteComponent } from './conge-en-attente/conge-en-attente.component';
import { CandValidComponent } from './cand-valid/cand-valid.component';
import { CandEnAttenteComponent } from './cand-en-attente/cand-en-attente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { AddPosteComponent } from './add-poste/add-poste.component';
import { DepartementComponent } from './departement/departement.component';
import { EmployeComponent } from './employe/employe.component';
import { PosteComponent } from './poste/poste.component';
import { PostulerComponent } from './postuler/postuler.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { UpdatePosteComponent } from './update-poste/update-poste.component';
import { CongeComponent } from './conge/conge.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RechercheParCinComponent } from './recherche-par-cin/recherche-par-cin.component';
import { RechercheParNomPosComponent } from './recherche-par-nom-pos/recherche-par-nom-pos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReponseComponent } from './reponse/reponse.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { GestionGuard } from './gestion.guard';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  // employes
  {path: "employes", component : EmployeComponent, canActivate:[GestionGuard]},
  {path: "add-employe", component: AddEmployeComponent, canActivate:[GestionGuard]},
  {path: "updateemploye/:id", component: UpdateEmployeComponent, canActivate:[GestionGuard]},
  {path : "rechercheParCin", component: RechercheParCinComponent, canActivate:[GestionGuard]},
  // departements
  {path: "departements", component : DepartementComponent, canActivate:[GestionGuard]},
  {path: "add-departement", component: AddDepartementComponent, canActivate:[GestionGuard]},
  {path: "updatedepartement/:id", component: UpdateDepartementComponent, canActivate:[GestionGuard]},
  {path : "rechercheParNomDep", component: RechercheParNomDepComponent, canActivate:[GestionGuard]},
  // postes
  {path: "postes", component : PosteComponent, canActivate:[GestionGuard]},
  {path: "add-poste", component: AddPosteComponent, canActivate:[GestionGuard]},
  {path: "updateposte/:id", component: UpdatePosteComponent, canActivate:[GestionGuard]},
  {path : "rechercheParNomPos", component: RechercheParNomPosComponent, canActivate:[GestionGuard]},

  //postuler
  {path: "postuler", component : PostulerComponent},
  {path : "reponse", component : ReponseComponent, canActivate:[GestionGuard]},
  //candidat en attente
  {path: "candEnAttente", component : CandEnAttenteComponent, canActivate:[GestionGuard]},
  //candidat valide
  {path: "candValide", component : CandValidComponent, canActivate:[GestionGuard]},
  //demande congé
  {path: "demandeConge", component: CongeComponent},
  //conge en attente
  {path: "congeAttente", component: CongeEnAttenteComponent, canActivate:[GestionGuard]},
  //conge valide
  {path: "congeValide", component:CongeValidComponent, canActivate:[GestionGuard]},
  //dashboard
  {path: "dashboard", component: DashboardComponent, canActivate:[GestionGuard]},
  //login
  {path: 'login', component: LoginComponent},
  //home
  {path: 'home', component: HomeComponent},
  //forbidden
  {path: 'app-forbidden', component: ForbiddenComponent},
  //Mes congés
  {path: 'MesCongés', component:MesCongesComponent},
//profil
  {path: 'profil', component:ProfilComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
