import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [ RouterModule ,MatFormFieldModule,MatToolbarModule,MatButtonModule,MatInputModule,MatIconModule,MatCardModule, FormsModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent {

  goBack() {
    // Implementing window.back to go back to the previous location
    window.history.back();
  }
  

}
