import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ RouterModule ,MatToolbarModule,MatButtonModule,MatInputModule,MatIconModule,MatCardModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(){
    
  }
}
