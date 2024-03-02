import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { RankingComponent } from './ranking/ranking.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [

    { path: '', component: LoginComponent },
    {path : 'signup', component: SignUpComponent},
    {path : 'ranking',component : RankingComponent},
    {path : 'profile/:uid',component : ProfileComponent},
    {path : 'edit' , component : EditComponent}
   
];
