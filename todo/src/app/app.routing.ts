import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }     from './home/home.component';
import { LoginComponent }    from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddComponent }      from './add/add.component';
import { EditComponent }     from './edit/edit.component';
import { ProfilComponent }   from './profil/profil.component';
import { AuthGuard }         from './auth/AuthGuard';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'login',    component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'addTodo',  component: AddComponent },
	{ path: 'editTodo/:id', component: EditComponent },
	{ path: 'profil',   component: ProfilComponent },
	{ path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);