import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-vote-no-user',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterModule,MatCardModule],
  templateUrl: './vote-no-user.component.html',
  styleUrl: './vote-no-user.component.css'
})
export class VoteNoUserComponent {
  
}
