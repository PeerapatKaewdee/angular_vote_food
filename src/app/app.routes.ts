import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { RankingComponent } from './ranking/ranking.component';
import { EditComponent } from './edit/edit.component';
import { VoteNoUserComponent } from './vote-no-user/vote-no-user.component';
import { VoteComponent } from './vote/vote.component';
<<<<<<< HEAD
import { ViewFoodComponent } from './view-food/view-food.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
=======
import { AddminComponent } from './addmin/addmin.component';
>>>>>>> viewprofile

export const routes: Routes = [

    {path : '' , component :VoteNoUserComponent },
    { path: 'login', component: LoginComponent },
    {path : 'signup', component: SignUpComponent},
    {path : 'profile/:uid',component : ProfileComponent},
    {path : 'ranking/:uid',component : RankingComponent},
    {path : 'vote/:uid' ,component :VoteComponent } ,
<<<<<<< HEAD
    {path : 'edit' , component : EditComponent}, 
    {path : 'viewfood',component : ViewFoodComponent},
    {path : 'viewprofile',component : ViewProfileComponent}
=======
    {path : 'edit' , component : EditComponent},
    {path : 'addmin/:id',component : AddminComponent}
>>>>>>> viewprofile
   
];
